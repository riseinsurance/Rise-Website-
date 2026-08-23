import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { carrierLogos } from "@/lib/carriers";

type HeroProps = {
  eyebrow: string;
  headline: ReactNode;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  frameForeground: ReactNode;
  /** Scrolling strip of carrier logos under the hero content. */
  showCarrierMarquee?: boolean;
  /** Solid near-black (homepage) vs. full-bleed photo w/ overlay (interior pages) */
  background?: "solid" | ReactNode;
};

export function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  frameForeground,
  showCarrierMarquee = false,
  background = "solid",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-near-black text-white">
      {background !== "solid" && (
        <div className="absolute inset-0">
          {background}
          <div className="absolute inset-0 bg-near-black/70" />
        </div>
      )}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
          <h1 className="mt-5 font-display text-6xl font-bold leading-[1.03] tracking-tight sm:text-7xl">
            {headline}
          </h1>
          <p className="mt-7 max-w-md text-lg text-white/70">{subhead}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>

        <OffsetFrame className="aspect-[4/3] w-full lg:-mr-6" foreground={frameForeground} />
      </div>

      {showCarrierMarquee && <LogoMarquee logos={carrierLogos} className="relative" />}
    </section>
  );
}
