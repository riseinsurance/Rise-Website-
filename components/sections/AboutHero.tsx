import { Logo } from "@/components/ui/Logo";

// Same seamless-loop technique as LogoMarquee (render the content twice,
// animate translateX(0) -> translateX(-50%)) so the track wraps with no
// visible seam regardless of viewport width. REPEAT_COUNT just needs to
// be wide enough per copy that two copies always exceed the widest
// supported viewport at this font size.
const REPEAT_COUNT = 10;

// Shared with the logo's overlap shift below, so "cover 20% of the text"
// stays exactly true at any viewport width instead of approximating it
// with a fixed vh value that only happens to work at one screen size.
const MARQUEE_FONT_SIZE = "clamp(3.5rem, 13vw, 11rem)";

function MarqueeTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={ariaHidden}>
      {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
        <span key={i} className="mx-6 sm:mx-10">
          RISE INSURANCE AGENCY
        </span>
      ))}
    </div>
  );
}

export function AboutHero() {
  return (
    <>
      {/* Beat one: pure brand moment, no copy. Logo sits low rather than
          centered, huge enough to bleed toward the section edge. */}
      <section className="bg-brand-blue">
        <div className="flex min-h-[58vh] flex-col items-center justify-center overflow-hidden py-10 sm:min-h-[64vh]">
          {/* Fixed to the marquee's own font-size, not the section's, so
              the logo below (positioned via a negative margin relative to
              this same height) covers exactly 20% of the text band at any
              viewport width, mobile included, instead of a gap/overlap
              that happened to only work out at one screen size. */}
          <div
            aria-hidden="true"
            className="w-full overflow-hidden"
            style={{ height: MARQUEE_FONT_SIZE }}
          >
            <div
              className="flex w-max animate-marquee-slow whitespace-nowrap font-display font-extrabold uppercase leading-none text-ink/[0.1]"
              style={{ fontSize: MARQUEE_FONT_SIZE }}
            >
              <MarqueeTrack />
              <MarqueeTrack ariaHidden />
            </div>
          </div>

          <div
            className="relative"
            style={{ marginTop: `calc(${MARQUEE_FONT_SIZE} * -0.4)` }}
          >
            <Logo variant="white" height={320} className="h-auto w-[min(92vw,1050px)]" />
          </div>
        </div>
      </section>

      {/* Beat two: the message. Dark section reads as a deliberate
          separator band below the blue hero. */}
      <section className="bg-near-black text-white">
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-24 lg:px-8">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            We work for <span className="text-brand-blue">you</span>. Not the insurance companies.
          </h1>
          <p className="mt-6 text-lg text-white/70">
            That&apos;s not a tagline. It&apos;s the only reason Rise exists.
          </p>
        </div>
      </section>
    </>
  );
}
