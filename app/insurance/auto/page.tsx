import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CoverageList } from "@/components/sections/CoverageList";
import { FactCallout } from "@/components/sections/FactCallout";
import { FAQSection } from "@/components/sections/FAQSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "Auto Insurance",
  description:
    "Auto insurance shopped across multiple carriers and read line by line before you sign. Not just the first quote.",
};

export default function AutoInsurancePage() {
  return (
    <>
      <Hero
        eyebrow="Auto Insurance"
        headline="Your policy shouldn't be a mystery until the tow truck shows up."
        subhead="We read every line of your auto policy before you sign it. Most drivers don't find the gap in their coverage, they find it in the middle of a police report."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "See What's Covered", href: "#covered" }}
        frameForeground={<Photo src="/photos/card-auto.jpg" alt="A highway" />}
      />

      <CoverageList
        id="covered"
        eyebrow="What's Covered"
        headline="An agent who answers. A rate that gets checked, not just charged. Here's what that covers:"
        items={[
          {
            term: "Liability.",
            description:
              "Pays out when you're at fault. Texas sets the legal floor at 30/60/25. A bad wreck blows past that floor fast.",
          },
          {
            term: "Collision.",
            description: "Your car gets fixed or replaced, wreck's your fault or not.",
          },
          {
            term: "Comprehensive.",
            description:
              "Hail, a deer strike, a stolen catalytic converter, a cracked windshield: all comprehensive claims, not collision.",
          },
          {
            term: "Uninsured/underinsured motorist.",
            description:
              "Covers you when the other driver's policy is thin or nonexistent, which happens more than people think.",
          },
          {
            term: "Medical payments (PIP).",
            description: "Your bills and your passengers' bills, paid regardless of fault.",
          },
          {
            term: "Rental reimbursement and roadside.",
            description: "Worth adding if you can't be without a car for a week. Skip it if you can.",
          },
        ]}
      />

      <FactCallout
        headline="Legal minimum. Not the same thing as covered."
        body="Texas requires 30/60/25 liability coverage: $30,000 per person and $60,000 per accident for injuries, $25,000 for property damage. That number was set by a legislature, not by what a hospital bills after a bad wreck. We'll show you the gap before a claim does."
        source="Verified against current Texas Department of Insurance minimum liability requirements as of August 2026."
      />

      <FAQSection
        items={[
          {
            q: "Are you stuck selling one insurance company's product?",
            a: "No. We're independent. We shop the market instead of pitching one carrier.",
          },
          {
            q: "Will there be a gap in coverage if I switch?",
            a: "No, we time the switch so there isn't one.",
          },
          {
            q: "I've got a ticket or an accident on my record. Can you still help?",
            a: "Yes. That's exactly when shopping the market matters most.",
          },
        ]}
      />

      <CtaBanner
        headline="Find out what's really in your policy."
        subhead="One conversation. A real comparison across carriers. No pressure to switch today."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
