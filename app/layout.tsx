import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrustedBy from "@/components/home/TrustedBy";
import { SITE } from "@/lib/content/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · Communication stratégique, créative et humaine`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "communication",
    "community management",
    "création graphique",
    "site internet",
    "print",
    "Agen",
    "Lot-et-Garonne",
  ],
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: `${SITE.name} · Communication stratégique, créative et humaine`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · Communication stratégique, créative et humaine`,
    description: SITE.description,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  founder: {
    "@type": "Person",
    name: SITE.founder,
  },
  description: SITE.description,
  areaServed: SITE.areaServed,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Agen",
    addressRegion: "Lot-et-Garonne",
    addressCountry: "FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream-50 text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-green-950 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-cream-50"
        >
          Aller au contenu
        </a>
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="contenu" className="flex-1">
            {children}
          </main>
          <TrustedBy />
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
