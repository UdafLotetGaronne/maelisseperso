import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ScrollLogo from "@/components/ui/ScrollLogo";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden border-t border-green-950/10 bg-cream-50 py-28 sm:py-32 lg:py-40">
      <ScrollLogo from={40} to={-40} />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-medium leading-[1.08] text-green-950 sm:text-4xl lg:text-5xl">
            Et si on rendait votre communication <span className="italic text-rose-900">vraiment unique</span> ?
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-lg text-pretty font-sans text-base text-green-950/70">
            Parlons de votre projet, sans engagement, juste pour voir ce qu&rsquo;on peut construire ensemble.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
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
