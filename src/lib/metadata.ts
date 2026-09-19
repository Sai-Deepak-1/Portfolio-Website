import type { Metadata } from "next";
import { siteConfig } from "@/data";

export const siteUrl = new URL(siteConfig.siteUrl);

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
