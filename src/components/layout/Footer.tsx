import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="section-shell flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm text-ink">
            © {year} {profile.name}
          </p>
          <p className="mt-1 text-sm text-ink-faint">{profile.role}</p>
        </div>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-signal"
              aria-label="GitHub"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-signal"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-signal"
              aria-label="Email"
            >
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
