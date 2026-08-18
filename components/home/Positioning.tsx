import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Positioning() {
  return (
    <section className="relative overflow-hidden bg-green-950 py-24 text-cream-50 sm:py-28 lg:py-36">
      <Container className="relative z-10">
        <Reveal>
          <SectionEyebrow number="02" label="Ma façon de travailler" light />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
            Pas une communication{" "}
            <span className="whitespace-nowrap italic line-through decoration-rose-500/70 decoration-4">
              copiée-collée
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-pretty font-sans text-lg leading-relaxed text-cream-100/85 sm:text-xl">
              Chaque entreprise a son histoire, son ton, ses clients et ses objectifs. Ma
              communication commence donc toujours par comprendre votre univers, avant de
              réfléchir aux contenus.
            </p>
            <p className="mt-6 text-pretty font-sans text-lg leading-relaxed text-cream-100/85 sm:text-xl">
              Il ne s&rsquo;agit pas d&rsquo;appliquer une recette. Il s&rsquo;agit d&rsquo;en créer une, la
              vôtre.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 lg:justify-self-end">
            <p className="font-display text-[22vw] italic leading-[0.85] text-rose-500 sm:text-[9rem] lg:text-[7.5rem]">
              unique.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
