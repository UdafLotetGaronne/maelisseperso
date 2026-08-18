"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { NAV_LINKS } from "@/lib/content/site";
import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-[padding,background-color,box-shadow] duration-500 ease-[var(--ease-editorial)]",
        scrolled ? "bg-cream-50/90 py-3 shadow-[0_1px_0_0_rgba(27,51,48,0.08)] backdrop-blur-md" : "bg-transparent py-6",
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <Link href="/" className="relative z-10 shrink-0" aria-label="Mae Com'Unique, accueil">
          <Image
            src="/images/logo-mae-comunique.png"
            alt="Mae Com'Unique"
            width={1379}
            height={541}
            priority
            className={clsx(
              "h-auto w-auto transition-all duration-500 ease-[var(--ease-editorial)]",
              scrolled ? "max-h-8" : "max-h-11",
            )}
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "group relative font-sans text-sm font-medium tracking-wide transition-colors",
                  active ? "text-green-950" : "text-green-900/70 hover:text-green-950",
                )}
              >
                {link.label}
                <span
                  className={clsx(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-rose-700 transition-transform duration-300 ease-[var(--ease-editorial)]",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-graphite px-6 py-3 font-sans text-sm font-semibold text-cream-50 transition-all duration-300 ease-[var(--ease-editorial)] hover:bg-rose-900"
          >
            Parlons de votre projet
            <span aria-hidden className="transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={clsx(
              "block h-px w-6 bg-green-950 transition-transform duration-300 ease-[var(--ease-editorial)]",
              menuOpen && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={clsx(
              "block h-px w-6 bg-green-950 transition-transform duration-300 ease-[var(--ease-editorial)]",
              menuOpen && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </Container>

      <MobileMenu open={menuOpen} pathname={pathname} />
    </header>
  );
}
