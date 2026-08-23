import type { ReactNode } from "react";

// Hand-drawn circle that draws itself around a word on load — an emphasis
// device for one key word in a headline. Uses pathLength=1 so the draw
// animation (stroke-dasharray/offset) doesn't need real path-length math.
// The ring is always white regardless of the word's own text color.
export function CircleHighlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className={`relative z-10 ${className}`}>{children}</span>
      <svg
        viewBox="0 0 240 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[10%] -inset-y-[20%] h-[140%] w-[120%]"
      >
        <path
          d="M22,52 C15,20 55,6 120,5 C185,4 228,18 220,50 C227,82 182,96 120,96 C58,96 15,84 22,52 Z"
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          pathLength={1}
          className="animate-draw-circle"
        />
      </svg>
    </span>
  );
}
