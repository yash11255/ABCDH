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
      "@type": "Person",
      name: "Dr. [Name Placeholder]",
      jobTitle: "MD, Endocrinology",
    },
    publisher: {
      "@type": "Organization",
      name: "ABCD Health",
      logo: {
        "@type": "ImageObject",
        url: "/PHOTO-2026-03-01-10-33-42.jpg",
      },
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />;
}
