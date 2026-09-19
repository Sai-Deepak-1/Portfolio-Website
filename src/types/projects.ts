import type { ReactNode } from "react";

export type Technology = {
  name: string;
  icon: ReactNode;
};

export type ProjectType = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  technologies: Technology[];
  description: string;
  imgUrl: string;
  githubUrl: string;
  websiteUrl?: string;
};
