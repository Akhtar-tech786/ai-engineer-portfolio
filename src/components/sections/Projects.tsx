import { useState } from "react";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-t border-line py-20 md:py-28">
      <div className="section-shell">
        <SectionLabel index="03" title="Projects" />
        <h2 className="text-display-lg max-w-2xl font-semibold text-ink">
          Systems I've designed and shipped, not just notebooks.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-soft">
          Each project below links to source code and, where available, a
          live demo and a full engineering case study.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
