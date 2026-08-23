import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";

type OfferSectionProps = {
  eyebrow: string;
  headline: string;
  subhead: string;
};

export function OfferSection({ eyebrow, headline, subhead }: OfferSectionProps) {
  return (
    <section className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {headline}
        </h2>
        <p className="mt-6 text-lg text-white/70">{subhead}</p>
        <div className="mt-10 mx-auto max-w-md">
          <LeadMagnetForm />
        </div>
      </div>
    </section>
  );
}
