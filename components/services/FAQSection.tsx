"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { FAQ_ITEMS } from "@/lib/content/faq";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Container from "@/components/ui/Container";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-green-950/10 py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow label="Questions fréquentes" />
          <h2 className="mt-6 max-w-xl text-balance font-display text-3xl font-medium leading-[1.1] text-title sm:text-4xl">
            Ce qu&rsquo;on me demande le plus souvent.
          </h2>
        </Reveal>

        <div className="mt-10 max-w-3xl divide-y divide-green-950/10 border-t border-green-950/10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-medium leading-snug text-title sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className={clsx(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rose-700/40 font-sans text-lg text-rose-900 transition-transform duration-300 ease-[var(--ease-editorial)]",
                      isOpen && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 font-sans text-[15px] leading-relaxed text-green-950/75">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
