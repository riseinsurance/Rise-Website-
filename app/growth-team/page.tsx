import type { Metadata } from "next";
import Link from "next/link";
import { CareersInterestForm } from "@/components/forms/CareersInterestForm";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "Growth Team Member",
  description: "Join Rise Insurance Agency's Growth Team in Lubbock, TX — spark conversations, learn sales, and launch your career.",
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
          <div className="relative overflow-hidden text-white">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #ec4899 0%, #f97316 33%, #10b981 66%, #0ea5e9 100%)",
              }}
            />
            <div className="relative flex h-full flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
                Sales &middot; Entry Level
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight drop-shadow-sm sm:text-5xl">
                Spark conversations. Learn sales. Launch your career.
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
          <div className="relative min-h-[320px]">
            <Photo src="/photos/growth-team.jpg" alt="A Rise Insurance Agency Growth Team member" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Launch your sales journey here.
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
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-pink-500">
            What You&apos;ll Do
          </p>
          <h2 className="mt-4 text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
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
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Build Skills That Set You Apart.
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

          <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl italic text-ink/70">
            &ldquo;Growth Team Member — Generated qualified leads and built foundational sales
            skills for a growing insurance agency.&rdquo;
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Is This You?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            You&apos;re outgoing, coachable, and not afraid of a phone. You want real experience
            building a sales career, not busywork. No prior sales experience required — we&apos;ll
            train you.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(115deg, #0ea5e9 0%, #10b981 50%, #ec4899 100%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 lg:px-8">
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
            <CareersInterestForm
              defaultRole="Growth Team Member"
              buttonClassName="bg-pink-500 hover:bg-pink-600"
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
