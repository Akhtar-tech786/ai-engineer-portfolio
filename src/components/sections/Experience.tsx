import { motion } from "framer-motion";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { experienceItems } from "@/data/experience";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Experience() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="experience" className="border-t border-line py-20 md:py-28">
      <div className="section-shell max-w-3xl">
        <SectionLabel index="05" title="Experience" />
        <h2 className="text-display-lg font-semibold text-ink">Where I've worked.</h2>

        <ol className="mt-12 space-y-10 border-l border-line pl-8">
          {experienceItems.map((item, index) => (
            <motion.li
              key={`${item.company}-${index}`}
              className="relative"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-signal"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-ink-faint">
                {item.startDate} — {item.endDate}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.role}</h3>
              <p className="text-sm text-ink-soft">{item.company}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink-soft">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-signal" aria-hidden="true">
                      —
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
