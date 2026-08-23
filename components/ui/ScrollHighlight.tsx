"use client";

import { useEffect, useState, type ReactNode } from "react";

// A highlighter-marker sweep that stays hidden until the visitor starts
// scrolling the page, then animates in — unlike CircleHighlight/
// UnderlineHighlight, which draw in immediately on page load and would
// already be finished (and unseen) by the time someone scrolls down to
// a headline further down the page.
export function ScrollHighlight({
  children,
  className = "",
  markClassName = "bg-orange-300",
}: {
  children: ReactNode;
  className?: string;
  markClassName?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(true);
    window.addEventListener("scroll", handleScroll, { once: true, passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <span className="relative inline-block px-1 py-0.5">
      <span
        aria-hidden="true"
        className={`absolute inset-0 z-0 ${markClassName} transition-[width] duration-700 ease-out`}
        style={{ width: visible ? "100%" : "0%" }}
      />
      <span className={`relative z-10 ${className}`}>{children}</span>
    </span>
  );
}
