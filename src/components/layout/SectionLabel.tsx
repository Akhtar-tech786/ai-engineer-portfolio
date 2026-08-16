interface SectionLabelProps {
  index: string; // e.g. "02"
  title: string;
}

/**
 * Code-comment-style section eyebrow (`// 02 — Projects`). A structural
 * device grounded in the subject matter: engineers read code comments.
 */
export function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-baseline gap-2">
      <span className="font-mono text-xs text-ink-faint">{"//"}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
        {index} — {title}
      </h2>
    </div>
  );
}
