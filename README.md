# Mae Com'Unique — site vitrine

Site du studio de communication Mae Com'Unique (Maëlisse Le Berre), construit avec
Next.js (App Router), TypeScript, Tailwind CSS v4 et Framer Motion.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run lint    # vérifications ESLint
```

## Structure

- `app/` — pages (App Router) : accueil, `/services`, `/realisations`, `/a-propos`,
  `/contact`, mentions légales, politique de confidentialité, `sitemap.ts`, `robots.ts`.
- `components/` — composants React organisés par domaine (`layout`, `home`, `services`,
  `realisations`, `contact`, `ui`).
- `lib/content/` — tout le contenu texte du site (services, projets, process, infos de
  contact). C'est ici qu'il faut modifier les textes, ajouter un projet ou changer une
  information de contact — rien n'est codé en dur dans les composants.
- `public/images/` — logo, illustrations et motifs graphiques.

## À compléter avant la mise en ligne

Ces informations n'ont pas été fournies et ont été laissées en placeholder explicite
dans `lib/content/site.ts` — à remplacer avant le lancement :

- `CONTACT.email`, `CONTACT.phone`, `CONTACT.instagram/linkedin/facebook/tiktok`
- `LEGAL.siret`, `LEGAL.legalAddress`, `LEGAL.host`, `LEGAL.hostAddress`
- `SITE.url` (nom de domaine définitif — utilisé pour le sitemap, les balises Open
  Graph et le SEO)

Le formulaire de contact (`app/api/contact/route.ts`) valide et reçoit les demandes,
mais l'envoi réel (email/CRM) n'est pas encore branché faute de fournisseur choisi —
un commentaire dans ce fichier indique où l'ajouter.

## Design system

Les couleurs, la typographie (Fraunces + Manrope) et les tokens d'espacement sont
définis dans `app/globals.css` via `@theme` (Tailwind v4).
