type Row = { label: string; before: string; after: string };

export function ComparisonTable({
  beforeLabel,
  afterLabel,
  rows,
}: {
  beforeLabel: string;
  afterLabel: string;
  rows: Row[];
}) {
  return (
    <div className="overflow-x-auto border-2 border-ink">
      <table className="w-full min-w-[480px] border-collapse text-left">
        <thead>
          <tr className="bg-near-black text-white">
            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">&nbsp;</th>
            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">{beforeLabel}</th>
            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide text-brand-blue">
              {afterLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-light-gray"}>
              <td className="px-6 py-4 font-semibold text-ink">{row.label}</td>
              <td className="px-6 py-4 text-ink/70">{row.before}</td>
              <td className="px-6 py-4 font-bold text-ink">{row.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
