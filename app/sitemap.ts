import type { MetadataRoute } from "next";
import { siteConfig } from "./config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Add new routes here as the marketing site grows, e.g.:
    // {
    //   url: `${siteConfig.url}/pricing`,
    //   lastModified,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}
