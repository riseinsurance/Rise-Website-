import type { ReactNode } from "react";

type FAQ = { q: string; a: ReactNode };

export function FAQSection({
  eyebrow = "FAQ",
  headline = "Questions, answered.",
  items,
}: {
  eyebrow?: string;
  headline?: string;
  items: FAQ[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {headline}
        </h2>
        <div className="mt-10 space-y-8">
          {items.map((f) => (
            <div key={f.q} className="border-t border-ink/10 pt-8 first:border-t-0 first:pt-0">
              <p className="font-display text-lg font-semibold text-ink">{f.q}</p>
              <p className="mt-2 text-ink/70">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
