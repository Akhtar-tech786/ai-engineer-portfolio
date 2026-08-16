import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpenCaseStudy }: ProjectCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.article
      className="group flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-ink/30"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, delay: (index % 3) * 0.06 }}
    >
      <span className="font-mono text-xs text-ink-faint">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Tag label={tech} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition-colors hover:text-signal"
        >
          <Github size={14} aria-hidden="true" />
          Code
        </a>

        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition-colors hover:text-signal"
          >
            <ExternalLink size={14} aria-hidden="true" />
            Live Demo
          </a>
        )}

        {project.hasCaseStudy && (
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition-colors hover:text-signal"
          >
            <FileText size={14} aria-hidden="true" />
            Case Study
          </button>
        )}
      </div>
    </motion.article>
  );
}
