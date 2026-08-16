import { motion } from "framer-motion";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { skillCategories } from "@/data/skills";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Skills() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="border-t border-line py-20 md:py-28">
      <div className="section-shell">
        <SectionLabel index="02" title="Skills" />
        <h2 className="text-display-lg max-w-2xl font-semibold text-ink">
          A stack built for shipping AI, end to end.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-surface p-6"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-line px-2.5 py-1 text-sm text-ink-soft"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
