// Central type definitions shared across the portfolio.

export interface NavItem {
  label: string;
  href: string; // section id, e.g. "#projects"
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface ProjectDetail {
  problem: string;
  solution: string;
  architecture: string[]; // ordered pipeline steps
  techStack: string[];
  dataset: string;
  methodology: string[];
  evaluation: string;
  results: string;
  challenges: string[];
  futureImprovements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string; // placeholder until filled in
  liveDemoUrl?: string; // placeholder, optional
  hasCaseStudy: boolean;
  detail: ProjectDetail;
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface ArchitectureStep {
  label: string;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}
