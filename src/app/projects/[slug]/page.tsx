import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="page-main page-frame" id="main-content">
      <article>
        <header className="project-hero">
          <Link className="eyebrow" href="/projects"><ArrowLeft aria-hidden="true" size={14} style={{ verticalAlign: "-2px" }} /> BACK TO PROJECTS</Link>
          <div className="project-hero__meta" style={{ marginTop: "28px" }}><span>{project.category}</span><span>•</span><span>{project.status}</span></div>
          <h1>{project.title}</h1>
          <p className="project-hero__lede">{project.summary}</p>
          <div className="project-art" aria-hidden="true" />
        </header>
        <div className="project-content">
          <div><h2>[PLACEHOLDER] The brief.</h2><p>{project.description}</p><p>[PLACEHOLDER] Add verified context about the goal, process, decisions, and outcome. This detail-page structure is ready for actual case-study assets and evidence.</p></div>
          <aside className="project-aside"><h2>WORKING SET</h2><ul className="stack-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></aside>
        </div>
      </article>
    </main>
  );
}
