import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://procreations.dev";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/tos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/eula`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
