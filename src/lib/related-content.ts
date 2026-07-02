import type { BlogPost } from "@/lib/blog";
import type { SeoTopicPage } from "@/lib/seo-content";

type ScoredPost = {
  post: BlogPost;
  score: number;
  updatedAt: number;
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "based",
  "be",
  "by",
  "can",
  "care",
  "chronic",
  "clinical",
  "disease",
  "for",
  "from",
  "guide",
  "health",
  "how",
  "in",
  "is",
  "it",
  "learn",
  "of",
  "on",
  "or",
  "page",
  "patient",
  "patients",
  "practical",
  "the",
  "this",
  "to",
  "what",
  "why",
  "with",
]);

function cleanText(value?: string): string {
  return (value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&amp;|&lt;|&gt;/g, " ")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value: string): string[] {
  return cleanText(value)
    .split(/[\s-]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 2 && !STOP_WORDS.has(item));
}

function countPhraseMatches(haystack: string, phrases: string[]): number {
  return phrases.reduce((total, phrase) => {
    if (!phrase || phrase.length < 5) return total;
    return haystack.includes(phrase) ? total + 1 : total;
  }, 0);
}

function buildPageText(page: SeoTopicPage): string {
  return [
    page.slug.replace(/-/g, " "),
    page.seoTitle,
    page.metaDescription,
    page.h1,
    page.heroSummary,
    page.definition,
    ...page.keyTakeaways,
    ...page.sections.flatMap((section) => [
      section.heading,
      section.subheading,
      section.body,
      ...section.bullets,
    ]),
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer]),
    ...page.relatedSlugs.map((slug) => slug.replace(/-/g, " ")),
  ].join(" ");
}

function buildPostText(post: BlogPost): string {
  return [
    post.slug.replace(/-/g, " "),
    post.title,
    post.metaTitle,
    post.metaDescription,
    post.excerpt,
    ...(post.keywords || []),
    post.content,
  ].join(" ");
}

function getWeightedPageTerms(page: SeoTopicPage): Map<string, number> {
  const terms = new Map<string, number>();

  const addTerms = (text: string, weight: number) => {
    for (const term of tokenize(text)) {
      terms.set(term, (terms.get(term) || 0) + weight);
    }
  };

  addTerms(page.slug.replace(/-/g, " "), 6);
  addTerms(page.h1, 5);
  addTerms(page.seoTitle, 4);
  addTerms(page.metaDescription, 3);
  addTerms(page.definition, 3);
  addTerms(page.heroSummary, 2);
  addTerms(page.relatedSlugs.join(" ").replace(/-/g, " "), 2);
  page.sections.forEach((section) => {
    addTerms(section.heading, 3);
    addTerms(section.subheading, 2);
    addTerms(section.body, 1);
    addTerms(section.bullets.join(" "), 1);
  });

  return terms;
}

function scorePostForPage(page: SeoTopicPage, post: BlogPost): number {
  const postText = cleanText(buildPostText(post));
  const pageText = cleanText(buildPageText(page));
  const pageTerms = getWeightedPageTerms(page);

  let score = 0;

  for (const [term, weight] of pageTerms) {
    if (postText.includes(term)) {
      score += weight;
    }
  }

  const primaryPhrases = [
    page.slug.replace(/-/g, " "),
    page.h1,
    page.seoTitle,
    page.definition,
    ...page.relatedSlugs.map((slug) => slug.replace(/-/g, " ")),
  ].map(cleanText);

  score += countPhraseMatches(postText, primaryPhrases) * 12;

  const postKeywords = post.keywords?.map(cleanText).filter(Boolean) || [];
  score += countPhraseMatches(pageText, postKeywords) * 10;

  return score;
}

export function getRelatedBlogPostsForSeoPage(
  page: SeoTopicPage,
  posts: BlogPost[],
  limit = 3,
): BlogPost[] {
  const seen = new Set<string>();
  const uniquePosts = posts.filter((post) => {
    if (!post.slug || post.slug === page.slug || seen.has(post.slug)) return false;
    seen.add(post.slug);
    return true;
  });

  const scored: ScoredPost[] = uniquePosts
    .map((post) => ({
      post,
      score: scorePostForPage(page, post),
      updatedAt: Date.parse(post.updatedAt || post.createdAt || "") || 0,
    }))
    .filter((item) => item.score > 0);

  return scored
    .sort((a, b) => b.score - a.score || b.updatedAt - a.updatedAt || a.post.title.localeCompare(b.post.title))
    .slice(0, limit)
    .map((item) => item.post);
}
