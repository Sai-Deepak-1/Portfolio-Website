import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import ProjectCard from "@/components/sections/project-card";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectCard />
    </main>
  );
}
