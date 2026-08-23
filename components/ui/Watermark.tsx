// Giant faint wordmark used as background texture behind a section headline
// or in the footer, borrowed from Runway Media Co. and Primitive Marketing's
// use of oversized ghost type for depth.
export function Watermark({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none whitespace-nowrap font-display font-extrabold leading-none tracking-tight ${className}`}
      style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}
    >
      {text}
    </div>
  );
}
