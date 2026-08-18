import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";
import OrganicFrame from "@/components/ui/OrganicFrame";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet de communication : réseaux sociaux, création graphique, vidéo, web, print, SEO ou emailing.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="pb-24 pt-14 sm:pb-32 sm:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionEyebrow label="Contact" />
              <h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[1.02] text-green-950 sm:text-6xl">
                On parle de votre projet ?
              </h1>
              <p className="mt-6 max-w-md text-pretty font-sans text-lg leading-relaxed text-green-950/75">
                Un besoin précis ou toute votre communication à repenser : décrivez-moi votre
                projet, je reviens vers vous rapidement.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 hidden lg:block">
              <OrganicFrame
                src="/images/mae-illustration-contact.jpg"
                alt="Illustration de Maëlisse, casque sur les oreilles, saluant de la main devant son ordinateur"
                width={1024}
                height={1506}
                accent="rose"
                sizes="(min-width: 1024px) 30vw, 0px"
                className="w-full max-w-[280px]"
              />
            </Reveal>

            <Reveal delay={0.15} className="mt-10 space-y-2 border-t border-green-950/10 pt-8 font-sans text-sm text-green-950/70">
              {CONTACT.email.startsWith("[") ? (
                <p>{CONTACT.email}</p>
              ) : (
                <p>
                  <a href={`mailto:${CONTACT.email}`} className="underline decoration-rose-500 underline-offset-4">
                    {CONTACT.email}
                  </a>
                </p>
              )}
              {CONTACT.phone.startsWith("[") ? (
                <p>{CONTACT.phone}</p>
              ) : (
                <p>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="underline decoration-rose-500 underline-offset-4"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
              )}
              <p>{CONTACT.address}</p>
            </Reveal>
          </div>

          <Reveal delay={0.05} className="lg:col-span-6">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
