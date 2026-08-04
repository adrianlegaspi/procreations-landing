import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getAlternates, legalDocuments } from "@/lib/i18n";

const document = legalDocuments.en.copyright;

export const metadata: Metadata = {
  title: document.title,
  description: document.description,
  alternates: getAlternates("copyright", "en"),
};

export default function CopyrightPage() {
  return <LegalPage locale="en" documentKey="copyright" />;
}
