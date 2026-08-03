import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../Footer";
import {
  buildBlogListPath,
  buildBlogPostPath,
  fetchAllBlogSlugsForSite,
  fetchBlogPostBySlug,
  getConfiguredSiteIds,
  getPostAuthorName,
  getPostImage,
  getSiteBaseUrl,
  processPostContent,
  resolveSiteId,
} from "@/lib/blog";
import { blogPostingGraph, jsonLd } from "@/lib/schema";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ siteId: string; slug: string }>;
};

function normalizeKeywords(keywords?: string[]): string[] {
  if (!keywords?.length) return [];
  return keywords.map((item) => item.trim()).filter(Boolean);
}

export async function generateStaticParams() {
  const params: Array<{ siteId: string; slug: string }> = [];
  const siteIds = getConfiguredSiteIds();

  await Promise.all(
    siteIds.map(async (siteId) => {
      const slugs = await fetchAllBlogSlugsForSite(siteId);
      for (const slug of slugs) {
        params.push({
          siteId,
          slug,
        });
      }
    }),
  );

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { siteId: rawSiteId, slug } = await params;
  const siteId = resolveSiteId(rawSiteId);
  const post = await fetchBlogPostBySlug(siteId, slug, revalidate);

  if (!post) {
    return {
      title: "Post not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || "Clinical article";
  const image = getPostImage(post);
  const canonicalUrl = buildBlogPostPath(siteId, slug);
  const keywords = normalizeKeywords(post.keywords);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      siteName: siteId,
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: image,
          alt: post.title,
        },
      ],
      type: "article",
      locale: "en_US",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt || post.createdAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function SiteBlogPostPage({ params }: PageProps) {
  const { siteId: rawSiteId, slug } = await params;
  const siteId = resolveSiteId(rawSiteId);
  const siteBase = getSiteBaseUrl(siteId);

  const post = await fetchBlogPostBySlug(siteId, slug, revalidate);
  if (!post || !post.content) {
    notFound();
  }

  const processed = processPostContent(post.content);
  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || "Clinical article";
  const authorName = getPostAuthorName(post);
  const image = getPostImage(post);

  const hasFaq = Array.isArray(post.faqs) && post.faqs.length > 0;
  const postPath = buildBlogPostPath(siteId, slug);
  const schema = blogPostingGraph({
    path: postPath,
    post,
    title,
    description,
    authorName,
    image,
    breadcrumbs: [
      { name: "Blog", path: buildBlogListPath(siteId) },
      { name: post.title, path: postPath },
    ],
    faqs: hasFaq ? post.faqs || [] : [],
  });

  return (
    <>
      <Header />
      <main
        className="min-h-screen w-full max-w-full overflow-x-clip bg-white font-sans text-slate-800"
        style={{ maxWidth: "100%", overflowX: "clip" }}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

        <section className="border-t-4 border-blue-700 bg-slate-900 px-6 py-14 text-white md:px-20 md:py-16">
          <div className="mx-auto max-w-240">
            <nav className="mb-4 text-xs uppercase tracking-wider text-slate-300" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href={siteBase} className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href={buildBlogListPath(siteId)} className="transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-slate-100">{post.title}</li>
              </ol>
            </nav>

            <h1 className="mt-2 text-3xl font-serif leading-tight md:text-5xl">{post.title}</h1>
            <div className="mt-4 text-sm text-slate-300">
              {authorName} • {new Date(post.createdAt || Date.now()).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • {processed.readingTimeMinutes} min read
            </div>
          </div>
        </section>

        <article className="w-full max-w-full overflow-x-clip px-4 py-10 sm:px-6 md:px-20 md:py-12">
          <div className="mx-auto grid w-full min-w-0 max-w-350 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0 max-w-full">
              <div className="mb-8 w-full max-w-full overflow-hidden rounded-sm border border-slate-200">
                <img
                  src={image}
                  alt={post.title}
                  className="block h-auto w-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {post.excerpt && <p className="text-lg leading-relaxed text-slate-700">{post.excerpt}</p>}

              <div
                className="blog-content prose prose-slate mt-8 w-full min-w-0 max-w-none overflow-hidden break-words [&_a]:break-all [&_li]:max-w-full [&_ol]:max-w-full [&_ul]:max-w-full prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline"
                style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
                dangerouslySetInnerHTML={{ __html: processed.html }}
              />

              {hasFaq && (
                <section className="mt-10 border border-slate-200 bg-slate-50 p-5">
                  <h2 className="text-xl font-serif text-slate-900">Frequently Asked Questions</h2>
                  <div className="mt-4 space-y-4">
                    {(post.faqs || []).map((faq) => (
                      <div key={faq.question}>
                        <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                        <p className="mt-1 text-sm text-slate-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {processed.toc.length > 0 && (
              <aside className="h-fit border border-slate-200 bg-slate-50 p-5 lg:sticky lg:top-24">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Table of Contents</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {processed.toc.map((item) => (
                    <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
                      <a href={`#${item.id}`} className="text-blue-700 hover:underline">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
