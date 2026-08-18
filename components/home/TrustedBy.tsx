import Image from "next/image";
import { CLIENTS } from "@/lib/content/clients";
import Container from "@/components/ui/Container";

export default function TrustedBy() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-t border-green-950/10 bg-cream-100 py-12 sm:py-14">
      <Container>
        <p className="text-center font-sans text-xs font-semibold uppercase tracking-[0.28em] text-green-700 sm:text-left">
          Ils me font confiance
        </p>
      </Container>

      <div className="relative mt-7 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max shrink-0 animate-marquee items-center gap-16 pr-16 motion-reduce:animate-none">
          {track.map((client, i) => (
            <div key={`${client.name}-${i}`} className="flex h-12 w-28 shrink-0 items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-auto max-h-12 w-auto max-w-28 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
