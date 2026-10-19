import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allCitySlugs } from "@/lib/cities";
import { services } from "@/lib/services";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  // Bij volgende inhoudelijke wijzigingen per URL aanpassen; geen buildtijd als wijzigingsdatum.
  const changedOn = new Date("2026-10-19");
  const changedStaticPaths = new Set(["", "/diensten", "/werkgebied", "/over-ons", "/contact"]);

  const staticPaths = ["", "/diensten", "/werkgebied", "/prijzen", "/blog", "/over-ons", "/contact"];

  return [
    ...staticPaths.map((p) => ({
      url: base + p,
      ...(changedStaticPaths.has(p) ? { lastModified: changedOn } : {}),
    })),
    ...services.map((s) => ({
      url: `${base}/diensten/${s.slug}`,
      lastModified: changedOn,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.modified ?? p.date),
    })),
    ...allCitySlugs().map((slug) => ({
      url: `${base}/slotenmaker/${slug}`,
      lastModified: changedOn,
    })),
  ];
}
