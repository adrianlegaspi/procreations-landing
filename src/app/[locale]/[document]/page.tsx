import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import {
  getAlternates,
  isLocale,
  legalDocuments,
  localizedLegalKey,
} from "@/lib/i18n";

type LocalizedLegalPageProps = {
  params: Promise<{ locale: string; document: string }>;
};

export function generateStaticParams() {
  return [
    { locale: "es", document: "privacidad" },
    { locale: "es", document: "terminos" },
    { locale: "es", document: "eula" },
    { locale: "es", document: "derechos-de-autor" },
  ];
}

export async function generateMetadata({ params }: LocalizedLegalPageProps): Promise<Metadata> {
  const { locale, document: segment } = await params;

  if (!isLocale(locale) || locale === "en") {
    return {};
  }

  const documentKey = localizedLegalKey(locale, segment);
  if (!documentKey) {
    return {};
  }

  const document = legalDocuments[locale][documentKey];

  return {
    title: document.title,
    description: document.description,
    alternates: getAlternates(documentKey, locale),
    openGraph: {
      title: document.title,
      description: document.description,
      locale: "es_MX",
      type: "website",
    },
  };
}

export default async function LocalizedLegalPage({ params }: LocalizedLegalPageProps) {
  const { locale, document: segment } = await params;

  if (!isLocale(locale) || locale === "en") {
    notFound();
  }

  const documentKey = localizedLegalKey(locale, segment);
  if (!documentKey) {
    notFound();
  }

  return <LegalPage locale={locale} documentKey={documentKey} />;
}
