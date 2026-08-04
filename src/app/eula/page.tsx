import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getAlternates, legalDocuments } from "@/lib/i18n";

const document = legalDocuments.en.eula;

export const metadata: Metadata = {
  title: document.title,
  description: document.description,
  alternates: getAlternates("eula", "en"),
};

export default function EulaPage() {
  return <LegalPage locale="en" documentKey="eula" />;
}
