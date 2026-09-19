import type { Metadata } from "next";
import PageIntro from "@/components/sections/page-intro";
import ProjectCard from "@/components/sections/project-card";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Projects",
  "Selected projects by Sai Deepak.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Projects"
        title="Things I have built."
        description="A selection of work and the technologies behind it."
      />
      <ProjectCard />
    </main>
  );
}
