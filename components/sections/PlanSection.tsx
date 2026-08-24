import type { ReactNode } from "react";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

type PlanSectionProps = {
  eyebrow: string;
  headline: string;
  steps: Step[];
  background: ReactNode;
  headlineSize?: string;
};

const stagger = ["lg:translate-y-0", "lg:translate-y-10", "lg:translate-y-0"];

export function PlanSection({
  eyebrow,
  headline,
  steps,
  background,
  headlineSize = "text-5xl sm:text-6xl",
}: PlanSectionProps) {
  return (
    <section className="relative overflow-hidden bg-near-black text-white">
      <div className="absolute inset-0">
        {background}
        <div className="absolute inset-0 bg-near-black/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <h2 className={`mt-4 max-w-2xl font-display font-semibold leading-tight tracking-tight ${headlineSize}`}>
          {headline}
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className={stagger[i % stagger.length]}>
              <div className="flex items-end gap-4">
                <span className="font-display text-6xl font-bold leading-none text-white/15">
                  {step.number}
                </span>
                <div className="mb-1 flex h-14 w-14 items-center justify-center border-2 border-white text-brand-blue">
                  {step.icon}
                </div>
              </div>
              <p className="mt-6 text-xl font-medium">{step.title}</p>
              <p className="mt-2 text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
