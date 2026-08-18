import Link from "next/link";
import Image from "next/image";
import { CONTACT, FOOTER_LEGAL_LINKS, NAV_LINKS, SITE } from "@/lib/content/site";
import Container from "@/components/ui/Container";

const SOCIALS = [
  { label: "Instagram", href: CONTACT.instagram },
  { label: "LinkedIn", href: CONTACT.linkedin },
  { label: "Facebook", href: CONTACT.facebook },
  { label: "TikTok", href: CONTACT.tiktok },
].filter((social) => social.href !== "#");

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-green-950 text-cream-50">
      <Container className="relative z-10 pt-20 sm:pt-28">
        <div className="grid gap-16 border-b border-cream-50/10 pb-16 sm:pb-20 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <Image
              src="/images/motif-heart-cream.png"
              alt=""
              aria-hidden
              width={83}
              height={95}
              className="mb-6 h-7 w-auto opacity-90"
            />
            <p className="font-display text-2xl italic leading-snug text-cream-50 text-pretty">
              Votre entreprise est unique. Votre communication devrait l&rsquo;être aussi.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-cream-50/30 px-6 py-3 font-sans text-sm font-semibold transition-colors hover:border-cream-50 hover:bg-cream-50/10"
              >
                Parlons de votre projet
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-cream-100/50">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-[15px] text-cream-100/85 transition-colors hover:text-cream-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-cream-100/50">
              Contact
            </p>
            <ul className="mt-5 space-y-3 font-sans text-[15px] text-cream-100/85">
              <li>
                {CONTACT.email.startsWith("[") ? (
                  <span>{CONTACT.email}</span>
                ) : (
                  <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-cream-50">
                    {CONTACT.email}
                  </a>
                )}
              </li>
              <li>
                {CONTACT.phone.startsWith("[") ? (
                  <span>{CONTACT.phone}</span>
                ) : (
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-cream-50"
                  >
                    {CONTACT.phone}
                  </a>
                )}
              </li>
              <li>{CONTACT.address}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="font-sans text-sm text-cream-100/70 underline decoration-cream-50/30 underline-offset-4 transition-colors hover:text-cream-50"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 font-sans text-xs text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.founder}
          </p>
          <div className="flex gap-6">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-cream-100">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <p
        aria-hidden
        className="pointer-events-none relative z-0 -mb-[0.11em] select-none whitespace-nowrap text-center font-display text-[22vw] italic leading-none text-cream-50/[0.04] sm:text-[16vw]"
      >
        unique.
      </p>
    </footer>
  );
}
