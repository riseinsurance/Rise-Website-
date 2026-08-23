import type { ReactNode } from "react";

type OffsetFrameProps = {
  foreground: ReactNode;
  className?: string;
  offset?: "sm" | "md";
};

// Site's signature visual motif: a white-stroke rectangle sits behind,
// a photo or dark card overlaps it offset down-and-right, leaving a
// visible gap. Parent must give this an explicit size (e.g. aspect-[4/3]).
const offsetPx = { sm: 32, md: 48 };

export function OffsetFrame({ foreground, className = "", offset = "md" }: OffsetFrameProps) {
  const px = offsetPx[offset];

  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute top-0 left-0 border-2 border-white"
        style={{ right: px, bottom: px }}
        aria-hidden="true"
      />
      <div className="absolute bottom-0 right-0 overflow-hidden" style={{ top: px, left: px }}>
        {foreground}
      </div>
    </div>
  );
}
