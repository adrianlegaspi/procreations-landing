import Link from "next/link";
import { type Locale, localizedPath, siteCopy } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

type SiteFooterProps = {
  locale: Locale;
};

export default function SiteFooter({ locale }: SiteFooterProps) {
  const copy = siteCopy[locale];

  return (
    <footer className="mt-12 border-t border-white/10 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Pro Creations {copy.footerBy}{" "}
          <Link href="https://adrianlegaspi.dev" className="transition-colors hover:text-white">
            Adrian Legaspi
          </Link>
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href={localizedPath(locale, "privacy")} className="transition-colors hover:text-white">
              {copy.legal.privacy}
            </Link>
            <Link href={localizedPath(locale, "terms")} className="transition-colors hover:text-white">
              {copy.legal.terms}
            </Link>
            <Link href={localizedPath(locale, "eula")} className="transition-colors hover:text-white">
              {copy.legal.eula}
            </Link>
            <Link href={localizedPath(locale, "copyright")} className="transition-colors hover:text-white">
              {copy.legal.copyright}
            </Link>
          </nav>
          <LanguageSwitcher locale={locale} page="home" />
        </div>
      </div>
    </footer>
  );
}
