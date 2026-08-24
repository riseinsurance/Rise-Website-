function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );
}

// Black-background "Is This You?" section, shared by the two recruitment
// pages (growth-team, agent) — a scannable fit checklist instead of a
// single soft paragraph, matching the reference pattern's treatment for
// this section.
export function FitSection({
  headline,
  items,
  accentClassName = "text-brand-blue",
}: {
  headline: string;
  items: string[];
  accentClassName?: string;
}) {
  return (
    <section className="bg-near-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
        <h2 className="font-display text-5xl font-semibold tracking-tight">{headline}</h2>
        <ul className="mt-10 space-y-5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <CheckIcon className={`mt-1 h-5 w-5 shrink-0 ${accentClassName}`} />
              <span className="text-lg leading-relaxed text-white/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
