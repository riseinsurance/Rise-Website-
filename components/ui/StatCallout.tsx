// `source` is required so a stat can never ship without a defensible citation
// (build brief Section 7 flags the existing 86% / 1-in-3 / 50%+ stats as
// needing sourcing before they go on a more prominent, rebuilt site).
export function StatCallout({
  stat,
  caption,
  source,
}: {
  stat: string;
  caption: string;
  source: string | null;
}) {
  return (
    <div>
      <div className="text-5xl font-black text-brand-blue">{stat}</div>
      <p className="mt-2 text-sm font-medium text-ink/80">{caption}</p>
      {source ? (
        <p className="mt-1 text-xs text-ink/50">Source: {source}</p>
      ) : (
        <p className="mt-1 text-xs font-semibold text-red-600">
          [NEEDS FROM BRADEN: source citation]
        </p>
      )}
    </div>
  );
}
