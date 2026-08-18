import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import OrganicFrame from "@/components/ui/OrganicFrame";
import WordMarquee from "@/components/home/WordMarquee";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
      <Container className="relative">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-green-700">
          Mae Com&rsquo;Unique — Studio de communication, Agen &amp; à distance
        </p>

        <div className="mt-8 grid grid-cols-1 items-end gap-10 lg:mt-10 lg:grid-cols-12">
          <h1 className="col-span-12 font-display text-[13vw] font-medium leading-[0.92] tracking-tight text-green-950 sm:text-[9vw] lg:col-span-8 lg:text-[6.4vw]">
            Votre
            <br />
            communication.
            <br />
            <span className="italic text-rose-900">Mais vraiment</span> la vôtre.
          </h1>

          <div className="relative col-span-12 lg:col-span-4">
            <div className="hidden lg:block">
              <OrganicFrame
                src="/images/mae-illustration-hero.jpg"
                alt="Illustration de Maëlisse, fondatrice de Mae Com'Unique, souriante devant son ordinateur"
                width={331}
                height={500}
                accent="rose"
                priority
                sizes="(min-width: 1024px) 22vw, 0px"
                className="ml-auto w-[78%] max-w-[280px] -translate-y-4"
              />
              <span className="absolute -bottom-2 right-[6%] rotate-[-4deg] rounded-full bg-cream-50 px-4 py-2 font-display text-sm italic text-green-900 shadow-[0_8px_24px_-8px_rgba(27,51,48,0.25)]">
                c&rsquo;est moi, Maëlisse
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-6">
          <p className="col-span-12 max-w-xl font-sans text-lg leading-relaxed text-green-950/80 sm:text-xl lg:col-span-6">
            Stratégie, réseaux sociaux, création graphique, vidéo, web et print : votre
            communication pensée de A à Z, par une seule personne qui prend le temps de
            comprendre votre univers.
          </p>

          <div className="col-span-12 flex flex-wrap items-center gap-5 lg:col-span-6 lg:justify-end">
            <Button href="/contact" variant="primary">
              Parlons de votre projet
            </Button>
            <Button href="/realisations" variant="secondary">
              Découvrir mon travail
            </Button>
          </div>
        </div>
      </Container>

      <div className="mt-16 lg:mt-20">
        <WordMarquee />
      </div>

      <Image
        src="/images/motif-heart-rose.png"
        alt=""
        aria-hidden
        width={83}
        height={95}
        className="pointer-events-none absolute -right-4 top-24 hidden h-14 w-auto -rotate-12 opacity-70 sm:block lg:right-10 lg:top-40"
      />
    </section>
  );
}
