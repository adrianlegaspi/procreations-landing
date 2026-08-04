import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SiteFooter from "@/components/SiteFooter";
import { type Locale, siteCopy } from "@/lib/i18n";

type HomePageProps = {
  locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
  const copy = siteCopy[locale];

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only z-[10000] rounded-md bg-zinc-100 px-4 py-2 text-zinc-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {copy.skipToContent}
      </a>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
      <header className="px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href={locale === "en" ? "/" : "/es"} aria-label={copy.homeAriaLabel}>
            <Image
              src="/assets/logo-transparent.png"
              alt="Pro Creations"
              width={160}
              height={160}
              className="rounded-sm border-none shadow-none"
              priority
            />
          </Link>
          <LanguageSwitcher locale={locale} page="home" />
        </div>
      </header>
      <main id="main-content" className="flex-1 px-6 sm:px-10">
        <section className="mx-auto max-w-6xl py-8 sm:py-20">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            {copy.hero}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">{copy.intro}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white/5"
            >
              {copy.contactButton}
            </Link>
          </div>
        </section>
        <section id="capabilities" className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {copy.capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5 motion-safe:animate-[fadeIn_0.6s_ease-out]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h2 className="font-medium">{capability.title}</h2>
              <p className="mt-2 text-sm text-zinc-300">{capability.description}</p>
            </div>
          ))}
        </section>
        <section id="portfolio" className="mx-auto mt-16 max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">{copy.portfolioTitle}</h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg">{copy.portfolioIntro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="https://cardom.procreations.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <Image src="/assets/cardom/logo.png" alt="Cardom" width={64} height={64} className="rounded-lg" />
              <h3 className="mt-4 font-medium transition-colors group-hover:text-blue-400">Cardom</h3>
              <p className="mt-2 text-sm text-zinc-300">{copy.cardomDescription}</p>
            </Link>
          </div>
        </section>
        <section id="contact" className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">{copy.contactTitle}</h2>
            <p className="mt-4 max-w-xl text-base text-zinc-300 sm:text-lg">{copy.contactIntro}</p>
          </div>
          <div className="flex justify-end">
            <ContactForm copy={copy.contactForm} />
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
      <Script id={`ld-json-org-${locale}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pro Creations",
          url: "https://procreations.dev",
          logo: "https://procreations.dev/assets/logo-transparent.png",
        })}
      </Script>
    </div>
  );
}
