"use client";

import Link from "next/link";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { navigation } from "@/data";

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <LayoutGroup id="navbar">
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-2">
          <Link
            href="/"
            className="mr-auto text-2xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Sai Deepak home"
          >
            SD
          </Link>
          <nav aria-label="Primary navigation" className="order-3 w-full sm:order-2 sm:w-auto sm:flex-1">
            <ul className="flex flex-wrap justify-center gap-x-1 gap-y-1 sm:justify-end">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className="relative inline-flex rounded-md px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-md bg-muted"
                          transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
                        />
                      ) : null}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <aside className="order-2 sm:order-3">
            <ModeToggle />
          </aside>
        </div>
      </header>
    </LayoutGroup>
  );
}
