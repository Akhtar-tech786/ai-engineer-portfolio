import { SectionLabel } from "@/components/layout/SectionLabel";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-shell max-w-3xl">
        <SectionLabel index="01" title="About" />
        <h2 className="text-display-lg font-semibold text-ink">
          I build the systems behind the AI, not just the prompts.
        </h2>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
          <p>
            I'm {profile.name !== "Akhtar Ali" ? profile.name : "an AI engineer and data scientist"}
            {" "}— My journey into AI engineering began with a strong interest in data, machine learning, and building intelligent 
            systems. Through my work and studies, I developed a foundation in AI and software engineering, which led me to focus on
            production AI—turning models and ideas into reliable, scalable systems that solve real-world problems.
          </p>
          <p>
            I specialize in taking machine learning and LLM-based systems
            from a working notebook to something that can actually run in
            production: typed APIs, containerized services, evaluation
            harnesses, and monitoring — not just a model that scores well
            once.
          </p>
          <p>
            The problems I enjoy most sit at the intersection of data
            engineering and AI engineering: retrieval-augmented generation,
            tool-using agents, and classical ML pipelines that need to be
            reliable, observable, and cheap to run at scale.
          </p>
        </div>
      </div>
    </section>
  );
}
