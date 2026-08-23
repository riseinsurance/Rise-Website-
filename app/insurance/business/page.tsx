import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CoverageList } from "@/components/sections/CoverageList";
import { FactCallout } from "@/components/sections/FactCallout";
import { FAQSection } from "@/components/sections/FAQSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "Business Insurance",
  description:
    "Business insurance in Lubbock and West Texas, built around what your business actually does. General liability, property, and business-specific coverage.",
};

export default function BusinessInsurancePage() {
  return (
    <>
      <Hero
        eyebrow="Business Insurance"
        headline="A certificate of insurance shouldn't be the first time you learn what your policy covers."
        subhead="We build coverage around what your business actually does. Most owners don't find the gap between their policy and their business until a claim finds it for them."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "See What's Covered", href: "#covered" }}
        frameForeground={<Photo src="/photos/card-business.jpg" alt="A local West Texas storefront" />}
      />

      <CoverageList
        id="covered"
        eyebrow="What's Covered"
        headline="Coverage that keeps up with the business, not just the year it opened. Here's what's covered:"
        items={[
          {
            term: "General liability.",
            description:
              "Third-party injury or property damage. Most leases and contracts require it before they'll sign with you.",
          },
          {
            term: "Commercial property.",
            description: "Your building, equipment, inventory, signage.",
          },
          {
            term: "Business owner's policy (BOP).",
            description:
              "Liability and property bundled for qualifying businesses, usually cheaper than buying each separately.",
          },
          {
            term: "Professional liability / errors & omissions.",
            description: "Covers a claim tied to a mistake in the work itself, not just a slip-and-fall.",
          },
          {
            term: "Commercial auto.",
            description:
              "A personal auto policy stops covering the truck the moment it's used for work. Most owners don't find that out until a claim gets denied.",
          },
          {
            term: "Workers' compensation.",
            description: "Texas plays by different rules here. See below.",
          },
        ]}
      />

      <FactCallout
        headline="Texas is the one state where opting out of workers' comp is legal. That doesn't mean it's free."
        body="Texas is the only state where most private employers can skip workers' comp entirely and become a “non-subscriber.” It can save money. It can also leave a business exposed to a lawsuit a workers' comp policy would have absorbed. Which one is right depends on your business, not a rule of thumb."
        source="Verified against current Texas Department of Insurance / Texas Workforce Commission guidance as of August 2026. This is general information, not legal advice; talk to an attorney about what's right for your business."
      />

      <FAQSection
        items={[
          {
            q: "Are you stuck selling one insurance company's product?",
            a: "No. We're independent. We shop the market instead of pitching one carrier.",
          },
          {
            q: "I'm a small business, do I really need more than general liability?",
            a: "Depends on your business. That's a conversation, not a guess, we'll go through what your lease, contracts, and operations require.",
          },
          {
            q: "Can you help with a certificate of insurance for a lease or a client?",
            a: "Yes, this is one of the most common reasons business owners call us in the first place.",
          },
        ]}
      />

      <CtaBanner
        headline="Get coverage built around how the business runs, not a template."
        subhead="One conversation. A comparison across carriers. A certificate whenever you need one."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
