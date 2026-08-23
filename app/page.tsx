import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductCards } from "@/components/sections/ProductCards";
import { GuideSection } from "@/components/sections/GuideSection";
import { PlanSection } from "@/components/sections/PlanSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Photo } from "@/components/ui/Photo";
import { CircleHighlight } from "@/components/ui/CircleHighlight";

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

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Lubbock & West Texas"
        headline={
          <>
            Insurance made
            <br />
            <CircleHighlight className="text-brand-blue">simple</CircleHighlight>.
          </>
        }
        subhead="Insurance doesn't have to be hard. We shop it, explain it, and stand behind it — with independent access to top carriers and a real local team, so you feel confident, covered, and in control."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "How It Works", href: "/insurance-quotes" }}
        frameForeground={<Photo src="/photos/homepage-hero.jpg" alt="Rise Insurance Agency" />}
        showCarrierMarquee
      />

      <ProblemSection
        eyebrow="Sound familiar?"
        headline="Have you ever..."
        rows={[
          {
            text: "...called your agent and gotten voicemail, right when you actually needed them?",
            image: <Photo src="/photos/home-problem-voicemail.jpg" alt="A woman on the phone, unable to reach her agent" />,
          },
          {
            text: "...opened a renewal notice and had no idea why your premium jumped again?",
            image: <Photo src="/photos/home-problem-renewal.jpg" alt="A woman reviewing a renewal notice at home" />,
          },
          {
            text: "...filed a claim and felt like you were fighting your own insurance company?",
            image: <Photo src="/photos/home-problem-claim.jpg" alt="Storm damage cleanup and roof repair after a claim" />,
          },
        ]}
        stakeRaiser="You deserve better."
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />

      <ProductCards
        eyebrow="What We Offer"
        headline="Coverage for the things you're actually trying to protect."
        cta={{ label: "See All Coverage", href: "/insurance-quotes" }}
        cards={[
          {
            title: "Auto",
            description: "Liability, collision, and comprehensive coverage shopped across multiple carriers — not just the first quote.",
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

      <GuideSection
        eyebrow="Our Promise"
        empathy="We get it. You've either been burned by an agent who went silent right when you needed them, or you've never had anyone actually explain what you're paying for."
        authority="Rise gives you independent access to multiple top carriers plus a Farmers captive option, so the plan fits you — not the other way around. We're a local West Texas team with direct points of contact, not a call center, and fast turnaround on quotes."
        resolution="A real person in your corner. Every time."
        photo={<Photo src="/photos/our-promise.jpg" alt="A member of the Rise Insurance Agency team" focusY={20} />}
        watermarkText="RISE"
      />

      <PlanSection
        eyebrow="How It Works"
        headline="Three steps to actually feeling covered."
        background={<PhotoPlaceholder label="[Full-bleed background photo needed]" />}
        steps={[
          {
            number: "01",
            title: "Tell us what matters to you",
            description: "A quick conversation about your home, family, business, and goals.",
            icon: <ConversationIcon />,
          },
          {
            number: "02",
            title: "Get a personalized quote",
            description: "We shop it across top carriers so you don't have to.",
            icon: <QuoteIcon />,
          },
          {
            number: "03",
            title: "Live with confidence",
            description: "A real person in your corner for renewals, changes, and claims.",
            icon: <ShieldIcon />,
          },
        ]}
      />

      <StatsSection
        eyebrow="Why It Matters"
        stats={[
          { stat: "86%", caption: "of homeowners misjudge their coverage.", source: null },
          { stat: "1 in 3", caption: "drivers on the road are underinsured.", source: null },
          { stat: "50%+", caption: "of homeowners misunderstand a key policy term.", source: null },
        ]}
      />

      <OfferSection
        eyebrow="Not Ready For A Quote Yet?"
        headline="Avoid the 5 insurance mistakes that cost people thousands."
        subhead="A free, no-pressure guide — for anyone who wants to get smarter about their coverage before they need it."
      />
    </>
  );
}
