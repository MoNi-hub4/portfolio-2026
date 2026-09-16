import { ArrowUpRight } from "lucide-react";

export function ContactButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="contact-button whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-105 active:scale-95 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base">
      Contact Me
    </button>
  );
}

export function ProjectButton({ onPreview }: { onPreview: () => void }) {
  const className = "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-silver px-6 py-3 text-xs font-medium uppercase tracking-widest text-silver transition-colors hover:bg-silver/10 sm:px-10 sm:py-3.5 sm:text-base";
  const label = <>View Project <ArrowUpRight size={18} aria-hidden="true" /></>;

  return (
    <button type="button" className={className} onClick={onPreview}>{label}</button>
  );
}
