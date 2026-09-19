"use client";

import Image from "next/image";
import { Github, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { ProjectType } from "@/types/projects";

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCardItem({ project }: ProjectCardProps) {
  const hasWebsite = project.websiteUrl && project.websiteUrl !== project.githubUrl;

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-transform duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg motion-safe:dark:hover:shadow-primary/25">
      <CardHeader className="space-y-4 p-5">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted text-2xl [&>svg]:size-7">
            {project.icon}
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-tight">{project.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-md bg-muted">
          <Image
            src={project.imgUrl}
            alt={`Placeholder preview for ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 px-5 pb-5">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology.name} variant="secondary" className="gap-1.5">
              <span className="[&>svg]:size-3.5" aria-hidden="true">
                {technology.icon}
              </span>
              {technology.name}
            </Badge>
          ))}
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="gap-3 p-5 pt-0">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github className="mr-2 size-4" aria-hidden="true" />
            View source
          </a>
        </Button>
        {hasWebsite ? (
          <Button size="sm" asChild>
            <a href={project.websiteUrl} target="_blank" rel="noreferrer">
              <Globe className="mr-2 size-4" aria-hidden="true" />
              Visit site
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
