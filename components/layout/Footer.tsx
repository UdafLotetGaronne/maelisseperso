import Link from "next/link";
import Image from "next/image";
import { CONTACT, FOOTER_LEGAL_LINKS, NAV_LINKS, SITE } from "@/lib/content/site";
import Container from "@/components/ui/Container";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.25a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 20h-3.37v-5.98c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.3 1.55-2.3 3.16V20H9.42V8.5h3.24v1.57h.05c.45-.86 1.56-1.76 3.2-1.76 3.42 0 4.05 2.25 4.05 5.18V20Z" />
    </svg>
  ),
};

const SOCIALS = [
  { label: "Instagram", href: CONTACT.instagram },
  { label: "LinkedIn", href: CONTACT.linkedin },
  { label: "Facebook", href: CONTACT.facebook },
  { label: "TikTok", href: CONTACT.tiktok },
].filter((social) => social.href !== "#");

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-graphite text-cream-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center overflow-hidden opacity-[0.08]"
      >
        <Image
          src="/images/logo-mae-comunique.png"
          alt=""
          width={1832}
          height={770}
          className="mt-8 h-auto w-[85vw] max-w-[820px] sm:mt-14 sm:w-[46vw]"
        />
      </div>
      <Container className="relative z-10 pt-20 sm:pt-28">
        <div className="grid gap-16 border-b border-cream-50/15 pb-16 sm:pb-20 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <p className="font-display text-2xl italic leading-snug text-cream-50 text-pretty">
              Votre entreprise est unique. Votre communication devrait l&rsquo;être aussi.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-cream-50/40 px-6 py-3 font-sans text-sm font-semibold transition-colors hover:border-cream-50 hover:bg-cream-50/10"
              >
                Parlons de votre projet
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-cream-50/75">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-[15px] text-cream-50 transition-colors hover:text-cream-50/80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-cream-50/75">
              Contact
            </p>
            <ul className="mt-5 space-y-3 font-sans text-[15px] text-cream-50">
              <li>
                {CONTACT.email.startsWith("[") ? (
                  <span>{CONTACT.email}</span>
                ) : (
                  <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-cream-50/80">
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
                    className="transition-colors hover:text-cream-50/80"
                  >
                    {CONTACT.phone}
                  </a>
                )}
              </li>
              <li>{CONTACT.address}</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-sm text-cream-50/90 transition-colors hover:text-cream-50"
                >
                  {SOCIAL_ICONS[social.label]}
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 font-sans text-xs text-cream-50/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}, {SITE.founder}
          </p>
          <div className="flex gap-6">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-cream-50">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
