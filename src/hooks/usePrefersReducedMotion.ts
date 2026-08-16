import { useEffect, useState } from "react";

/**
 * Tracks the user's `prefers-reduced-motion` OS setting so components can
 * disable non-essential animation. Defaults to `false` (motion allowed)
 * during SSR/first paint, then syncs on mount.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(query.matches);

    const handleChange = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return prefersReduced;
}
