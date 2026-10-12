import type { Metadata } from "next";
import { ProjectDirectory } from "@/components/portfolio/project-directory";

export const metadata: Metadata = {
  title: "Projects",
  description: "[PLACEHOLDER] Project directory and case studies.",
};

export default function ProjectsPage() {
  return (
    <main className="page-main page-frame" id="main-content">
      <header className="page-heading">
        <p className="eyebrow">PROJECTS / [PLACEHOLDER]</p>
        <h1 className="page-heading__title">An index of ideas made tangible.</h1>
        <p className="page-heading__lede">[PLACEHOLDER] Filter the directory by area. Replace placeholder briefs with verified, public case-study material.</p>
      </header>
      <ProjectDirectory limit={100} title="All projects." />
    </main>
  );
}
