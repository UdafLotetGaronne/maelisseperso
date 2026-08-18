import OrganicFrame from "@/components/ui/OrganicFrame";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function AboutTeaser() {
  return (
    <section className="border-t border-green-950/10 bg-green-100/60 py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-7">
            <SectionEyebrow number="04" label="À propos" />
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-[1.05] text-green-950 sm:text-4xl">
              Derrière Mae Com&rsquo;Unique, il y a moi, Maëlisse.
            </h2>
            <p className="mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-green-950/80">
              Pas d&rsquo;intermédiaire : quand vous travaillez avec Mae Com&rsquo;Unique, c&rsquo;est
              avec moi que vous échangez du début à la fin. J&rsquo;aime prendre le temps de
              comprendre votre activité, votre univers et ce que vous avez envie de transmettre.
              Je suis vraiment passionnée par mon métier, alors je ne fais jamais les choses
              juste pour qu&rsquo;elles soient « faites ». J&rsquo;ai besoin d&rsquo;être fière de ce
              que je vous propose, et surtout que vous le soyez aussi.
            </p>
            <div className="mt-8">
              <Button href="/a-propos" variant="secondary">
                En savoir plus sur moi
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <OrganicFrame
              src="/images/mae-illustration-contact.jpg"
              alt="Illustration de Maëlisse, casque sur les oreilles, saluant de la main devant son ordinateur"
              width={1024}
              height={1506}
              accent="rose"
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="w-full max-w-xs"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
