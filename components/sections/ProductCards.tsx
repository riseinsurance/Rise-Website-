import Link from "next/link";
import type { ReactNode } from "react";

type ProductCard = {
  title: string;
  description: string;
  icon: ReactNode;
  photo: ReactNode;
  href: string;
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ProductCards({
  eyebrow,
  headline,
  cards,
  cta,
}: {
  eyebrow: string;
  headline: string;
  cards: ProductCard[];
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              {headline}
            </h2>
          </div>
          <Link
            href={cta.href}
            className="inline-flex shrink-0 items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-brand-blue hover:underline"
          >
            {cta.label}
            <ArrowIcon />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block border-2 border-ink/10 bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand-blue hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal">
                <div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-110">
                  {card.photo}
                </div>
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
              </div>
              <div className="p-6">
                <p className="font-display text-xl font-semibold text-ink">{card.title}</p>
                <p className="mt-2 text-ink/60">{card.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  Learn More
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
