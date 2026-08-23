import { StatCallout } from "@/components/ui/StatCallout";

type Stat = { stat: string; caption: string; source: string | null };

export function StatsSection({ eyebrow, stats }: { eyebrow: string; stats: Stat[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatCallout key={i} stat={s.stat} caption={s.caption} source={s.source} />
          ))}
        </div>
      </div>
    </section>
  );
}
