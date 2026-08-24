import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";

type OfferSectionProps = {
  eyebrow: string;
  headline: string;
  subhead: string;
  headlineSize?: string;
};

export function OfferSection({
  eyebrow,
  headline,
  subhead,
  headlineSize = "text-5xl sm:text-6xl",
}: OfferSectionProps) {
  return (
    <section className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:py-24 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <h2 className={`mt-4 font-display font-semibold leading-tight tracking-tight ${headlineSize}`}>
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
