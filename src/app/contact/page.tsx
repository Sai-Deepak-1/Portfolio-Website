import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "[PLACEHOLDER] Contact details for this portfolio.",
};

export default function ContactPage() {
  return (
    <main className="page-main page-frame" id="main-content">
      <section className="contact-panel" aria-labelledby="contact-title">
        <p className="eyebrow">CONTACT / [PLACEHOLDER]</p>
        <h1 id="contact-title">Leave a clear signal.</h1>
        <p>[PLACEHOLDER] Add your approved contact method and a short invitation to get in touch. No email address is invented in this build.</p>
        <span className="button-link" aria-disabled="true">[PLACEHOLDER] Add contact link <ArrowUpRight aria-hidden="true" size={18} /></span>
      </section>
    </main>
  );
}
