import { SectionLabel } from "@/components/layout/SectionLabel";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";
import { architectureSteps } from "@/data/experience";

export function Architecture() {
  return (
    <section id="architecture" className="border-t border-line py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionLabel index="04" title="Architecture" />
          <h2 className="text-display-lg font-semibold text-ink">
            How I build AI systems.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Every project follows the same shape: a thin client, a typed API
            boundary, an orchestration layer that reasons and routes, and a
            data layer that grounds every response. The pieces change; the
            discipline doesn't.
          </p>
        </div>

        <PipelineDiagram steps={architectureSteps} />
      </div>
    </section>
  );
}
