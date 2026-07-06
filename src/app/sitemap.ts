import type { MetadataRoute } from "next";
import {
  DEFAULT_SITE_ID,
  buildBlogListPath,
  buildBlogPostPath,
  fetchAllBlogSlugsForSite,
  getConfiguredSiteIds,
  getSiteBaseUrl,
} from "@/lib/blog";
import { getRequiredSeoBlogSlugs } from "@/lib/seo-blog-content";
import { getSeoTopicSlugs } from "@/lib/seo-content";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const siteIds = getConfiguredSiteIds();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.abcd.health"}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  const staticRoutes = [
    "/about",
    "/stages",
    "/complications",
    "/resources",
    "/faq",
    "/contact",
    "/dr-ashish-kalla",
    "/knowledge-base",
    ...getSeoTopicSlugs().map((slug) => `/${slug}`),
  ];

  const lowPriorityRoutes = ["/privacy-policy", "/terms-and-conditions"];

  const requiredLocalBlogSlugs = getRequiredSeoBlogSlugs();

  for (const siteId of siteIds) {
    const siteBase = getSiteBaseUrl(siteId);

    staticEntries.push({
      url: `${siteBase}${buildBlogListPath(siteId)}`,
      lastModified: now,
      changeFrequency: "hourly",
      priority: 0.8,
    });

    for (const route of staticRoutes) {
      staticEntries.push({
        url: `${siteBase}${route}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }

    for (const route of lowPriorityRoutes) {
      staticEntries.push({
        url: `${siteBase}${route}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
      });
    }

    const slugs = await fetchAllBlogSlugsForSite(siteId);
    const mergedBlogSlugs =
      siteId === DEFAULT_SITE_ID
        ? Array.from(new Set([...slugs, ...requiredLocalBlogSlugs]))
        : slugs;

    for (const slug of mergedBlogSlugs) {
      staticEntries.push({
        url: `${siteBase}${buildBlogPostPath(siteId, slug)}`,
        lastModified: now,
        changeFrequency: "daily",
        priority: 0.7,
      });
    }
  }

  return staticEntries;
}
