import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../Footer";
import {
  DEFAULT_SITE_ID,
  fetchAllBlogSlugsForSite,
  fetchBlogPostBySlug,
  getPostAuthorName,
  getPostImage,
  processPostContent,
} from "@/lib/blog";
import { getRequiredSeoBlogPost, getRequiredSeoBlogSlugs } from "@/lib/seo-blog-content";
import { blogPostingGraph, jsonLd } from "@/lib/schema";

export const revalidate = 60;
export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const dynamicSlugs = await fetchAllBlogSlugsForSite(DEFAULT_SITE_ID);
  const staticSlugs = getRequiredSeoBlogSlugs();
  const merged = Array.from(new Set([...dynamicSlugs, ...staticSlugs]));
  return merged.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = (await fetchBlogPostBySlug(DEFAULT_SITE_ID, slug, revalidate)) || getRequiredSeoBlogPost(slug);

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

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      siteName: "ABCD Health",
      title,
      description,
      url: `/blog/${slug}`,
      images: [{ url: image, alt: post.title }],
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = (await fetchBlogPostBySlug(DEFAULT_SITE_ID, slug, revalidate)) || getRequiredSeoBlogPost(slug);

  if (!post || !post.content) {
    notFound();
  }

  const processed = processPostContent(post.content);
  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || "Clinical article";
  const authorName = getPostAuthorName(post);
  const image = getPostImage(post);

  const hasFaq = Array.isArray(post.faqs) && post.faqs.length > 0;
  const schema = blogPostingGraph({
    path: `/blog/${slug}`,
    post,
    title,
    description,
    authorName,
    image,
    breadcrumbs: [
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${slug}` },
    ],
    faqs: hasFaq ? post.faqs || [] : [],
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-slate-800">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

        <section className="border-t-4 border-blue-700 bg-slate-900 px-6 py-14 text-white md:px-20 md:py-16">
          <div className="mx-auto max-w-240">
            <Link href="/blog" className="text-xs uppercase tracking-wider text-slate-300 transition-colors hover:text-white">
              Back to blog
            </Link>
            <h1 className="mt-4 text-3xl font-serif leading-tight md:text-5xl">{post.title}</h1>
            <div className="mt-4 text-sm text-slate-300">
              {authorName} • {new Date(post.createdAt || Date.now()).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • {processed.readingTimeMinutes} min read
            </div>
          </div>
        </section>

        <article className="px-6 py-12 md:px-20">
          <div className="mx-auto grid max-w-350 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div>
              <div className="relative mb-8 h-64 w-full overflow-hidden rounded-sm border border-slate-200 md:h-96">
                <Image
                  src={image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-contain"
                  priority={false}
                />
              </div>

              {post.excerpt && <p className="text-lg leading-relaxed text-slate-700">{post.excerpt}</p>}

              <div
                className="blog-content prose prose-slate mt-8 max-w-none prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline"
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
