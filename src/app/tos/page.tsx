import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getAlternates, legalDocuments } from "@/lib/i18n";

const document = legalDocuments.en.terms;

export const metadata: Metadata = {
  title: document.title,
  description: document.description,
  alternates: getAlternates("terms", "en"),
};

export default function TermsPage() {
  return <LegalPage locale="en" documentKey="terms" />;
}
