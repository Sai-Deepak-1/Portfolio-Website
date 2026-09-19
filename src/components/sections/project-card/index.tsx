import { projects } from "@/data";
import ProjectCardItem from "./card";

export default function ProjectCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCardItem key={project.title} project={project} />
      ))}
    </div>
  );
}
