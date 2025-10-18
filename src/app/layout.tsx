import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://procreations.dev"),
  title: {
    default: "Pro Creations — Software & AI Development Studio",
    template: "%s | Pro Creations",
  },
  description:
    "Pro Creations is a developer studio crafting web apps, AI applications, and whatever software dream.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pro Creations — Software & AI Development Studio",
    description:
      "Pro Creations is a developer studio crafting web apps, AI applications, and whatever software dream.",
    url: "https://procreations.dev",
    siteName: "Pro Creations",
    images: ["/assets/logo-transparent.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Creations — Software & AI Development Studio",
    description:
      "Pro Creations is a developer studio crafting web apps, AI applications, and whatever software dream.",
    images: ["/assets/logo-transparent.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
