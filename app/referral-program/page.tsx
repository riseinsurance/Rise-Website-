import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { PlanSection } from "@/components/sections/PlanSection";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Photo } from "@/components/ui/Photo";
import { UnderlineHighlight } from "@/components/ui/UnderlineHighlight";
import { Button } from "@/components/ui/Button";
import { ReferralForm } from "@/components/forms/ReferralForm";

export const metadata: Metadata = {
  title: "Referral Program for Realtors & Lenders",
  description:
    "A referral partner for realtors, lenders, and local professionals: fast turnaround, direct communication, and clients who come out ahead.",
};

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M2 12h4l3-3 4 4 3-3h6" />
      <path d="m14 9 3-3 5 5-3 3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="m12 3 2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1-4.7-4.2 6.2-.6L12 3Z" />
    </svg>
  );
}

function SilenceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 1 1 16.1-3.8Z" />
      <path d="m9.3 10 4 4M13.3 10l-4 4" />
    </svg>
  );
}

function ConfusionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7v.5" />
      <circle cx="12" cy="16.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MissedDeadlineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="m9.5 14.5 5 5M14.5 14.5l-5 5" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 1 1 16.1-3.8Z" />
    </svg>
  );
}

export default function ReferralProgramPage() {
  return (
    <>
      <Hero
        eyebrow="For Realtors, Lenders & Local Pros"
        headline={
          <>
            Refer with confidence.
            <br />
            We&apos;ll make you{" "}
            <em className="not-italic">
              <UnderlineHighlight className="font-display italic text-brand-blue" animateOnScroll>
                look good
              </UnderlineHighlight>
            </em>
            .
          </>
        }
        subhead="Every referral has your name on it. We treat it that way: fast turnaround, direct communication, and a client experience that reflects well on you."
        primaryCta={{ label: "Refer a Client", href: "#refer" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        frameForeground={<Photo src="/photos/referral-header.jpg" alt="Two members of the Rise Insurance Agency team" focusY={35} />}
        frameClassName="order-1 aspect-[20/13] w-full sm:aspect-[4/3] lg:order-2 lg:-mr-6"
      />

      <section className="bg-light-gray">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
            Sound Familiar?
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
            <UnderlineHighlight className="text-ink">Your name</UnderlineHighlight> is on every
            referral you send.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border-l-4 border-brand-blue bg-white p-8 shadow-sm">
              <div className="text-brand-blue">
                <SilenceIcon />
              </div>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                A client goes quiet on you, because the agent you sent them to never followed up.
              </p>
            </div>
            <div className="border-l-4 border-brand-blue bg-white p-8 shadow-sm">
              <div className="text-brand-blue">
                <ConfusionIcon />
              </div>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                You get a confused call back, because nobody bothered explaining the policy in
                plain terms.
              </p>
            </div>
            <div className="border-l-4 border-brand-blue bg-white p-8 shadow-sm">
              <div className="text-brand-blue">
                <MissedDeadlineIcon />
              </div>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                A closing slips because insurance wasn&apos;t ready in time, and somehow that
                becomes your problem too.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start gap-6 bg-near-black px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl font-semibold text-white">
              That&apos;s not a referral partner. That&apos;s a liability.
            </p>
            <Button href="#refer" variant="primary">
              Refer a Client
            </Button>
          </div>
        </div>
      </section>

      <BenefitGrid
        eyebrow="Why Partner With Rise"
        headline="A partner who treats your referral like it matters."
        items={[
          {
            icon: <BoltIcon />,
            title: "Fast Turnaround",
            description: "Quotes turned around quickly, so a closing date is never waiting on us.",
          },
          {
            icon: <LayersIcon />,
            title: "Independent Access to Top Carriers",
            description: "We shop across multiple carriers instead of pitching one, for the right fit.",
          },
          {
            icon: <PersonIcon />,
            title: "Direct Point of Contact",
            description: "No call center. You and your client work with a real person who knows the file.",
          },
          {
            icon: <ChatIcon />,
            title: "Clear Communication",
            description: "You're kept in the loop along the way, not just looped in at the end.",
          },
          {
            icon: <StarIcon />,
            title: "We Make You Look Good",
            description: "Professional service that reflects well on the referral you made.",
          },
        ]}
      />

      <PlanSection
        eyebrow="How It Works"
        headline="Three steps, and you're kept in the loop the whole way."
        background={<PhotoPlaceholder label="[Full-bleed background photo needed]" />}
        steps={[
          {
            number: "01",
            title: "Send us your client",
            description: "One short form. Takes less than a minute.",
            icon: <HandshakeIcon />,
          },
          {
            number: "02",
            title: "We move fast",
            description: "A real person reaches out quickly, especially when a closing date is on the line.",
            icon: <ClockIcon />,
          },
          {
            number: "03",
            title: "Everyone comes out ahead",
            description: "Your client gets real coverage, and you get a referral you don't have to worry about.",
            icon: <StarIcon />,
          },
        ]}
      />

      <section id="refer" className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Refer a Client</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
            Send us the details. We&apos;ll take it from here.
          </h2>
          <div className="mt-10">
            <ReferralForm />
          </div>
        </div>
      </section>
    </>
  );
}
