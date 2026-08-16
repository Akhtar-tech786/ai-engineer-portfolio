import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { profile } from "@/data/profile";

const CONTACT_LINKS = [
  { label: "Email", href: (p: typeof profile) => `mailto:${p.email}`, icon: Mail, value: (p: typeof profile) => p.email },
  { label: "LinkedIn", href: (p: typeof profile) => p.linkedin, icon: Linkedin, value: () => "Connect on LinkedIn" },
  { label: "GitHub", href: (p: typeof profile) => p.github, icon: Github, value: () => "View my repositories" },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 md:py-28">
      <div className="section-shell max-w-2xl">
        <SectionLabel index="08" title="Contact" />
        <h2 className="text-display-lg font-semibold text-ink">
          Let's build something intelligent.
        </h2>
        <p className="mt-4 text-base text-ink-soft">
          Open to AI engineering and data science roles — reach out through
          any of the channels below.
        </p>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {CONTACT_LINKS.map(({ label, href, icon: Icon, value }) => (
            <li key={label}>
              <a
                href={href(profile)}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-signal"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className="text-ink-faint group-hover:text-signal" aria-hidden="true" />
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
                      {label}
                    </span>
                    <span className="block text-base text-ink group-hover:text-signal">
                      {value(profile)}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
