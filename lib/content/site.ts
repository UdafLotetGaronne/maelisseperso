// Toute donnée non fournie par Mae Com'Unique est un placeholder explicite,
// à remplacer avant mise en ligne — jamais une valeur inventée réaliste.

export const isPlaceholder = (value: string) => value.startsWith("[");

export const SITE = {
  name: "Mae Com'Unique",
  founder: "Maëlisse Le Berre",
  legalName: "Mae Com'Unique",
  baseline: "Votre communication. Mais vraiment la vôtre.",
  description:
    "Mae Com'Unique, agence de communication et community management à Agen : réseaux sociaux, création graphique, vidéo, site web, print et emailing.",
  url: "https://maecomunique.com",
  locale: "fr_FR",
  areaServed: "Agen, Lot-et-Garonne (47), et à distance partout en France",
} as const;

export const CONTACT = {
  email: "maecom.unique@gmail.com",
  phone: "07 81 75 35 46",
  whatsapp: "https://wa.me/33781753546",
  address: "Lot-et-Garonne (47) et à distance",
  instagram: "https://www.instagram.com/maecom.unique",
  linkedin: "https://www.linkedin.com/in/ma%C3%ABlisse-le-berre",
  facebook: "#",
  tiktok: "#",
} as const;

export const LEGAL = {
  siret: "993 067 909 00016",
  host: "Vercel Inc.",
  hostAddress: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
  director: "Maëlisse Le Berre",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Prestations" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
] as const;
