"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { SERVICES } from "@/lib/content/services";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Possibilities() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section className="border-t border-green-950/10 bg-cream-100 py-24 sm:py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionEyebrow number="01" label="Ce que je fais" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] text-green-950 sm:text-5xl lg:text-6xl">
            Une seule com&rsquo;, plein de possibilités.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <ul>
              {SERVICES.map((item, index) => (
                <li key={item.slug} className="border-b border-green-950/10 first:border-t">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className={clsx(
                      "flex w-full items-baseline gap-4 py-4 text-left transition-colors sm:gap-6 sm:py-5",
                      active === index ? "text-green-950" : "text-green-950/40 hover:text-green-950/70",
                    )}
                  >
                    <span className="font-display text-base italic text-rose-900">{item.number}</span>
                    <span className="font-display text-2xl font-medium sm:text-3xl lg:text-4xl">
                      {item.shortTitle}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="sticky top-28 min-h-[280px] border border-green-950/10 bg-cream-50 p-8 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-display text-xl italic leading-snug text-rose-900 sm:text-2xl">
                    {service.hook}
                  </p>
                  <p className="mt-5 font-sans text-[15px] leading-relaxed text-green-950/75">
                    {service.summary}
                  </p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-green-950 underline decoration-rose-500 decoration-2 underline-offset-4"
                  >
                    En savoir plus
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
