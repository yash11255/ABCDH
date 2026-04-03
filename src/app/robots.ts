import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.abcd.health";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about", "/blog", "/resources", "/faq", "/contact", "/knowledge-base", "/stages", "/complications"],
        disallow: ["/admin", "/api", "/_next"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
