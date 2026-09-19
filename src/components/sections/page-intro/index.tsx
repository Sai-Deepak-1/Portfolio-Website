import { FadeIn } from "@/components/shared/animations/FadeIn";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <FadeIn className="mb-10 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>
    </FadeIn>
  );
}
