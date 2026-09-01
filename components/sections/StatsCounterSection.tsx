"use client";

import { useEffect, useRef, useState } from "react";
import { UnderlineHighlight } from "@/components/ui/UnderlineHighlight";
import { ScrollHighlight } from "@/components/ui/ScrollHighlight";

type CounterProps = {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

// Counts up once when it first scrolls into view, then stays put. The
// IntersectionObserver disconnects itself after the first trigger so
// scrolling the stat in and out of view again doesn't replay it. Setting
// the value to the exact `target` on the final frame (rather than trusting
// the eased formula's last computed step) keeps the landed number exact,
// no floating-point drift off $1.1M+ / 300+.
function Counter({ target, decimals = 0, prefix = "", suffix = "", label }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        observer.disconnect();

        const durationMs = 1500;
        const start = performance.now();

        function tick(now: number) {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          if (progress < 1) {
            setValue(target * eased);
            requestAnimationFrame(tick);
          } else {
            setValue(target);
          }
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-7xl font-black text-brand-blue sm:text-8xl lg:text-9xl">
        <UnderlineHighlight strokeColor="#1e1e1e">
          {prefix}
          {value.toFixed(decimals)}
          {suffix}
        </UnderlineHighlight>
      </div>
      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink/60">{label}</p>
    </div>
  );
}

export function StatsCounterSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
          The Numbers
        </p>

        <div className="mt-14 grid grid-cols-2 gap-8">
          <Counter target={1.1} decimals={1} prefix="$" suffix="M+" label="Premium placed" />
          <Counter target={300} suffix="+" label="Clients served" />
        </div>

        <p className="mt-12 text-center text-lg text-ink/60">
          <ScrollHighlight markClassName="bg-brand-blue" className="text-ink">
            In under 8 months.
          </ScrollHighlight>
        </p>
      </div>
    </section>
  );
}
