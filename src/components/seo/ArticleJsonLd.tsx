import { absoluteUrl, SCHEMA_IDS, jsonLd } from "@/lib/schema";

type ArticleJsonLdProps = {
  title: string;
  description: string;
  url: string;
  dateModified: string;
};

export default function ArticleJsonLd({
  title,
  description,
  url,
  dateModified,
}: ArticleJsonLdProps) {
  const payload = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
    datePublished: dateModified,
    dateModified,
    author: {
      "@id": SCHEMA_IDS.organization,
    },
    publisher: {
      "@id": SCHEMA_IDS.organization,
    },
    image: absoluteUrl("/PHOTO-2026-03-01-10-33-42.jpg"),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(payload) }} />;
}
