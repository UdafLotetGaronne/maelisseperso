import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import OrganicFrame from "@/components/ui/OrganicFrame";
import WordMarquee from "@/components/home/WordMarquee";
import FloatingLogo from "@/components/ui/FloatingLogo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-8 pt-3 sm:pt-4 lg:pb-12 lg:pt-5">
      <FloatingLogo />
      <Container className="relative">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
          Mae Com&rsquo;Unique · Lot-et-Garonne (47) et à distance
        </p>

        <div className="mt-4 flex flex-col items-start gap-6 lg:mt-5 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="min-w-0 font-display text-[9vw] font-medium leading-[1.02] tracking-tight text-green-950 sm:text-[6.2vw] lg:text-[4.3vw]">
              Votre
              <br />
              communication.
              <br />
              <span className="italic text-rose-900">Mais vraiment</span>
              <br className="max-[420px]:block hidden" /> la vôtre.
            </h1>

            <p className="mt-4 w-full max-w-xl font-sans text-base leading-relaxed text-green-950/80 sm:text-lg lg:mt-5">
              Stratégie, réseaux sociaux, création graphique, vidéo, web et print : votre
              communication pensée de A à Z, par une seule personne qui prend le temps de
              comprendre votre univers.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5 lg:mt-7">
              <Button href="/contact" variant="primary">
                Parlons de votre projet
              </Button>
              <Button href="/realisations" variant="secondary">
                Découvrir mon travail
              </Button>
            </div>
          </div>

          <div className="relative col-span-12 hidden justify-self-end lg:col-span-4 lg:block">
            <OrganicFrame
              src="/images/mae-illustration-hero.jpg"
              alt="Illustration de Maëlisse, fondatrice de Mae Com'Unique, souriante devant son ordinateur"
              width={331}
              height={500}
              accent="rose"
              priority
              sizes="(min-width: 1024px) 28vw, 0px"
              className="w-full max-w-[400px]"
              imageScale={0.96}
            />
            <span className="absolute -bottom-2 right-[6%] rotate-[-4deg] rounded-full bg-cream-50 px-4 py-2 font-display text-sm italic text-green-900 shadow-[0_8px_24px_-8px_rgba(27,51,48,0.25)]">
              c&rsquo;est moi, Maëlisse
            </span>
          </div>
        </div>
      </Container>

      <div className="mt-8 lg:mt-10">
        <WordMarquee />
      </div>
    </section>
  );
}
