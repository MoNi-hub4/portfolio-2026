import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import DeveloperVisual from "../components/DeveloperVisual";
import { ContactButton } from "../components/Buttons";
import { site } from "../data";

export default function HeroSection({ onContact }: { onContact: () => void }) {
  return (
    <section className="hero-section relative isolate flex h-screen min-h-[600px] flex-col bg-ink" aria-label="Introduction">
      <FadeIn as="nav" y={-20} className="relative z-20 flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-silver md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">
        <a className="transition-opacity duration-200 hover:opacity-70" href="#about">About</a>
        <a className="transition-opacity duration-200 hover:opacity-70" href="#skills">Skills</a>
        <a className="transition-opacity duration-200 hover:opacity-70" href="#projects">Projects</a>
        <a className="transition-opacity duration-200 hover:opacity-70" href="#contact" onClick={(event) => { event.preventDefault(); onContact(); }}>Contact</a>
      </FadeIn>

      <div className="mt-8 overflow-hidden sm:mt-6 md:mt-2">
        <FadeIn as="h1" delay={0.15} y={40} className="hero-heading w-full whitespace-nowrap text-center text-[10.3vw] font-black uppercase leading-none tracking-tight sm:text-[10.5vw] md:text-[10.7vw] lg:text-[10.9vw]">
          Hi, I&apos;m {site.name}
        </FadeIn>
      </div>

      {/* Keep positioning transforms on a separate wrapper from animation. */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[min(88vw,320px)] -translate-x-1/2 -translate-y-1/2 sm:bottom-12 sm:top-auto sm:w-[400px] sm:translate-y-0 md:w-[460px] lg:w-[560px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <DeveloperVisual />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn as="p" delay={0.35} y={20} className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-silver sm:max-w-[220px] md:max-w-[260px]">
          {site.heroIntro}
        </FadeIn>
        <FadeIn delay={0.5} y={20}><ContactButton onClick={onContact} /></FadeIn>
      </div>
    </section>
  );
}
