import Link from "next/link";
import { coreValues } from "@/lib/careers-content";

// Featured on the recruitment pages so a visitor who reaches the
// application form still has the agency's culture in front of them.
// Pulls three of the five values already written for /careers verbatim
// rather than restating them, plus a link to the full list on
// /our-core-values (not /careers#core-values, which only shows five).
const FEATURED_TITLES = ["Integrity Above All", "Client Centered Service", "Lifelong Stewardship"];

export function CoreValuesEmbed({
  accentClassName = "text-brand-blue",
  heading = "Our Core Values",
  href = "/our-core-values",
}: {
  accentClassName?: string;
  heading?: string;
  href?: string;
}) {
  const featured = FEATURED_TITLES.map((title) => coreValues.find((v) => v.title === title)!);

  return (
    <section className="bg-light-gray">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
        <h2 className="text-center font-display text-5xl font-semibold tracking-tight text-ink">
          {heading}
        </h2>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((value) => (
            <div key={value.title} className="border border-ink/10 bg-white p-6 text-center shadow-sm">
              <div className={`mx-auto flex justify-center ${accentClassName}`}>{value.icon}</div>
              <p className="mt-4 font-bold text-ink">{value.title}</p>
              <p className="mt-2 text-sm text-ink/60">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href={href} className={`font-bold hover:underline ${accentClassName}`}>
            See All Core Values &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
