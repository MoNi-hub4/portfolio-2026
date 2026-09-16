import { ArrowUpRight, Maximize2 } from "lucide-react";
import PortfolioImage from "./PortfolioImage";
import type { Project } from "../data";

const captions = ["Overview", "Detail view", "Additional view"];

export default function ProjectGallery({ project }: { project: Project }) {
  const liveUrl = project.liveUrl || project.sample?.liveUrl;
  const isSampleLink = !project.liveUrl && Boolean(project.sample);

  return (
    <>
      <div className="mb-6 rounded-2xl border border-silver/15 bg-[#18151f] p-4 sm:px-5">
        <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-silver/55">{isSampleLink ? "Sample live website" : "Live website"}</p>
        {liveUrl ? (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-live-link group flex items-center justify-between gap-4 text-sm text-[#dac5ed] sm:text-base">
            <span className="min-w-0 break-all underline decoration-[#dac5ed]/30 underline-offset-4 group-hover:decoration-[#dac5ed]">{liveUrl}</span>
            <ArrowUpRight size={22} className="shrink-0" aria-hidden="true" />
          </a>
        ) : (
          <p className="text-sm font-light text-silver/65">Live website coming soon.</p>
        )}
      </div>

      <div className="project-gallery grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr]">
        {project.images.map((src, index) => (
          <figure key={src} className={`flex min-w-0 flex-col gap-2 ${index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}>
            <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} screenshot ${index + 1} in a new tab`} className={`group relative block min-h-0 overflow-hidden rounded-2xl border border-silver/15 bg-[#15171c] ${index === 0 ? "aspect-[16/10] lg:aspect-auto lg:flex-1" : "aspect-[16/10]"}`}>
              <PortfolioImage
                src={src}
                alt={`${project.sample ? `${project.sample.name} sample UI` : project.name} — ${captions[index].toLowerCase()}`}
                label={`${project.name} — ${captions[index]}`}
                fit="contain"
                eager
                className="size-full"
              />
              <span className="absolute right-3 top-3 rounded-lg border border-white/20 bg-black/65 p-2 text-white opacity-80 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><Maximize2 size={15} aria-hidden="true" /></span>
            </a>
            <figcaption className="flex items-center gap-3 px-1 text-[10px] font-light uppercase tracking-[0.14em] text-silver/55"><span className="text-[#b79dcd]">0{index + 1}</span>{captions[index]}</figcaption>
          </figure>
        ))}
      </div>

      {project.sample && (
        <p className="mt-4 text-xs font-light leading-relaxed text-silver/50">Sample screenshots from <a href={project.sample.repositoryUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-silver">{project.sample.name}</a>. Project screenshots coming soon.</p>
      )}
    </>
  );
}
