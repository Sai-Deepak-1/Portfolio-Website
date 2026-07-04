import Hero from "@/components/sections/hero";
import ProjectCard from "@/components/sections/project-card";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <SkillsSection />
      <ProjectCard />
    </main>
  );
}
