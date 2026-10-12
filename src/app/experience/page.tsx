import type { Metadata } from "next";
import { Reveal } from "@/components/portfolio/reveal";

export const metadata: Metadata = {
  title: "Experience",
  description: "[PLACEHOLDER] An editable professional timeline.",
};

const entries = [
  { date: "[PLACEHOLDER] YYYY — NOW", title: "[PLACEHOLDER] Current role or chapter", copy: "[PLACEHOLDER] Add the scope of work, collaborators, and outcomes you can publicly share.", tag: "[PLACEHOLDER] ADD ORGANISATION" },
  { date: "[PLACEHOLDER] YYYY — YYYY", title: "[PLACEHOLDER] Previous role or chapter", copy: "[PLACEHOLDER] Add a concise description. Avoid unverified client names, metrics, and ownership claims.", tag: "[PLACEHOLDER] ADD ORGANISATION" },
  { date: "[PLACEHOLDER] YYYY", title: "[PLACEHOLDER] A useful turning point", copy: "[PLACEHOLDER] Add an education, independent learning, or project milestone that belongs in the public story.", tag: "[PLACEHOLDER] ADD CONTEXT" },
];

export default function ExperiencePage() {
  return (
    <main className="page-main page-frame" id="main-content">
      <header className="page-heading">
        <p className="eyebrow">EXPERIENCE / [PLACEHOLDER]</p>
        <h1 className="page-heading__title">The long version is a sequence of small decisions.</h1>
        <p className="page-heading__lede">[PLACEHOLDER] Replace each entry with confirmed experience details, dates, and outcomes.</p>
      </header>
      <ol className="timeline">
        {entries.map((entry) => (
          <li key={entry.title}>
            <span className="timeline__date">{entry.date}</span>
            <span className="timeline__line" aria-hidden="true" />
            <Reveal className="timeline__content"><h2>{entry.title}</h2><p>{entry.copy}</p><p className="timeline__tag">{entry.tag}</p></Reveal>
          </li>
        ))}
      </ol>
    </main>
  );
}
