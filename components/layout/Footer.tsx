import Link from "next/link";
import { footerNav, siteConfig, NEEDS_FROM_BRADEN } from "@/lib/site-config";
import { Watermark } from "@/components/ui/Watermark";
import { Logo } from "@/components/ui/Logo";

function Placeholder({ label }: { label: string }) {
  return <span className="text-white/40">[{label} needed]</span>;
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-near-black text-white">
      <div className="h-1.5 w-full bg-brand-blue" />

      <Watermark
        text="RISE"
        className="-bottom-[0.25em] left-1/2 -translate-x-1/2 text-white/[0.04]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Logo variant="white" height={26} />
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Independent insurance for Texas families and businesses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/50">Menu</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-brand-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/50">
              Call Us / Our Location
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                {siteConfig.phone !== NEEDS_FROM_BRADEN ? (
                  <a
                    href={siteConfig.phoneHref !== NEEDS_FROM_BRADEN ? siteConfig.phoneHref : undefined}
                    className="hover:text-brand-blue"
                  >
                    {siteConfig.phone}
                  </a>
                ) : (
                  <Placeholder label="Phone" />
                )}
              </li>
              <li>
                {siteConfig.email !== NEEDS_FROM_BRADEN ? (
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue">
                    {siteConfig.email}
                  </a>
                ) : (
                  <Placeholder label="Email" />
                )}
              </li>
              <li>
                {siteConfig.isCloudBased ? (
                  "Cloud-Based Agency"
                ) : siteConfig.address ? (
                  <>
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.cityStateZip}
                  </>
                ) : (
                  <Placeholder label="Office address" />
                )}
              </li>
              <li>
                {siteConfig.hours !== NEEDS_FROM_BRADEN ? (
                  siteConfig.hours
                ) : (
                  <Placeholder label="Business hours" />
                )}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/50">Follow Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                {siteConfig.social.facebook ? (
                  <a href={siteConfig.social.facebook} className="hover:text-brand-blue">
                    Facebook
                  </a>
                ) : (
                  <Placeholder label="Facebook link" />
                )}
              </li>
              <li>
                {siteConfig.social.instagram ? (
                  <a href={siteConfig.social.instagram} className="hover:text-brand-blue">
                    Instagram
                  </a>
                ) : (
                  <Placeholder label="Instagram link" />
                )}
              </li>
              <li>
                {siteConfig.social.linkedin ? (
                  <a href={siteConfig.social.linkedin} className="hover:text-brand-blue">
                    LinkedIn
                  </a>
                ) : (
                  <Placeholder label="LinkedIn link" />
                )}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
