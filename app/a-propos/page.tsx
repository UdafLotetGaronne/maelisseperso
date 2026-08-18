import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import OrganicFrame from "@/components/ui/OrganicFrame";
import CTAFinal from "@/components/home/CTAFinal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Maëlisse Le Berre, fondatrice de Mae Com'Unique, accompagne directement ses clients dans leur communication depuis Agen, en Lot-et-Garonne.",
  alternates: { canonical: "/a-propos" },
};

const VALUES = [
  {
    title: "Proximité",
    text: "Vous échangez directement avec moi, à chaque étape — pas avec une équipe qui change.",
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
              <h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[1.02] text-green-950 sm:text-6xl lg:text-7xl">
                Derrière Mae Com&rsquo;Unique,
                <br />
                il y a <span className="italic text-rose-900">Mae</span>.
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

      <section className="border-t border-green-950/10 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7 lg:col-start-1">
              <p className="text-pretty font-display text-2xl italic leading-snug text-rose-900 sm:text-3xl">
                Je m&rsquo;appelle Maëlisse Le Berre, et Mae Com&rsquo;Unique, c&rsquo;est moi.
              </p>
              <div className="mt-8 space-y-5 font-sans text-[17px] leading-relaxed text-green-950/80">
                <p>
                  Pas d&rsquo;équipe, pas d&rsquo;intermédiaire : quand vous travaillez avec Mae
                  Com&rsquo;Unique, vous travaillez avec moi, du premier échange jusqu&rsquo;à la
                  livraison de vos contenus.
                </p>
                <p>
                  Ce que j&rsquo;aime avant tout, c&rsquo;est comprendre une activité en profondeur :
                  son fonctionnement, ses clients, ce qui la rend différente. Je préfère passer
                  du temps à comprendre plutôt que de récupérer un brief et produire du contenu
                  au kilomètre.
                </p>
                <p>
                  C&rsquo;est cette curiosité, plus que n&rsquo;importe quelle recette marketing, qui
                  me permet de m&rsquo;adapter à des univers aussi différents qu&rsquo;un club de sport,
                  un institut de bien-être ou un commerce de proximité.
                </p>
                <p>
                  Sur le plan technique, je peux intervenir sur la stratégie, les réseaux
                  sociaux, la création graphique, la vidéo, le web, le print, le SEO ou
                  l&rsquo;emailing — seule ou en combinant plusieurs de ces compétences selon ce
                  dont vous avez besoin.
                </p>
              </div>
              <div className="mt-9">
                <Button href="/contact" variant="primary">
                  Parlons de votre projet
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-green-950/10 bg-cream-100 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionEyebrow label="Ce qui compte pour moi" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06} className="border-t border-green-950/15 pt-5">
                <h2 className="font-display text-2xl font-medium text-green-950">{value.title}</h2>
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
