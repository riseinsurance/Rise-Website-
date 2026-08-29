import type { Metadata } from "next";
import Link from "next/link";
import { CareersInterestForm } from "@/components/forms/CareersInterestForm";
import { ResumeMockup } from "@/components/growth-team/ResumeMockup";
import { Photo } from "@/components/ui/Photo";
import { UnderlineHighlight } from "@/components/ui/UnderlineHighlight";
import { ScrollHighlight } from "@/components/ui/ScrollHighlight";
import { CircleHighlight } from "@/components/ui/CircleHighlight";
import { FitSection } from "@/components/sections/FitSection";
import { CoreValuesEmbed } from "@/components/sections/CoreValuesEmbed";
import { HiringProcessSection } from "@/components/sections/HiringProcessSection";

export const metadata: Metadata = {
  title: "Growth Team Member",
  description: "Join Rise Insurance Agency's Growth Team — spark conversations, learn sales, and launch your career.",
};

// This page intentionally breaks from the site's blue/near-black palette —
// a bright, energetic multi-color treatment for an entry-level sales role
// aimed at young, early-career applicants. Nowhere else on the site.
const COLORS = [
  { text: "text-pink-500", border: "border-pink-500", bg: "bg-pink-500" },
  { text: "text-sky-500", border: "border-sky-500", bg: "bg-sky-500" },
  { text: "text-emerald-500", border: "border-emerald-500", bg: "bg-emerald-500" },
  { text: "text-orange-500", border: "border-orange-500", bg: "bg-orange-500" },
];

function skillIcon(d: string) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d={d} />
    </svg>
  );
}

const responsibilities = [
  {
    title: "Start real conversations",
    description: "Reach out to prospects and open the door to new relationships.",
  },
  {
    title: "Learn the fundamentals of sales",
    description: "Shadow experienced agents and build skills that carry into any career.",
  },
  {
    title: "Help grow the agency",
    description: "Every conversation you start helps build something bigger.",
  },
];

const skills = [
  { title: "Confident communication", d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" },
  { title: "Objection handling & persuasion", d: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
  { title: "CRM & sales tools", d: "M4 5h16v14H4zM4 10h16M9 15h6" },
  { title: "Resilience & goal-setting", d: "M12 2l2.5 7.5H22l-6 4.5 2.5 7.5-6.5-4.5-6.5 4.5 2.5-7.5-6-4.5h7.5Z" },
];

const takeaways = [
  "Learn how to handle objections and stay confident under pressure.",
  "Build real experience holding conversations that matter.",
  "Understand how sales and business actually work, not just the theory.",
  "Stand out from other applicants for your next job or internship.",
];

const fitItems = [
  "Outgoing and comfortable starting a conversation, phone included.",
  "Coachable, and genuinely wants to learn the fundamentals of sales.",
  "Resilient and goal-oriented. A \"no\" doesn't slow you down.",
  "No prior sales experience required. We'll train you from the ground up.",
];

const hiringSteps = [
  "Submit Application",
  "Phone Interview",
  "In-Person Interview with Leadership",
  "Get Hired",
];

const faqs = [
  {
    q: "Do I need sales experience?",
    a: "Nope. We'll train you from the ground up.",
  },
  {
    q: "Is this commission-based?",
    a: "Compensation details are shared during the interview process.",
  },
  {
    q: "Is this full-time?",
    a: "We'll talk through scheduling and fit during the interview — this role can flex depending on the candidate.",
  },
  {
    q: "Where can this lead?",
    a: "Growth Team Members who perform well often move into full Sales Agent or Account Manager roles.",
  },
];

export default function GrowthTeamPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
          <div className="relative order-2 overflow-hidden text-white lg:order-1">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #ec4899 0%, #f97316 33%, #10b981 66%, #0ea5e9 100%)",
              }}
            />
            <div className="relative flex h-full flex-col justify-center px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
                Sales &middot; Entry Level
              </p>
              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.1] tracking-tight drop-shadow-sm sm:text-6xl">
                Spark conversations. Learn sales.{" "}
                <UnderlineHighlight>Launch</UnderlineHighlight> your career.
              </h1>
              <p className="mt-6 text-lg text-white/90">
                Step into a role where you&apos;ll learn to build relationships, open doors, and
                grow a real career in sales — no experience required.
              </p>
              <a
                href="#apply"
                className="mt-8 inline-flex w-fit bg-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-105"
              >
                Apply Now
              </a>
            </div>
          </div>
          <div className="relative order-1 min-h-[320px] lg:order-2">
            <Photo src="/photos/growth-team.jpg" alt="A Rise Insurance Agency Growth Team member" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 text-center lg:px-8">
          <h2 className="font-display text-5xl font-semibold tracking-tight text-ink">
            <ScrollHighlight>Launch your sales journey here.</ScrollHighlight>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            As our Growth Team Member, you&apos;ll be the spark that starts new relationships —
            reaching out, starting conversations, and learning the fundamentals of sales from a
            team that actually wants you to succeed. It&apos;s hands-on experience that turns into
            a real career, not just a paycheck.
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-pink-500">
            What You&apos;ll Do
          </p>
          <h2 className="mt-4 text-center font-display text-5xl font-semibold tracking-tight text-ink">
            Your Impact Matters.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {responsibilities.map((r, i) => (
              <div key={r.title} className={`border-t-4 bg-white p-8 text-center shadow-sm ${COLORS[i % COLORS.length].border}`}>
                <p className="font-display text-xl font-semibold text-ink">{r.title}</p>
                <p className="mt-2 text-ink/60">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <h2 className="text-center font-display text-5xl font-semibold tracking-tight text-ink">
            Build Skills That{" "}
            <CircleHighlight strokeColor="#ec4899">Set You Apart</CircleHighlight>.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <div key={s.title} className={`border-2 p-6 text-center ${COLORS[i % COLORS.length].border}`}>
                <div className={`mx-auto flex justify-center ${COLORS[i % COLORS.length].text}`}>
                  {skillIcon(s.d)}
                </div>
                <p className="mt-4 font-medium text-ink">{s.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div className="min-w-0">
              <div className="h-1 w-16 bg-sky-500" />
              <h2 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink">
                What You&apos;ll Walk Away With:
              </h2>
              <p className="mt-3 inline-block font-display text-xl font-semibold text-sky-500 underline decoration-2 underline-offset-4">
                Real, Resume-Worthy Sales Experience
              </p>
              <ol className="mt-8 space-y-4">
                {takeaways.map((t, i) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="font-display text-lg font-bold text-ink">{i + 1}.</span>
                    <span className="text-lg text-ink/70">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="min-w-0 flex justify-center">
              <ResumeMockup />
            </div>
          </div>
        </div>
      </section>

      <FitSection headline="Is This You?" items={fitItems} accentClassName="text-emerald-500" />

      <CoreValuesEmbed accentClassName="text-orange-500" />

      <HiringProcessSection
        headline="Our Hiring Process"
        steps={hiringSteps}
        accentClassName="bg-pink-500"
      />

      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(115deg, #0ea5e9 0%, #10b981 50%, #ec4899 100%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <h2 className="font-display text-5xl font-semibold tracking-tight">
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
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <h2 className="text-center font-display text-5xl font-semibold tracking-tight text-ink">
            Don&apos;t just find a job. Build a career story.
          </h2>
          <div className="mt-10">
            <CareersInterestForm
              defaultRole="Growth Team Member"
              buttonClassName="bg-emerald-500 hover:bg-emerald-600"
            />
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
