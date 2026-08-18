import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function AboutTeaser() {
  return (
    <section className="border-t border-green-950/10 bg-green-100/60 py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow number="06" label="À propos" />
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] text-green-950 sm:text-5xl">
              Derrière Mae Com&rsquo;Unique, il y a Mae.
            </h2>
            <p className="mt-6 max-w-xl text-pretty font-sans text-lg leading-relaxed text-green-950/80">
              Maëlisse Le Berre accompagne directement ses clients — pas d&rsquo;équipe entre
              vous et moi. J&rsquo;aime comprendre réellement une activité avant de produire quoi
              que ce soit : c&rsquo;est ce qui permet à chaque communication de vous ressembler.
            </p>
            <div className="mt-8">
              <Button href="/a-propos" variant="secondary">
                En savoir plus sur moi
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center lg:col-span-5 lg:justify-end">
            <Image
              src="/images/motif-heart-green.png"
              alt=""
              aria-hidden
              width={83}
              height={95}
              className="h-28 w-auto opacity-80 sm:h-36 lg:h-44"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
