// Toute donnée non fournie par Mae Com'Unique est un placeholder explicite,
// à remplacer avant mise en ligne — jamais une valeur inventée réaliste.

export const isPlaceholder = (value: string) => value.startsWith("[");

export const SITE = {
  name: "Mae Com'Unique",
  founder: "Maëlisse Le Berre",
  legalName: "Mae Com'Unique",
  baseline: "Votre communication. Mais vraiment la vôtre.",
  description:
    "Mae Com'Unique accompagne les entreprises, indépendants, associations et commerces dans leur communication : réseaux sociaux, stratégie, création graphique, vidéo, web, print et emailing, pensés pour votre identité, pas une recette copiée-collée.",
  // Domaine à définir lors de la mise en ligne réelle du site.
  url: "https://www.mae-comunique-a-configurer.fr",
  locale: "fr_FR",
  areaServed: "Agen, Lot-et-Garonne (47), et à distance partout en France",
} as const;

export const CONTACT = {
  email: "maecom.unique@gmail.com",
  phone: "07 81 75 35 46",
  address: "Lot-et-Garonne (47) et à distance",
  instagram: "https://www.instagram.com/maecom.unique",
  linkedin: "https://www.linkedin.com/in/ma%C3%ABlisse-le-berre",
  facebook: "#",
  tiktok: "#",
} as const;

export const LEGAL = {
  siret: "993 067 909 00016",
  legalAddress: "[adresse légale à compléter]",
  host: "[hébergeur à compléter]",
  hostAddress: "[adresse hébergeur à compléter]",
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
