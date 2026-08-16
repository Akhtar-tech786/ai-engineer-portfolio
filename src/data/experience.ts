import type { ExperienceItem, Principle, ArchitectureStep } from "@/types";

// No employers, dates, or achievements have been invented — replace every
// bracketed placeholder with your real experience before publishing.
export const experienceItems: ExperienceItem[] = [
  {
    company: "[COMPANY]",
    role: "[JOB TITLE]",
    startDate: "[START DATE]",
    endDate: "[END DATE]",
    achievements: ["[ACHIEVEMENT]", "[ACHIEVEMENT]"],
  },
  {
    company: "[COMPANY]",
    role: "[JOB TITLE]",
    startDate: "[START DATE]",
    endDate: "[END DATE]",
    achievements: ["[ACHIEVEMENT]", "[ACHIEVEMENT]"],
  },
];

export const principles: Principle[] = [
  { title: "Clean code", description: "Readable, typed, and reviewed — code written for the next engineer, not just the compiler." },
  { title: "Testing", description: "Unit and integration tests around data pipelines and model-serving logic, not just application code." },
  { title: "API design", description: "Explicit, versioned contracts with schema validation at every boundary." },
  { title: "Docker", description: "Reproducible environments from a laptop to a production container, every time." },
  { title: "CI/CD", description: "Automated build, test, and deploy pipelines so shipping is routine, not risky." },
  { title: "Observability", description: "Logging, metrics, and tracing so a system's behavior in production is never a mystery." },
  { title: "Model evaluation", description: "Metrics chosen to match the business objective, validated on held-out and out-of-time data." },
  { title: "LLM evaluation", description: "Structured evaluation of groundedness, relevance, and failure modes — not eyeballing outputs." },
  { title: "Security", description: "Least-privilege access, input validation, and safe execution boundaries around any generated code or queries." },
  { title: "Documentation", description: "Architecture decisions and runbooks written down, so systems outlive any one person's memory." },
];

export const architectureSteps: ArchitectureStep[] = [
  { label: "User", description: "A person asks a question or triggers a task." },
  { label: "Frontend", description: "A thin client captures intent and renders results." },
  { label: "API Layer", description: "A typed, versioned interface validates and routes each request." },
  { label: "AI Orchestration", description: "Reasoning, planning, and tool/model selection happen here." },
  { label: "Retrieval / Tools / Models", description: "Retrieval, external tools, and ML/LLM inference do the actual work." },
  { label: "Data / Vector Database", description: "Structured and vector data ground every retrieval and prediction." },
  { label: "Response", description: "A validated, structured result flows back to the user." },
];
