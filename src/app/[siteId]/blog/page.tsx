import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../Footer";
import {
  buildBlogListPath,
  buildBlogPostPath,
  fetchBlogPostsBySite,
  formatPublishedDate,
  getConfiguredSiteIds,
  getPostAuthorName,
  resolveSiteId,
} from "@/lib/blog";
import { collectionPageGraph, jsonLd } from "@/lib/schema";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ siteId: string }>;
  searchParams: Promise<{ page?: string }>;
};

const POSTS_PER_PAGE = 9;

export async function generateStaticParams() {
  return getConfiguredSiteIds().map((siteId) => ({ siteId }));
}

function toPageNumber(value?: string): number {
  const parsed = Number(value || "1");
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : 1;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { siteId: rawSiteId } = await params;
  const query = await searchParams;
  const currentPage = toPageNumber(query.page);
  const siteId = resolveSiteId(rawSiteId);
  const canonicalPath = buildBlogListPath(siteId, currentPage);
  const title = currentPage > 1 ? `Blog - Page ${currentPage} | ${siteId}` : `Blog | ${siteId}`;
  const description = `Clinical and evidence-based blog articles for ${siteId}.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      siteName: siteId,
      title,
      description,
      url: canonicalPath,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function SiteBlogPage({ params, searchParams }: PageProps) {
  const { siteId: rawSiteId } = await params;
  const query = await searchParams;
  const currentPage = toPageNumber(query.page);
  const siteId = resolveSiteId(rawSiteId);

  const result = await fetchBlogPostsBySite(siteId, {
    page: currentPage,
    limit: POSTS_PER_PAGE,
    revalidate,
  });

  const posts = result.success ? result.data : [];
  const totalPages = Math.max(1, result.totalPages || 1);
  const previousPageHref = currentPage > 1 ? buildBlogListPath(siteId, currentPage - 1) : null;
  const nextPageHref = currentPage < totalPages ? buildBlogListPath(siteId, currentPage + 1) : null;
  const blogPath = buildBlogListPath(siteId);
  const schema = collectionPageGraph({
    path: blogPath,
    name: `${siteId} Blog`,
    description: `Clinical and evidence-based blog articles for ${siteId}.`,
    breadcrumbs: [{ name: "Blog", path: blogPath }],
    type: "Blog",
    items: posts.map((post) => ({
      name: post.title,
      description: post.excerpt || post.metaDescription,
      url: buildBlogPostPath(siteId, post.slug),
    })),
  });

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <main className="min-h-screen bg-white font-sans text-slate-800">
        <section className="border-t-4 border-blue-700 bg-slate-900 px-6 py-16 text-white md:px-20 md:py-20">
          <div className="mx-auto max-w-350">
            <h1 className="text-4xl font-serif leading-tight md:text-5xl">{siteId} Blog</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Evidence-based clinical insights and long-form articles.
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-12 md:px-20">
          <div className="mx-auto max-w-350">
            {!result.success && (
              <p className="mb-6 rounded-sm border border-rose-200 bg-rose-50 p-4 text-rose-700">
                {result.message || "Unable to load blog posts."}
              </p>
            )}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post._id || post.id || post.slug}
                  className="group flex h-full flex-col border border-slate-200 bg-white p-6 transition-colors hover:bg-slate-50"
                >
                  <p className="text-xs uppercase tracking-wider text-slate-500">{formatPublishedDate(post.createdAt)}</p>
                  <h2 className="mt-3 text-xl font-serif leading-tight text-slate-900">{post.title}</h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt || post.metaDescription || "Read the full article."}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="text-xs uppercase tracking-wide text-slate-500">{getPostAuthorName(post)}</span>
                    <Link
                      href={buildBlogPostPath(siteId, post.slug)}
                      className="text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-900"
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-3">
                {previousPageHref ? (
                  <Link
                    href={previousPageHref}
                    rel="prev"
                    className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    Previous
                  </Link>
                ) : (
                  <span className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-400">
                    Previous
                  </span>
                )}

                <span className="text-sm text-slate-600">Page {currentPage} of {totalPages}</span>

                {nextPageHref ? (
                  <Link
                    href={nextPageHref}
                    rel="next"
                    className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    Next
                  </Link>
                ) : (
                  <span className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-400">
                    Next
                  </span>
                )}
              </nav>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
