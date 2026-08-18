import Link from "next/link";
import { PROJECTS } from "@/lib/content/projects";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Portfolio() {
  return (
    <section className="border-t border-green-950/10 bg-cream-50 py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionEyebrow number="03" label="Réalisations" />
            <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] text-green-950 sm:text-5xl lg:text-6xl">
              Des univers différents, une même exigence.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/realisations" variant="secondary">
              Toutes les réalisations
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-green-950/10 lg:mt-20">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <Link
                href={`/realisations#${project.slug}`}
                className="group relative block overflow-hidden border-b border-green-950/10 py-8 sm:py-10"
              >
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 -z-10 w-0 transition-[width] duration-500 ease-[var(--ease-editorial)] group-hover:w-full ${
                    index % 2 === 0 ? "bg-rose-100" : "bg-green-100"
                  }`}
                />
                <div className="flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-4">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-display text-sm italic text-rose-900">{`0${index + 1}`}</span>
                    <h3 className="font-display text-3xl font-medium text-green-950 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-1 pl-9 sm:items-end sm:gap-1.5 sm:pl-0 sm:text-right">
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                      {project.sector}
                    </span>
                    <span className="font-sans text-sm text-green-950/70">{project.missions}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
