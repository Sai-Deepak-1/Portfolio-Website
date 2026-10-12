import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-frame">
        <p className="footer-statement" aria-label="Make the work visible">
          <span>MAKE THE WORK</span>
          <span>VISIBLE.</span>
        </p>
        <div className="footer-bottom">
          <p>[PLACEHOLDER] © 2026 Portfolio. Replace this legal line before launch.</p>
          <nav aria-label="Footer navigation">
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
