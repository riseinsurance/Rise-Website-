"use client";

import { useState } from "react";
import Link from "next/link";
import { navGroups, siteConfig, NEEDS_FROM_BRADEN } from "@/lib/site-config";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={`h-3 w-3 shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const hasPhone = siteConfig.phone !== NEEDS_FROM_BRADEN;

  function close() {
    setOpen(false);
    setExpanded(null);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-black/5 bg-white px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-1">
            {navGroups.map((item) =>
              item.type === "dropdown" ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                    aria-expanded={expanded === item.label}
                    className="flex w-full items-center justify-between py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink hover:text-brand-blue"
                  >
                    {item.label}
                    <ChevronIcon open={expanded === item.label} />
                  </button>
                  {expanded === item.label && (
                    <div className="flex flex-col gap-1 pb-2 pl-4">
                      {item.items.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={close}
                          className="py-2 font-display text-sm font-semibold text-ink/70 hover:text-brand-blue"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink hover:text-brand-blue"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/get-a-quote"
              onClick={close}
              className="inline-flex bg-brand-blue px-5 py-3 text-sm font-bold text-white"
            >
              Get a Quote
            </Link>
            {hasPhone ? (
              <a
                href={siteConfig.phoneHref !== NEEDS_FROM_BRADEN ? siteConfig.phoneHref : undefined}
                className="font-display text-sm font-semibold text-ink"
              >
                {siteConfig.phone}
              </a>
            ) : (
              <span className="text-xs font-semibold text-ink/50">[Phone number needed]</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
