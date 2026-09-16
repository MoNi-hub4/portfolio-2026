import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";

function Character({
  value, index, total, progress,
}: { value: string; index: number; total: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.2, 1]);
  return (
    <span className="relative">
      <span className="invisible">{value}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>{value}</motion.span>
    </span>
  );
}

export default function AnimatedText({ text }: { text: string }) {
  const paragraph = useRef<HTMLParagraphElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: paragraph,
    offset: ["start 0.8", "end 0.2"],
  });
  let index = 0;

  return (
    <p ref={paragraph} className="relative mx-auto max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-silver">
      {reducedMotion ? text : (
        <>
          <span className="sr-only">{text}</span>
          <span aria-hidden="true">
            {/* Keep each word together; character spans must not split words. */}
            {text.split(/(\s+)/).map((word, wordIndex) => {
              const start = index;
              index += word.length;
              if (/^\s+$/.test(word)) return <span key={wordIndex}>{word}</span>;
              return (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {Array.from(word).map((char, charIndex) => (
                    <Character key={charIndex} value={char} index={start + charIndex} total={text.length} progress={scrollYProgress} />
                  ))}
                </span>
              );
            })}
          </span>
        </>
      )}
    </p>
  );
}
