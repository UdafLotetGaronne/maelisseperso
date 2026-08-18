import Link from "next/link";
import type { Service } from "@/lib/content/services";
import Reveal from "@/components/ui/Reveal";

export default function ServiceSection({ service }: { service: Service }) {
  return (
    <section
      id={service.slug}
      className="scroll-mt-28 border-b border-green-950/10 py-16 first:pt-0 sm:py-20"
    >
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xl italic text-rose-900">{service.number}</span>
          <h2 className="text-balance font-display text-2xl font-medium leading-tight text-green-950 sm:text-3xl">
            {service.title}
          </h2>
        </div>

        <p className="mt-5 max-w-2xl font-display text-xl italic leading-snug text-rose-900 sm:text-2xl">
          {service.hook}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-sans text-[15px] leading-relaxed text-green-950/80">{service.summary}</p>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-green-950/70">{service.detail}</p>
            {service.note ? (
              <p className="mt-6 border-l-2 border-rose-500 pl-4 font-display text-lg italic text-green-950">
                {service.note}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-6">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 rounded-2xl bg-cream-100 p-6 sm:grid-cols-2 sm:p-7">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 font-sans text-sm leading-relaxed text-green-950/75">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-500" />
                  {bullet}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 font-sans text-sm font-semibold text-green-950 underline decoration-rose-500 decoration-2 underline-offset-4"
            >
              Discuter de ce besoin →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
