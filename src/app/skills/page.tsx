import type { Metadata } from "next";
import { FadeInStagger, FadeIn } from "@/components/shared/animations/FadeIn";
import PageIntro from "@/components/sections/page-intro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillGroups } from "@/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Skills",
  "Skills and tools used by Sai Deepak.",
  "/skills",
);

export default function SkillsPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Skills"
        title="A stack, ready for your details."
        description="Every item below is intentionally marked as a placeholder until you replace it."
      />
      <FadeInStagger className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <FadeIn key={group.category}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{group.category}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {group.items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={`${skill.name}-${index}`}
                      className="flex items-center gap-3 rounded-md border p-3"
                    >
                      <Icon className="size-5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.example}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </FadeInStagger>
    </main>
  );
}
