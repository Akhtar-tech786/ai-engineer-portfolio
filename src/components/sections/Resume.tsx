import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Resume() {
  return (
    <section id="resume" className="border-t border-line py-20 md:py-28">
      <div className="section-shell">
        <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-line bg-surface px-8 py-10 md:flex-row md:items-center md:px-12">
          <div>
            <SectionLabel index="07" title="Resume" />
            <h2 className="text-display-lg font-semibold text-ink">
              Want the full picture?
            </h2>
            <p className="mt-3 max-w-md text-base text-ink-soft">
              Download a copy of my resume, or reach out directly.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <Button
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              icon={<FileDown size={16} aria-hidden="true" />}
            >
              Download Resume
            </Button>

            <div className="flex items-center gap-4 pl-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-faint transition-colors hover:text-signal"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-faint transition-colors hover:text-signal"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-ink-faint transition-colors hover:text-signal"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
