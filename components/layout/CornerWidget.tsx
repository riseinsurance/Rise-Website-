"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig, NEEDS_FROM_BRADEN } from "@/lib/site-config";
import { Logo } from "@/components/ui/Logo";

export function CornerWidget() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const hasPhone = siteConfig.phone !== NEEDS_FROM_BRADEN;
  const hasEmail = siteConfig.email !== NEEDS_FROM_BRADEN;
  const hasAddress = siteConfig.address !== null;

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden w-72 border-2 border-near-black bg-white shadow-xl sm:block">
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center text-ink/50 hover:text-ink"
      >
        &times;
      </button>

      <div className="p-4 sm:p-5">
        <Logo variant="blue" height={18} />
        <p className="mt-2 hidden text-sm text-ink/80 sm:block">
          Get a personalized quote from top carriers, fast.
        </p>
        <Link
          href="/get-a-quote"
          className="mt-3 inline-flex w-full items-center justify-center bg-brand-blue px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark sm:mt-4"
        >
          Get a Quote
        </Link>

        <div className="mt-3 hidden items-center gap-4 border-t border-black/10 pt-4 text-xs text-ink/60 sm:mt-4 sm:flex">
          {hasPhone ? (
            <a
              href={siteConfig.phoneHref !== NEEDS_FROM_BRADEN ? siteConfig.phoneHref : undefined}
              className="hover:text-brand-blue"
              aria-label="Call us"
            >
              Call
            </a>
          ) : (
            <span className="text-ink/30">Call [TBD]</span>
          )}
          {hasEmail ? (
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue" aria-label="Email us">
              Email
            </a>
          ) : (
            <span className="text-ink/30">Email [TBD]</span>
          )}
          {siteConfig.isCloudBased ? (
            <span>Cloud-Based Agency</span>
          ) : hasAddress ? (
            <span>{siteConfig.address!.cityStateZip}</span>
          ) : (
            <span className="text-ink/30">Location [TBD]</span>
          )}
        </div>
      </div>
    </div>
  );
}
