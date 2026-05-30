"use client"

import Hero from "@/components/sections/hero";
import Preloader from "@/components/sections/preloader";
import ProjectCard from "@/components/sections/project-card";
import SkillsSection from "@/components/sections/skills";
import { FadeIn, FadeInStagger } from "@/components/shared/animations/FadeIn";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()

  }, [])
  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <main className="flex flex-col gap-10">
        <Hero />
        <FadeIn>
          <SkillsSection />
        </FadeIn>
        <ProjectCard />
      </main>
    </>
  );
}
