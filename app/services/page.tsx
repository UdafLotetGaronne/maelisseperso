import type { Metadata } from "next";
import { SERVICES } from "@/lib/content/services";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";
import ServicesSideNav from "@/components/services/ServicesSideNav";
import ServiceSection from "@/components/services/ServiceSection";
import CTAFinal from "@/components/home/CTAFinal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Réseaux sociaux, création graphique, vidéo, web, print, SEO, emailing et stratégie : découvrez l'ensemble des services de Mae Com'Unique.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-16 pt-14 sm:pt-20 lg:pb-24">
        <Container>
          <Reveal>
            <SectionEyebrow label="Services" />
            <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-medium leading-[1.05] text-green-950 sm:text-6xl lg:text-7xl">
              Tout ce qui fait votre communication.
            </h1>
            <p className="mt-7 max-w-xl text-pretty font-sans text-lg leading-relaxed text-green-950/75">
              Huit domaines, une seule interlocutrice. Vous pouvez me confier un seul besoin
              ponctuel ou l&rsquo;ensemble de votre communication — dans les deux cas, je prends
              le temps de comprendre votre univers avant de créer quoi que ce soit.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 gap-10 border-t border-green-950/10 pt-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <ServicesSideNav />
          </div>
          <div className="lg:col-span-9">
            {SERVICES.map((service) => (
              <ServiceSection key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </Container>

      <div className="mt-8">
        <CTAFinal />
      </div>
    </>
  );
}
