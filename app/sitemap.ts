import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allCitySlugs } from "@/lib/cities";
import { services } from "@/lib/services";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticPaths = ["", "/diensten", "/werkgebied", "/prijzen", "/blog", "/over-ons", "/contact", "/privacy"];

  return [
    ...staticPaths.map((p) => ({
      url: base + p,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${base}/diensten/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...allCitySlugs().map((slug) => ({
      url: `${base}/slotenmaker/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
