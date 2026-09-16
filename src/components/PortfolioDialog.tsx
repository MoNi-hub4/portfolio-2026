import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import ProjectGallery from "./ProjectGallery";
import { site, type Project } from "../data";

export type DialogContent = { type: "contact" } | { type: "project"; project: Project } | null;

export default function PortfolioDialog({ content, onClose }: { content: DialogContent; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!element || !content) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    element.scrollTop = 0;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [content]);

  return (
    <dialog id="contact" ref={dialog} aria-labelledby="dialog-title" className={`portfolio-dialog rounded-[32px] border border-silver/20 bg-ink p-5 text-silver shadow-2xl sm:p-8 ${content?.type === "project" ? "project-dialog" : ""}`} onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div onClick={(event) => event.stopPropagation()}>
        <button type="button" autoFocus onClick={onClose} className="sticky top-0 z-20 ml-auto flex size-11 items-center justify-center rounded-full border border-silver/30 bg-ink transition-colors hover:bg-[#242129]" aria-label="Close dialog"><X aria-hidden="true" size={20} /></button>
        {content?.type === "contact" && (
          <div className="py-8">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-silver/60">{site.fullName} · {site.location}</p>
            <h2 id="dialog-title" className="mb-6 text-4xl font-black uppercase leading-tight sm:text-5xl">Let&apos;s build something useful.</h2>
            {site.email ? (
              <a href={`mailto:${site.email}`} className="inline-flex max-w-full items-center gap-3 break-all text-lg underline decoration-silver/40 underline-offset-8">{site.email}<ArrowUpRight size={20} className="shrink-0" aria-hidden="true" /></a>
            ) : (
              <p className="text-lg font-light leading-relaxed text-silver/70">My contact details will be listed here soon. I&apos;d love to hear about your project, a collaboration, or an opportunity to keep learning and building.</p>
            )}
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-silver/80">
              {site.githubUrl && <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">GitHub</a>}
              {site.linkedinUrl && <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">LinkedIn</a>}
            </div>
          </div>
        )}
        {content?.type === "project" && (
          <div className="pt-4">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-silver/60">{content.project.category} / Project details</p>
            <h2 id="dialog-title" className="mb-6 text-3xl font-black uppercase sm:text-4xl">{content.project.name}</h2>
            <ProjectGallery project={content.project} />
            <div className="mt-8 grid gap-6 border-t border-silver/15 pt-6 md:grid-cols-[1.4fr_1fr] md:gap-10">
              <div>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider">About the project</h3>
                <p className="mb-5 text-sm font-light leading-relaxed text-silver/75">{content.project.summary}</p>
                <div className="flex flex-wrap gap-2">{content.project.stack.map(item => <span key={item} className="rounded-full border border-silver/20 px-3 py-1 text-xs text-silver/80">{item}</span>)}</div>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider">Key features</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm font-light leading-relaxed text-silver/75">{content.project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
              </div>
            </div>
            {content.project.sourceUrl && <a href={content.project.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-silver/30 px-5 py-2 text-sm">View source <ArrowUpRight size={16} aria-hidden="true" /></a>}
          </div>
        )}
      </div>
    </dialog>
  );
}
