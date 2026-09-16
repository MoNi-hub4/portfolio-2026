import FadeIn from "../components/FadeIn";
import { services } from "../data";

export default function ServicesSection() {
  return (
    <section id="skills" className="relative rounded-t-[40px] bg-white px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32" aria-labelledby="services-title">
      <FadeIn><h2 id="services-title" className="section-heading mb-16 sm:mb-20 md:mb-28">What I do</h2></FadeIn>
      <div className="mx-auto max-w-5xl pb-10">
        {services.map((service, index) => (
          <FadeIn key={service.name} delay={index * 0.1} className="grid grid-cols-[auto_1fr] items-center gap-6 border-b border-ink/15 py-8 first:border-t sm:gap-12 sm:py-10 md:gap-20 md:py-12">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none tracking-tight" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="mb-3 text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">{service.name}</h3>
              <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">{service.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
