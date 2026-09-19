"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "@/components/sections/hero";
import ProjectCard from "@/components/sections/project-card";
import Preloader from "@/components/sections/preloader";
import TapeSection from "@/components/shared/tape";

const preloadSessionKey = "portfolio-preloader-seen";

export default function HomeSection() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasSeenPreloader = window.sessionStorage.getItem(preloadSessionKey) === "true";

    if (reduceMotion || hasSeenPreloader) return;

    const showTimer = window.setTimeout(() => setIsLoading(true), 0);
    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(preloadSessionKey, "true");
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">{isLoading ? <Preloader /> : null}</AnimatePresence>
      <Hero />
      <TapeSection />
      <section className="page-shell pb-24 pt-16" aria-labelledby="featured-projects">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Featured work</p>
        <h1 id="featured-projects" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Selected projects
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A closer look at the projects currently included in this portfolio.
        </p>
        <div className="mt-8">
          <ProjectCard />
        </div>
      </section>
    </main>
  );
}
