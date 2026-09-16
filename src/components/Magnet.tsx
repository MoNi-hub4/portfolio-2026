import { useEffect, useRef, type PropsWithChildren } from "react";
import { useReducedMotion } from "framer-motion";

type Props = PropsWithChildren<{
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}>;

export default function Magnet({
  children, padding = 150, strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: Props) {
  const anchor = useRef<HTMLDivElement>(null);
  const moving = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrapper = anchor.current;
    const element = moving.current;
    if (!wrapper || !element) return;

    // A stable outer wrapper avoids measuring an already-transformed element.
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      element.style.transition = inactiveTransition;
      element.style.transform = "translate3d(0, 0, 0)";
    };
    const move = (event: PointerEvent) => {
      if (reducedMotion || !pointer.matches || event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const dx = event.clientX - rect.left - rect.width / 2;
        const dy = event.clientY - rect.top - rect.height / 2;
        const active = Math.abs(dx) < rect.width / 2 + padding
          && Math.abs(dy) < rect.height / 2 + padding;
        element.style.transition = active ? activeTransition : inactiveTransition;
        element.style.transform = active
          ? `translate3d(${dx / Math.max(1, strength)}px, ${dy / Math.max(1, strength)}px, 0)`
          : "translate3d(0, 0, 0)";
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", reset);
    window.addEventListener("scroll", reset, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    pointer.addEventListener("change", reset);

    return () => {
      reset();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", reset);
      document.documentElement.removeEventListener("pointerleave", reset);
      pointer.removeEventListener("change", reset);
    };
  }, [padding, strength, activeTransition, inactiveTransition, reducedMotion]);

  return (
    <div ref={anchor}>
      <div ref={moving} style={{ willChange: "transform" }}>{children}</div>
    </div>
  );
}
