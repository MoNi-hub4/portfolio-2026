import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Code2, Database, Terminal } from "lucide-react";

type CodeToken = { text: string; className?: string };
type CodeLine = { tokens: CodeToken[]; className?: string };

const lines: CodeLine[] = [
  { tokens: [{ text: "const ", className: "text-[#ca9ff0]" }, { text: "developer = {" }] },
  { tokens: [{ text: "  name: " }, { text: '"Monishan"', className: "text-[#d4d9b8]" }, { text: "," }] },
  { tokens: [{ text: "  builds: [" }, { text: '"web", "tools"', className: "text-[#b7cfdf]" }, { text: "]," }] },
  { tokens: [{ text: "  focus: " }, { text: '"data"', className: "text-[#d4d9b8]" }] },
  { tokens: [{ text: "};" }] },
  { tokens: [{ text: "// learn. build. improve." }], className: "mt-5 text-silver/50" },
  { tokens: [{ text: "developer.build()" }], className: "mt-3 text-[#caa7e4]" },
];

const code = lines.map(line => line.tokens.map(token => token.text).join("")).join("\n");
const typingSpeed = 35;
const lineBreakPause = 180;
const startDelay = 1200;

export default function DeveloperVisual() {
  const visual = useRef<HTMLDivElement>(null);
  const inView = useInView(visual, { amount: 0.15 });
  const reducedMotion = useReducedMotion();
  const [typedCharacters, setTypedCharacters] = useState(0);
  const visibleCharacters = reducedMotion ? code.length : typedCharacters;

  useEffect(() => {
    if (!inView || reducedMotion || typedCharacters >= code.length) return;
    const delay = typedCharacters === 0 ? startDelay : code[typedCharacters] === "\n" ? lineBreakPause : typingSpeed;
    const timer = window.setTimeout(() => setTypedCharacters(count => count + 1), delay);
    return () => window.clearTimeout(timer);
  }, [inView, reducedMotion, typedCharacters]);

  let lineStart = 0;

  return (
    <div ref={visual} className="developer-visual" aria-label="Decorative illustration of code connected to a database" role="img">
      <div aria-hidden="true">
        <div className="developer-orbit developer-orbit-one" />
        <div className="developer-orbit developer-orbit-two" />
        <div className="developer-window">
          <div className="flex items-center justify-between border-b border-silver/15 px-5 py-4">
            <div className="flex gap-1.5"><span className="size-2 rounded-full bg-[#e793a9]" /><span className="size-2 rounded-full bg-[#d5c393]" /><span className="size-2 rounded-full bg-[#91c2b8]" /></div>
            <span className="text-[10px] tracking-widest text-silver/50">portfolio.ts</span>
            <Terminal size={15} className="text-silver/50" />
          </div>
          <div className="developer-code font-mono">
            {lines.map((line, lineIndex) => {
              const text = line.tokens.map(token => token.text).join("");
              const count = Math.max(0, Math.min(text.length, visibleCharacters - lineStart));
              const hasCursor = !reducedMotion && visibleCharacters >= lineStart && visibleCharacters <= lineStart + text.length;
              lineStart += text.length + 1;
              let tokenStart = 0;

              return (
                <p key={lineIndex} className={`developer-code-line ${line.className ?? ""}`}>
                  {/* Reserve every line from the first frame so the illustration never jumps. */}
                  <span className="invisible">{text}</span>
                  <span className="developer-typed-text">
                    {line.tokens.map((token, tokenIndex) => {
                      const visibleText = token.text.slice(0, Math.max(0, count - tokenStart));
                      tokenStart += token.text.length;
                      return <span key={tokenIndex} className={token.className}>{visibleText}</span>;
                    })}
                    {hasCursor && <span className="developer-cursor" />}
                  </span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="developer-database"><Database strokeWidth={1.1} /><span>DATA</span></div>
        <div className="developer-code-badge"><Code2 strokeWidth={1.25} /></div>
      </div>
    </div>
  );
}
