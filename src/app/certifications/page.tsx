import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { FadeInStagger, FadeIn } from "@/components/shared/animations/FadeIn";
import PageIntro from "@/components/sections/page-intro";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Certifications",
  "Certifications and credentials for Sai Deepak.",
  "/certifications",
);

export default function CertificationsPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Certifications"
        title="Credentials, ready to add."
        description="This page is placeholder-driven and can be removed from navigation if you do not plan to use it."
      />
      <FadeInStagger className="grid gap-5 md:grid-cols-2">
        {certifications.map((certification) => (
          <FadeIn key={certification.title}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{certification.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{certification.issuer}</p>
                <p>{certification.date}</p>
                {certification.credentialUrl ? (
                  <Button variant="outline" size="sm" asChild>
                    <a href={certification.credentialUrl} target="_blank" rel="noreferrer">
                      View credential <ExternalLink className="ml-2 size-4" aria-hidden="true" />
                    </a>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </FadeInStagger>
    </main>
  );
}
