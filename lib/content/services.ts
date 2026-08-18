export type Service = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  hook: string;
  summary: string;
  detail: string;
  bullets: string[];
  note?: string;
};

export const SERVICES: Service[] = [
  {
    number: "01",
    slug: "social-media",
    title: "Réseaux sociaux & community management",
    shortTitle: "Social media",
    hook: "Chaque publication a un objectif, jamais juste « être présente ».",
    summary:
      "Instagram, Facebook, LinkedIn, TikTok : je peux prendre en charge tout ou une partie de votre présence sur les réseaux, de la stratégie jusqu'à la publication.",
    detail:
      "Je pars toujours de la stratégie avant de penser aux contenus : qui vous parlez, avec quel ton, avec quels objectifs. Ensuite seulement viennent le calendrier éditorial, les formats et les publications. Rien n'est publié pour remplir un calendrier.",
    bullets: [
      "Stratégie social media et choix des canaux",
      "Veille concurrentielle et recherche de tendances",
      "Ligne éditoriale et calendrier de publication",
      "Recherche d'idées, de concepts et de hooks",
      "Création graphique des posts, carrousels et stories",
      "Rédaction des légendes",
      "Programmation et publication",
      "Optimisation et adaptation à chaque plateforme",
    ],
  },
  {
    number: "02",
    slug: "creation-graphique",
    title: "Création de contenu & graphisme",
    shortTitle: "Création",
    hook: "Pas de copier-coller. Pas de visuels interchangeables.",
    summary:
      "Stories, carrousels, campagnes, événements, partenariats : je crée des contenus visuels qui ont une vraie personnalité et qui rendent votre communication identifiable.",
    detail:
      "Chaque univers de marque a ses propres codes. Je construis une direction graphique cohérente pour vous, puis je la décline sur tous les formats dont vous avez besoin, sans jamais appliquer un template générique.",
    bullets: [
      "Contenus Instagram et carrousels",
      "Campagnes visuelles et contenus promotionnels",
      "Contenus événementiels",
      "Communication partenaires et sponsors",
      "Retouche photo",
      "Déclinaisons multi-formats",
    ],
  },
  {
    number: "03",
    slug: "video",
    title: "Vidéo",
    shortTitle: "Vidéo",
    hook: "Créer, filmer, monter.",
    summary:
      "De l'idée au rendu final, je crée et monte vos contenus vidéo pour les réseaux sociaux : Reels, TikTok, Shorts, vidéos UGC… Je peux travailler à partir de vos rushs ou créer directement le contenu pour vous, toujours avec les codes de chaque plateforme et de votre univers.",
    detail:
      "Vous pouvez très bien vous concentrer sur le tournage et me transmettre les rushs : je m'occupe de la recherche de concept en amont si besoin, puis du montage, du sous-titrage, de l'habillage graphique et des miniatures.",
    bullets: [
      "Recherche de concepts, de sujets et de hooks",
      "Préparation de scripts et conseils de tournage",
      "Montage vidéo et sous-titrage",
      "Habillage graphique et miniatures",
      "Optimisation des formats verticaux : Reels, TikTok, Shorts",
    ],
  },
  {
    number: "04",
    slug: "web",
    title: "Création de sites internet",
    shortTitle: "Web",
    hook: "Un site qui donne envie d'aller plus loin.",
    summary:
      "Sites vitrines, landing pages, boutiques en ligne ou pages de vente : je conçois des sites sur WordPress, Shopify ou une autre solution adaptée à votre besoin.",
    detail:
      "Un site n'est pas qu'une question d'esthétique : c'est un outil. Je réfléchis à la structure de vos contenus, au parcours utilisateur et aux formulaires avant de m'attaquer au design, pour un résultat qui sert réellement votre activité.",
    bullets: [
      "Sites vitrines et pages de présentation",
      "Landing pages et pages de vente",
      "Boutiques e-commerce",
      "Formulaires et structuration des contenus",
      "Optimisation et mise à jour de sites existants",
    ],
  },
  {
    number: "05",
    slug: "print",
    title: "Graphisme & communication print",
    shortTitle: "Print",
    hook: "Du fichier au papier, sans que vous ayez à chercher une imprimerie.",
    summary:
      "Cartes de visite, flyers, affiches, brochures, bâches, supports événementiels : je conçois vos supports imprimés et je m'occupe de la préparation technique avec mon imprimerie partenaire.",
    detail:
      "C'est une vraie différence par rapport à une simple création graphique : je crée le support, je prépare le fichier aux normes d'impression, et l'imprimerie l'imprime. Vous n'avez ni imprimerie à chercher ni contraintes techniques à gérer.",
    bullets: [
      "Cartes de visite, flyers, affiches, dépliants, brochures",
      "Panneaux, bâches et supports événementiels",
      "Documents commerciaux et supports promotionnels",
      "Supports personnalisés selon vos besoins",
      "Préparation technique et suivi avec l'imprimerie partenaire",
    ],
    note: "Je crée. L'imprimeur imprime. Vous recevez.",
  },
  {
    number: "06",
    slug: "seo-redaction",
    title: "SEO & rédaction web",
    shortTitle: "SEO",
    hook: "Être trouvée, pas juste être en ligne.",
    summary:
      "Rédaction d'articles, recherche de mots-clés, structure et optimisation : je travaille le référencement naturel de vos contenus sans sur-optimiser artificiellement les textes.",
    detail:
      "Un bon texte SEO reste avant tout un texte qu'on a envie de lire. Je cherche les sujets et les mots-clés pertinents, je structure proprement (H1, H2, H3) et j'optimise les métadonnées, en gardant un ton naturel.",
    bullets: [
      "Recherche de sujets et de mots-clés",
      "Rédaction d'articles",
      "Structure H1 / H2 / H3 et méta-descriptions",
      "Optimisation des contenus existants",
      "Réflexion autour du référencement naturel",
    ],
  },
  {
    number: "07",
    slug: "emailing",
    title: "Emailing",
    shortTitle: "Emailing",
    hook: "Des emails qu'on ouvre, pas qu'on supprime.",
    summary:
      "Newsletters, campagnes promotionnelles, séquences automatisées ou emails de relance : je gère vos campagnes emailing de la conception au suivi des performances.",
    detail:
      "Un emailing efficace repose autant sur le contenu que sur la base de contacts et le suivi. Je m'occupe de la conception, de la programmation, et j'analyse ensuite les taux d'ouverture et de clics pour ajuster.",
    bullets: [
      "Newsletters et campagnes emailing",
      "Séquences automatisées et emails de relance",
      "Formulaires et gestion de la base de contacts",
      "Programmation des envois",
      "Suivi des performances : ouvertures et clics",
    ],
  },
  {
    number: "08",
    slug: "strategie",
    title: "Stratégie de communication",
    shortTitle: "Stratégie",
    hook: "Avant de créer, je comprends.",
    summary:
      "Positionnement, ligne éditoriale, choix des canaux, communication de lancement ou d'événement : je réfléchis à la stratégie autant qu'à l'exécution.",
    detail:
      "Mae Com'Unique n'est pas qu'un studio de création : c'est aussi la personne qui aide à définir ce qu'il faut dire, où, et pourquoi. La cohérence entre vos supports commence toujours par cette réflexion en amont.",
    bullets: [
      "Positionnement et identité de communication",
      "Ligne éditoriale et stratégie de contenu",
      "Choix des canaux adaptés à vos objectifs",
      "Communication de lancement ou d'événement",
      "Cohérence entre l'ensemble de vos supports",
      "Organisation d'un calendrier de communication global",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((service) => service.slug === slug);
