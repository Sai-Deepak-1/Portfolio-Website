import type { Metadata } from "next";
import { Mail } from "lucide-react";
import PageIntro from "@/components/sections/page-intro";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Get in touch with Sai Deepak.",
  "/contact",
);

export default function ContactPage() {
  const emailAddress = siteConfig.email.replaceAll(" ", "");

  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Contact"
        title="Let&apos;s start a conversation."
        description="[TODO: add a brief invitation or preferred contact details]"
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <Mail className="size-7" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold">Email</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{siteConfig.email}</p>
            <Button className="mt-5" variant="outline" asChild>
              <a href={`mailto:${emailAddress}`}>Open email client</a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 sm:p-8">
            <form action={siteConfig.formEndpoint} method="POST" className="grid gap-5">
              <input type="hidden" name="_subject" value="Portfolio contact form" />
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input id="name" name="name" required autoComplete="name" className="rounded-md border bg-background px-3 py-2" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className="rounded-md border bg-background px-3 py-2" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" name="message" required rows={5} className="resize-y rounded-md border bg-background px-3 py-2" />
              </div>
              <Button type="submit">Send message</Button>
              <p className="text-xs leading-5 text-muted-foreground">
                [TODO: set NEXT_PUBLIC_FORMSPREE_ENDPOINT before publishing this form.]
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
