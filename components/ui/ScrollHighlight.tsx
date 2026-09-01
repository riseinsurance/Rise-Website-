"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// A highlighter-marker sweep that stays hidden until this specific instance
// scrolls into view, then animates in — unlike CircleHighlight/
// UnderlineHighlight, which draw in immediately on page load and would
// already be finished (and unseen) by the time someone scrolls down to
// a headline further down the page. Each instance watches its own
// IntersectionObserver rather than a single page-wide scroll listener, so
// a phrase further down the page doesn't fire the moment the visitor
// starts scrolling past the hero, before it's actually on screen.
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
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="relative inline-block px-1 py-0.5">
      <span
        aria-hidden="true"
        className={`absolute inset-0 z-0 ${markClassName} transition-[width] duration-700 ease-out`}
        style={{ width: visible ? "100%" : "0%" }}
      />
      <span className={`relative z-10 ${className}`}>{children}</span>
    </span>
  );
}
