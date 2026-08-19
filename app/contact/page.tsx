import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";
import OrganicFrame from "@/components/ui/OrganicFrame";
import ContactForm from "@/components/contact/ContactForm";
import ScrollLogo from "@/components/ui/ScrollLogo";
import { CONTACT } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet de communication : réseaux sociaux, création graphique, vidéo, web, print, SEO ou emailing.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
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
                  <p className="mt-2 inline-block rounded-lg bg-rose-100 px-3 py-1.5 font-sans text-base font-semibold text-green-950 sm:text-lg">
                    {CONTACT.email}
                  </p>
                ) : (
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-2 inline-block rounded-lg bg-rose-100 px-3 py-1.5 font-sans text-base font-semibold text-green-950 transition-colors hover:bg-rose-200 sm:text-lg"
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
                  <p className="mt-2 inline-block rounded-lg bg-rose-100 px-3 py-1.5 font-sans text-base font-semibold text-green-950 sm:text-lg">
                    {CONTACT.phone}
                  </p>
                ) : (
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="mt-2 inline-block rounded-lg bg-rose-100 px-3 py-1.5 font-sans text-base font-semibold text-green-950 transition-colors hover:bg-rose-200 sm:text-lg"
                  >
                    {CONTACT.phone}
                  </a>
                )}
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
  );
}
