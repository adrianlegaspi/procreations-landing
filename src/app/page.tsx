import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { getAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pro Creations: Software & AI Development Studio",
  description:
    "Pro Creations is a developer studio crafting web apps, AI applications, and whatever software dream.",
  alternates: getAlternates("home", "en"),
  openGraph: {
    title: "Pro Creations: Software & AI Development Studio",
    description:
      "Pro Creations is a developer studio crafting web apps, AI applications, and whatever software dream.",
    url: "/",
    locale: "en_US",
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
