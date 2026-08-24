// Shared "what happens after you apply" section for the recruitment pages
// — numbered steps so the form isn't the last thing a candidate sees with
// zero context on next steps.
export function HiringProcessSection({
  headline,
  intro,
  steps,
  accentClassName = "bg-brand-blue",
}: {
  headline: string;
  intro?: string;
  steps: string[];
  accentClassName?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
        <h2 className="text-center font-display text-5xl font-semibold tracking-tight text-ink">
          {headline}
        </h2>
        {intro && (
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-ink/70">{intro}</p>
        )}
        <ol className="mx-auto mt-12 max-w-md space-y-6">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-5">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white ${accentClassName}`}
              >
                {i + 1}
              </span>
              <span className="text-lg font-medium text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
