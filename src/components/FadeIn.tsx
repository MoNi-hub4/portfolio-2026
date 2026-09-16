import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

// Create these once, outside render, so animations do not remount children.
const elements = {
  div: motion.create("div"),
  nav: motion.create("nav"),
  h1: motion.create("h1"),
  h2: motion.create("h2"),
  p: motion.create("p"),
};

type Props = PropsWithChildren<{
  as?: keyof typeof elements;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}>;

export default function FadeIn({
  as = "div", children, className, delay = 0,
  duration = 0.7, x = 0, y = 30,
}: Props) {
  const reducedMotion = useReducedMotion();
  const Component = elements[as];

  return (
    <Component
      className={className}
      initial={reducedMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  );
}
