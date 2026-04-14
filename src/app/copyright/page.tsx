import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Copyright",
  description:
    "Copyright notice for Pro Creations — all intellectual property owned by Adrian Legaspi Silva.",
};

export default function CopyrightPage() {
  return (
    <main className="px-6 sm:px-10 py-16 mx-auto max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Copyright</h1>
      <p className="mt-2 text-sm text-zinc-400">Effective date: {new Date().getFullYear()}</p>

      <div className="mt-8 space-y-6 text-zinc-200">
        <p>
          All content, software, and intellectual property made available through Pro Creations —
          including but not limited to websites, mobile applications, source code, graphics, text,
          and branding — are the exclusive property of{" "}
          <strong>Adrian Legaspi Silva</strong> unless otherwise noted.
        </p>

        <section>
          <h2 className="text-lg font-medium">Ownership</h2>
          <p className="mt-2 text-zinc-300">
            &copy; {new Date().getFullYear()} Adrian Legaspi Silva. All rights reserved.
            Pro Creations is a trade name operated by Adrian Legaspi Silva. All works published
            under this name remain the sole intellectual property of the individual author.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Permitted Use</h2>
          <p className="mt-2 text-zinc-300">
            You may view and access the content for personal, non-commercial use only. Any
            reproduction, redistribution, modification, or commercial use of any content without
            prior written permission is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Third-Party Content</h2>
          <p className="mt-2 text-zinc-300">
            Certain assets, libraries, or components used within Pro Creations products may be
            licensed under their own terms (e.g., open-source licenses). Where applicable, those
            licenses are honored and attribution is provided within the respective project.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">App Store Distribution</h2>
          <p className="mt-2 text-zinc-300">
            Applications distributed through the Apple App Store or Google Play Store are published
            by Adrian Legaspi Silva. All app content, design, and functionality remain the exclusive
            property of the author. Use of the apps is subject to the applicable{" "}
            <Link className="underline" href="/eula">End User License Agreement</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">DMCA & Infringement</h2>
          <p className="mt-2 text-zinc-300">
            If you believe any content infringes your copyright, please contact us with a
            description of the work, the location of the allegedly infringing content, and your
            contact information. We will respond promptly to valid notices.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Contact</h2>
          <p className="mt-2 text-zinc-300">
            For licensing inquiries or permission requests, please reach out through the contact
            form on this site.
          </p>
        </section>

        <p className="text-zinc-400 text-sm">
          See also our <Link className="underline" href="/privacy">Privacy Policy</Link>,{" "}
          <Link className="underline" href="/tos">Terms of Service</Link>, and{" "}
          <Link className="underline" href="/eula">EULA</Link>.
        </p>
      </div>
    </main>
  );
}
