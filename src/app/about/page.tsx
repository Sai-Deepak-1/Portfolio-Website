import type { Metadata } from "next";
import { Reveal } from "@/components/portfolio/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "[PLACEHOLDER] Background and working principles.",
};

export default function AboutPage() {
  return (
    <main className="page-main page-frame" id="main-content">
      <header className="page-heading">
        <p className="eyebrow">ABOUT / [PLACEHOLDER]</p>
        <h1 className="page-heading__title">A little context, without the noise.</h1>
        <p className="page-heading__lede">[PLACEHOLDER] Replace this page with a concise, approved bio. Keep it oriented around the work you want people to understand.</p>
      </header>
      <section className="about-grid" aria-label="About details">
        <div className="about-mark" aria-hidden="true" />
        <div className="about-copy">
          <Reveal><h2>[PLACEHOLDER] A practice shaped by curiosity and care.</h2></Reveal>
          <Reveal><p>[PLACEHOLDER] Add a short biography here. This slot is intentionally not populated with invented education, location, role, or client history.</p></Reveal>
          <Reveal><p>[PLACEHOLDER] Add a second paragraph about your working values, preferred collaborators, or the questions that keep you learning.</p></Reveal>
          <Reveal>
            <dl className="fact-grid">
              <div><dt>FOCUS</dt><dd>[PLACEHOLDER] Add focus</dd></div>
              <div><dt>BASED IN</dt><dd>[PLACEHOLDER] Add location</dd></div>
              <div><dt>WORKING WITH</dt><dd>[PLACEHOLDER] Add collaborators</dd></div>
              <div><dt>NOW EXPLORING</dt><dd>[PLACEHOLDER] Add topic</dd></div>
            </dl>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
