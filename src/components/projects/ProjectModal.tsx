import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const DETAIL_SECTIONS: Array<{
  key: keyof Project["detail"];
  title: string;
}> = [
  { key: "problem", title: "Problem" },
  { key: "solution", title: "Solution" },
  { key: "architecture", title: "Architecture" },
  { key: "techStack", title: "Tech Stack" },
  { key: "dataset", title: "Dataset" },
  { key: "methodology", title: "Methodology" },
  { key: "evaluation", title: "Evaluation" },
  { key: "results", title: "Results" },
  { key: "challenges", title: "Engineering Challenges" },
  { key: "futureImprovements", title: "Future Improvements" },
];

/** Full project case-study modal, opened from a ProjectCard's "Case Study" button. */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll + close on Escape + basic focus trap entry point
  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/50 px-4 py-8 backdrop-blur-[2px] sm:py-16"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="w-full max-w-2xl rounded-lg border border-line bg-surface shadow-xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
              <div>
                <p className="code-comment">Case Study</p>
                <h2 id="project-modal-title" className="mt-1 text-xl font-semibold text-ink">
                  {project.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="rounded-md border border-line p-2 text-ink-soft transition-colors hover:text-ink"
                aria-label="Close case study"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
              <div className="mb-6 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft hover:text-signal"
                >
                  <Github size={14} aria-hidden="true" />
                  Repository
                </a>
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft hover:text-signal"
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>

              <dl className="space-y-6">
                {DETAIL_SECTIONS.map(({ key, title }) => {
                  const value = project.detail[key];
                  return (
                    <div key={key}>
                      <dt className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                        {title}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {Array.isArray(value) ? (
                          key === "techStack" ? (
                            <div className="flex flex-wrap gap-2">
                              {value.map((item) => (
                                <Tag key={item} label={item} />
                              ))}
                            </div>
                          ) : (
                            <ol className="list-decimal space-y-1.5 pl-4">
                              {value.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ol>
                          )
                        ) : (
                          <p>{value}</p>
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
