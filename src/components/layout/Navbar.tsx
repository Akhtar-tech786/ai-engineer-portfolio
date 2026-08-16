import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { navItems, profile } from "@/data/profile";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Button } from "@/components/ui/Button";

/** Sticky navbar that compacts on scroll and highlights the active section. */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeHref = useScrollSpy(navItems.map((item) => item.href));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${
        isScrolled
          ? "border-line bg-paper/90 backdrop-blur-sm py-2.5"
          : "border-transparent bg-paper/0 py-4"
      }`}
    >
      <nav className="section-shell flex items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          {profile.name !== "[YOUR NAME]" ? profile.name : "yourname"}
          <span className="text-signal">.dev</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`rounded px-3 py-2 font-mono text-[13px] transition-colors ${
                  activeHref === item.href
                    ? "text-signal"
                    : "text-ink-soft hover:text-ink"
                }`}
                aria-current={activeHref === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            as="a"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<FileDown size={15} aria-hidden="true" />}
          >
            Resume
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-line p-2 text-ink md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="section-shell mt-3 flex flex-col gap-1 border-t border-line pt-3 pb-4 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`rounded px-3 py-2 font-mono text-sm ${
                activeHref === item.href ? "text-signal" : "text-ink-soft"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center gap-2 rounded-md border border-ink px-3 py-2 font-mono text-sm text-ink"
          >
            <FileDown size={15} aria-hidden="true" />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
