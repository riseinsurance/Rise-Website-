import type { ReactNode } from "react";
import { Watermark } from "@/components/ui/Watermark";

type GuideSectionProps = {
  eyebrow: string;
  empathy: string;
  authority: string;
  resolution: string;
  photo: ReactNode;
  watermarkText: string;
  reverse?: boolean;
};

export function GuideSection({
  eyebrow,
  empathy,
  authority,
  resolution,
  photo,
  watermarkText,
  reverse = false,
}: GuideSectionProps) {
  return (
    <section id="our-promise" className="relative overflow-hidden bg-white">
      <Watermark
        text={watermarkText}
        className="-bottom-10 left-1/2 -translate-x-1/2 text-black/[0.04] sm:text-black/[0.05]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
          <p className="mt-6 text-xl leading-relaxed text-ink/80">{empathy}</p>
          <p className="mt-6 text-xl leading-relaxed text-ink/80">{authority}</p>
          <p className="mt-8 font-display text-3xl font-semibold italic text-ink">{resolution}</p>
        </div>

        <div className={`aspect-[4/3] w-full overflow-hidden bg-brand-charcoal ${reverse ? "lg:order-1" : ""}`}>
          {photo}
        </div>
      </div>
    </section>
  );
}
