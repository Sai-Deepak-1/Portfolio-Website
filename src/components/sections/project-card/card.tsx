import { ArrowUpRight, Github } from "lucide-react";
import { ProjectType } from "@/types/projects";

type Props = ProjectType & { index: number };

export default function ProjectCardItem({ icon, title, subtitle, technologies, description, githubUrl, websiteUrl, index }: Props) {
  return <article className="group grid gap-6 border-b border-border py-8 transition-colors sm:py-10 lg:grid-cols-[0.16fr_0.84fr] lg:gap-10">
    <div className="flex items-start justify-between lg:block"><span className="font-mono text-xs tracking-[0.12em] text-muted-foreground">0{index}</span><div className="mt-0 text-2xl text-accent lg:mt-10" aria-hidden="true">{icon}</div></div>
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:gap-10">
      <div><p className="eyebrow mb-3">{subtitle}</p><h3 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">{title}</h3><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{description}</p></div>
      <div className="flex flex-col justify-between gap-6 border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"><div><p className="eyebrow mb-3">Built with</p><div className="flex flex-wrap gap-2">{technologies.map((tech, technologyIndex) => <span key={technologyIndex} className="grid size-8 place-items-center border border-border text-sm text-muted-foreground transition-colors group-hover:border-accent/60 group-hover:text-foreground" aria-label="Technology used">{tech}</span>)}</div></div><div className="flex flex-wrap gap-4"><a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:text-accent hover:underline"><Github className="size-4" /> Source</a><a href={websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:text-accent hover:underline">Project <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></div></div>
    </div>
  </article>;
}
