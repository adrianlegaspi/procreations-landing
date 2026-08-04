import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getAlternates, legalDocuments } from "@/lib/i18n";

const document = legalDocuments.en.privacy;

export const metadata: Metadata = {
  title: document.title,
  description: document.description,
  alternates: getAlternates("privacy", "en"),
};

export default function PrivacyPage() {
  return <LegalPage locale="en" documentKey="privacy" />;
}
