import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { CONTACT, SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionEyebrow label="Vos données" />
        <h1 className="mt-6 font-display text-4xl font-medium text-green-950 sm:text-5xl">
          Politique de confidentialité
        </h1>

        <div className="mt-12 space-y-10 font-sans text-[15px] leading-relaxed text-green-950/80">
          <div>
            <h2 className="font-display text-xl font-medium text-green-950">Données collectées</h2>
            <p className="mt-3">
              Le formulaire de contact de ce site collecte votre nom, le nom de votre
              entreprise, votre email, votre téléphone (facultatif), le type de besoin et le
              contenu de votre message. Ces informations sont utilisées uniquement pour
              répondre à votre demande.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-green-950">Conservation</h2>
            <p className="mt-3">
              Les données transmises via le formulaire de contact sont conservées le temps
              nécessaire au traitement de votre demande et à la relation commerciale qui peut
              en découler.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-green-950">Vos droits</h2>
            <p className="mt-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous
              disposez d&rsquo;un droit d&rsquo;accès, de rectification et de suppression des
              données vous concernant. Pour l&rsquo;exercer, contactez {SITE.legalName} à
              l&rsquo;adresse : {CONTACT.email}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-green-950">Cookies</h2>
            <p className="mt-3">
              Ce site n&rsquo;utilise pas de cookies de suivi publicitaire. Seuls des cookies
              techniques, nécessaires à son bon fonctionnement, peuvent être déposés.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
