import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import OrganicFrame from "@/components/ui/OrganicFrame";
import CTAFinal from "@/components/home/CTAFinal";
import ScrollLogo from "@/components/ui/ScrollLogo";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Maëlisse Le Berre, fondatrice de Mae Com'Unique, accompagne directement ses clients dans leur communication depuis Agen, en Lot-et-Garonne.",
  alternates: { canonical: "/a-propos" },
};

const VALUES = [
  {
    title: "Proximité",
    text: "Vous échangez directement avec moi, à chaque étape, pas avec une équipe.",
  },
  {
    title: "Polyvalence",
    text: "Social media, création, vidéo, web, print : je peux couvrir une grande partie de votre communication.",
  },
  {
    title: "Créativité",
    text: "Je cherche une direction qui vous ressemble, pas une recette que j'applique partout.",
  },
  {
    title: "Autonomie",
    text: "Je m'adapte à votre rythme et je peux prendre en charge un projet du début à la fin.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="pb-16 pt-14 sm:pt-20 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <SectionEyebrow label="À propos" />
              <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] text-title sm:text-5xl lg:text-6xl">
                Derrière Mae Com&rsquo;Unique,
                <br />
                il y a moi, <span className="italic text-rose-900">Maëlisse</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="flex justify-center lg:col-span-5 lg:justify-end">
              <OrganicFrame
                src="/images/mae-illustration-about.jpg"
                alt="Illustration de Maëlisse tenant une ampoule allumée, entourée de livres, dans son bureau"
                width={1536}
                height={1024}
                accent="green"
                priority
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="w-full max-w-sm"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative border-t border-green-950/10 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7 lg:col-start-1">
              <p className="text-pretty font-display text-2xl italic leading-snug text-rose-900 sm:text-3xl">
                Je m&rsquo;appelle Maëlisse Le Berre, et Mae Com&rsquo;Unique, c&rsquo;est moi.
              </p>
              <div className="mt-8 space-y-5 font-sans text-[17px] leading-relaxed text-green-950/80">
                <p>
                  Pas d&rsquo;équipe derrière Mae Com&rsquo;Unique : il y a simplement moi, Maëlisse.
                  Et quand on travaille ensemble, c&rsquo;est donc avec moi que vous échangez du
                  début à la fin.
                </p>
                <p>
                  Avant de me lancer dans un projet, j&rsquo;aime vraiment comprendre ce que vous
                  faites, comment vous travaillez, qui sont vos clients et surtout ce que vous
                  avez envie de transmettre. Je ne veux pas simplement créer quelque chose
                  parce qu&rsquo;il « faut publier ». J&rsquo;ai besoin que ce soit cohérent avec vous
                  et avec votre activité.
                </p>
                <p>
                  C&rsquo;est aussi ce que j&rsquo;aime dans mon métier : pouvoir passer d&rsquo;un
                  univers à un autre, découvrir de nouvelles activités et trouver à chaque
                  fois la bonne façon de communiquer. Je suis vraiment passionnée par ce que
                  je fais, alors forcément, je m&rsquo;investis beaucoup dans chaque projet.
                  J&rsquo;ai envie que le résultat vous plaise, mais aussi d&rsquo;être moi-même
                  fière de ce que je vous propose.
                </p>
                <p>
                  Réseaux sociaux, création graphique, vidéo et UGC, site internet, print,
                  SEO, emailing&hellip; je peux vous accompagner sur un besoin précis ou
                  prendre en charge plusieurs aspects de votre communication, selon vos
                  besoins.
                </p>
              </div>
              <div className="mt-9">
                <Button href="/contact" variant="primary">
                  Parlons de votre projet
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="relative hidden lg:col-span-5 lg:block">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[10rem] italic leading-none text-rose-900/[0.14]"
              >
                &raquo;
              </span>
              <div className="relative mt-24 rounded-[2rem] bg-cream-100 p-8">
                <p className="text-pretty font-display text-2xl italic leading-snug text-title">
                  Je peux avoir terminé&hellip; et tout recommencer parce que j&rsquo;ai une
                  meilleure idée.
                </p>
                <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-rose-900">
                  bref, ça c&rsquo;est moi
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative border-t border-green-950/10 bg-cream-100 py-16 sm:py-20 lg:py-24">
        <ScrollLogo from={-50} to={50} />
        <Container>
          <Reveal>
            <SectionEyebrow label="Ce qui compte pour moi" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06} className="border-t border-green-950/15 pt-5">
                <h2 className="font-display text-2xl font-medium text-title">{value.title}</h2>
                <p className="mt-2 max-w-sm font-sans text-[15px] leading-relaxed text-green-950/70">
                  {value.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
