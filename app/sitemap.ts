import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content/site";
import { PROJECTS } from "@/lib/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/realisations", "/a-propos", "/contact"];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE.url}/realisations/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
