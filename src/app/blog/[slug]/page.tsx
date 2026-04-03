"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../Footer";
import { processPostContent } from "@/lib/blog";

type Post = {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  author?: string;
  createdAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  featuredImage?: string;
  image?: string;
  imageUrl?: string;
};

type PostResponse = {
  success: boolean;
  data: Post | null;
  message?: string;
};

function getPostImage(post: Post): string {
  return post.featuredImage || post.imageUrl || post.image || "/PHOTO-2026-03-01-10-33-42.jpg";
}

function BlogPostLoader() {
  return (
    <>
      <section className="border-t-4 border-blue-700 bg-slate-900 px-6 py-14 text-white md:px-20 md:py-16">
        <div className="mx-auto max-w-240">
          <div className="blog-skeleton blog-skeleton--text h-3 w-20 bg-slate-700/70" />
          <div className="blog-skeleton mt-4 h-12 w-full max-w-3xl rounded-sm bg-slate-700/70 md:h-16" />
          <div className="blog-skeleton mt-5 h-4 w-64 max-w-full rounded-sm bg-slate-700/70" />
        </div>
      </section>

      <div className="w-full flex justify-center items-center py-20 gap-3 h-72">
        <div className="w-5 h-5 p-2 bg-blue-700 animate-bounce rounded-full overflow-hidden" style={{ animationDelay: "0ms" }}></div>
        <div className="w-5 h-5 p-2 bg-blue-700 animate-bounce rounded-full overflow-hidden" style={{ animationDelay: "200ms" }}></div>
        <div className="w-5 h-5 p-2 bg-blue-700 animate-bounce rounded-full overflow-hidden" style={{ animationDelay: "400ms" }}></div>
      </div>
    </>
  );
}

const formatDate = (value?: string) => {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("Invalid blog slug.");
      setLoading(false);
      return;
    }

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/posts/${encodeURIComponent(slug)}`, { cache: "no-store" });
        const json: PostResponse = await response.json();
        if (!json.success || !json.data) {
          setError(json.message || "Post not found.");
          setPost(null);
          return;
        }

        setPost(json.data);
      } catch {
        setError("Unable to load this post right now.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white font-sans text-slate-800">
          <BlogPostLoader />
        </main>
        <Footer />
      </>
    );
  }

  if (!post || error) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white px-6 py-20 text-slate-800 md:px-20">
          <div className="mx-auto max-w-240">
            <p className="rounded-sm border border-rose-200 bg-rose-50 p-4 text-rose-700">{error || "Post not found."}</p>
            <Link href="/blog" className="mt-6 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900">
              Back to blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-slate-800">
        <section className="border-t-4 border-blue-700 bg-slate-900 px-6 py-14 text-white md:px-20 md:py-16">
          <div className="mx-auto max-w-240">
            <Link href="/blog" className="text-xs uppercase tracking-wider text-slate-300 transition-colors hover:text-white">
              Back to blog
            </Link>
            <h1 className="mt-4 text-3xl font-serif leading-tight md:text-5xl">{post.title}</h1>
            <div className="mt-4 text-sm text-slate-300">{formatDate(post.createdAt)}</div>
          </div>
        </section>

        <article className="px-6 py-12 md:px-20">
          <div className="mx-auto max-w-240">
            {post.excerpt && <p className="text-lg leading-relaxed text-slate-700 mb-2">{post.excerpt}</p>}
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-sm border border-slate-200 md:h-96">
              <Image
                src={getPostImage(post)}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority={false}
              />
            </div>
            <div
              className="blog-content prose prose-slate mt-8 max-w-none"
              dangerouslySetInnerHTML={{ __html: processPostContent(post.content || "").html }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
