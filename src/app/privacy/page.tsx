import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Pro Creations — how we handle data across our website and services.",
};

export default function PrivacyPage() {
  return (
    <main className="px-6 sm:px-10 py-16 mx-auto max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-zinc-400">Effective date: {new Date().getFullYear()}</p>

      <div className="mt-8 space-y-6 text-zinc-200">
        <p>
          Pro Creations, operated by Adrian Legaspi Silva, respects your privacy. We do not
          collect, store, or sell personal data. This policy explains what minimal information
          may pass through our services and how third-party integrations we use handle their
          own data.
        </p>

        <section>
          <h2 className="text-lg font-medium">Information We Collect</h2>
          <p className="mt-2 text-zinc-300">
            We do not directly collect or store personal information such as names, email
            addresses, or device identifiers. Any data submitted through contact forms is used
            solely to respond to your inquiry and is not retained beyond that purpose.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Third-Party Services</h2>
          <p className="mt-2 text-zinc-300">
            Some of our apps and services integrate third-party platforms that may collect data
            under their own privacy policies. These may include:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-zinc-300">
            <li>
              <strong>Firebase (Google)</strong> — may be used for app infrastructure such as
              authentication or crash reporting. See{" "}
              <a
                className="underline"
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase Privacy
              </a>
              .
            </li>
            <li>
              <strong>Google Sign-In</strong> — if offered as a login option, authentication is
              handled entirely by Google. We do not receive or store your Google credentials. See{" "}
              <a
                className="underline"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Sign in with Apple</strong> — if offered, authentication is handled entirely
              by Apple. We do not receive your Apple ID password or store authentication tokens
              beyond what Apple provides. See{" "}
              <a
                className="underline"
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Privacy Policy
              </a>
              .
            </li>
          </ul>
          <p className="mt-2 text-zinc-300">
            We encourage you to review the privacy policies of any third-party services used
            within the specific app you are using.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">How We Use Information</h2>
          <p className="mt-2 text-zinc-300">
            We do not use personal data for advertising, profiling, or analytics beyond what is
            strictly necessary for the operation of a given service. Any information exchanged
            through third-party services is governed by those services&apos; own policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Data Sharing</h2>
          <p className="mt-2 text-zinc-300">
            We do not share, sell, or trade personal data with any third parties. We have no
            advertising partners and do not engage in data brokering.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Children&apos;s Privacy</h2>
          <p className="mt-2 text-zinc-300">
            Our services are not directed at children under 13. We do not knowingly collect data
            from minors. If you believe a child has provided personal information, please contact
            us so we can address it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Your Choices</h2>
          <p className="mt-2 text-zinc-300">
            Since we do not store your personal data, there is typically nothing to request
            deletion of on our end. For data held by third-party services (e.g., Google, Apple),
            you can manage or delete it directly through their platforms or account settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Changes to This Policy</h2>
          <p className="mt-2 text-zinc-300">
            We may update this policy if our practices change. Updates will be reflected on this
            page with a revised effective date.
          </p>
        </section>

        <p className="text-zinc-400 text-sm">
          For terms governing use of the site, see our{" "}
          <Link className="underline" href="/tos">Terms of Service</Link>. For licensing of
          deliverables, see the <Link className="underline" href="/eula">EULA</Link>. For
          copyright information, see our{" "}
          <Link className="underline" href="/copyright">Copyright</Link> page.
        </p>
      </div>
    </main>
  );
}
