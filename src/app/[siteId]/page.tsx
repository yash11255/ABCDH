import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../Footer";
import FaqAccordion from "@/components/seo/FaqAccordion";
import {
  ABCD_PILLAR_SLUG,
  getSeoTopicBySlug,
  getSeoTopicSlugs,
} from "@/lib/seo-content";
import { buildSeoMetadata } from "@/lib/seo";
import { DEFAULT_SITE_ID, fetchBlogPostsBySite, getConfiguredSiteIds } from "@/lib/blog";
import { jsonLd, seoTopicGraph } from "@/lib/schema";
import { getRelatedBlogPostsForSeoPage } from "@/lib/related-content";
import { REQUIRED_SEO_BLOG_POSTS } from "@/lib/seo-blog-content";

type PageProps = {
  params: Promise<{ siteId: string }>;
};

const LAST_UPDATED = "2026-04-24";

function isSiteNamespace(param: string): boolean {
  const normalized = param.toLowerCase();
  return getConfiguredSiteIds().includes(normalized);
}

export function generateStaticParams() {
  return getSeoTopicSlugs().map((siteId) => ({ siteId }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { siteId } = await params;

  if (isSiteNamespace(siteId)) {
    return {
      title: "Page not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const page = getSeoTopicBySlug(siteId);

  if (!page) {
    return {
      title: "Page not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildSeoMetadata({
    title: page.seoTitle,
    description: page.metaDescription,
    canonicalPath: `/${page.slug}`,
    type: "article",
  });
}

export default async function SeoTopicPage({ params }: PageProps) {
  const { siteId } = await params;

  if (isSiteNamespace(siteId)) {
    notFound();
  }

  const page = getSeoTopicBySlug(siteId);

  if (!page) {
    notFound();
  }

  const relatedPages = page.relatedSlugs
    .map((slug) => getSeoTopicBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 3);

  const blogResult = await fetchBlogPostsBySite(DEFAULT_SITE_ID, {
    page: 1,
    limit: 100,
  });
  const availableBlogPosts = blogResult.success ? [...blogResult.data, ...REQUIRED_SEO_BLOG_POSTS] : REQUIRED_SEO_BLOG_POSTS;
  const relatedBlogPosts = getRelatedBlogPostsForSeoPage(page, availableBlogPosts, 3);

  const toc = [
    { id: "definition", label: "Definition" },
    { id: "key-points", label: "Key Points" },
    ...page.sections.map((section, index) => ({ id: `section-${index + 1}`, label: section.heading })),
    { id: "faq", label: "FAQ" },
  ];

  const pillarPath = `/${ABCD_PILLAR_SLUG}`;
  const shouldShowPillar = page.slug !== ABCD_PILLAR_SLUG;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-slate-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              seoTopicGraph({
                path: `/${page.slug}`,
                title: page.seoTitle,
                description: page.metaDescription,
                faqs: page.faqs,
                dateModified: LAST_UPDATED,
              }),
            ),
          }}
        />

        <section className="border-t-4 border-blue-700 bg-slate-900 px-6 py-14 text-white md:px-20 md:py-16">
          <div className="mx-auto max-w-350">
            <h1 className="text-3xl font-serif leading-tight md:text-5xl">{page.h1}</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">{page.heroSummary}</p>
          </div>
        </section>

        <section className="px-6 py-12 md:px-20">
          <div className="mx-auto grid max-w-350 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <article>
              <section id="definition" className="rounded-sm border border-blue-200 bg-blue-50 p-5">
                <h2 className="text-xl font-serif text-slate-900">Definition</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{page.definition}</p>
              </section>

              <section id="key-points" className="mt-8 border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-xl font-serif text-slate-900">Key Points</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700 md:text-base">
                  {page.keyTakeaways.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>

              {page.sections.map((section, index) => (
                <section key={section.heading} id={`section-${index + 1}`} className="mt-10">
                  <h2 className="text-2xl font-serif text-slate-900">{section.heading}</h2>
                  <h3 className="mt-2 text-base font-semibold text-slate-700">{section.subheading}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">{section.body}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700 md:text-base">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}

              <section className="mt-12 border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-serif text-slate-900">Clinical Trust and Review</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Author and publisher: ABCD Health Editorial Team
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">Reviewed by: ABCD Health</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">Last updated: {LAST_UPDATED}</p>
              </section>

              <section className="mt-12 border border-blue-200 bg-blue-50 p-5">
                <h2 className="text-xl font-serif text-slate-900">Next Step</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{page.cta}</p>
                <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900">
                  Contact ABCD Health Team
                </Link>
              </section>

              <section id="faq">
                <FaqAccordion faqs={page.faqs} />
              </section>

              <section className="mt-12 border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-xl font-serif text-slate-900">Related Pages</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {shouldShowPillar && (
                    <Link href={pillarPath} className="rounded-sm border border-slate-200 bg-white p-3 text-sm font-medium text-blue-700 hover:text-blue-900">
                      Adiposity-Based Chronic Disease Pillar Page
                    </Link>
                  )}
                  {relatedPages.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/${related.slug}`}
                      className="rounded-sm border border-slate-200 bg-white p-3 text-sm font-medium text-blue-700 hover:text-blue-900"
                    >
                      {related.h1}
                    </Link>
                  ))}
                </div>
              </section>

              {relatedBlogPosts.length > 0 && (
                <section className="mt-8 border border-slate-200 bg-white p-5">
                  <h2 className="text-xl font-serif text-slate-900">Related Blogs</h2>
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {relatedBlogPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
                      >
                        <h3 className="text-base font-semibold leading-snug text-blue-800">{post.title}</h3>
                        {(post.excerpt || post.metaDescription) && (
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                            {post.excerpt || post.metaDescription}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>

            <aside className="h-fit border border-slate-200 bg-slate-50 p-5 lg:sticky lg:top-24">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Table of Contents</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-blue-700 hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
