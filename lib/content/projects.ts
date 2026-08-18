export type ProjectCategory =
  | "social-media"
  | "web"
  | "print"
  | "video"
  | "evenementiel";

export const PROJECT_CATEGORIES: { key: ProjectCategory; label: string }[] = [
  { key: "social-media", label: "Social media" },
  { key: "web", label: "Web" },
  { key: "print", label: "Print" },
  { key: "video", label: "Vidéo" },
  { key: "evenementiel", label: "Événementiel" },
];

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  sector: string;
  missions: string;
  categories: ProjectCategory[];
  description: string;
  media?: ProjectMedia[];
};

export const PROJECTS: Project[] = [
  {
    slug: "crossfit-genum",
    name: "CrossFit Genum",
    sector: "Sport & coaching",
    missions: "Social media · création · événementiel",
    categories: ["social-media", "evenementiel"],
    description:
      "Une communication énergique et directe, au rythme de la salle : contenus social media réguliers et accompagnement des temps forts de la communauté.",
    media: [
      {
        src: "/images/realisations/crossfit-genum-1.webp",
        alt: "Publication Instagram Summer Pass pour CrossFit Genum",
        caption: "Publication Instagram, destinée à être boostée en publicité payante",
      },
      {
        src: "/images/realisations/crossfit-genum-2.webp",
        alt: "Publication de rentrée pour CrossFit Genum",
        caption: "Publication Instagram et Facebook",
      },
      {
        src: "/images/realisations/crossfit-genum-3.webp",
        alt: "Affiche boissons et snacks pour le distributeur de CrossFit Genum",
        caption: "Affiche destinée à être installée sur le distributeur",
      },
    ],
  },
  {
    slug: "genum-series",
    name: "Genum Series",
    sector: "Événement sportif",
    missions: "Identité événementielle · partenaires · contenus · print",
    categories: ["evenementiel", "print", "social-media"],
    description:
      "Une identité événementielle complète, la communication autour des partenaires et sponsors, et les supports print pour faire vivre l'événement avant, pendant et après.",
    media: [
      {
        src: "/images/realisations/genum-series-1.webp",
        alt: "Visuel partenaire des Genum Series pour Alba Recovery Drink",
        caption: "Publication Instagram",
      },
      {
        src: "/images/realisations/genum-series-2.webp",
        alt: "Présentation de la photographe et vidéaste des Genum Series",
        caption: "Publication Instagram",
      },
      {
        src: "/images/realisations/genum-series-3.webp",
        alt: "Publication des athlètes Victor Laborie, Kévin Prisse et Antoine Eternot pour les Genum Series",
        caption: "Publication Instagram",
      },
      {
        src: "/images/realisations/genum-series-4.webp",
        alt: "Pancarte athlète des Genum Series avec les partenaires de l'événement",
        caption: "Pancarte athlète, déclinée en 200 exemplaires avec noms d'équipes et catégories",
        wide: true,
      },
    ],
  },
  {
    slug: "institut-ng",
    name: "Institut NG",
    sector: "Accompagnement & bien-être",
    missions: "Social media · site web · SEO · emailing",
    categories: ["social-media", "web"],
    description:
      "Une communication plus douce et pédagogique, à l'opposé de l'énergie d'une salle de sport : site web, référencement et emailing pour accompagner la relation client dans la durée.",
  },
  {
    slug: "course-des-moulins",
    name: "Course des Moulins",
    sector: "Événement sportif",
    missions: "Social media · communication événementielle",
    categories: ["evenementiel", "social-media"],
    description:
      "L'accompagnement social media d'un événement sportif local, de l'annonce jusqu'au jour J.",
    media: [
      {
        src: "/images/realisations/course-des-moulins-1.webp",
        alt: "Affiche de la Course des Moulins avec le parcours et les distances",
        caption: "Publication Instagram",
      },
      {
        src: "/images/realisations/course-des-moulins-2.webp",
        alt: "Affiche du trail 20 km de la Course des Moulins, boucle de la Talives",
        caption: "Publication Instagram",
      },
      {
        src: "/images/realisations/course-des-moulins-3.webp",
        alt: "Affiche de la Course des Moulins à Foulayronnes avec le moulin en arrière-plan",
        caption: "Publication Instagram",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);
