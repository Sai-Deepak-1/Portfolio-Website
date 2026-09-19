import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { FadeInStagger, FadeIn } from "@/components/shared/animations/FadeIn";
import PageIntro from "@/components/sections/page-intro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Blog",
  "Notes and writing from Sai Deepak.",
  "/blog",
);

export default function BlogPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Blog"
        title="Notes, when you are ready."
        description="This static placeholder list needs no CMS or MDX pipeline, and you can remove it from navigation if you do not need a blog."
      />
      <FadeInStagger className="grid gap-5 md:grid-cols-2">
        {blogPosts.map((post) => (
          <FadeIn key={post.title}>
            <Card className="h-full transition-shadow motion-safe:hover:shadow-md">
              <CardHeader>
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                {post.href !== "#" ? (
                  <a className="mt-4 inline-flex items-center text-sm font-medium hover:underline" href={post.href}>
                    Read post <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </FadeInStagger>
    </main>
  );
}
