import type { Metadata } from "next";
import { CareersInterestForm } from "@/components/forms/CareersInterestForm";
import { JobOpeningCard } from "@/components/careers/JobOpeningCard";

export const metadata: Metadata = {
  title: "Available Positions",
  description: "Current job openings at Rise Insurance Agency.",
};

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1" />
      <rect x="17" y="13" width="4" height="6" rx="1" />
      <path d="M19 19v1a2 2 0 0 1-2 2h-3" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export default function AvailablePositionsPage() {
  return (
    <>
      <section className="bg-brand-blue">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Rise Insurance Agency Job Openings
          </h1>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Sales</p>
          <div className="mt-3 h-1 w-16 bg-brand-blue" />

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <JobOpeningCard
              href="/growth-team"
              icon={<HeadsetIcon />}
              title="Growth Team Member"
              teaser="Spark conversations. Learn sales. Launch your career."
            />
            <JobOpeningCard
              href="/agent"
              icon={<TrendingUpIcon />}
              title="Insurance Sales Agent"
              teaser="Earn trust. Change lives. Build a business of your own."
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <h2 className="font-display text-5xl font-semibold tracking-tight text-ink">
            Don&apos;t see the right fit?
          </h2>
          <p className="mt-6 text-lg text-ink/70">
            We&apos;re always interested in meeting good people who fit our{" "}
            <a href="/our-core-values" className="font-semibold text-brand-blue hover:underline">
              core values
            </a>
            . Send us a note below, and if a fit opens up, we&apos;ll reach out.
          </p>
          <div className="mt-10">
            <CareersInterestForm />
          </div>
        </div>
      </section>
    </>
  );
}
