import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroArt } from "@/components/portfolio/hero-art";
import { ProjectDirectory } from "@/components/portfolio/project-directory";
import { Reveal } from "@/components/portfolio/reveal";

export const metadata: Metadata = {
  title: "Home",
  description: "[PLACEHOLDER] A concise introduction to this portfolio.",
};

export default function Home() {
  return (
    <main id="main-content">
      <section className="page-frame hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="hero__eyebrow">[PLACEHOLDER] PORTFOLIO / 2026</p>
          <h1 id="hero-title">[PLACEHOLDER] I turn complex ideas into clear digital work.</h1>
          <p className="hero__subcopy">[PLACEHOLDER] Replace this with a short, approved summary of your focus, craft, and the kind of problems you want to solve.</p>
          <div className="hero__actions">
            <Link className="button-link" href="/projects">Explore projects <ArrowUpRight aria-hidden="true" size={18} /></Link>
            <a className="button-link button-link--secondary" href="#story">Scroll for the approach <ArrowDown aria-hidden="true" size={17} /></a>
          </div>
        </div>
        <HeroArt />
      </section>

      <section className="page-frame section" id="story" aria-labelledby="story-title">
        <Reveal><div className="statement-panel"><p id="story-title">[PLACEHOLDER] Good work earns attention by making the next step <span>obvious.</span></p></div></Reveal>
        <div className="story-grid">
          <Reveal><article className="story-card"><span className="story-card__number">01 / NOTICE</span><h3>Find the useful question.</h3><p>[PLACEHOLDER] Add the signal or problem you look for.</p></article></Reveal>
          <Reveal><article className="story-card"><span className="story-card__number">02 / BUILD</span><h3>Make the answer legible.</h3><p>[PLACEHOLDER] Add how you make product or technical decisions.</p></article></Reveal>
          <Reveal><article className="story-card"><span className="story-card__number">03 / SHARE</span><h3>Leave a trail of evidence.</h3><p>[PLACEHOLDER] Add how you document impact and learning.</p></article></Reveal>
        </div>
      </section>

      <div className="page-frame section">
        <Reveal>
          <p className="eyebrow">SELECTED WORK / [PLACEHOLDER]</p>
          <ProjectDirectory title="A directory of work." />
          <Link className="button-link button-link--secondary" href="/projects" style={{ marginTop: "24px" }}>View the full index <ArrowUpRight aria-hidden="true" size={18} /></Link>
        </Reveal>
      </div>
    </main>
  );
}
