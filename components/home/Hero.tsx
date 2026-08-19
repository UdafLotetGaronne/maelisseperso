import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import OrganicFrame from "@/components/ui/OrganicFrame";
import WordMarquee from "@/components/home/WordMarquee";
import FloatingLogo from "@/components/ui/FloatingLogo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-4 sm:pt-6 lg:pb-16 lg:pt-8">
      <FloatingLogo />
      <Container className="relative">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
          Mae Com&rsquo;Unique · Lot-et-Garonne (47) et à distance
        </p>

        <div className="mt-4 flex flex-col items-start gap-6 lg:mt-5 lg:grid lg:grid-cols-12 lg:gap-8">
          <h1 className="col-span-12 min-w-0 font-display text-[11vw] font-medium leading-[0.94] tracking-tight text-green-950 sm:text-[7.5vw] lg:col-span-8 lg:text-[5.2vw]">
            Votre
            <br />
            communication.
            <br />
            <span className="italic text-rose-900">Mais vraiment</span>
            <br className="max-[420px]:block hidden" /> la vôtre.
          </h1>

          <div className="relative col-span-12 hidden justify-self-end lg:col-span-4 lg:block">
            <OrganicFrame
              src="/images/mae-illustration-hero.jpg"
              alt="Illustration de Maëlisse, fondatrice de Mae Com'Unique, souriante devant son ordinateur"
              width={331}
              height={500}
              accent="rose"
              priority
              sizes="(min-width: 1024px) 32vw, 0px"
              className="w-full max-w-[500px]"
              imageScale={0.8}
            />
            <span className="absolute -bottom-2 right-[6%] rotate-[-4deg] rounded-full bg-cream-50 px-4 py-2 font-display text-sm italic text-green-900 shadow-[0_8px_24px_-8px_rgba(27,51,48,0.25)]">
              c&rsquo;est moi, Maëlisse
            </span>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5 lg:mt-6 lg:grid lg:grid-cols-12 lg:items-end lg:gap-6">
          <p className="w-full max-w-xl font-sans text-base leading-relaxed text-green-950/80 sm:text-lg lg:col-span-6">
            Stratégie, réseaux sociaux, création graphique, vidéo, web et print : votre
            communication pensée de A à Z, par une seule personne qui prend le temps de
            comprendre votre univers.
          </p>

          <div className="flex flex-wrap items-center gap-5 lg:col-span-6 lg:justify-end">
            <Button href="/contact" variant="primary">
              Parlons de votre projet
            </Button>
            <Button href="/realisations" variant="secondary">
              Découvrir mon travail
            </Button>
          </div>
        </div>
      </Container>

      <div className="mt-10 lg:mt-12">
        <WordMarquee />
      </div>
    </section>
  );
}
