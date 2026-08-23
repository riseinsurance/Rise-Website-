import Link from "next/link";
import type { ReactNode } from "react";

export function JobOpeningCard({
  href,
  icon,
  title,
  teaser,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  teaser: string;
}) {
  return (
    <div className="flex flex-col items-center border-2 border-ink/10 bg-white p-8 text-center shadow-sm">
      <div className="text-brand-blue">{icon}</div>
      <p className="mt-4 font-display text-xl font-semibold text-ink">{title}</p>
      <p className="mt-2 text-ink/60">{teaser}</p>
      <Link
        href={href}
        className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-brand-blue hover:underline"
      >
        Learn More
      </Link>
    </div>
  );
}
