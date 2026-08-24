import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ProjectMediaGallery from "@/components/realisations/ProjectMediaGallery";
import CTAFinal from "@/components/home/CTAFinal";
import { PROJECTS, getProjectBySlug } from "@/lib/content/projects";
import { SITE } from "@/lib/content/site";

const DEFAULT_OG_IMAGE = { url: "/images/og-image.png", width: 1200, height: 630 };

function truncate(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace)}…`;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.name} — ${project.sector}`;
  const description = truncate(`${project.missions}. ${project.description}`);
  const ogImage = project.media?.[0]
    ? { url: project.media[0].src, width: project.media[0].width, height: project.media[0].height }
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: `/realisations/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `/realisations/${project.slug}`,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Réalisations", item: `${SITE.url}/realisations` },
      { "@type": "ListItem", position: 3, name: project.name, item: `${SITE.url}/realisations/${project.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="pb-16 pt-14 sm:pt-20 lg:pb-24">
        <Container>
          <Reveal>
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-title transition-colors hover:text-rose-900"
            >
              <span
                aria-hidden
                className="transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:-translate-x-1"
              >
                ←
              </span>
              Toutes les réalisations
            </Link>

            <p className="mt-8 font-sans text-sm font-bold uppercase tracking-[0.12em] text-green-700">
              {project.sector}
            </p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05] text-title sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 font-sans text-sm text-green-950/70">{project.missions}</p>
            <p className="mt-7 max-w-2xl text-pretty font-sans text-base leading-relaxed text-green-950/75">
              {project.description}
            </p>

            {project.remoteNote ? (
              <span className="mt-5 inline-block rounded-full border border-rose-700/40 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.06em] text-rose-900">
                {project.remoteNote}
              </span>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-green-950"
                >
                  Voir le site
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-[var(--ease-editorial)] group-hover/link:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              ) : null}
              {project.instagramHandle ? (
                <a
                  href={`https://www.instagram.com/${project.instagramHandle.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-semibold text-title underline decoration-rose-500 decoration-2 underline-offset-4 transition-colors hover:text-rose-900"
                >
                  Instagram {project.instagramHandle}
                </a>
              ) : null}
            </div>
          </Reveal>

          {project.media && project.media.length > 0 ? (
            <Reveal delay={0.1} className="mt-14">
              <ProjectMediaGallery media={project.media} />
            </Reveal>
          ) : null}
        </Container>
      </section>

      <section className="border-t border-green-950/10 py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
              Voir aussi
            </p>
            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-3">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/realisations/${p.slug}`}
                  className="rounded-full border border-green-950/15 px-4 py-2 font-sans text-sm text-green-950/75 transition-colors hover:border-rose-700 hover:text-title"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
