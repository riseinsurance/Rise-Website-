import { Button } from "@/components/ui/Button";

export function CtaBanner({
  headline,
  subhead,
  cta,
}: {
  headline: string;
  subhead?: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-brand-charcoal text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-14 sm:py-16 lg:py-20 text-center lg:px-8">
        <h2 className="max-w-2xl font-display text-5xl font-semibold italic leading-tight tracking-tight">
          {headline}
        </h2>
        {subhead && <p className="max-w-xl text-white/70">{subhead}</p>}
        <Button href={cta.href} variant="primary">
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
