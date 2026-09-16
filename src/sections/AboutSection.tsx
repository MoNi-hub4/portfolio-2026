import FadeIn from "../components/FadeIn";
import { Code2, Database, Layers, Terminal } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import { ContactButton } from "../components/Buttons";
import { aboutText, site } from "../data";

const decorations = [
  { Icon: Code2, position: "top-[4%] left-[2%] md:left-[4%]", x: -60 },
  { Icon: Terminal, position: "bottom-[8%] left-[3%] md:left-[8%]", x: -60 },
  { Icon: Database, position: "top-[4%] right-[2%] md:right-[4%]", x: 60 },
  { Icon: Layers, position: "bottom-[8%] right-[3%] md:right-[8%]", x: 60 },
];

export default function AboutSection({ onContact }: { onContact: () => void }) {
  return (
    <section id="about" className="relative isolate flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10" aria-labelledby="about-title">
      {decorations.map(({ Icon, position, x }, index) => (
        <div key={index} className={`pointer-events-none absolute -z-10 w-[85px] select-none opacity-20 sm:w-[120px] sm:opacity-40 lg:w-[170px] ${position}`} aria-hidden="true">
          <FadeIn delay={index * 0.1} x={x} y={0} duration={0.9}>
            <div className="developer-decoration"><Icon className="size-1/2" strokeWidth={1} /></div>
          </FadeIn>
        </div>
      ))}

      <div className="flex w-full flex-col items-center gap-10 sm:gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn y={40}><h2 id="about-title" className="hero-heading section-heading">About me</h2></FadeIn>
          <AnimatedText text={aboutText} />
        </div>
        <FadeIn className="grid w-full max-w-[680px] grid-cols-1 gap-5 border-y border-silver/15 py-6 text-center sm:grid-cols-3 sm:gap-4">
          <div><p className="mb-2 text-[10px] uppercase tracking-widest text-silver/55">Based in</p><p className="text-sm font-light">{site.location}</p></div>
          <div><p className="mb-2 text-[10px] uppercase tracking-widest text-silver/55">Work</p><p className="text-sm font-light">{site.currentRole} · {site.company}</p></div>
          <div><p className="mb-2 text-[10px] uppercase tracking-widest text-silver/55">Education</p><p className="text-sm font-light">{site.education}</p></div>
        </FadeIn>
        <FadeIn><ContactButton onClick={onContact} /></FadeIn>
      </div>
    </section>
  );
}
