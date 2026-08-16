import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LINES = [
  "$ initialize_pipeline()",
  "> loading data sources...        [ok]",
  "> building feature pipeline...   [ok]",
  "> orchestrating agents...        [ok]",
  "> serving predictions...         [ready]",
];

/**
 * The hero's signature visual: a quiet, terminal-style build log that types
 * itself out once on load. Grounded in the subject (an engineer who ships
 * systems) rather than a decorative gradient or stock illustration.
 * Fully static (all lines shown at once) when reduced motion is preferred.
 */
export function TerminalHero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visibleLines, setVisibleLines] = useState(prefersReducedMotion ? LINES.length : 0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleLines(LINES.length);
      return;
    }
    if (visibleLines >= LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((n) => n + 1), 420);
    return () => clearTimeout(timer);
  }, [visibleLines, prefersReducedMotion]);

  return (
    <div
      className="w-full rounded-lg border border-line bg-ink shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
      role="img"
      aria-label="Terminal window showing a simulated AI pipeline initializing successfully"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 font-mono text-[11px] text-white/40">pipeline.sh</span>
      </div>
      <div className="px-5 py-6 font-mono text-[13px] leading-7 text-white/80 sm:text-sm">
        {LINES.slice(0, visibleLines).map((line, index) => (
          <div key={line} className={index === 0 ? "text-white" : "text-signal-bright"}>
            {line}
          </div>
        ))}
        {visibleLines < LINES.length && (
          <span className="inline-block h-4 w-2 translate-y-1 bg-signal-bright animate-blink" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
