import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";
import OrganicFrame from "@/components/ui/OrganicFrame";
import ContactForm from "@/components/contact/ContactForm";
import ScrollLogo from "@/components/ui/ScrollLogo";
import FAQSection from "@/components/services/FAQSection";
import { CONTACT } from "@/lib/content/site";
import { FAQ_ITEMS } from "@/lib/content/faq";

export const metadata: Metadata = {
  title: "Contact — communication & community management à Agen",
  description:
    "Parlons de votre projet de communication, community management ou marketing : réseaux sociaux, création graphique, vidéo, web, print, SEO ou emailing.",
  alternates: { canonical: "/contact" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative pb-24 pt-14 sm:pb-32 sm:pt-20">
        <ScrollLogo from={-50} to={50} />
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionEyebrow label="Contact" />
                <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] text-title sm:text-5xl">
                  On parle de votre projet ?
                </h1>
                <p className="mt-6 max-w-md text-pretty font-sans text-base leading-relaxed text-green-950/75">
                  Un besoin précis ou toute votre communication à repenser : décrivez-moi votre
                  projet, je reviens vers vous rapidement.
                </p>
              </Reveal>

              <Reveal delay={0.1} className="mt-10 space-y-6 border-t border-green-950/10 pt-8">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Email
                  </p>
                  {CONTACT.email.startsWith("[") ? (
                    <p className="mt-2 inline-block rounded-lg bg-rose-700 px-3 py-1 font-sans text-sm font-semibold text-cream-50 sm:text-base">
                      {CONTACT.email}
                    </p>
                  ) : (
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-2 inline-block rounded-lg bg-rose-700 px-3 py-1 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-rose-900 sm:text-base"
                    >
                      {CONTACT.email}
                    </a>
                  )}
                </div>

                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Téléphone
                  </p>
                  {CONTACT.phone.startsWith("[") ? (
                    <p className="mt-2 inline-block rounded-lg bg-rose-700 px-3 py-1 font-sans text-sm font-semibold text-cream-50 sm:text-base">
                      {CONTACT.phone}
                    </p>
                  ) : (
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="mt-2 inline-block rounded-lg bg-rose-700 px-3 py-1 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-rose-900 sm:text-base"
                    >
                      {CONTACT.phone}
                    </a>
                  )}
                </div>

                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    WhatsApp
                  </p>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-lg bg-rose-700 px-3 py-1 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-rose-900 sm:text-base"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
                      <path d="M12.02 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.44 1.33 4.93L2 22l5.24-1.37a9.9 9.9 0 0 0 4.78 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.52 2 12.02 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.22 8.22 0 0 1-1.26-4.39c0-4.55 3.7-8.25 8.25-8.25a8.2 8.2 0 0 1 5.84 2.42 8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.71 8.24-8.26 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.12.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
                    </svg>
                    Écrire sur WhatsApp
                  </a>
                </div>

                <p className="font-sans text-sm text-green-950/60">{CONTACT.address}</p>
              </Reveal>

              <Reveal delay={0.2} className="mt-10 hidden lg:block">
                <OrganicFrame
                  src="/images/mae-illustration-contact.jpg"
                  alt="Illustration de Maëlisse, casque sur les oreilles, saluant de la main devant son ordinateur"
                  width={1024}
                  height={1506}
                  accent="rose"
                  sizes="(min-width: 1024px) 30vw, 0px"
                  className="w-full max-w-[220px]"
                />
              </Reveal>
            </div>

            <Reveal delay={0.05} className="lg:col-span-6">
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <FAQSection />
    </>
  );
}
