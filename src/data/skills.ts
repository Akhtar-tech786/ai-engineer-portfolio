import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: ["Python", "SQL", "Bash"],
  },
  {
    id: "data-ml",
    title: "Data & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "PyTorch"],
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    skills: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "AI Agents",
      "Prompt Engineering",
      "LLM Evaluation",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["FastAPI", "REST APIs", "Docker"],
  },
  {
    id: "mlops-cloud",
    title: "MLOps / Cloud",
    skills: ["Git", "GitHub Actions", "MLflow", "AWS", "CI/CD"],
  },
  {
    id: "ai-tools",
    title: "AI Tools & Infrastructure",
    skills: [
      "Hugging Face",
      "LangChain",
      "LlamaIndex",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
    ],
  },
];