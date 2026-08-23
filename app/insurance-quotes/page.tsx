import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PlanSection } from "@/components/sections/PlanSection";
import { ProductCards } from "@/components/sections/ProductCards";
import { CoverageGrid } from "@/components/sections/CoverageGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "Insurance Quotes in Lubbock & West Texas",
  description:
    "Home, auto, renters, business, and life insurance quotes from a real local team in Lubbock and West Texas — independent access to top carriers, shopped for you.",
};

function ConversationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.5-5.2A8.5 8.5 0 1 1 21 12Z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M6 3h9l5 5v13H6V3Z" />
      <path d="M15 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.4 7.5 9 4.3-1.6 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" />
      <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4Z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

export default function InsuranceQuotesPage() {
  return (
    <>
      <Hero
        eyebrow="Insurance, Actually Explained"
        headline={
          <>
            Coverage that matches
            <br />
            what you <em className="font-display italic text-brand-blue">actually</em> own.
          </>
        }
        subhead="Home, auto, renters, business, life — one local team, independent access to top carriers, and a plan built around your specific risk instead of a generic template."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "See Our Promise", href: "/#our-promise" }}
        frameForeground={<PhotoPlaceholder label="[Interior hero photo needed]" />}
        background={<PhotoPlaceholder label="[Full-bleed hero background photo needed]" />}
      />

      <ProblemSection
        eyebrow="Still Comparing?"
        headline="A cheaper quote isn't always a better one."
        rows={[
          {
            text: "You got a \"quote\" that turned out to be missing half the coverage you actually needed.",
            image: <PhotoPlaceholder label="[Photo]" />,
          },
          {
            text: "You explained your situation from scratch to three different people at the same agency.",
            image: <PhotoPlaceholder label="[Photo]" />,
          },
          {
            text: "You're still not sure if a lower price this year means less protection if something happens.",
            image: <PhotoPlaceholder label="[Photo]" />,
          },
        ]}
        stakeRaiser="A real quote should make sense, not just look cheap."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />

      <PlanSection
        eyebrow="How It Works"
        headline="From first call to policy in hand."
        background={<PhotoPlaceholder label="[Full-bleed background photo needed]" />}
        steps={[
          {
            number: "01",
            title: "Tell us what matters to you",
            description: "A real conversation about what you own, what you'd hate to lose, and your budget.",
            icon: <ConversationIcon />,
          },
          {
            number: "02",
            title: "We shop it across top carriers",
            description: "Independent access plus a Farmers captive option, so the plan fits you — not a quota.",
            icon: <QuoteIcon />,
          },
          {
            number: "03",
            title: "You get a real point of contact",
            description: "Renewals, mid-term changes, and claims all go through a person who already knows your policy.",
            icon: <ShieldIcon />,
          },
        ]}
      />

      <ProductCards
        eyebrow="What We Offer"
        headline="Coverage for the things you're actually trying to protect."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
        cards={[
          {
            title: "Auto",
            description: "Liability, collision, and comprehensive coverage shopped across multiple carriers, not just the first quote.",
            icon: <CarIcon />,
            photo: <Photo src="/photos/card-auto.jpg" alt="West Texas highway" />,
            href: "/insurance/auto",
          },
          {
            title: "Home",
            description: "Homeowners, condo, and landlord coverage built around what your property is actually worth.",
            icon: <HouseIcon />,
            photo: <Photo src="/photos/card-home.jpg" alt="A West Texas home" focusX={70} />,
            href: "/insurance/home",
          },
          {
            title: "Business",
            description: "General liability, property, and business-specific policies for West Texas small businesses.",
            icon: <BriefcaseIcon />,
            photo: <Photo src="/photos/card-business.jpg" alt="A local West Texas storefront" />,
            href: "/insurance/business",
          },
        ]}
      />

      <CoverageGrid
        eyebrow="More Ways We Can Help"
        headline="Coverage that doesn't always get asked about, but should."
        items={[
          {
            title: "Renters",
            description: "Affordable protection for what you own, even if you don't own the walls around it.",
          },
          {
            title: "Life",
            description: "Term and permanent options to make sure the people who depend on you are protected.",
          },
          {
            title: "Umbrella",
            description: "Extra liability protection layered on top of your existing home and auto policies.",
          },
        ]}
      />

      <CtaBanner
        headline="Ready to see what you're actually paying for?"
        subhead="A free, no-pressure quote — we'll tell you plainly if we can beat what you have."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
