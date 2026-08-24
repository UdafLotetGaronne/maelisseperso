"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import type { ProjectMedia } from "@/lib/content/projects";

export default function ProjectMediaGallery({ media }: { media: ProjectMedia[] }) {
  const [lightbox, setLightbox] = useState<ProjectMedia | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:max-w-2xl sm:grid-cols-3 sm:gap-4">
        {media.map((item) => {
          const isWide = item.width / item.height > 1.3;
          return (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightbox(item)}
              aria-label={`Agrandir : ${item.alt}`}
              className={clsx(
                "group/card relative cursor-zoom-in [perspective:1000px]",
                isWide && "col-span-2",
              )}
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
            >
              <div className="relative h-full w-full transition-transform duration-500 ease-[var(--ease-editorial)] [transform-style:preserve-3d] group-hover/card:[transform:rotateY(180deg)]">
                <div className="backface-hidden absolute inset-0 overflow-hidden rounded-xl bg-green-950/5 shadow-[0_8px_24px_-12px_rgba(27,51,48,0.25)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 220px, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="backface-hidden absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl bg-graphite p-4 text-center [transform:rotateY(180deg)]">
                  <p className="font-sans text-xs leading-relaxed text-cream-50">{item.caption}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-graphite/95 p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Fermer"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/30 font-sans text-xl text-cream-50 transition-colors hover:border-cream-50 sm:right-8 sm:top-8"
            >
              ×
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-full max-w-full flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={lightbox.width}
                height={lightbox.height}
                sizes="92vw"
                className="max-h-[80vh] max-w-[92vw] w-auto h-auto rounded-lg object-contain"
              />
              <p className="mt-4 max-w-lg text-center font-sans text-sm leading-relaxed text-cream-50/80">
                {lightbox.caption}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
