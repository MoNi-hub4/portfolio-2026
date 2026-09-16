import { ArrowUp, Code2 } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { ContactButton } from "../components/Buttons";
import { site } from "../data";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

type FooterSectionProps = { onContact: () => void };

export default function FooterSection({ onContact }: FooterSectionProps) {
  const year = new Date().getFullYear();
  const linkClassName = "inline-flex min-h-11 items-center text-sm font-medium uppercase tracking-wider text-silver/70 transition-colors duration-200 hover:text-silver";

  return (
    <footer className="relative isolate overflow-hidden border-t border-silver/15 bg-ink px-6 pb-6 pt-16 text-silver sm:px-8 sm:pb-8 sm:pt-20 md:px-10 lg:pt-24" aria-labelledby="footer-title">
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 size-80 rounded-full bg-[#7621b0]/10 blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-[1440px]">
        {/* Mobile: stacked. Tablet and desktop: headline beside the contact CTA. */}
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-8 lg:grid-cols-[1.8fr_1fr] lg:gap-20">
          <FadeIn y={30}>
            <p className="mb-6 text-xs font-light uppercase tracking-[0.2em] text-silver/60 sm:mb-8 sm:text-sm">
              Have a project in mind?
            </p>
            <h2 id="footer-title" className="hero-heading text-[clamp(3.5rem,18vw,5rem)] font-black uppercase leading-[0.9] tracking-tight sm:text-[clamp(5rem,10vw,10rem)]">
              Let&apos;s<br />build.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={25} className="flex flex-col items-start gap-6 md:pb-2 lg:gap-8">
            <p className="max-w-[320px] text-base font-light leading-relaxed text-silver/65 sm:text-lg lg:text-xl">
              Have a web app, a workflow, or a useful idea in mind? Let&apos;s talk about what we can build.
            </p>
            <ContactButton onClick={onContact} />
            {site.email && (
              <a href={`mailto:${site.email}`} className="max-w-full break-all text-sm font-light text-silver/65 underline decoration-silver/25 underline-offset-4 transition-colors hover:text-silver">
                {site.email}
              </a>
            )}
          </FadeIn>
        </div>

        <FadeIn delay={0.1} y={20} className="mt-12 border-t border-silver/15 pt-8 sm:mt-16 sm:pt-10 lg:mt-20">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-8">
            <a href="#top" aria-label={`${site.name}, back to top`} className="flex w-fit items-center gap-3 rounded-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-silver/20">
                <Code2 size={20} strokeWidth={1.25} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-2xl font-black uppercase leading-none tracking-tight sm:text-3xl">{site.name}.</span>
                <span className="mt-1.5 block text-[10px] font-light uppercase tracking-[0.15em] text-silver/55 sm:text-xs">{site.role}</span>
              </span>
            </a>

            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-1 sm:flex sm:flex-wrap sm:gap-x-8 md:gap-x-6 lg:gap-x-10">
              {footerLinks.map(({ label, href }) => (
                <a key={href} href={href} className={linkClassName}>{label}</a>
              ))}
              <button type="button" onClick={onContact} className={linkClassName}>Contact</button>
            </nav>
          </div>

          <div className="mt-7 flex flex-col-reverse items-start gap-5 border-t border-silver/10 pt-5 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-6">
            <p className="text-xs font-light leading-relaxed text-silver/55 sm:text-sm">
              &copy; {year} {site.fullName}. All rights reserved.
            </p>
            <a href="#top" className="group inline-flex min-h-11 items-center gap-3 rounded-sm text-xs font-medium uppercase tracking-widest text-silver/70 transition-colors hover:text-silver">
              Back to top
              <span className="flex size-9 items-center justify-center rounded-full border border-silver/20 transition-colors group-hover:border-silver/60 group-hover:bg-silver/5">
                <ArrowUp size={16} aria-hidden="true" />
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
