import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.example";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/experience", "/projects", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() })),
    ...portfolioProjects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, lastModified: new Date() })),
  ];
}
