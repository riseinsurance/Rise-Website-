import Image from "next/image";

type CarrierLogo = { name: string; src: string; width: number; height: number };

// Same infinite-scroll technique as Marquee (pure CSS, no scroll-jacking),
// but rendering real carrier logos instead of text — the carriers Rise
// shops on a client's behalf. Logo files sourced from ~/Desktop/Insurance
// Company Logos, background-keyed to transparent PNGs.
//
// Rendered as white silhouettes (brightness-0 invert) rather than each
// brand's original colors: a dozen different saturated brand colors on a
// stark background would clash with the dark hero's art direction, and a
// uniform monochrome treatment is the standard "logo cloud" pattern — it
// reads as one cohesive strip instead of a scatter of clashing logos, and
// guarantees every logo (including dark ones like Obie and The Hartford)
// reads with identical contrast.
export function LogoMarquee({
  logos,
  className = "",
}: {
  logos: readonly CarrierLogo[];
  className?: string;
}) {
  return (
    <div className={`overflow-hidden border-y border-white/10 ${className}`}>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center px-8 py-6">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-7 w-auto object-contain opacity-50 brightness-0 invert transition-opacity duration-200 hover:opacity-90 sm:h-8"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
