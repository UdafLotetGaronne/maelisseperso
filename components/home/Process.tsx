import { PROCESS_STEPS } from "@/lib/content/process";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  return (
    <section className="border-t border-green-950/10 bg-cream-50 py-24 sm:py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionEyebrow number="05" label="Comment ça se passe" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] text-green-950 sm:text-5xl lg:text-6xl">
            Simple, humain, sans usine à gaz.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5 lg:gap-y-0">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08} className="relative">
              <div
                className={`border-t-2 pt-6 ${index % 2 === 0 ? "border-green-700" : "border-rose-500"}`}
              >
                <span className="font-display text-2xl italic text-rose-900">{step.number}</span>
                <h3 className="mt-3 font-display text-xl font-medium text-green-950">{step.title}</h3>
                <p className="mt-3 max-w-[22ch] font-sans text-sm leading-relaxed text-green-950/70">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
