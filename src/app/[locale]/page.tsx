import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import { getAlternates, isLocale, siteCopy } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "en") {
    return {};
  }

  return {
    title: "Pro Creations: Estudio de desarrollo de software e IA",
    description: siteCopy.es.intro,
    alternates: getAlternates("home", locale),
    openGraph: {
      title: "Pro Creations: Estudio de desarrollo de software e IA",
      description: siteCopy.es.intro,
      url: "/es",
      locale: "es_MX",
    },
  };
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "en") {
    notFound();
  }

  return <HomePage locale={locale} />;
}
