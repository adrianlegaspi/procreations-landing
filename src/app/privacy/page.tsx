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
          Pro Creations respects your privacy. We only collect information necessary to
          operate and improve our website and services. We do not sell personal data.
        </p>
        <section>
          <h2 className="text-lg font-medium">Information We Collect</h2>
          <p className="mt-2 text-zinc-300">
            We may collect personal information such as name, email, device information, IP address, and usage data through our website and any apps developed by Pro Creations. This includes analytics data (e.g., via Google Analytics or similar), crash reports, and user-generated content.
          </p>
          <p className="mt-2 text-zinc-300">
            For apps: We collect data necessary for app functionality, such as device ID, location (with permission), and in-app purchases. We do not sell personal data.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">How We Use Information</h2>
          <p className="mt-2 text-zinc-300">
            To provide, improve, and personalize our services, communicate updates, ensure security, and comply with legal obligations. For apps, this includes processing payments, providing support, and analytics to enhance user experience.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Data Sharing and Disclosure</h2>
          <p className="mt-2 text-zinc-300">
            We do not share personal data with third parties except as required by law, for service providers (e.g., payment processors), or with user consent. Aggregated, anonymized data may be used for analytics.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Your Rights</h2>
          <p className="mt-2 text-zinc-300">
            Under GDPR/CCPA, you have rights to access, correct, delete, or restrict processing of your data. Contact us to exercise these rights. For apps, you can manage permissions in device settings.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Children&apos;s Privacy</h2>
          <p className="mt-2 text-zinc-300">
            Our services are not intended for children under 13 (COPPA). We do not knowingly collect data from minors.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Data Security</h2>
          <p className="mt-2 text-zinc-300">
            We implement reasonable security measures, but no method is 100% secure. Use strong passwords and keep devices updated.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Data Retention</h2>
          <p className="mt-2 text-zinc-300">
            We retain information only for as long as necessary to fulfill the purposes
            outlined here or to comply with legal obligations.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Your Choices</h2>
          <p className="mt-2 text-zinc-300">
            You can request access, correction, or deletion of your personal information
            by contacting us if applicable for a project engagement.
          </p>
        </section>
        <p className="text-zinc-400 text-sm">
          For terms governing use of the site, see our <Link className="underline" href="/tos">Terms of Service</Link>. For licensing of deliverables, see the <Link className="underline" href="/eula">EULA</Link>.
        </p>
      </div>
    </main>
  );
}
