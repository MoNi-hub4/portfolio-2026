import { Code2, Database, Terminal } from "lucide-react";

export default function DeveloperVisual() {
  return (
    <div className="developer-visual" aria-label="Decorative illustration of code connected to a database" role="img">
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
            <p><span className="text-[#ca9ff0]">const</span> developer = {'{'}</p>
            <p className="pl-4">name: <span className="text-[#d4d9b8]">"Monishan"</span>,</p>
            <p className="pl-4">builds: [<span className="text-[#b7cfdf]">"web", "tools"</span>],</p>
            <p className="pl-4">focus: <span className="text-[#d4d9b8]">"data"</span></p>
            <p>{'};'}</p>
            <p className="mt-5 text-silver/50">// learn. build. improve.</p>
            <p className="mt-3 text-[#caa7e4]">developer.build()<span className="ml-1 inline-block h-3 w-1.5 bg-[#caa7e4] align-middle" /></p>
          </div>
        </div>
        <div className="developer-database"><Database strokeWidth={1.1} /><span>DATA</span></div>
        <div className="developer-code-badge"><Code2 strokeWidth={1.25} /></div>
      </div>
    </div>
  );
}
