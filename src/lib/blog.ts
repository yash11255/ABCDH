import sanitizeHtml from "sanitize-html";

export const BLOG_REVALIDATE_SECONDS = 60;

const BACKEND_BASE_URL = (
  process.env.BLOG_BACKEND_URL || "https://seo-blog-backend-seven.vercel.app"
).replace(/\/$/, "");

const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.abcd.health";

const defaultSiteIdFromUrl = () => {
  try {
    return new URL(DEFAULT_SITE_URL).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "abcd.health";
  }
};

export const DEFAULT_SITE_ID = process.env.DEFAULT_SITE_ID || defaultSiteIdFromUrl();

type AuthorValue =
  | string
  | {
      name?: string;
    };

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  author?: AuthorValue;
  createdAt?: string;
  updatedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  featuredImage?: string;
  image?: string;
  imageUrl?: string;
  faqs?: BlogFaq[];
};

export type BlogListResponse = {
  success: boolean;
  data: BlogPost[];
  totalPages?: number;
  message?: string;
};

export type BlogPostResponse = {
  success: boolean;
  data: BlogPost | null;
  message?: string;
};

export type TocItem = {
  id: string;
  level: 2 | 3;
  text: string;
};

export type ProcessedContent = {
  html: string;
  toc: TocItem[];
  readingTimeMinutes: number;
  wordCount: number;
};

export function getConfiguredSiteIds(): string[] {
  const configured = process.env.SITE_IDS || process.env.NEXT_PUBLIC_SITE_IDS;
  if (!configured) {
    return [DEFAULT_SITE_ID];
  }

  const unique = new Set(
    configured
      .split(",")
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean),
  );

  if (unique.size === 0) {
    unique.add(DEFAULT_SITE_ID);
  }

  return Array.from(unique);
}

export function siteIdFromHost(host?: string | null): string {
  if (!host) return DEFAULT_SITE_ID;
  return host.split(":")[0].replace(/^www\./, "").toLowerCase();
}

export function resolveSiteId(siteId?: string, host?: string | null): string {
  if (siteId && siteId.trim()) {
    return siteId.trim().toLowerCase();
  }

  return siteIdFromHost(host);
}

export function getSiteBaseUrl(siteId: string): string {
  const normalized = resolveSiteId(siteId);

  if (normalized === DEFAULT_SITE_ID) {
    return DEFAULT_SITE_URL;
  }

  if (normalized.includes("localhost") || normalized.includes("127.0.0.1")) {
    return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  }

  if (normalized.includes(".")) {
    return `https://${normalized}`;
  }

  return `${DEFAULT_SITE_URL}/${normalized}`;
}

export function buildBlogListPath(siteId: string, page = 1): string {
  const normalized = resolveSiteId(siteId);
  const basePath = normalized === DEFAULT_SITE_ID ? "/blog" : `/${normalized}/blog`;

  if (page > 1) {
    return `${basePath}?page=${page}`;
  }

  return basePath;
}

export function buildBlogPostPath(siteId: string, slug: string): string {
  const normalized = resolveSiteId(siteId);
  const basePath = normalized === DEFAULT_SITE_ID ? "/blog" : `/${normalized}/blog`;

  return `${basePath}/${encodeURIComponent(slug)}`;
}

function buildApiUrl(path: string, query?: Record<string, string | number | undefined>): string {
  const search = new URLSearchParams();
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) {
        search.set(key, String(value));
      }
    }
  }

  const suffix = search.toString();
  return `${BACKEND_BASE_URL}${path}${suffix ? `?${suffix}` : ""}`;
}

