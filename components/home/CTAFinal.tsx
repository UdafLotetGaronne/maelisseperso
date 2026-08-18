import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden border-t border-green-950/10 bg-cream-50 py-28 sm:py-32 lg:py-40">
      <Container className="relative text-center">
        <Reveal>
          <Image
            src="/images/motif-heart-green.png"
            alt=""
            aria-hidden
            width={83}
            height={95}
            className="mx-auto mb-8 h-9 w-auto"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl text-balance font-display text-4xl font-medium leading-[1.08] text-green-950 sm:text-5xl lg:text-6xl">
            Et si on rendait votre communication <span className="italic text-rose-900">vraiment unique</span> ?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-pretty font-sans text-lg text-green-950/70">
            Parlons de votre projet — sans engagement, juste pour voir ce qu&rsquo;on peut construire ensemble.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary" className="px-9 py-4 text-base">
              Parlons de votre projet
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
