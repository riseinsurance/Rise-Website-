import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { ProductCards } from "@/components/sections/ProductCards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "Insurance Quotes",
  description:
    "Home, auto, renters, business, and life insurance quotes from a real local team with independent access to top carriers, shopped for you.",
};

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

function DoorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <rect x="6" y="3" width="12" height="18" rx="1" />
      <circle cx="14.5" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M12 20s-7-4.35-9.5-8.5C.5 7.5 3 4 6.5 4c2 0 3.5 1.2 4.5 2.7C12 5.2 13.5 4 15.5 4 19 4 21.5 7.5 20 11.5 18 15.65 12 20 12 20Z" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12 20 3M16 8l3 3M19 5l2 2" />
    </svg>
  );
}

export default function InsuranceQuotesPage() {
  return (
    <>
      <Hero
        eyebrow="Insurance, Explained Straight"
        headline="Coverage that matches what you own."
        subhead="Home, auto, renters, business, life. Independent access to top carriers, and a plan built around your specific risk instead of a generic template."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "See What We Cover", href: "#coverage" }}
        frameForeground={<PhotoPlaceholder label="[Interior hero photo needed]" />}
        background={<PhotoPlaceholder label="[Full-bleed hero background photo needed]" />}
      />

      <ComparisonSection
        eyebrow="Still Comparing?"
        headline="A cheaper quote isn't always a better one."
        quotes={[
          "You got a \"quote\" that turned out to be missing half the coverage you needed.",
          "You explained your situation from scratch to three different people at the same agency.",
          "You're still not sure if a lower price this year means less protection if something happens.",
        ]}
        stakeRaiser="A real quote should make sense, not just look cheap."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />

      <ProductCards
        id="coverage"
        eyebrow="What We Offer"
        headline="Coverage for the things you're trying to protect."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
        cards={[
          {
            title: "Auto",
            description: "Liability, collision, and comprehensive coverage shopped across multiple carriers, not just the first quote.",
            icon: <CarIcon />,
            photo: <Photo src="/photos/card-auto.jpg" alt="A highway" />,
            href: "/insurance/auto",
          },
          {
            title: "Home",
            description: "Homeowners, condo, and landlord coverage built around what your property is actually worth.",
            icon: <HouseIcon />,
            photo: <Photo src="/photos/card-home.jpg" alt="A home" focusX={70} />,
            href: "/insurance/home",
          },
          {
            title: "Business",
            description: "General liability, property, and business-specific policies for small businesses.",
            icon: <BriefcaseIcon />,
            photo: <Photo src="/photos/card-business.jpg" alt="A local storefront" />,
            href: "/insurance/business",
          },
          {
            title: "Renters",
            description: "Affordable protection for what you own, even if you don't own the walls around it.",
            icon: <DoorIcon />,
            photo: <Photo src="/photos/card-renters.jpg" alt="An apartment building" />,
            href: "/get-a-quote",
            linkLabel: "Get a Quote",
          },
          {
            title: "Life",
            description: "Term and permanent options to make sure the people who depend on you are protected.",
            icon: <HeartIcon />,
            photo: <Photo src="/photos/card-life.jpg" alt="A family walking together at sunset" focusY={75} />,
            href: "/get-a-quote",
            linkLabel: "Get a Quote",
          },
          {
            title: "Landlord",
            description: "Dwelling coverage and lost rental income protection for the property you rent out to tenants.",
            icon: <KeyIcon />,
            photo: <PhotoPlaceholder label="[Photo]" />,
            href: "/get-a-quote",
            linkLabel: "Get a Quote",
          },
        ]}
      />

      <CtaBanner
        headline="Ready to see what you're paying for?"
        subhead="A free, no-pressure quote. We'll tell you plainly if we can beat what you have."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
