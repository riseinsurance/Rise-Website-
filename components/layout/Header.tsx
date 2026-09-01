import Link from "next/link";
import { navGroups, siteConfig, NEEDS_FROM_BRADEN } from "@/lib/site-config";
import { NavLink } from "./NavLink";
import { NavDropdown } from "./NavDropdown";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Header() {
  const hasPhone = siteConfig.phone !== NEEDS_FROM_BRADEN;

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <Logo variant="blue" height={30} />
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 xl:flex">
          {navGroups.map((item) =>
            item.type === "dropdown" ? (
              <NavDropdown key={item.label} label={item.label} items={item.items} />
            ) : (
              <NavLink key={item.href} href={item.href} label={item.label} />
            )
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <Button href="/get-a-quote" variant="primary">
            Get a Quote
          </Button>
          {hasPhone ? (
            <a
              href={siteConfig.phoneHref !== NEEDS_FROM_BRADEN ? siteConfig.phoneHref : undefined}
              className="whitespace-nowrap font-display text-sm font-semibold text-ink transition-colors hover:text-brand-blue"
            >
              {siteConfig.phone}
            </a>
          ) : (
            <span className="whitespace-nowrap text-xs font-semibold text-ink/50">
              [Phone number needed]
            </span>
          )}
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
