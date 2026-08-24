type Coverage = { title: string; description: string };

export function CoverageGrid({
  eyebrow,
  headline,
  items,
}: {
  eyebrow: string;
  headline: string;
  items: Coverage[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
          {headline}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border-2 border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="bg-white p-8">
              <p className="font-display text-xl font-medium text-ink">{item.title}</p>
              <p className="mt-2 text-ink/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
