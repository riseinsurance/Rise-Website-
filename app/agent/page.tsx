import type { Metadata } from "next";
import Link from "next/link";
import { CareersInterestForm } from "@/components/forms/CareersInterestForm";
import { Photo } from "@/components/ui/Photo";
import { FitSection } from "@/components/sections/FitSection";
import { CoreValuesEmbed } from "@/components/sections/CoreValuesEmbed";
import { HiringProcessSection } from "@/components/sections/HiringProcessSection";

export const metadata: Metadata = {
  title: "Insurance Sales Agent",
  description: "Join Rise Insurance Agency as a Sales Agent in Lubbock, TX — build real client relationships and a business of your own.",
};

function skillIcon(d: string) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d={d} />
    </svg>
  );
}

function LaunchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-8 5-10Z" />
      <circle cx="12" cy="10" r="1.5" />
      <path d="M9 17l-3 3M15 17l3 3" />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </svg>
  );
}

function LegacyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M5 21V4" />
      <path d="M5 4h13l-3 4 3 4H5" />
    </svg>
  );
}

const responsibilities = [
  {
    title: "Build real relationships",
    description: "Get to know clients and become their trusted advisor, not just their agent.",
  },
  {
    title: "Shop it right",
    description: "Use independent carrier access to find plans that actually fit — not just what's easiest to sell.",
  },
  {
    title: "Grow your own book",
    description: "The relationships you build become a business you own.",
  },
];

const skills = [
  { title: "Licensed sales expertise", d: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
  { title: "Consultative selling", d: "M8 10h8M8 14h5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
  { title: "Client relationship management", d: "M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M13 8a4 4 0 1 0-8 0M21 20v-1a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
  { title: "Independent carrier platforms", d: "M4 21V9l8-6 8 6v12M9 21v-6h6v6" },
];

const differentiators = [
  {
    title: "Uncapped commissions.",
    description: "Your effort sets the ceiling, not a pay scale.",
  },
  {
    title: "Own your book of business.",
    description:
      "The clients and relationships you build carry long-term value that's tied to you, not just the agency.",
  },
  {
    title: "Quoting support from our VA team.",
    description:
      "You focus on prospecting and relationships. Our virtual assistant team handles the quoting workload behind the scenes.",
  },
  {
    title: "Warm leads from the Growth Team.",
    description:
      "You're not starting from a cold list. Our in-house Growth Team feeds qualified conversations into your pipeline.",
  },
];

const careerStages = [
  {
    year: "Year 1",
    label: "Launch",
    description:
      "Learn the fundamentals, get licensed if you're not already, and start building relationships with warm leads from the Growth Team and quoting support from our VA team.",
    icon: <LaunchIcon />,
  },
  {
    year: "Years 2-3",
    label: "Build",
    description:
      "Grow your own book of business and deepen client relationships. Commissions scale with you. There's no cap on what your effort can build.",
    icon: <BuildIcon />,
  },
  {
    year: "Year 4+",
    label: "Legacy",
    description: "Your book of business is a real asset you own. Keep building it, or step into leadership.",
    icon: <LegacyIcon />,
  },
];

const fitItems = [
  "Driven and personable, and wants a career where your effort shows up directly in your paycheck.",
  "Coachable and consultative. You're building relationships, not running a script.",
  "Comfortable with a role that's commission-based and grows with your own effort.",
  "A Texas P&C license is required, or you're willing to get one. We'll point you in the right direction.",
];

const hiringSteps = [
  "Submit Application",
  "Phone Interview",
  "2-3 In-Person Interviews with Leadership",
  "Shadow Day",
  "Get Hired",
];

const faqs = [
  {
    q: "Do I need a license?",
    a: "You'll need a Texas Property & Casualty license. If you don't have one yet, we can point you toward how to get it.",
  },
  {
    q: "Is this commission-based?",
    a: "Compensation details are shared during the interview process.",
  },
  {
    q: "Can I build my own book of business?",
    a: "Yes — that's the whole point. The relationships and clients you build are yours to grow.",
  },
  {
    q: "Is prior insurance experience required?",
    a: "It helps, but it's not required. What matters more is that you're driven, personable, and coachable.",
  },
];

export default function AgentPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-near-black px-6 py-20 text-white sm:px-12 lg:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
              Sales &middot; Licensed Agent
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Earn trust. Change lives. Build a business of your own.
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Join Rise as a Sales Agent — build real client relationships, grow your income, and
              build a career with room to actually go somewhere.
            </p>
            <a
              href="#apply"
              className="mt-8 inline-flex w-fit bg-brand-blue px-8 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue-dark"
            >
              Apply Now
            </a>
          </div>
          <div className="relative min-h-[320px]">
            <Photo src="/photos/agent-header.jpg" alt="A Rise Insurance Agency agent at work" />
          </div>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Launch your agent career here.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            As a Sales Agent at Rise, you&apos;ll build your own book of business backed by
            independent access to top carriers and a team that actually has your back. This
            isn&apos;t a call-center script — it&apos;s real relationships, real advice, and real
            income potential.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
            What You&apos;ll Do
          </p>
          <h2 className="mt-4 text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Your Impact Matters.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {responsibilities.map((r) => (
              <div key={r.title} className="text-center">
                <p className="font-display text-xl font-semibold text-ink">{r.title}</p>
                <p className="mt-2 text-ink/60">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-near-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Build Skills That Set You Apart.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.title} className="border-2 border-white/15 p-6 text-center">
                <div className="mx-auto flex justify-center text-brand-blue">{skillIcon(s.d)}</div>
                <p className="mt-4 font-medium">{s.title}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl italic text-white/80">
            &ldquo;Sales Agent — Built and managed a book of insurance clients for an independent
            West Texas agency.&rdquo;
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Why Rise Insurance Agency
          </h2>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <div key={d.title} className="border-l-4 border-brand-blue bg-white p-8 shadow-sm">
                <span className="font-display text-sm font-bold text-brand-blue">0{i + 1}</span>
                <p className="mt-2 font-display text-xl font-semibold text-ink">{d.title}</p>
                <p className="mt-2 text-ink/60">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
            Where This Goes
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            What Success Looks Like
          </h2>

          <div className="relative mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
            <div
              className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-ink/10 lg:block"
              aria-hidden="true"
            />
            {careerStages.map((stage) => (
              <div key={stage.label} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-white">
                  {stage.icon}
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  {stage.year}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-ink">{stage.label}</p>
                <p className="mt-3 max-w-xs text-ink/60">{stage.description}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-xs italic text-ink/40">
            [NEEDS FROM BRADEN: confirm this description of how commissions and book ownership
            actually grow year over year before this goes live.]
          </p>
        </div>
      </section>

      <FitSection headline="Is This You?" items={fitItems} accentClassName="text-brand-blue" />

      <CoreValuesEmbed accentClassName="text-brand-blue" />

      <HiringProcessSection
        headline="Our Hiring Process"
        intro="We believe we need to be the best fit for you, and you need to be the best fit for us. So this process is more extensive, to make sure we're right for each other."
        steps={hiringSteps}
        accentClassName="bg-brand-blue"
      />

      <section className="bg-brand-blue text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Your Questions, Answered.
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((f) => (
              <p key={f.q}>
                <span className="font-semibold italic">{f.q}</span> &rarr; {f.a}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Don&apos;t just find a job. Build a career story.
          </h2>
          <div className="mt-10">
            <CareersInterestForm defaultRole="Insurance Sales Agent" />
          </div>
          <p className="mt-6 text-center text-sm text-ink/50">
            <Link href="/available-positions" className="hover:text-brand-blue">
              &larr; Back to all openings
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
