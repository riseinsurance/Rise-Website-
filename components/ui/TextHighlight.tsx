import type { ReactNode } from "react";

// Lightweight word/phrase emphasis for headlines: italic display font in
// brand blue, no animation. Mirrors the italic color-shift Runway Media Co.
// uses on key phrases in their headlines (runwaymediaco.com) — a lighter
// touch than CircleHighlight/UnderlineHighlight, which draw themselves in.
// This formalizes a pattern the codebase already used ad hoc in a few
// places (an inline `<em className="font-display italic text-brand-blue">`)
// into one shared component.
export function TextHighlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <em className={`font-display italic text-brand-blue ${className}`}>{children}</em>;
}
