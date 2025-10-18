import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Pro Creations — the rules for using our website and services.",
};

export default function TermsPage() {
  return (
    <main className="px-6 sm:px-10 py-16 mx-auto max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-zinc-400">Effective date: {new Date().getFullYear()}</p>

      <div className="mt-8 space-y-6 text-zinc-200">
        <section>
          <h2 className="text-lg font-medium">Acceptance of Terms</h2>
          <p className="mt-2 text-zinc-300">
            By accessing this site you agree to these Terms. If you do not agree, do not
            use the site.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Use of Site and Apps</h2>
          <p className="mt-2 text-zinc-300">
            You may not misuse the site or apps, including violating laws, distributing malware, or interfering with services. For apps, you must comply with app store terms (Google Play, Apple App Store).
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">User Accounts and Data</h2>
          <p className="mt-2 text-zinc-300">
            If you create an account, keep credentials secure. We may suspend accounts for violations. Data is handled per our Privacy Policy.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Subscriptions and Payments</h2>
          <p className="mt-2 text-zinc-300">
            Paid features or subscriptions auto-renew unless canceled. Refunds per app store policies. Prices may change with notice.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Intellectual Property</h2>
          <p className="mt-2 text-zinc-300">
            All content is owned by Pro Creations or licensed. You grant us rights to user-generated content.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Third-Party Services</h2>
          <p className="mt-2 text-zinc-300">
            Apps may integrate third-party services. We are not responsible for their policies or performance.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Termination</h2>
          <p className="mt-2 text-zinc-300">
            We may terminate access for violations. Upon termination, licenses end, and data may be deleted.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Disclaimers</h2>
          <p className="mt-2 text-zinc-300">
            Services provided "as is" without warranties. We do not guarantee uptime or error-free operation.
          </p>
        </section>
        <p className="text-zinc-400 text-sm">
          See our <Link className="underline" href="/privacy">Privacy Policy</Link> and <Link className="underline" href="/eula">EULA</Link>.
        </p>
      </div>
    </main>
  );
}