async function upstreamFetch<T>(url: string, revalidate = BLOG_REVALIDATE_SECONDS): Promise<T> {
  const response = await fetch(url, {
    next: { revalidate },
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Blog API request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function fetchBlogPostsBySite(
  siteId: string,
  options?: { page?: number; limit?: number; revalidate?: number },
): Promise<BlogListResponse> {
  const page = options?.page || 1;
  const limit = options?.limit || 9;

  const url = buildApiUrl("/api/posts", {
    siteId: resolveSiteId(siteId),
    page,
    limit,
  });

  try {
    return await upstreamFetch<BlogListResponse>(url, options?.revalidate);
  } catch (error) {
    return {
      success: false,
      data: [],
      totalPages: 1,
      message: error instanceof Error ? error.message : "Unable to fetch posts",
    };
  }
}

export async function fetchBlogPostBySlug(
  siteId: string,
  slug: string,
  revalidate = BLOG_REVALIDATE_SECONDS,
): Promise<BlogPost | null> {
  const url = buildApiUrl(`/api/posts/${encodeURIComponent(slug)}`, {
    siteId: resolveSiteId(siteId),
  });

  let payload: BlogPostResponse;

  try {
    payload = await upstreamFetch<BlogPostResponse>(url, revalidate);
  } catch {
    return null;
  }

  if (!payload.success) {
    return null;
  }

  return payload.data;
}

export async function fetchAllBlogSlugsForSite(siteId: string): Promise<string[]> {
  const slugs = new Set<string>();
  let page = 1;
  let totalPages = 1;

  do {
    const result = await fetchBlogPostsBySite(siteId, {
      page,
      limit: 100,
      revalidate: BLOG_REVALIDATE_SECONDS,
    });

    if (!result.success) {
      break;
    }

    for (const post of result.data || []) {
      if (post.slug) {
        slugs.add(post.slug);
      }
    }

    totalPages = Math.max(1, result.totalPages || 1);
    page += 1;
  } while (page <= totalPages);

  return Array.from(slugs);
}

export function getPostAuthorName(post: BlogPost): string {
  if (!post.author) {
    return "ABCD Editorial";
  }

  if (typeof post.author === "string") {
    return post.author;
  }

  return post.author.name || "ABCD Editorial";
}

export function getPostImage(post: BlogPost): string {
  return post.featuredImage || post.imageUrl || post.image || "/PHOTO-2026-03-01-10-33-42.jpg";
}

function stripTags(value: string): string {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function stripSeoMetadataArtifacts(content: string): string {
  if (!content) return "";

  const seoLabelPattern = [
    "meta\\s*title",
    "meta\\s*description",
    "seo\\s*title",
    "seo\\s*description",
    "focus\\s*keyword",
    "focus\\s*keywords",
    "keywords",
    "slug",
    "canonical\\s*url",
  ].join("|");

  const htmlSeoLine = new RegExp(
    `<(?:p|div|li)[^>]*>\\s*(?:<strong>|<b>)?\\s*(?:${seoLabelPattern})\\s*:?\\s*(?:<\\/strong>|<\\/b>)?[\\s\\S]*?<\\/(?:p|div|li)>`,
    "gi",
  );

  const markdownSeoLine = new RegExp(
    `^\\s*(?:\\*\\*)?(?:${seoLabelPattern})\\s*:?\\s*.*$`,
    "gim",
  );

  return content.replace(htmlSeoLine, "").replace(markdownSeoLine, "").trim();
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function processPostContent(content: string): ProcessedContent {
  type Attrs = Record<string, string>;

  const cleanedContent = stripSeoMetadataArtifacts(content || "");

  const sanitized = sanitizeHtml(cleanedContent, {
    allowedTags: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "a",
      "img",
      "ul",
      "ol",
      "li",
      "blockquote",
      "strong",
      "em",
      "code",
      "pre",
      "hr",
      "br",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "span",
      "div",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading", "decoding"],
      "*": ["id", "class"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      a: (tagName: string, attribs: Attrs) => {
        const href = attribs.href || "#";
        const isExternal = /^https?:\/\//i.test(href);
        const nextAttribs: Attrs = {
          ...attribs,
          href,
        };

        if (isExternal) {
          nextAttribs.rel = "noopener noreferrer";
          nextAttribs.target = "_blank";
        }

        return {
          tagName,
          attribs: nextAttribs,
        };
      },
      img: (tagName: string, attribs: Attrs) => ({
        tagName,
        attribs: {
          ...attribs,
          loading: "lazy",
          decoding: "async",
        },
      }),
    },
  });

  const toc: TocItem[] = [];
  const seen = new Map<string, number>();

  const htmlWithHeadingIds = sanitized.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match: string, level: string, attrs: string, body: string) => {
    const headingText = stripTags(body);
    if (!headingText) {
      return match;
    }

    const base = slugify(headingText) || "section";
    const currentCount = seen.get(base) || 0;
    seen.set(base, currentCount + 1);
    const id = currentCount === 0 ? base : `${base}-${currentCount + 1}`;

    toc.push({
      id,
      level: Number(level) as 2 | 3,
      text: headingText,
    });

    const updatedAttrs = attrs.includes("id=") ? attrs : `${attrs} id=\"${id}\"`;
    return `<h${level}${updatedAttrs}>${body}</h${level}>`;
  });

  const plainText = stripTags(sanitized);
  const words = plainText ? plainText.split(/\s+/).length : 0;
  const readingTimeMinutes = Math.max(1, Math.ceil(words / 220));

  return {
    html: htmlWithHeadingIds,
    toc,
    readingTimeMinutes,
    wordCount: words,
  };
}

export function absolutePostUrl(siteId: string, slug: string): string {
  return `${getSiteBaseUrl(siteId)}${buildBlogPostPath(siteId, slug)}`;
}

export function formatPublishedDate(value?: string): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
