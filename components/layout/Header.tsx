import Link from "next/link";
import { nav, siteConfig, NEEDS_FROM_BRADEN } from "@/lib/site-config";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const hasPhone = siteConfig.phone !== NEEDS_FROM_BRADEN;

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <Logo variant="blue" height={30} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        {hasPhone ? (
          <a
            href={
              siteConfig.phoneHref !== NEEDS_FROM_BRADEN ? siteConfig.phoneHref : undefined
            }
            className="hidden shrink-0 bg-near-black px-5 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-black lg:inline-flex"
          >
            {siteConfig.phone}
          </a>
        ) : (
          <span className="hidden shrink-0 bg-near-black/10 px-5 py-3 text-xs font-semibold text-ink/50 lg:inline-flex">
            [Phone number needed]
          </span>
        )}

        <MobileNav />
      </div>
    </header>
  );
}
