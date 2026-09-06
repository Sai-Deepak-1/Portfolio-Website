import { ArrowDownRight } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/shared/animations/FadeIn";

export default function About() {
  return <section id="about" className="scroll-mt-24 border-y border-border px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
    <FadeInStagger className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
      <FadeIn><p className="eyebrow">01 / About</p><div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground"><ArrowDownRight className="size-4 text-accent" /> Design-minded engineering</div></FadeIn>
      <div><FadeIn><h2 className="max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">I bring product thinking to the systems that make an experience feel effortless.</h2></FadeIn><FadeIn><div className="mt-10 grid gap-8 border-t border-border pt-5 sm:grid-cols-2"><p className="leading-relaxed text-muted-foreground">From thoughtful web interfaces to production-ready ML and DevOps work, I care about building technology that is clear, useful, and built to last.</p><dl className="grid grid-cols-2 gap-x-4 gap-y-6 font-mono text-xs uppercase tracking-[0.12em]"><div><dt className="mb-2 text-muted-foreground">Focus</dt><dd>Web · ML · DevOps</dd></div><div><dt className="mb-2 text-muted-foreground">Based in</dt><dd>Hyderabad, IN</dd></div><div><dt className="mb-2 text-muted-foreground">Approach</dt><dd>Practical systems</dd></div><div><dt className="mb-2 text-muted-foreground">Stack</dt><dd>TypeScript · Python</dd></div></dl></div></FadeIn></div>
    </FadeInStagger>
  </section>;
}
