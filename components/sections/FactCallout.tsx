export function FactCallout({
  headline,
  body,
  source,
}: {
  headline: string;
  body: string;
  source: string;
}) {
  return (
    <section className="bg-light-gray">
      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
        <div className="border-l-4 border-brand-blue bg-white p-8 shadow-sm sm:p-10">
          <h2 className="font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{body}</p>
          <p className="mt-6 text-xs italic text-ink/40">{source}</p>
        </div>
      </div>
    </section>
  );
}
