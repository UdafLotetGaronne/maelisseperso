import Image from "next/image";
import { CLIENTS } from "@/lib/content/clients";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function TrustedBy() {
  return (
    <section className="border-t border-green-950/10 bg-cream-50 py-14 sm:py-16">
      <Container>
        <Reveal>
          <p className="text-center font-sans text-xs font-semibold uppercase tracking-[0.28em] text-green-700 sm:text-left">
            Ils me font confiance
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:justify-center sm:gap-x-16">
            {CLIENTS.map((client) => (
              <li key={client.name} className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-11 w-auto object-contain opacity-80 transition-opacity duration-300 ease-[var(--ease-editorial)] hover:opacity-100 sm:h-14"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
