import type { MetadataRoute } from "next";

const BASE_URL = "https://avx-export-website-fxsv.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: "2026-08-25",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}