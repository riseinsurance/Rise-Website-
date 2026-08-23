"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, siteConfig, NEEDS_FROM_BRADEN } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const hasPhone = siteConfig.phone !== NEEDS_FROM_BRADEN;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-2 border-ink"
      >
        <span
          className={`h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-black/5 bg-white px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm font-semibold uppercase tracking-wide text-ink hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            {hasPhone ? (
              <a
                href={siteConfig.phoneHref !== NEEDS_FROM_BRADEN ? siteConfig.phoneHref : undefined}
                className="inline-flex bg-near-black px-5 py-3 text-sm font-bold text-white"
              >
                {siteConfig.phone}
              </a>
            ) : (
              <span className="inline-flex bg-near-black/10 px-5 py-3 text-xs font-semibold text-ink/50">
                [Phone number needed]
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
