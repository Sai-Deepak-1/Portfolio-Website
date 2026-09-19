import Link from "next/link";
import { CircleArrowRight, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data";

export default function Content() {
  const year = new Date().getFullYear();

  return (
    <footer className="h-full px-4 py-8 text-gray-800 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div>
            <h2 className="text-xl font-bold leading-snug">
              Where <span className="text-indigo-500 dark:text-indigo-300">aesthetics</span> & <br />
              <span className="text-teal-500 dark:text-teal-300">functionality</span> meet
            </h2>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-amber-600 dark:text-amber-300">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Home</Link></li>
              <li><Link href="/about" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">About me</Link></li>
              <li><Link href="/contact" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-teal-600 dark:text-teal-300">Follow me</h3>
            <ul className="space-y-2">
              <li>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <Linkedin className="mr-2 size-5" aria-hidden="true" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="flex items-center hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <Github className="mr-2 size-5" aria-hidden="true" /> GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <FooterLink href="/contact" title="Contact me" subtitle="Say hello" />
            <FooterLink href="/projects" title="My projects" subtitle="Explore projects" />
          </div>
        </div>
        <p className="mt-10 text-center text-5xl font-bold leading-none text-transparent sm:mt-16 sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text dark:from-gray-800 dark:to-gray-600">
          {siteConfig.name}
        </p>
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-gray-400 pt-6 text-sm text-gray-600 dark:border-gray-600 dark:text-gray-400 sm:flex-row">
          <p>{siteConfig.name} ©{year}</p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, title, subtitle }: { href: string; title: string; subtitle: string }) {
  return (
    <Link href={href} className="group flex items-center justify-between gap-2 rounded-md py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <span>
        <span className="block text-lg font-semibold transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">{title}</span>
        <span className="text-sm text-muted-foreground">{subtitle}</span>
      </span>
      <CircleArrowRight className="size-9 transition-transform motion-safe:group-hover:-rotate-45" strokeWidth={1} aria-hidden="true" />
    </Link>
  );
}
