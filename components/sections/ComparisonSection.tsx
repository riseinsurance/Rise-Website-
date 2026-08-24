import { Button } from "@/components/ui/Button";

// A grid of pull-quote cards, no photos, no alternating rows — the
// "problem" beat told through what a bad quote sounds like instead of
// what a bad claim experience looks like. Deliberately distinct from
// ProblemSection's photo-and-timeline treatment so pages using both
// don't read as the same section reused twice.
export function ComparisonSection({
  eyebrow,
  headline,
  quotes,
  stakeRaiser,
  cta,
}: {
  eyebrow: string;
  headline: string;
  quotes: string[];
  stakeRaiser: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-light-gray">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
          {headline}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {quotes.map((quote, i) => (
            <div key={i} className="border-l-4 border-brand-blue bg-white p-8 shadow-sm">
              <span className="block font-display text-5xl leading-none text-brand-blue/25">&ldquo;</span>
              <p className="mt-2 font-display text-xl font-medium italic leading-snug text-ink">{quote}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start gap-6 border-2 border-ink/10 bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-semibold text-ink">{stakeRaiser}</p>
          <Button href={cta.href} variant="primary">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
