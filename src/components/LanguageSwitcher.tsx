import Link from "next/link";
import {
  type LegalDocumentKey,
  type Locale,
  localizedPath,
  siteCopy,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  page: "home" | LegalDocumentKey;
};

export default function LanguageSwitcher({ locale, page }: LanguageSwitcherProps) {
  return (
    <nav
      aria-label={siteCopy[locale].languageLabel}
      className="flex items-center gap-1.5 text-xs text-zinc-500"
    >
      <Link
        href={localizedPath("en", page)}
        hrefLang="en"
        lang="en"
        aria-current={locale === "en" ? "page" : undefined}
        className={locale === "en" ? "text-zinc-100" : "transition-colors hover:text-zinc-200"}
      >
        EN
      </Link>
      <span aria-hidden="true" className="text-zinc-700">
        /
      </span>
      <Link
        href={localizedPath("es", page)}
        hrefLang="es"
        lang="es"
        aria-current={locale === "es" ? "page" : undefined}
        className={locale === "es" ? "text-zinc-100" : "transition-colors hover:text-zinc-200"}
      >
        ES
      </Link>
    </nav>
  );
}
