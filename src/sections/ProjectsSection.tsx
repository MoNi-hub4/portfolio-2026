import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import FadeIn from "../components/FadeIn";
import ProjectOverview from "../components/ProjectOverview";
import { ProjectButton } from "../components/Buttons";
import { explorations, projects, type Project } from "../data";

type CardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onPreview: (project: Project) => void;
};

function ProjectCard({ project, index, total, progress, onPreview }: CardProps) {
  const reducedMotion = useReducedMotion();
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="project-slot" style={{ "--card-offset": `${index * 28}px`, zIndex: index + 1 } as CSSProperties}>
      <motion.article className="project-card origin-top rounded-[40px] border-2 border-silver bg-ink p-4 text-silver sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8" style={{ scale: reducedMotion ? 1 : scale }} aria-labelledby={`project-${project.id}`}>
        <div className="project-card-header mb-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 sm:mb-6 md:mb-8">
          <div className="flex min-w-0 items-center gap-5 sm:gap-8">
            <span className="text-[clamp(3rem,8vw,120px)] font-black leading-none tracking-tight" aria-hidden="true">{project.id}</span>
            <div className="min-w-0">
              <p className="mb-1 text-xs font-light uppercase tracking-[0.15em] text-silver/60 sm:text-sm">{project.category}</p>
              <h3 id={`project-${project.id}`} className="text-[clamp(1.25rem,2.4vw,2.75rem)] font-medium uppercase leading-tight">{project.name}</h3>
            </div>
          </div>
          <ProjectButton onPreview={() => onPreview(project)} />
        </div>
        <ProjectOverview project={project} />
      </motion.article>
    </div>
  );
}

export default function ProjectsSection({ onPreview }: { onPreview: (project: Project) => void }) {
  const stack = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stack, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32" aria-labelledby="projects-title">
      <FadeIn><h2 id="projects-title" className="hero-heading section-heading mb-6">Projects</h2><p className="mx-auto mb-16 max-w-xl text-center text-sm font-light leading-relaxed text-silver/65 sm:mb-20 sm:text-base md:mb-28">Personal builds and prototypes inspired by everyday business problems.</p></FadeIn>
      {/* Sticky siblings share one tall parent, so earlier cards remain behind later cards. */}
      <div ref={stack} className="project-stack relative mx-auto max-w-[1440px]">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} total={projects.length} progress={scrollYProgress} onPreview={onPreview} />
        ))}
      </div>
      <div className="mx-auto mt-4 max-w-[1440px]">
        <FadeIn><h3 className="mb-8 text-xl font-medium uppercase tracking-wide sm:text-2xl">Also building &amp; exploring</h3></FadeIn>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {explorations.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.08} className="flex flex-col rounded-[28px] border border-silver/15 bg-[#111115] p-6 sm:p-8">
              <p className="mb-4 text-[10px] uppercase tracking-[0.15em] text-[#c5abd9]">{item.category}</p>
              <h4 className="mb-4 text-xl font-medium leading-tight">{item.name}</h4>
              <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-silver/65">{item.summary}</p>
              <p className="text-xs font-light text-silver/50">{item.stack}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
