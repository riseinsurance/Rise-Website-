import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { TextHighlight } from "@/components/ui/TextHighlight";

export const metadata: Metadata = {
  title: "Wind & Hail Deductible Buyback",
  description:
    "Understand your wind & hail deductible and how a buyback policy can lower your out-of-pocket cost, as low as $0, after a West Texas hailstorm.",
};

export default function WindHailDeductiblesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-near-black text-white">
        <div className="absolute inset-0">
          <VideoBackground src="/videos/wind-hail-hero.mp4" />
          <div className="absolute inset-0 bg-near-black/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:py-24 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
            West Texas Hail Risk
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Your deductible is a{" "}
            <TextHighlight>storm</TextHighlight> waiting to happen.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            You can&apos;t stop the storm, but you can control what it costs you. Most West Texas
            homeowners don&apos;t realize their wind &amp; hail deductible is percentage-based —
            often thousands more out of pocket than they expect, on top of the damage itself.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/get-a-quote" variant="primary">
              Ask About My Deductible
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <h2 className="font-display text-5xl font-semibold tracking-tight text-ink">
            What is a wind &amp; hail deductible?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Unlike a flat-dollar deductible, many Texas homeowners policies apply a
            <em className="not-italic font-semibold text-ink"> percentage-based </em>
            deductible specifically for wind and hail damage — commonly 1% to 3% of your home&apos;s
            insured value. On a $300,000 home, a 2% wind &amp; hail deductible means the first
            $6,000 of storm damage comes out of your pocket before coverage kicks in.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            A wind &amp; hail deductible buyback is a separate policy you can purchase to lower
            that percentage-based deductible. Rise offers access to buyback coverage that can
            bring your wind &amp; hail deductible down to as low as $0, so you know exactly what
            you&apos;d owe before a storm hits, not after.
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <h2 className="font-display text-5xl font-semibold tracking-tight text-ink">
            An illustrative example
          </h2>
          <p className="mt-4 text-ink/60">
            Figures below illustrate how a percentage deductible works on a $300,000 home, and
            what buying that deductible down can look like. They are not a quote. Actual pricing
            and the deductible level you can buy down to depend on your home, your carrier, and
            the buyback policy you choose.
          </p>
          <div className="mt-10">
            <ComparisonTable
              beforeLabel="Standard Percentage Deductible"
              afterLabel="With Buyback (illustrative)"
              rows={[
                { label: "Deductible Type", before: "Percentage-based", after: "Flat dollar amount, chosen by you" },
                { label: "Deductible Rate", before: "2% of Coverage A", after: "Set by the buyback policy you choose" },
                { label: "On a $300,000 Home", before: "$6,000 out of pocket", after: "As low as $0 out of pocket" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Not sure what your current deductible actually is?"
        subhead="We'll pull your policy, walk through it in plain English, and tell you honestly whether a buyback makes sense."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
