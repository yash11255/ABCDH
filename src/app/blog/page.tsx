"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../Footer";
import { REQUIRED_SEO_BLOG_POSTS } from "@/lib/seo-blog-content";

type Post = {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  metaDescription?: string;
  author?: string;
  createdAt?: string;
};

type PostListResponse = {
  success: boolean;
  data: Post[];
  totalPages?: number;
  message?: string;
};

const formatDate = (value?: string) => {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

function BlogListLoader() {
  return (
    <div className="blog-loader-grid">
      {Array.from({ length: 6 }).map((_, index) => (
        <article key={index} className="flex h-full flex-col border border-slate-200 bg-white p-6">
          
        </article>
      ))}
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/posts?page=${page}&limit=9`, { cache: "no-store" });
        const json: PostListResponse = await response.json();
        if (!json.success) {
          setError(json.message || "Unable to load blog posts.");
          setPosts([]);
          return;
        }

        setPosts(json.data || []);
        setTotalPages(json.totalPages || 1);
      } catch {
        setError("Unable to load blog posts right now.");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-slate-800">
        <section className="border-t-4 border-blue-700 bg-slate-900 px-6 py-16 text-white md:px-20 md:py-20">
          <div className="mx-auto max-w-350">
            <h1 className="text-4xl font-serif leading-tight md:text-5xl">ABCD Health Blog</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Evidence-based insights on adiposity-based chronic disease, clinical pathways, and long-term cardiometabolic outcomes.
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-12 md:px-20">
          <div className="mx-auto max-w-350">
            {error && <p className="mb-6 rounded-sm border border-rose-200 bg-rose-50 p-4 text-rose-700">{error}</p>}

            {loading ? (
              <div>
                <div className="mb-6 space-y-3">
                  <div className="blog-skeleton blog-skeleton--text h-4 w-40" />
                  <div className="blog-skeleton blog-skeleton--text h-3 w-72 max-w-full" />
                </div>
                <BlogListLoader />
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {Array.from(
                  new Map(
                    [...REQUIRED_SEO_BLOG_POSTS, ...posts].map((post) => [post.slug, post]),
                  ).values(),
                ).map((post) => (
                  <article
                    key={post._id || post.id || post.slug}
                    className="group flex h-full flex-col border border-slate-200 bg-white p-6 transition-colors hover:bg-slate-50"
                  >
                    <p className="text-xs uppercase tracking-wider text-slate-500">{formatDate(post.createdAt)}</p>
                    <h2 className="mt-3 text-xl font-serif leading-tight text-slate-900">{post.title}</h2>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                      {post.excerpt || post.metaDescription || "Read the full article."}
                    </p>
                    <div className="mt-6 flex items-center justify-end border-t border-slate-200 pt-4">
                      <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-900">
                        Read article
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {!loading && totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-3">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-40"
                >
                  Previous
                </button>
                <span className="text-sm text-slate-600">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
