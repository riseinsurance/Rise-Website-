import type { ReactNode } from "react";

// Hand-drawn underline that draws itself in below a word on load — the
// stroke sweeps left to right, then doubles back right to left at a
// slightly different height, the way a marker underlines something twice
// in one motion. Uses pathLength=1 so the draw animation (stroke-dasharray/
// offset) doesn't need real path-length math, same technique as CircleHighlight.
export function UnderlineHighlight({
  children,
  className = "",
  strokeColor = "white",
}: {
  children: ReactNode;
  className?: string;
  strokeColor?: string;
}) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className={`relative z-10 ${className}`}>{children}</span>
      <svg
        viewBox="0 0 240 40"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[4%] -bottom-[0.22em] h-[0.5em] w-[108%]"
      >
        <path
          d="M5,18 C40,10 80,24 120,16 C160,8 200,22 235,14 C200,28 160,34 120,26 C80,18 40,30 5,24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          pathLength={1}
          className="animate-draw-underline"
        />
      </svg>
    </span>
  );
}
