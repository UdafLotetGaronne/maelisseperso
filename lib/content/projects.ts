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
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  sector: string;
  missions: string;
  categories: ProjectCategory[];
  description: string;
  media?: ProjectMedia[];
  website?: string;
  instagramHandle?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "institut-ng",
    name: "Institut NG",
    sector: "Accompagnement & bien-être",
    missions: "Social media · site web · SEO · emailing",
    categories: ["social-media", "web"],
    description:
      "Une communication plus douce et pédagogique, à l'opposé de l'énergie d'une salle de sport : site web, référencement et emailing pour accompagner la relation client dans la durée. Institut NG est une entreprise canadienne, accompagnée entièrement à distance.",
    website: "https://nouveauxgenres.com/",
    media: [
      {
        src: "/images/realisations/institut-ng-1.webp",
        alt: "Carrousel Institut NG, extrait 1 sur 3, sur l'isolement",
        caption: "Extrait d'un carrousel Facebook, LinkedIn et Instagram",
        width: 1600,
        height: 2000,
      },
      {
        src: "/images/realisations/institut-ng-2.webp",
        alt: "Carrousel Institut NG, extrait 2 sur 3, statistique 1 personne sur 6",
        caption: "Extrait d'un carrousel Facebook, LinkedIn et Instagram",
        width: 1600,
        height: 2000,
      },
      {
        src: "/images/realisations/institut-ng-3.webp",
        alt: "Carrousel Institut NG, extrait 3 sur 3, statistique 1 personne sur 6 est concernée",
        caption: "Extrait d'un carrousel Facebook, LinkedIn et Instagram",
        width: 1600,
        height: 2000,
      },
      {
        src: "/images/realisations/institut-ng-4.webp",
        alt: "Publication Institut NG sur la formation en relation d'aide",
        caption: "Publication destinée au SEA (publicité payante)",
        width: 1200,
        height: 1200,
      },
      {
        src: "/images/realisations/institut-ng-5.webp",
        alt: "Miniature vidéo Institut NG, et si tout partait de toi",
        caption: "Miniature pour vidéos LinkedIn, Facebook et Instagram",
        width: 1125,
        height: 2000,
      },
      {
        src: "/images/realisations/institut-ng-6.webp",
        alt: "Miniature vidéo Institut NG, qu'est-ce que l'équilibre",
        caption: "Miniature pour vidéos LinkedIn, Facebook et Instagram",
        width: 1125,
        height: 2000,
      },
    ],
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
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/course-des-moulins-2.webp",
        alt: "Affiche du trail 20 km de la Course des Moulins, boucle de la Talives",
        caption: "Publication Instagram",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/course-des-moulins-3.webp",
        alt: "Affiche de la Course des Moulins à Foulayronnes avec le moulin en arrière-plan",
        caption: "Publication Instagram",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/course-des-moulins-4.webp",
        alt: "Affiche de la Course des Moulins, 17ème édition à Foulayronnes",
        caption: "Publication Instagram",
        width: 1600,
        height: 2000,
      },
      {
        src: "/images/realisations/course-des-moulins-5.webp",
        alt: "Affiche de la Course des Moulins avec les distances de trail et rando",
        caption: "Publication Instagram",
        width: 1600,
        height: 2000,
      },
      {
        src: "/images/realisations/course-des-moulins-6.webp",
        alt: "Affiche du Trail 5 km La Découverte de la Course des Moulins",
        caption: "Publication Instagram",
        width: 1600,
        height: 2000,
      },
    ],
  },
  {
    slug: "crossfit-genum",
    name: "CrossFit Genum",
    sector: "Sport & coaching",
    missions: "Social media · création · événementiel · site web",
    categories: ["social-media", "evenementiel", "web"],
    description:
      "Une communication énergique et directe, au rythme de la salle : contenus social media réguliers et accompagnement des temps forts de la communauté. J'ai aussi créé le site internet de la salle.",
    website: "https://www.crossfitgenum.com/",
    instagramHandle: "@crossfit_genum",
    media: [
      {
        src: "/images/realisations/crossfit-genum-1.webp",
        alt: "Publication Instagram Summer Pass pour CrossFit Genum",
        caption: "Publication Instagram, destinée à être boostée en publicité payante",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/crossfit-genum-2.webp",
        alt: "Publication de rentrée pour CrossFit Genum",
        caption: "Publication Instagram et Facebook",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/crossfit-genum-3.webp",
        alt: "Affiche boissons et snacks pour le distributeur de CrossFit Genum",
        caption: "Affiche destinée à être installée sur le distributeur",
        width: 1414,
        height: 2000,
      },
      {
        src: "/images/realisations/crossfit-genum-4.webp",
        alt: "Collection de tanks personnalisés pour CrossFit Genum",
        caption: "Présentation de la collection de tanks personnalisés",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/crossfit-genum-5.webp",
        alt: "Collection de t-shirts personnalisés pour CrossFit Genum",
        caption: "Présentation de la collection de t-shirts personnalisés",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/crossfit-genum-7.webp",
        alt: "Affiche des abonnements CrossFit Genum pour le comptoir",
        caption: "Affiche pour le comptoir",
        width: 1414,
        height: 2000,
      },
    ],
  },
  {
    slug: "lma",
    name: "LMA",
    sector: "Nutrition & coaching sportif",
    missions: "Identité de marque · print · social media",
    categories: ["print", "social-media"],
    description:
      "Aurore accompagne ses clients en nutrition, diététique et coaching sportif. J'ai créé son identité de marque (logo, carte de visite) et je l'accompagne sur ses contenus social media.",
    media: [
      {
        src: "/images/realisations/lma-1.webp",
        alt: "Carte de visite d'Aurore Le Manac'h pour LMA",
        caption: "Carte de visite",
        width: 1050,
        height: 600,
      },
      {
        src: "/images/realisations/lma-2.webp",
        alt: "Logo créé pour LMA, Libre de manger autrement",
        caption: "Logo",
        width: 500,
        height: 500,
      },
      {
        src: "/images/realisations/lma-3.webp",
        alt: "Publication Instagram et Facebook LMA sur les bienfaits de la pomme",
        caption: "Publication Instagram et Facebook",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/lma-4.webp",
        alt: "Publication Instagram et Facebook LMA sur 4 aliments à intégrer au quotidien",
        caption: "Publication Instagram et Facebook",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/lma-5.webp",
        alt: "Publication Instagram et Facebook LMA sur l'assiette équilibrée",
        caption: "Publication Instagram et Facebook",
        width: 1080,
        height: 1350,
      },
    ],
  },
  {
    slug: "charlotte-g",
    name: "Charlotte.G",
    sector: "Beauté & bien-être",
    missions: "Site web",
    categories: ["web"],
    description:
      "Le site internet de Charlotte, qui propose des press-on nails sur-mesure. Les photos et la charte graphique du site ne sont pas les miennes.",
    website: "https://bycharlotteg.com/",
    instagramHandle: "@charlotte.gayraud",
    media: [
      {
        src: "/images/realisations/charlotte-g-1.webp",
        alt: "Illustration montrant l'étape 1 de la prise de mesure d'un ongle",
        caption: "Illustration : comment prendre les mesures de son ongle, étape 1 sur 4",
        width: 500,
        height: 500,
      },
      {
        src: "/images/realisations/charlotte-g-2.webp",
        alt: "Illustration montrant l'étape 2 de la prise de mesure d'un ongle",
        caption: "Illustration : comment prendre les mesures de son ongle, étape 2 sur 4",
        width: 500,
        height: 500,
      },
      {
        src: "/images/realisations/charlotte-g-3.webp",
        alt: "Illustration montrant l'étape 3 de la prise de mesure d'un ongle",
        caption: "Illustration : comment prendre les mesures de son ongle, étape 3 sur 4",
        width: 500,
        height: 500,
      },
      {
        src: "/images/realisations/charlotte-g-4.webp",
        alt: "Illustration montrant l'étape 4 de la prise de mesure d'un ongle",
        caption: "Illustration : comment prendre les mesures de son ongle, étape 4 sur 4",
        width: 500,
        height: 500,
      },
      {
        src: "/images/realisations/charlotte-g-5.webp",
        alt: "Publication Instagram Charlotte.G présentant le kit de pose des press-on nails",
        caption: "Publication Instagram",
        width: 1413,
        height: 2000,
      },
      {
        src: "/images/realisations/charlotte-g-6.webp",
        alt: "Publication Instagram Charlotte.G, guide des formes d'ongles",
        caption: "Publication Instagram",
        width: 2000,
        height: 1995,
      },
    ],
  },
  {
    slug: "mane",
    name: "Ma.né",
    sector: "Site vitrine",
    missions: "Architecture · développement back-end",
    categories: ["web"],
    description:
      "La conception de l'architecture et du développement back-end du site de Ma.né. Les photos, les couleurs et l'identité visuelle sont signées par Ma.né elle-même.",
    website: "https://manemariedupouy.com/",
  },
  {
    slug: "genum-series",
    name: "Genum Series",
    sector: "Événement sportif",
    missions: "Identité événementielle · partenaires · contenus · print",
    categories: ["evenementiel", "print", "social-media"],
    description:
      "Une identité événementielle complète, la communication autour des partenaires et sponsors, et les supports print pour faire vivre l'événement avant, pendant et après.",
    instagramHandle: "@genumseries",
    media: [
      {
        src: "/images/realisations/genum-series-1.webp",
        alt: "Visuel partenaire des Genum Series pour Alba Recovery Drink",
        caption: "Publication Instagram",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/genum-series-2.webp",
        alt: "Présentation de la photographe et vidéaste des Genum Series",
        caption: "Publication Instagram",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/genum-series-3.webp",
        alt: "Publication des athlètes Victor Laborie, Kévin Prisse et Antoine Eternot pour les Genum Series",
        caption: "Publication Instagram",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/realisations/genum-series-4.webp",
        alt: "Pancarte athlète des Genum Series avec les partenaires de l'événement",
        caption: "Pancarte athlète, déclinée en 200 exemplaires avec noms d'équipes et catégories",
        width: 2000,
        height: 800,
      },
    ],
  },
  {
    slug: "pseaume-couverture",
    name: "Pseaume Couverture",
    sector: "Artisan couvreur-zingueur",
    missions: "Identité de marque · site web · supports print",
    categories: ["web", "print"],
    description:
      "Artisan couvreur-zingueur à Melun, expert en rénovation de toitures dans le respect des méthodes traditionnelles : une identité de marque complète, un site internet pour présenter son savoir-faire, et des supports terrain comme les bâches de chantier.",
    website: "https://pseaumecouverture.com/",
    media: [
      {
        src: "/images/realisations/pseaume-couverture-1.webp",
        alt: "Carte de visite de Pseaume Couverture",
        caption: "Carte de visite",
        width: 2000,
        height: 1143,
      },
      {
        src: "/images/realisations/pseaume-couverture-2.webp",
        alt: "Signature email de Pseaume Couverture",
        caption: "Signature email",
        width: 1100,
        height: 550,
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);
