import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { monaSans } from "@/app/fonts/fonts";

export default function Content() {
  return <footer className="border-t border-border px-5 pt-16 sm:px-10 lg:px-16 lg:pt-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 border-b border-border pb-14 md:grid-cols-[0.7fr_1.3fr]">
        <p className="eyebrow">Let&apos;s connect</p>
        <div><h2 className={`${monaSans.className} max-w-3xl text-balance text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-7xl`}>Have an idea?<br /><span className="text-accent">Make it real.</span></h2><div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"><a className="inline-flex items-center gap-2 hover:text-accent" href="https://github.com/Sai-Deepak-1" target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub <ArrowUpRight className="size-3" /></a><a className="inline-flex items-center gap-2 hover:text-accent" href="https://www.linkedin.com/in/sai-deepak-perumbudur/" target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn <ArrowUpRight className="size-3" /></a></div></div>
      </div>
      <div className="flex flex-col gap-3 py-5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Sai Deepak</p><div className="flex gap-5"><Link href="#top" className="hover:text-accent">Back to top</Link><span>Hyderabad, India</span></div></div>
    </div>
  </footer>;
}
