export type ProjectCategory = "Backend" | "Frontend" | "Side projects";

export type PortfolioProject = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  status: string;
  accent: "blue" | "lilac" | "gold" | "coral";
};

// Existing project data is represented here in the new directory format. Every
// public-facing claim remains visibly marked as a placeholder until verified.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "unstructured-documents-chatbot",
    title: "[PLACEHOLDER] Unstructured Documents Chatbot in AWS",
    summary: "[PLACEHOLDER] LLM chatbot using Next.js and FastAPI.",
    description:
      "[PLACEHOLDER] Developed a full-stack LLM chatbot using Next.js and FastAPI on AWS. The chatbot extracts text from unstructured documents, processes it into embeddings, and provides responses using an LLM.",
    category: "Backend",
    stack: ["[PLACEHOLDER] Next.js", "[PLACEHOLDER] FastAPI", "[PLACEHOLDER] AWS"],
    status: "[PLACEHOLDER] Case study",
    accent: "blue",
  },
  {
    slug: "biometric-voter-identification",
    title: "[PLACEHOLDER] Biometric Voter Identification System",
    summary: "[PLACEHOLDER] Voter identification system with Flask and OpenCV.",
    description:
      "[PLACEHOLDER] A biometric voter identification system using face recognition, Flask, and OpenCV with registration and authentication flows.",
    category: "Backend",
    stack: ["[PLACEHOLDER] Python", "[PLACEHOLDER] Flask", "[PLACEHOLDER] OpenCV"],
    status: "[PLACEHOLDER] Case study",
    accent: "lilac",
  },
  {
    slug: "interface-study",
    title: "[PLACEHOLDER] Add frontend project",
    summary: "[PLACEHOLDER] Add a one-line product or interface outcome.",
    description:
      "[PLACEHOLDER] Add the problem, the interface constraints, the contribution, and a measured outcome once this project is ready to publish.",
    category: "Frontend",
    stack: ["[PLACEHOLDER] Add stack", "[PLACEHOLDER] Add stack"],
    status: "[PLACEHOLDER] In progress",
    accent: "gold",
  },
  {
    slug: "weekend-tool",
    title: "[PLACEHOLDER] Add side project",
    summary: "[PLACEHOLDER] Add a compact experiment, utility, or learning project.",
    description:
      "[PLACEHOLDER] Add a short note on what was explored, made, or learned. Keep it focused on the work rather than an unsupported personal claim.",
    category: "Side projects",
    stack: ["[PLACEHOLDER] Add stack", "[PLACEHOLDER] Add stack"],
    status: "[PLACEHOLDER] Draft",
    accent: "coral",
  },
];

export const projectFilters = ["All", "Backend", "Frontend", "Side projects"] as const;

export const navigation = [
  { href: "/about", label: "About", visual: "grid" },
  { href: "/experience", label: "Experience", visual: "orbit" },
  { href: "/projects", label: "Projects", visual: "stack" },
  { href: "/contact", label: "Contact", visual: "signal" },
] as const;
