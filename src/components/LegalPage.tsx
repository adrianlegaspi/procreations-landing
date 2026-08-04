import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  type InlineContent,
  type LegalDocumentKey,
  type Locale,
  legalDocuments,
  localizedPath,
  siteCopy,
} from "@/lib/i18n";

type LegalPageProps = {
  locale: Locale;
  documentKey: LegalDocumentKey;
};

function InlineText({ content, year }: { content: InlineContent; year: number }) {
  if (typeof content === "string") {
    return <>{content.replaceAll("{year}", String(year))}</>;
  }

  return (
    <>
      {content.map((part, index) => {
        const value = part.text.replaceAll("{year}", String(year));
        let node = part.strong ? <strong>{value}</strong> : value;

        if (part.href) {
          const external = part.href.startsWith("http");
          node = (
            <Link
              href={part.href}
              className="underline decoration-zinc-500 underline-offset-4 transition-colors hover:text-white"
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {node}
            </Link>
          );
        }

        return <span key={`${part.text}-${index}`}>{node}</span>;
      })}
    </>
  );
}

export default function LegalPage({ locale, documentKey }: LegalPageProps) {
  const document = legalDocuments[locale][documentKey];
  const copy = siteCopy[locale];
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/10 px-6 py-5 sm:px-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href={localizedPath(locale, "home")} aria-label={copy.homeAriaLabel}>
            <Image src="/assets/logo-transparent.png" alt="Pro Creations" width={112} height={112} priority />
          </Link>
          <LanguageSwitcher locale={locale} page={documentKey} />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
        <Link
          href={localizedPath(locale, "home")}
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
        >
          ← {copy.backHome}
        </Link>
        <h1 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl">{document.title}</h1>
        <p className="mt-2 text-sm text-zinc-400">
          {document.effectiveDate}: {year}
        </p>

        <div className="mt-8 space-y-7 text-zinc-200">
          {document.introduction?.map((paragraph, index) => (
            <p key={index} className="leading-7">
              <InlineText content={paragraph} year={year} />
            </p>
          ))}

          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-medium">{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <p className="mt-2 leading-7 text-zinc-300">
                    <InlineText content={paragraph} year={year} />
                  </p>
                  {index === 0 && section.list && (
                    <ul className="mt-3 list-outside space-y-2 pl-5 text-zinc-300 marker:text-zinc-600">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="pl-1 leading-7">
                          <InlineText content={item} year={year} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}

          <p className="border-t border-white/10 pt-6 text-sm leading-6 text-zinc-400">
            <InlineText content={document.related} year={year} />
          </p>
        </div>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 sm:px-10">
        <nav aria-label="Legal" className="mx-auto flex max-w-3xl flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
          {(["privacy", "terms", "eula", "copyright"] as const).map((key) => (
            <Link
              key={key}
              href={localizedPath(locale, key)}
              aria-current={key === documentKey ? "page" : undefined}
              className={key === documentKey ? "text-zinc-200" : "transition-colors hover:text-zinc-200"}
            >
              {copy.legal[key]}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
