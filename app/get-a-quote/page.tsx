import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { TrustSidebar } from "@/components/sections/TrustSidebar";
import { TextHighlight } from "@/components/ui/TextHighlight";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free, no-pressure insurance quote from Rise's local team. A real person follows up, not a call center.",
};

export default function GetAQuotePage() {
  return (
    <>
      <section className="bg-near-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16 lg:py-20 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Get a Quote</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Let&apos;s find the plan that <TextHighlight>actually</TextHighlight> fits.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Fill this out and a real person from Rise will follow up: no call center, no auto-dialer.
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-[2fr_1fr] lg:px-8">
          <QuoteForm />
          <TrustSidebar />
        </div>
      </section>
    </>
  );
}
