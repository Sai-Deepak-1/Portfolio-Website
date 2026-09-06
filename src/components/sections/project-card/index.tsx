import ProjectCardItem from "./card";
import { projects } from "@/data";
import { FadeIn, FadeInStagger } from "@/components/shared/animations/FadeIn";

export default function ProjectCard() {
  return <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
    <FadeInStagger className="mx-auto max-w-7xl">
      <FadeIn><div className="mb-12 grid gap-5 border-b border-border pb-6 md:grid-cols-[0.7fr_1.3fr]"><p className="eyebrow">03 / Selected work</p><div><h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">Projects that solve a real problem.</h2><p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">A focused selection of systems built across full-stack development, AI, and computer vision.</p></div></div></FadeIn>
      <div className="border-t border-border">{projects.map((project, index) => <FadeIn key={project.title}><ProjectCardItem {...project} index={index + 1} /></FadeIn>)}</div>
    </FadeInStagger>
  </section>;
}
