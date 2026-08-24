import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ProjectFilterList from "@/components/realisations/ProjectFilterList";
import CTAFinal from "@/components/home/CTAFinal";
import ScrollLogo from "@/components/ui/ScrollLogo";

export const metadata: Metadata = {
  title: "Réalisations en communication et marketing",
  description:
    "Découvrez les univers accompagnés par Mae Com'Unique, agence de communication et community management à Agen : sport, bien-être, événementiel et bien d'autres, chacun avec sa propre direction créative.",
  alternates: { canonical: "/realisations" },
};

const UNIVERSES = [
  "E-commerce",
  "Coaching sportif & nutrition",
  "Artisans",
  "Associations",
  "Commerces",
  "Marques",
];

export default function RealisationsPage() {
  return (
    <>
      <section className="relative pb-16 pt-14 sm:pt-20 lg:pb-24">
        <ScrollLogo from={-50} to={50} logoClassName="w-[80vw] max-w-[1000px]" />
        <Container>
          <Reveal>
            <p className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-green-700">
              Réalisations
            </p>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05] text-title sm:text-5xl lg:text-6xl">
              À chaque projet son univers.
            </h1>
            <p className="mt-7 max-w-xl text-pretty font-sans text-base leading-relaxed text-green-950/75">
              Je m&rsquo;adapte à chaque client et à son activité. On ne communique pas de la
              même façon pour une salle de sport, un institut ou une marque : chacun a son
              identité, son public et sa façon de parler. Mon travail, c&rsquo;est justement
              de comprendre tout ça pour créer une communication qui colle vraiment à votre
              univers.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container>
        <ProjectFilterList />

        <Reveal className="mt-20 border-t border-green-950/10 pt-12 sm:mt-24">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
            Et aussi
          </p>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-3">
            {UNIVERSES.map((u) => (
              <span
                key={u}
                className="rounded-full border border-green-950/15 px-4 py-2 font-sans text-sm text-green-950/75"
              >
                {u}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>

      <div className="mt-20 sm:mt-24">
        <CTAFinal />
      </div>
    </>
  );
}
