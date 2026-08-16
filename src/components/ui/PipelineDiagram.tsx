import { motion } from "framer-motion";
import type { ArchitectureStep } from "@/types";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface PipelineDiagramProps {
  steps: ArchitectureStep[];
}

/**
 * Signature component: a real, labeled engineering pipeline diagram
 * (not a decorative shape) representing how requests flow through a
 * production AI system. Vertical stack on mobile, connected flow on desktop.
 */
export function PipelineDiagram({ steps }: PipelineDiagramProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ol className="relative flex flex-col gap-0" aria-label="AI system architecture, step by step">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li key={step.label} className="relative flex gap-5 pb-8 last:pb-0">
            {/* Connector rail */}
            <div className="flex flex-col items-center">
              <motion.span
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-signal bg-signal-soft font-mono text-xs font-medium text-signal"
                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.85 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              {!isLast && (
                <span className="mt-1 w-px flex-1 bg-gradient-to-b from-signal/50 to-line" aria-hidden="true" />
              )}
            </div>

            {/* Content */}
            <motion.div
              className="flex-1 rounded-lg border border-line bg-surface px-5 py-4"
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: -8 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <p className="font-mono text-sm font-medium text-ink">{step.label}</p>
              <p className="mt-1 text-sm text-ink-faint">{step.description}</p>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
