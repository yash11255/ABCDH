import type { Metadata } from "next";

type MetadataInput = {
  title: string;
  description: string;
  canonicalPath: string;
  type?: "website" | "article" | "profile";
  image?: string;
};

const DEFAULT_IMAGE = "/PHOTO-2026-03-01-10-33-42.jpg";

export function buildSeoMetadata({
  title,
  description,
  canonicalPath,
  type = "article",
  image = DEFAULT_IMAGE,
}: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      siteName: "ABCD Health",
      title,
      description,
      url: canonicalPath,
      type,
      locale: "en_US",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function getAbsoluteUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.abcd.health";
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}
