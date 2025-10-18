import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "End User License Agreement (EULA)",
  description:
    "EULA for Pro Creations — license terms for use of deliverables and software provided.",
};

export default function EulaPage() {
  return (
    <main className="px-6 sm:px-10 py-16 mx-auto max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">End User License Agreement (EULA)</h1>
      <p className="mt-2 text-sm text-zinc-400">Effective date: {new Date().getFullYear()}</p>

      <div className="mt-8 space-y-6 text-zinc-200">
        <section>
          <h2 className="text-lg font-medium">License Grant</h2>
          <p className="mt-2 text-zinc-300">
            Subject to full payment and any project-specific agreement, Pro Creations grants you a non-exclusive, non-transferable license to use the software/apps solely for personal or authorized business purposes. For apps, this includes installation on authorized devices per app store terms.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Restrictions</h2>
          <p className="mt-2 text-zinc-300">
            You may not copy, modify, reverse-engineer, distribute, or create derivative works. No resale or commercial redistribution without permission. Apps must be used on supported platforms (Android/iOS).
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Ownership and Intellectual Property</h2>
          <p className="mt-2 text-zinc-300">
            Pro Creations retains all rights to the software. User-generated content may be used for service improvement.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Updates and Support</h2>
          <p className="mt-2 text-zinc-300">
            We may provide updates; continued use implies acceptance. Support is limited to standard channels; premium support may require fees.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Termination</h2>
          <p className="mt-2 text-zinc-300">
            License terminates on violation or account closure. Uninstall software upon termination.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Warranty Disclaimer</h2>
          <p className="mt-2 text-zinc-300">
            Software provided "as is" without warranties. We disclaim all implied warranties.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium">Limitation of Liability</h2>
          <p className="mt-2 text-zinc-300">
            Liability limited to purchase price. No indirect damages. App stores have separate refund policies.
          </p>
        </section>
        <p className="text-zinc-400 text-sm">
          See also our <Link className="underline" href="/privacy">Privacy Policy</Link> and <Link className="underline" href="/tos">Terms of Service</Link>.
        </p>
      </div>
    </main>
  );
}
