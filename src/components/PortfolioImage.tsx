import { useState } from "react";
import { Box } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  eager?: boolean;
  fit?: "cover" | "contain";
};

export default function PortfolioImage({
  src, alt, className = "", label = "Project image", eager = false, fit = "cover",
}: Props) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const failed = failedSource === src;

  return (
    <div className={`relative isolate overflow-hidden bg-[#15171c] ${className}`}>
      {failed ? (
        <div role={alt ? "img" : undefined} aria-label={alt ? `${alt} — placeholder` : undefined} aria-hidden={!alt || undefined} className="image-fallback absolute inset-0">
          <div className="fallback-orb" aria-hidden="true"><span /><span /><span /></div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-2 text-xs uppercase tracking-[0.15em] text-silver/75 sm:bottom-8 sm:left-8 sm:right-8 sm:text-sm">
            <span>{label}</span>
            <Box size={20} aria-hidden="true" />
          </div>
        </div>
      ) : (
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" draggable={false} onError={() => setFailedSource(src)} className={`block size-full ${fit === "contain" ? "object-contain" : "object-cover"}`} />
      )}
    </div>
  );
}
