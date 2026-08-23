import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CoverageList } from "@/components/sections/CoverageList";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { FAQSection } from "@/components/sections/FAQSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "Home Insurance",
  description:
    "Homeowners insurance in Lubbock and West Texas, reviewed line by line before you need it, not after. Independent access to top carriers.",
};

export default function HomeInsurancePage() {
  return (
    <>
      <Hero
        eyebrow="Home Insurance"
        headline="Don't find out what's not covered from a claims adjuster."
        subhead="We go through your homeowners policy before you need it, not after. The biggest thing you own shouldn't be protected by a document you never read past page two."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "See What's Covered", href: "#covered" }}
        frameForeground={<Photo src="/photos/card-home.jpg" alt="A West Texas home" focusX={70} />}
      />

      <CoverageList
        id="covered"
        eyebrow="What's Covered"
        headline="Know the number before the storm picks it for you. Here's what's covered:"
        items={[
          {
            term: "Dwelling.",
            description: "Rebuilds the structure. Full stop.",
          },
          {
            term: "Personal property.",
            description: "Replaces what's inside it: furniture, electronics, the stuff that isn't the walls.",
          },
          {
            term: "Liability.",
            description: "Covers you if someone gets hurt on your property, or you damage someone else's.",
          },
          {
            term: "Loss of use.",
            description: "Pays for the hotel while your kitchen is gutted for repairs.",
          },
          {
            term: "Wind and hail deductible.",
            description:
              "Usually a percentage of your dwelling coverage, not a flat number, and the one line most homeowners have never actually calculated.",
            href: "/wind-hail-deductibles",
            linkLabel: "Learn more",
          },
        ]}
      />

      <section className="bg-light-gray">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
            Replacement cost and actual cash value are not the same number.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
            One pays what it costs to rebuild today. The other subtracts for age. The difference
            shows up exactly when you can least afford it.
          </p>
          <div className="mt-10">
            <ComparisonTable
              beforeLabel="Replacement Cost"
              afterLabel="Actual Cash Value"
              rows={[
                {
                  label: "What it pays",
                  before: "The full cost to rebuild or replace today",
                  after: "Replacement cost minus depreciation",
                },
                {
                  label: "A 10-year-old roof",
                  before: "Paid at today's replacement cost",
                  after: "Paid at depreciated value, often thousands less",
                },
                {
                  label: "Why it matters",
                  before: "Closes the gap between what you lose and what you collect",
                  after: "Leaves you paying the difference out of pocket",
                },
              ]}
            />
          </div>
          <p className="mt-6 text-xs italic text-ink/40">
            Figures in this table are illustrative, meant to explain the concept, not a quote.
            [NEEDS FROM BRADEN: do not publish specific dollar examples without underwriting
            confirmation.]
          </p>
        </div>
      </section>

      <FAQSection
        items={[
          {
            q: "Are you stuck selling one insurance company's product?",
            a: "No. We're independent. We shop the market instead of pitching one carrier.",
          },
          {
            q: "Can you lower my wind and hail deductible specifically?",
            a: (
              <>
                Yes. That&apos;s separate from your standard homeowners deductible. See our{" "}
                <Link href="/wind-hail-deductibles" className="font-semibold text-brand-blue hover:underline">
                  Wind &amp; Hail Deductible Buyback
                </Link>{" "}
                page.
              </>
            ),
          },
          {
            q: "Do you handle rental and landlord properties, not just owner-occupied homes?",
            a: "Yes, alongside standard homeowners and condo coverage.",
          },
        ]}
      />

      <CtaBanner
        headline="Know what your home is covered for. Before you need to."
        subhead="A real comparison across carriers, read line by line."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
