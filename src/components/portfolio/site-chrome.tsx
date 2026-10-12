"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Command, Menu, Search, X } from "lucide-react";
import { navigation, portfolioProjects } from "@/data/portfolio";

type Modal = "menu" | "palette" | null;

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function SiteChrome() {
  const pathname = usePathname();
  const [modal, setModal] = useState<Modal>(null);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [preview, setPreview] = useState("grid");
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setModal("palette");
      }
      if (event.key === "Escape") setModal(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("scroll-lock", modal !== null);
    if (!modal) setQuery("");
    return () => document.body.classList.remove("scroll-lock");
  }, [modal]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const pages = navigation.map((item) => ({ ...item, kind: "Page" }));
    const projects = portfolioProjects.map((project) => ({
      href: `/projects/${project.slug}`,
      label: project.title,
      visual: project.accent,
      kind: "Project",
    }));
    return [...pages, ...projects].filter((item) =>
      `${item.label} ${item.kind}`.toLowerCase().includes(needle),
    );
  }, [query]);

  function close() {
    setModal(null);
  }

  function trapFocus(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab") return;
    const items = modalRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
    if (!items?.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function onPaletteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const destination = results[0]?.href;
    if (destination) window.location.assign(destination);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header__inner page-frame">
          <Link className="wordmark" href="/" aria-label="Portfolio home">
            <span aria-hidden="true">P/01</span>
            <span className="sr-only">Portfolio home</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                className={pathname === item.href ? "is-active" : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button className="search-trigger" type="button" onClick={() => setModal("palette")}>
              <Search aria-hidden="true" size={18} strokeWidth={1.8} />
              <span>Search or jump</span>
              <kbd aria-hidden="true"><Command size={12} />K</kbd>
            </button>
            <button
              className="menu-trigger"
              type="button"
              onClick={() => setModal("menu")}
              aria-haspopup="dialog"
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      {modal === "menu" && (
        <section
          className="site-overlay menu-overlay"
          aria-label="Navigation menu"
          aria-modal="true"
          onKeyDown={trapFocus}
          ref={modalRef}
          role="dialog"
        >
          <div className="menu-overlay__bar page-frame">
            <Link className="wordmark" href="/" onClick={close}>
              P/01
            </Link>
            <button className="icon-button" type="button" onClick={close} autoFocus aria-label="Close navigation menu">
              <X aria-hidden="true" size={21} />
            </button>
          </div>
          <div className="menu-overlay__content page-frame">
            <p className="menu-kicker">[PLACEHOLDER] A working index of my practice.</p>
            <div className="menu-grid">
              <nav className="menu-links" aria-label="Expanded navigation">
                {navigation.map((item, index) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    onClick={close}
                    onFocus={() => setPreview(item.visual)}
                    onPointerEnter={() => setPreview(item.visual)}
                    style={{ "--delay": `${110 + index * 70}ms` } as React.CSSProperties}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight aria-hidden="true" size={28} strokeWidth={1.25} />
                  </Link>
                ))}
              </nav>
              <div className={`menu-preview menu-preview--${preview}`} aria-hidden="true">
                <span className="menu-preview__grid" />
                <span className="menu-preview__orb menu-preview__orb--one" />
                <span className="menu-preview__orb menu-preview__orb--two" />
                <span className="menu-preview__card">01</span>
              </div>
            </div>
            <button className="menu-search" type="button" onClick={() => setModal("palette")}>
              <Search aria-hidden="true" size={18} /> Search or jump to a page <kbd>⌘ K</kbd>
            </button>
          </div>
        </section>
      )}

      {modal === "palette" && (
        <section
          className="site-overlay palette-overlay"
          aria-label="Search or jump to a page"
          aria-modal="true"
          onKeyDown={trapFocus}
          ref={modalRef}
          role="dialog"
        >
          <div className="palette page-frame">
            <div className="palette__heading">
              <p className="eyebrow">COMMAND PALETTE</p>
              <button className="icon-button" type="button" onClick={close} aria-label="Close search">
                <X aria-hidden="true" size={21} />
              </button>
            </div>
            <form className="palette__form" onSubmit={onPaletteSubmit}>
              <Search aria-hidden="true" size={20} strokeWidth={1.8} />
              <input
                autoFocus
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search or jump to a page"
                type="search"
                value={query}
              />
              <kbd>ESC</kbd>
            </form>
            <div className="palette__results" aria-live="polite">
              <p className="eyebrow">{query ? "MATCHES" : "START HERE"}</p>
              {results.length ? (
                results.slice(0, 6).map((result) => (
                  <Link href={result.href} key={result.href} onClick={close}>
                    <span className={`result-mark result-mark--${result.visual}`} aria-hidden="true" />
                    <span>{result.label}</span>
                    <small>{result.kind}</small>
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </Link>
                ))
              ) : (
                <p className="empty-state">No index entry yet. Try another term.</p>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
