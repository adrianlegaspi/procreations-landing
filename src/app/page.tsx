import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
      <header className="px-6 sm:px-10 py-6">
        <div className="mx-auto max-w-6xl flex items-center gap-3">
          <Image src="/assets/logo-transparent.png" alt="Pro Creations" width={120} height={120} className="rounded-sm border-none shadow-none" />
          <h1 className="text-lg font-semibold tracking-tight absolute -left-[9999px]">Pro Creations</h1>
        </div>
      </header>
      <main className="flex-1 px-6 sm:px-10">
        <section className="mx-auto max-w-6xl py-8 sm:py-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
            We build software, AI apps, and whatever software dream.
          </h1>
          <p className="mt-6 text-zinc-300 text-lg sm:text-xl max-w-2xl">
            A focused developer studio delivering fast, reliable, and beautiful digital products.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/tos" className="px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/5 text-sm font-medium transition">
              Terms
            </Link>
          </div>
        </section>
        <section id="capabilities" className="mx-auto max-w-6xl grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 animate-[fadeIn_0.6s_ease-out_0s]">
            <h3 className="font-medium">Web & Mobile</h3>
            <p className="mt-2 text-sm text-zinc-300">Modern, scalable apps with excellent DX and UX.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 animate-[fadeIn_0.6s_ease-out_0.2s]">
            <h3 className="font-medium">AI Applications</h3>
            <p className="mt-2 text-sm text-zinc-300">LLM-powered assistants, automation, and integrations.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 animate-[fadeIn_0.6s_ease-out_0.4s]">
            <h3 className="font-medium">Consulting</h3>
            <p className="mt-2 text-sm text-zinc-300">Architecture, performance, and product guidance.</p>
          </div>
        </section>
        <section id="contact" className="mx-auto mt-16 max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Let&apos;s build your next idea</h2>
            <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-xl">
              Share a few details about the product, platform, or AI experience you want to ship. We&apos;ll reach out within one business day.
            </p>
          </div>
          <div className="flex justify-end">
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="px-6 sm:px-10 py-10 border-t border-white/10 mt-12">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Pro Creations by <Link href="https://adrianlegaspi.dev" className="hover:text-white">Adrian Legaspi</Link></p>
          <nav className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/tos" className="hover:text-white">Terms</Link>
            <Link href="/eula" className="hover:text-white">EULA</Link>
          </nav>
        </div>
      </footer>
      <Script id="ld-json-org" type="application/ld+json" strategy="afterInteractive">
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

