import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { StatsCounterSection } from "@/components/sections/StatsCounterSection";
import { CoreValuesEmbed } from "@/components/sections/CoreValuesEmbed";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ScrollHighlight } from "@/components/ui/ScrollHighlight";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rise Insurance Agency is independent, which means no insurance company owns our loyalty. We work for you, not the insurance companies.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20 lg:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
            The Short Version
          </p>
          <p className="mt-6 font-display text-3xl font-semibold leading-snug text-ink sm:text-4xl">
            Rise is independent, which means no insurance company owns our loyalty. We work a
            multitude of carriers to build what actually fits, not what&apos;s easiest to sell.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Why Rise Exists
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/80">
            <p>
              Rise exists because of one belief: consumers need{" "}
              <ScrollHighlight markClassName="bg-brand-blue" className="text-ink">
                an advocate
              </ScrollHighlight>
              .
            </p>
            <p>
              Too many agents work for the insurance companies. Not for you. Not for the people
              who actually keep them in business.
            </p>
            <p>
              <ScrollHighlight markClassName="bg-brand-blue" className="text-ink">
                The little guy
              </ScrollHighlight>{" "}
              needs someone in their corner. That&apos;s who we are.
            </p>
            <p>
              With access to a multitude of carriers, we build your coverage around your life,
              not a script.
            </p>
          </div>
        </div>
      </section>

      <StatsCounterSection />

      <CoreValuesEmbed heading="What We Believe" href="/careers" />

      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20 lg:py-24 lg:px-8">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Meet Our Team
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/team" variant="secondary">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Ready to work with someone in your corner?"
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
