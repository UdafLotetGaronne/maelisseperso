import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";
import ProjectFilterList from "@/components/realisations/ProjectFilterList";
import CTAFinal from "@/components/home/CTAFinal";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les univers accompagnés par Mae Com'Unique : sport, bien-être, événementiel et bien d'autres, chacun avec sa propre direction créative.",
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
      <section className="pb-16 pt-14 sm:pt-20 lg:pb-24">
        <Container>
          <Reveal>
            <SectionEyebrow label="Réalisations" />
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05] text-green-950 sm:text-5xl lg:text-6xl">
              Des univers différents, une même exigence.
            </h1>
            <p className="mt-7 max-w-xl text-pretty font-sans text-lg leading-relaxed text-green-950/75">
              Je ne plaque pas la même direction créative sur tous mes clients. Un club de
              sport n&rsquo;a pas la même énergie qu&rsquo;un institut d&rsquo;accompagnement. Et ça
              doit se voir.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container>
        <ProjectFilterList />

        <Reveal className="mt-20 border-t border-green-950/10 pt-12 sm:mt-24">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-green-700">
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
