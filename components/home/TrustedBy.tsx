import Image from "next/image";
import { CLIENTS } from "@/lib/content/clients";
import Container from "@/components/ui/Container";

export default function TrustedBy() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-t border-green-950/10 py-12 sm:py-14">
      <Container>
        <p className="text-center font-sans text-base font-semibold uppercase tracking-[0.12em] text-green-700 sm:text-left">
          Ils me font confiance
        </p>
      </Container>

      <div className="relative mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max shrink-0 animate-marquee items-center gap-20 pr-20 motion-reduce:animate-none">
          {track.map((client, i) => (
            <div key={`${client.name}-${i}`} className="relative h-20 w-40 shrink-0">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="160px"
                style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
                className="object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
