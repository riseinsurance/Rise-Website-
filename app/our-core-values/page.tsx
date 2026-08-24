import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import Link from "next/link";
import { coreValues } from "@/lib/careers-content";

const caveat = Caveat({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Our Core Values",
  description: "The eleven core values that guide how the Rise Insurance Agency team works and serves clients.",
};

export default function CoreValuesPage() {
  return (
    <>
      <section className="bg-light-gray">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16 lg:py-20 text-center lg:px-8">
          <h1 className={`${caveat.className} text-6xl text-brand-blue sm:text-7xl`}>
            Our Core Values
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <div className="space-y-12">
            {coreValues.map((value) => (
              <div key={value.title} className="flex items-start gap-5">
                <div className="mt-1 text-brand-blue">{value.icon}</div>
                <div>
                  <p className="text-xl font-bold text-ink">{value.title}</p>
                  <p className="mt-2 text-lg leading-relaxed text-ink/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/available-positions"
              className="border-2 border-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
