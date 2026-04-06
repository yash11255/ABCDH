import type { Metadata } from "next";
import { DEFAULT_SITE_ID, fetchBlogPostBySlug, getPostImage } from "@/lib/blog";

type SlugLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: SlugLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(DEFAULT_SITE_ID, slug);

  if (!post) {
    return {
      alternates: {
        canonical: `/blog/${slug}`,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || "Clinical article";
  const image = getPostImage(post);
  const canonicalPath = `/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      images: [
        {
          url: image,
          alt: post.title,
        },
      ],
      type: "article",
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

export default function BlogSlugLayout({ children }: SlugLayoutProps) {
  return children;
}
