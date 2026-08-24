import Link from "next/link";

type CoverageItem = {
  term: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export function CoverageList({
  id,
  eyebrow,
  headline,
  items,
}: {
  id?: string;
  eyebrow: string;
  headline: string;
  items: CoverageItem[];
}) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          {headline}
        </h2>
        <ul className="mt-12 space-y-8">
          {items.map((item) => (
            <li key={item.term} className="border-t border-ink/10 pt-8 first:border-t-0 first:pt-0">
              <p className="text-lg leading-relaxed text-ink/80">
                <span className="font-display font-semibold text-ink">{item.term} </span>
                {item.description}
                {item.href && (
                  <>
                    {" "}
                    <Link href={item.href} className="font-semibold text-brand-blue hover:underline">
                      {item.linkLabel ?? "Learn more"} &rarr;
                    </Link>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
