import type { MetadataRoute } from "next";
import { type LegalDocumentKey, localizedPath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://procreations.dev";
  const lastModified = new Date();
  const pages: Array<{
    key: "home" | LegalDocumentKey;
    frequency: "weekly" | "yearly";
    priority: number;
  }> = [
    { key: "home", frequency: "weekly", priority: 1 },
    { key: "privacy", frequency: "yearly", priority: 0.3 },
    { key: "terms", frequency: "yearly", priority: 0.3 },
    { key: "eula", frequency: "yearly", priority: 0.3 },
    { key: "copyright", frequency: "yearly", priority: 0.3 },
  ];

  return pages.flatMap(({ key, frequency, priority }) => {
    const languages = {
      en: `${base}${localizedPath("en", key)}`,
      es: `${base}${localizedPath("es", key)}`,
    };

    return (["en", "es"] as const).map((locale) => ({
      url: `${base}${localizedPath(locale, key)}`,
      lastModified,
      changeFrequency: frequency,
      priority,
      alternates: { languages },
    }));
  });
}
