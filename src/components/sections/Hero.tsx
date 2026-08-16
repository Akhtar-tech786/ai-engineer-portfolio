import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { TerminalHero } from "@/components/ui/TerminalHero";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Subtle technical backdrop, faded at the edges */}
      <div
        className="bg-technical pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="section-shell relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="code-comment mb-5"
          >
            // {profile.role !== "[YOUR ROLE]" ? profile.role : "ai engineer / data scientist"}
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-display-xl font-semibold text-ink"
          >
            AI Engineer building{" "}
            <span className="text-signal">intelligent</span>, production-ready
            systems.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            I design and build end-to-end AI and data systems using Python,
            machine learning, LLMs, RAG, APIs, and modern cloud technologies.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              as="a"
              href="#projects"
              variant="primary"
              icon={<ArrowRight size={15} aria-hidden="true" />}
            >
              View Projects
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<FileDown size={15} aria-hidden="true" />}
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.ul
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex items-center gap-5"
          >
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-faint transition-colors hover:text-signal"
                aria-label="GitHub"
              >
                <Github size={17} aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-faint transition-colors hover:text-signal"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 text-sm text-ink-faint transition-colors hover:text-signal"
                aria-label="Email"
              >
                <Mail size={17} aria-hidden="true" />
                Email
              </a>
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TerminalHero />
        </motion.div>
      </div>
    </section>
  );
}
