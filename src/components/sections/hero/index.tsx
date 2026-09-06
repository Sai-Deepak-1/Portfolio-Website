import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { monaSans } from "@/app/fonts/fonts";
import { FadeIn, FadeInStagger } from "@/components/shared/animations/FadeIn";

export default function Hero() {
  return <section id="top" className="relative flex min-h-screen items-end overflow-hidden px-5 pb-12 pt-32 sm:px-10 sm:pb-16 lg:px-16">
    <div className="pointer-events-none absolute right-[5%] top-[18%] h-48 w-48 rounded-full bg-accent/10 blur-3xl dark:bg-accent/15" />
    <FadeInStagger className="mx-auto w-full max-w-7xl">
      <FadeIn><div className="mb-8 flex items-center justify-between border-y border-border py-3 eyebrow"><span>Software engineer</span><span>Hyderabad, India</span></div></FadeIn>
      <FadeIn><h1 className={`${monaSans.className} max-w-6xl text-balance text-[clamp(4.5rem,12.5vw,11.5rem)] font-black uppercase leading-[0.76] tracking-[-0.075em]`}>Building<br /><span className="text-accent">useful</span> systems.</h1></FadeIn>
      <FadeIn className="mt-12 grid gap-8 border-t border-border pt-5 md:grid-cols-[1fr_0.95fr] md:items-end">
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">Sai Deepak is a software engineer focused on modern web experiences and scalable ML / DevOps systems.</p>
        <div className="flex flex-wrap gap-3 md:justify-self-end"><Link href="#projects" className="group inline-flex items-center gap-3 bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">View selected work <ArrowDownRight className="size-4 transition-transform group-hover:translate-y-0.5" /></Link><Link href="https://github.com/Sai-Deepak-1" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent">GitHub <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></div>
      </FadeIn>
    </FadeInStagger>
  </section>;
}
