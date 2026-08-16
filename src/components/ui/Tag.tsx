interface TagProps {
  label: string;
}

/** Small monospace technology tag used on project cards and modals. */
export function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-surface px-2 py-1 font-mono text-[11px] leading-none text-ink-soft">
      {label}
    </span>
  );
}
