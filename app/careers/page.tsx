import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { Watermark } from "@/components/ui/Watermark";
import { ScrollHighlight } from "@/components/ui/ScrollHighlight";
import { UnderlineHighlight } from "@/components/ui/UnderlineHighlight";
import { coreValues, benefits } from "@/lib/careers-content";

const caveat = Caveat({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Rise Insurance Agency team, a values-based team building something that matters, not just hiring for a desk.",
};

export default function CareersPage() {
  return (
    <>
      {/* Careers is the one section that breaks the site-wide pattern on
          purpose (build brief Section 3.4): a decorative script-font accent
          phrase over a bold, blue-outlined headline. This treatment appears
          nowhere else on the site. Content and structure adapted from Owen
          Insurance Agency's live careers pages at Braden's direction. */}
      <section className="relative overflow-hidden bg-near-black text-white">
        <div className="absolute inset-0">
          <Photo src="/photos/careers-header.jpg" alt="The Rise Insurance Agency team" />
          <div className="absolute inset-0 bg-near-black/60" />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-20 text-center sm:pb-32 sm:pt-80 lg:px-8">
          <p className={`${caveat.className} text-4xl text-brand-blue sm:text-5xl`}>
            we get excited
          </p>
          <h1 className="text-outline-blue mt-2 font-display text-5xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-7xl">
            About Being At Work.
          </h1>
          <p className="mt-8 text-xl font-semibold text-white">
            We&apos;re not just hiring. We&apos;re building something that matters.
          </p>
          <div className="mt-6 h-px w-16 bg-brand-blue/50" />
          <p className="mt-6 text-lg text-white/70">
            We&apos;re a mission-driven team looking for people who care deeply, work hard, and
            want more than just a job. If you believe in family, faith, and doing the right
            thing, you just might belong here.
          </p>
          <Link
            href="/available-positions"
            className="mt-8 border-2 border-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
          >
            Join Our Mission
          </Link>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 text-center lg:px-8">
          <h2 className="font-display text-5xl font-semibold italic tracking-tight text-brand-blue">
            Work That Matters
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            We don&apos;t sell insurance; we serve people. Our team shows up every day with{" "}
            <ScrollHighlight markClassName="bg-brand-blue/25" className="text-ink font-semibold">
              integrity, grit, and a passion for helping others
            </ScrollHighlight>
            . We chase excellence, challenge the norm, and never settle for average.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            If you&apos;re hungry to grow, wired to serve, and ready to make a difference,
            you&apos;ll fit right in.
          </p>
        </div>
      </section>

      <section id="core-values" className="relative overflow-hidden bg-brand-blue">
        <Watermark
          text="VALUES"
          className="-bottom-[0.25em] left-1/2 -translate-x-1/2 text-ink/[0.08]"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <h2 className="text-center font-display text-5xl font-semibold tracking-tight text-white">
            Core Values
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-near-black" />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.slice(0, 5).map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
                  {value.icon}
                </div>
                <p className="font-bold text-ink">{value.title}</p>
                <p className="mt-2 text-sm text-ink/60">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/our-core-values" className="font-bold text-white hover:text-near-black">
              See All Core Values &gt;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-block bg-brand-blue px-4 py-1.5 text-sm font-bold text-white">
                Benefits
              </span>
              <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink">
                How We Care About Our People
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                We exist for those outside our company walls, those who need trusted advisors
                in their corner. But we also deeply care about the people inside our walls and
                their families. We offer personal, and developmental benefits and some that are
                just flat out fun.
              </p>
            </div>
            <OffsetFrame
              className="aspect-[4/3] w-full"
              foreground={<Photo src="/photos/careers-secondary.jpg" alt="Members of the Rise Insurance Agency team" focusY={20} />}
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
                  {benefit.icon}
                </div>
                <div>
                  <p className="font-bold text-ink">{benefit.title}</p>
                  <p className="mt-1 text-ink/60">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <Watermark
          text="RISE"
          className="-bottom-[0.25em] left-1/2 -translate-x-1/2 text-black/[0.04]"
        />

        <div className="relative mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:py-20 text-center lg:px-8">
          <span className="inline-block bg-brand-blue px-4 py-1.5 text-sm font-bold text-white">
            Culture
          </span>
          <h2 className="mt-4 font-display text-5xl font-semibold italic tracking-tight text-ink">
            Life At Rise Insurance Agency
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            We firmly believe in having a fun, healthy culture where people actually enjoy
            showing up, and we protect what we&apos;ve got. This is a place fueled by passion,
            grounded in dedication, and energized by people who care deeply. We celebrate big,
            support each other, and never tolerate drama or entitlement.{" "}
            <UnderlineHighlight strokeColor="#00aeef" animateOnScroll className="text-ink">
              Culture isn&apos;t a side note here.
            </UnderlineHighlight>{" "}
            It&apos;s what we build everything on.
          </p>
        </div>
      </section>

      <section className="bg-brand-charcoal">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-14 sm:py-16 lg:py-20 text-center lg:px-8">
          <h2 className="font-display text-5xl font-semibold tracking-tight text-white">
            Ready to join the mission?
          </h2>
          <Link
            href="/available-positions"
            className="border-2 border-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
          >
            Join Our Mission
          </Link>
        </div>
      </section>
    </>
  );
}
