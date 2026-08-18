import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  { number: "01", title: "Je crée", text: "Le support est conçu et préparé aux normes d'impression." },
  { number: "02", title: "L'imprimeur imprime", text: "Mon imprimerie partenaire s'occupe de la production." },
  { number: "03", title: "Vous recevez", text: "Un support prêt à l'emploi, sans démarche à gérer." },
];

export default function PrintSection() {
  return (
    <section className="border-t border-green-950/10 bg-rose-50 py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <SectionEyebrow number="04" label="Print" />
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] text-green-950 sm:text-5xl">
              Du fichier<span className="text-rose-900">.</span>
              <br />
              Au papier.
            </h2>
            <p className="mt-6 max-w-md text-pretty font-sans text-[15px] leading-relaxed text-green-950/75">
              Je travaille avec une imprimerie professionnelle partenaire. Vous n&rsquo;avez ni
              imprimerie à chercher, ni contraintes techniques à gérer : je m&rsquo;en occupe, du
              fichier jusqu&rsquo;à l&rsquo;impression.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <ol className="relative flex flex-col gap-10 sm:flex-row sm:gap-0">
              {STEPS.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.1} className="relative flex-1">
                  {index > 0 ? (
                    <span
                      aria-hidden
                      className="absolute -top-5 right-full hidden h-px w-full border-t border-dashed border-green-700/40 sm:block"
                    />
                  ) : null}
                  <div className="sm:pr-8">
                    <span className="font-display text-lg italic text-rose-900">{step.number}</span>
                    <h3 className="mt-3 font-display text-2xl font-medium text-green-950">{step.title}</h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-green-950/70">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
