import PortfolioImage from "./PortfolioImage";
import type { Project } from "../data";

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <div className="project-images flex min-h-0 flex-col gap-4">
      <div className="project-cover flex min-h-0 flex-1 flex-col overflow-hidden rounded-[22px] border border-silver/15 bg-[#16151d] sm:rounded-[32px]">
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-silver/10 px-4 py-3 sm:px-5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-[#c797b8]" />
            <span className="size-2 rounded-full bg-[#c8ac80]" />
            <span className="size-2 rounded-full bg-[#89b5a9]" />
          </div>
          <span className="text-[9px] font-light uppercase tracking-[0.14em] text-silver/65 sm:text-[10px]">{project.sample ? "Sample screenshot" : "Project screenshot"}</span>
        </div>
        <PortfolioImage
          src={project.images[0]}
          alt={`${project.sample ? `${project.sample.name} sample UI for` : "Screenshot of"} ${project.name}`}
          label={project.name}
          fit="contain"
          className="project-cover-image min-h-0 flex-1"
        />
      </div>
      <div className="flex shrink-0 items-center justify-between gap-6 px-1">
        <p className="max-w-xl text-xs font-light leading-relaxed text-silver/70 sm:text-sm">{project.teaser}</p>
        <p className="hidden shrink-0 text-[10px] uppercase tracking-wider text-silver/45 lg:block">{project.stack.slice(0, 3).join(" / ")}</p>
      </div>
    </div>
  );
}
