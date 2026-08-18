"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { SERVICES } from "@/lib/content/services";

export default function ServicesSideNav() {
  const [activeSlug, setActiveSlug] = useState(SERVICES[0].slug);

  useEffect(() => {
    const sections = SERVICES.map((service) => document.getElementById(service.slug)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sommaire des services" className="sticky top-28 hidden lg:block">
      <ul className="space-y-1 border-l border-green-950/10">
        {SERVICES.map((service) => {
          const active = activeSlug === service.slug;
          return (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                aria-current={active ? "true" : undefined}
                className={clsx(
                  "-ml-px flex items-baseline gap-3 border-l py-2 pl-5 font-sans text-sm transition-colors",
                  active
                    ? "border-rose-700 font-semibold text-green-950"
                    : "border-transparent text-green-950/45 hover:text-green-950/80",
                )}
              >
                <span className="font-display text-xs italic text-rose-900">{service.number}</span>
                {service.shortTitle}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
