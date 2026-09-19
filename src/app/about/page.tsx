import type { Metadata } from "next";
import AboutSection from "@/components/sections/about";
import PageIntro from "@/components/sections/page-intro";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Learn more about Sai Deepak.",
  "/about",
);

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="About"
        title="A little more context."
        description="[TODO: add a short introduction to this page]"
      />
      <AboutSection />
    </main>
  );
}
