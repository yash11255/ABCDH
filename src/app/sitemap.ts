import type { MetadataRoute } from "next";
import {
  buildBlogListPath,
  buildBlogPostPath,
  fetchAllBlogSlugsForSite,
  getConfiguredSiteIds,
  getSiteBaseUrl,
} from "@/lib/blog";

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
    "/knowledge-base",
    "/blog",
  ];

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

    const slugs = await fetchAllBlogSlugsForSite(siteId);
    for (const slug of slugs) {
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
