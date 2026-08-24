import type { Metadata } from "next";
import { SERVICES } from "@/lib/content/services";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";
import OrganicFrame from "@/components/ui/OrganicFrame";
import ServicesSideNav from "@/components/services/ServicesSideNav";
import ServiceSection from "@/components/services/ServiceSection";
import CTAFinal from "@/components/home/CTAFinal";
import ScrollLogo from "@/components/ui/ScrollLogo";

export const metadata: Metadata = {
  title: "Communication, community management & marketing",
  description:
    "Community management, réseaux sociaux, création graphique, vidéo, site web, print, SEO et emailing : les prestations de Mae Com'Unique, à Agen et à distance.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-16 pt-14 sm:pt-20 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <SectionEyebrow label="Prestations" />
              <h1 className="mt-6 max-w-xl text-balance font-display text-4xl font-medium leading-[1.05] text-title sm:text-5xl lg:text-6xl">
                Tout ce qui fait votre communication.
              </h1>
              <p className="mt-7 max-w-xl text-pretty font-sans text-base leading-relaxed text-green-950/75">
                Huit domaines, une seule interlocutrice. Vous pouvez me confier un seul besoin
                ponctuel ou l&rsquo;ensemble de votre communication : dans les deux cas, je prends
                le temps de comprendre votre univers avant de créer quoi que ce soit.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex justify-center lg:col-span-5 lg:justify-end">
              <OrganicFrame
                src="/images/mae-illustration-prestations.jpg"
                alt="Illustration de Maëlisse montrant les statistiques de ses contenus sur son téléphone"
                width={1536}
                height={1024}
                accent="green"
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="w-full max-w-sm"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative">
        <ScrollLogo from={-40} to={40} />
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
      </section>

      <div className="mt-8">
        <CTAFinal />
      </div>
    </>
  );
}
