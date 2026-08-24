import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type ProblemRow = {
  text: string;
  image: ReactNode;
};

type ProblemSectionProps = {
  eyebrow: string;
  headline: string;
  rows: ProblemRow[];
  stakeRaiser: string;
  cta: { label: string; href: string };
  headlineSize?: string;
};

export function ProblemSection({
  eyebrow,
  headline,
  rows,
  stakeRaiser,
  cta,
  headlineSize = "text-5xl sm:text-6xl",
}: ProblemSectionProps) {
  return (
    <section className="bg-light-gray">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <h2 className={`mt-4 max-w-2xl font-display font-semibold leading-tight tracking-tight text-ink ${headlineSize}`}>
          {headline}
        </h2>

        <div className="mt-16 space-y-10">
          {rows.map((row, i) => {
            const isOdd = i % 2 === 1;
            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-6 sm:flex-row ${
                  isOdd ? "sm:flex-row-reverse sm:pl-10" : "sm:pr-10"
                }`}
              >
                <div className="relative shrink-0">
                  <div
                    className={`absolute top-1/2 h-full w-3 -translate-y-1/2 bg-brand-blue ${
                      isOdd ? "-right-3" : "-left-3"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="relative h-28 w-40 overflow-hidden bg-brand-charcoal">{row.image}</div>
                </div>
                <p
                  className={`font-display text-2xl font-medium italic leading-snug text-ink sm:text-3xl ${
                    isOdd ? "sm:text-right" : ""
                  }`}
                >
                  {row.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-black/10 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-semibold text-ink">{stakeRaiser}</p>
          <Button href={cta.href} variant="primary">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
