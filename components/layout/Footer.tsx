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
  WhatsApp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12.02 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.44 1.33 4.93L2 22l5.24-1.37a9.9 9.9 0 0 0 4.78 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.52 2 12.02 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.22 8.22 0 0 1-1.26-4.39c0-4.55 3.7-8.25 8.25-8.25a8.2 8.2 0 0 1 5.84 2.42 8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.71 8.24-8.26 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.12.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  ),
};

const SOCIALS = [
  { label: "Instagram", href: CONTACT.instagram },
  { label: "LinkedIn", href: CONTACT.linkedin },
  { label: "WhatsApp", href: CONTACT.whatsapp },
  { label: "Facebook", href: CONTACT.facebook },
  { label: "TikTok", href: CONTACT.tiktok },
].filter((social) => social.href !== "#");

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center overflow-hidden opacity-[0.14]"
      >
        <Image
          src="/images/logo-footer-watermark.png"
          alt=""
          width={1817}
          height={702}
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
            <ul className="space-y-3">
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
