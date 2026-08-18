import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { CONTACT, LEGAL, SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionEyebrow label="Informations légales" />
        <h1 className="mt-6 font-display text-4xl font-medium text-green-950 sm:text-5xl">
          Mentions légales
        </h1>

        <div className="mt-12 space-y-10 font-sans text-[15px] leading-relaxed text-green-950/80">
          <div>
            <h2 className="font-display text-xl font-medium text-green-950">Éditrice du site</h2>
            <p className="mt-3">
              {SITE.legalName} — {LEGAL.director}
              <br />
              SIRET : {LEGAL.siret}
              <br />
              Adresse : {LEGAL.legalAddress}
              <br />
              Email : {CONTACT.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-green-950">Hébergement</h2>
            <p className="mt-3">
              {LEGAL.host}
              <br />
              {LEGAL.hostAddress}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-green-950">Propriété intellectuelle</h2>
            <p className="mt-3">
              L&rsquo;ensemble des contenus présents sur ce site (textes, visuels, identité
              graphique) est la propriété de {SITE.legalName}, sauf mention contraire, et ne
              peut être reproduit sans autorisation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-green-950">Directrice de la publication</h2>
            <p className="mt-3">{LEGAL.director}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
