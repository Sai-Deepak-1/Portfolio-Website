"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/shared/mode-toggle";

const links = [{ label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  useEffect(() => {
    const sections = links.map(({ href }) => document.querySelector(href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-35% 0px -55%" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
    <div className="mx-auto flex max-w-7xl items-center justify-between border border-border/80 bg-background/85 px-4 py-3 shadow-[0_8px_30px_rgb(20_20_20/0.04)] backdrop-blur-md dark:shadow-black/20 sm:px-5">
      <Link href="#top" aria-label="Sai Deepak — home" className="font-mono text-base font-semibold tracking-[-0.08em]">SD<span className="text-accent">.</span></Link>
      <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">{links.map((link) => <Link key={link.href} href={link.href} className={`px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors ${active === link.href ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}>{link.label}</Link>)}</nav>
      <div className="flex items-center gap-1"><ModeToggle className="h-8 w-8" /><button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-8 w-8 place-items-center md:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button></div>
    </div>
    {open && <nav className="mx-auto max-w-7xl border-x border-b border-border bg-background px-4 py-3 md:hidden" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} onClick={() => setOpen(false)} href={link.href} className="block border-b border-border py-3 font-mono text-xs uppercase tracking-[0.16em] last:border-0">{link.label}</Link>)}</nav>}
  </header>;
}
