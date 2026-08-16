import { motion } from "framer-motion";
import {
  Code2,
  FlaskConical,
  Network,
  Container,
  GitBranch,
  Activity,
  Target,
  ClipboardCheck,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { principles } from "@/data/experience";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ICONS = [
  Code2,
  FlaskConical,
  Network,
  Container,
  GitBranch,
  Activity,
  Target,
  ClipboardCheck,
  ShieldCheck,
  BookOpen,
];

export function Principles() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="principles" className="border-t border-line py-20 md:py-28">
      <div className="section-shell">
        <SectionLabel index="06" title="Engineering Principles" />
        <h2 className="text-display-lg max-w-2xl font-semibold text-ink">
          I build production systems, not just notebooks.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((principle, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <motion.div
                key={principle.title}
                className="bg-surface p-5"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.3, delay: (index % 5) * 0.05 }}
              >
                <Icon size={18} className="text-signal" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-semibold text-ink">{principle.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
