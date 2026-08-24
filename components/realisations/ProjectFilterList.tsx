"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { PROJECT_CATEGORIES, PROJECTS, type ProjectCategory } from "@/lib/content/projects";
import ProjectMediaGallery from "@/components/realisations/ProjectMediaGallery";

export default function ProjectFilterList() {
  const [filter, setFilter] = useState<ProjectCategory | "tous">("tous");

  const filtered = useMemo(
    () => (filter === "tous" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filtrer les réalisations par catégorie">
        <button
          type="button"
          onClick={() => setFilter("tous")}
          aria-pressed={filter === "tous"}
          className={clsx(
            "rounded-full border px-4 py-2 font-sans text-sm font-medium transition-colors",
            filter === "tous"
              ? "border-graphite bg-graphite text-cream-50"
              : "border-green-950/20 text-green-950/70 hover:border-green-950/50",
          )}
        >
          Tout
        </button>
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setFilter(cat.key)}
            aria-pressed={filter === cat.key}
            className={clsx(
              "rounded-full border px-4 py-2 font-sans text-sm font-medium transition-colors",
              filter === cat.key
                ? "border-graphite bg-graphite text-cream-50"
                : "border-green-950/20 text-green-950/70 hover:border-green-950/50",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-14 border-t border-green-950/10">
        <AnimatePresence initial={false}>
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              id={project.slug}
              className="group relative scroll-mt-28 overflow-hidden border-b border-green-950/10 py-10 sm:py-12"
            >
              <span
                aria-hidden
                className={clsx(
                  "absolute inset-y-0 left-0 -z-10 w-0 transition-[width] duration-500 ease-[var(--ease-editorial)] group-hover:w-full",
                  index % 2 === 0 ? "bg-rose-100" : "bg-green-100",
                )}
              />
              <div className="px-2 sm:px-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-display text-sm italic text-rose-900">{`0${index + 1}`}</span>
                    <h2 className="font-display text-2xl font-medium text-title sm:text-3xl lg:text-4xl">
                      <Link
                        href={`/realisations/${project.slug}`}
                        className="transition-colors hover:text-rose-900"
                      >
                        {project.name}
                      </Link>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1 pl-9 sm:items-end sm:gap-1.5 sm:pl-0 sm:text-right">
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-green-700">
                      {project.sector}
                    </span>
                    <span className="font-sans text-sm text-green-950/70">{project.missions}</span>
                  </div>
                </div>
                <p className="mt-5 max-w-xl pl-9 font-sans text-[15px] leading-relaxed text-green-950/70 sm:pl-[3.75rem]">
                  {project.description}
                </p>
                {project.remoteNote ? (
                  <div className="mt-4 pl-9 sm:pl-[3.75rem]">
                    <span className="inline-block rounded-full border border-rose-700/40 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.06em] text-rose-900">
                      {project.remoteNote}
                    </span>
                  </div>
                ) : null}
                {project.website ? (
                  <div className="mt-4 flex max-w-2xl justify-end pl-9 sm:pl-[3.75rem]">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-green-950"
                    >
                      Voir le site
                      <span
                        aria-hidden
                        className="transition-transform duration-300 ease-[var(--ease-editorial)] group-hover/link:translate-x-1"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                ) : null}
                {project.instagramHandle ? (
                  <p className="mt-4 max-w-xl pl-9 font-sans text-sm text-green-950/70 sm:pl-[3.75rem]">
                    Toutes les vidéos UGC sont les miennes, à retrouver sur{" "}
                    <a
                      href={`https://www.instagram.com/${project.instagramHandle.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-title underline decoration-rose-500 decoration-2 underline-offset-4 transition-colors hover:text-rose-900"
                    >
                      Instagram {project.instagramHandle}
                    </a>
                  </p>
                ) : null}
                {project.media && project.media.length > 0 ? (
                  <div className="mt-6 pl-9 sm:pl-[3.75rem]">
                    <ProjectMediaGallery media={project.media} />
                  </div>
                ) : null}
                <div className="mt-5 pl-9 sm:pl-[3.75rem]">
                  <Link
                    href={`/realisations/${project.slug}`}
                    className="group/link inline-flex items-center gap-2 font-sans text-sm font-semibold text-title transition-colors hover:text-rose-900"
                  >
                    Voir la page du projet
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-[var(--ease-editorial)] group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 ? (
          <p className="py-16 text-center font-sans text-green-950/60">
            Pas encore de projet dans cette catégorie.
          </p>
        ) : null}
      </div>
    </div>
  );
}
