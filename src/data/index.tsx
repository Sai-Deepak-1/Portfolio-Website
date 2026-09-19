import type { ComponentType } from "react";
import type { ProjectType } from "@/types/projects";
import {
  SiAmazonec2,
  SiAmazonwebservices,
  SiBootstrap,
  SiCss3,
  SiFastapi,
  SiFlask,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNginx,
  SiOpenai,
  SiPython,
  SiShadcnui,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

export const siteConfig = {
  name: "Sai Deepak",
  location: "Hyderabad, India",
  heroTagline:
    "A Java Developer with a passion in building Web Development and ML DevOps.",
  about: "[TODO: write your bio here]",
  email: "[TODO: add your contact email]",
  formEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    "https://formspree.io/f/TODO_REPLACE_FORM_ID",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/sai-deepak-perumbudur/",
    github: "https://github.com/Sai-Deepak-1",
  },
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const projects: ProjectType[] = [
  {
    icon: <SiNextdotjs aria-hidden="true" />,
    title: "Unstructured Documents Chatbot in AWS",
    subtitle: "LLM Chatbot using NextJS and FastAPI",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs aria-hidden="true" /> },
      { name: "Python", icon: <SiPython aria-hidden="true" /> },
      { name: "FastAPI", icon: <SiFastapi aria-hidden="true" /> },
      { name: "shadcn/ui", icon: <SiShadcnui aria-hidden="true" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" /> },
      { name: "OpenAI", icon: <SiOpenai aria-hidden="true" /> },
      { name: "Amazon EC2", icon: <SiAmazonec2 aria-hidden="true" /> },
      { name: "Nginx", icon: <SiNginx aria-hidden="true" /> },
      { name: "Linux", icon: <SiLinux aria-hidden="true" /> },
      { name: "AWS", icon: <SiAmazonwebservices aria-hidden="true" /> },
    ],
    description:
      "Developed a full-stack LLM Chatbot using NextJS and FastAPI on AWS. The Chatbot extracts text from unstructured documents, processes it into embeddings, and provides accurate responses to user queries using OpenAI's gpt-3.5-turbo model. Led a team of three individuals, serving as the Team Lead, and deployed the solution on an AWS EC2 instance.",
    imgUrl: "https://placehold.co/800x600",
    githubUrl:
      "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
  },
  {
    icon: <SiPython aria-hidden="true" />,
    title: "Biometric Voter Identification System Using Face Recognition",
    subtitle: "Voter Identification System with Flask & OpenCV",
    technologies: [
      { name: "Python", icon: <SiPython aria-hidden="true" /> },
      { name: "CSS", icon: <SiCss3 aria-hidden="true" /> },
      { name: "JavaScript", icon: <SiJavascript aria-hidden="true" /> },
      { name: "Flask", icon: <SiFlask aria-hidden="true" /> },
      { name: "Bootstrap", icon: <SiBootstrap aria-hidden="true" /> },
    ],
    description:
      "Developed a biometric voter identification system using the face_recognition library and Flask framework. The system authenticates voters using facial recognition technology, with a user-friendly web interface for voter registration and authentication. Utilized OpenCV for face detection and recognition from images and live video streams.",
    imgUrl: "https://placehold.co/800x600",
    githubUrl:
      "https://github.com/Sai-Deepak-1/Biometric-Voter-Identification-System",
  },
];

type SkillIcon = ComponentType<{ className?: string; title?: string }>;

export type SkillGroup = {
  category: string;
  items: { name: string; icon: SkillIcon; example: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "[TODO: replace with a skill category]",
    items: [
      {
        name: "[TODO: replace this example skill]",
        icon: SiJavascript,
        example: "Example icon: JavaScript",
      },
      {
        name: "[TODO: replace this example skill]",
        icon: SiPython,
        example: "Example icon: Python",
      },
    ],
  },
];

export const certifications = [
  {
    title: "[TODO: certification title]",
    issuer: "[TODO: issuing organization]",
    date: "[TODO: completion date]",
    credentialUrl: "",
  },
];

export const blogPosts = [
  {
    title: "[TODO: blog post title]",
    excerpt: "[TODO: add a short summary for this post]",
    date: "[TODO: publish date]",
    href: "#",
  },
];

export const marqueeItems = [
  "[TODO: add a technology]",
  "[TODO: add a technology]",
  "[TODO: add a technology]",
  "[TODO: add a technology]",
];
