import { FadeIn } from "@/components/shared/animations/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data";

export default function AboutSection() {
  return (
    <FadeIn>
      <Card>
        <CardContent className="p-6 sm:p-8">
          <p className="text-lg leading-8 text-muted-foreground">{siteConfig.about}</p>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
