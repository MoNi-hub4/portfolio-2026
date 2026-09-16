import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";
import { technologies } from "../data";

const tabletQuery = "(min-width: 768px)";
const desktopQuery = "(min-width: 1024px)";

function getRowCount() {
  return window.matchMedia(desktopQuery).matches ? 2 : window.matchMedia(tabletQuery).matches ? 3 : 4;
}

function subscribeToViewport(onChange: () => void) {
  const queries = [window.matchMedia(tabletQuery), window.matchMedia(desktopQuery)];
  queries.forEach(query => query.addEventListener("change", onChange));
  return () => queries.forEach(query => query.removeEventListener("change", onChange));
}

export default function MarqueeSection() {
  const section = useRef<HTMLElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rowCount = useSyncExternalStore(subscribeToViewport, getRowCount, () => 4);
  const rows = useMemo(() => {
    const itemsPerRow = Math.ceil(technologies.length / rowCount);
    return Array.from({ length: rowCount }, (_, index) => technologies.slice(index * itemsPerRow, (index + 1) * itemsPerRow));
  }, [rowCount]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = section.current;
    const tracks = trackRefs.current.slice(0, rowCount);
    if (!element || tracks.some((track) => !track)) return;
    let frame = 0;
    let sectionTop = 0;
    let visible = true;

    const update = () => {
      frame = 0;
      if (!visible) return;
      const offset = reducedMotion ? 0 : (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      tracks.forEach((track, index) => {
        if (!track) return;
        const tile = track.firstElementChild as HTMLElement;
        const cycleWidth = rows[index].length * (tile.offsetWidth + 12);
        const delta = (index % 2 === 0 ? offset - 200 : -(offset - 200)) % cycleWidth;
        // Start in the middle copy; wrapping by one full copy is invisible.
        track.style.transform = `translate3d(${-cycleWidth + delta}px, 0, 0)`;
      });
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const measure = () => {
      sectionTop = element.getBoundingClientRect().top + window.scrollY;
      requestUpdate();
    };
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) measure();
    }, { rootMargin: "300px" });
    const resize = new ResizeObserver(measure);
    intersection.observe(element);
    resize.observe(element);
    measure();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      intersection.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", measure);
    };
  }, [reducedMotion, rowCount, rows]);

  return (
    <section ref={section} className="overflow-hidden bg-ink pb-10 pt-20 sm:pt-24 md:pt-28" aria-labelledby="tools-title">
      <h2 id="tools-title" className="mb-8 px-6 text-xs font-light uppercase tracking-[0.22em] text-silver/55 md:px-10">Tools I work with &amp; learn</h2>
      <ul className="sr-only">{technologies.map(item => <li key={item.name}>{item.name}: {item.use}</li>)}</ul>
      <div className="flex flex-col gap-3" aria-hidden="true">
        {rows.map((items, row) => (
          <div ref={element => { trackRefs.current[row] = element; }} key={row} data-tool-row={row + 1} className="flex w-max gap-3 will-change-transform">
            {[...items, ...items, ...items].map((item, index) => (
              <div key={`${row}-${index}`} className="flex h-[152px] w-[280px] shrink-0 flex-col justify-between rounded-2xl border border-silver/10 bg-gradient-to-br from-[#1e1c29] to-[#111216] p-5 sm:h-[180px] sm:w-[340px] sm:p-6">
                <div className="flex items-start justify-between">
                  <img
                    src={item.logo}
                    alt=""
                    width={40}
                    height={40}
                    decoding="async"
                    draggable={false}
                    className={`h-9 shrink-0 object-contain object-left sm:h-10 ${item.logoClassName ?? "w-9 sm:w-10"}`}
                  />
                  <span className="text-[10px] text-silver/35">{String((index % items.length) + 1).padStart(2, "0")}</span>
                </div>
                <div><p className="text-2xl font-medium tracking-tight text-silver sm:text-3xl">{item.name}</p><p className="mt-1 text-xs font-light uppercase tracking-wider text-silver/55">{item.use}</p></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
