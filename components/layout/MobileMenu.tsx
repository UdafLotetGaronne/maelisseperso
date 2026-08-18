"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { NAV_LINKS, CONTACT } from "@/lib/content/site";

export default function MobileMenu({ open, pathname }: { open: boolean; pathname: string }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="menu-mobile"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-0 z-40 flex h-dvh flex-col justify-between bg-green-950 px-6 pb-10 pt-28 sm:px-8"
        >
          <nav aria-label="Navigation mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => {
              const active = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      "block border-b border-cream-50/10 py-5 font-display text-4xl italic transition-colors",
                      active ? "text-rose-300" : "text-cream-50",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="flex flex-col gap-6">
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 font-sans text-sm font-semibold text-green-950"
            >
              Parlons de votre projet →
            </Link>
            {CONTACT.email.startsWith("[") ? null : (
              <a href={`mailto:${CONTACT.email}`} className="font-sans text-sm text-cream-100/70">
                {CONTACT.email}
              </a>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
