"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CornerWidget } from "./CornerWidget";

// The embedded Sanity Studio (/studio) renders its own full-screen editing
// UI and manages its own scroll/theme, so the marketing site's header,
// footer, and quote widget would just collide with it. Everything else on
// the site keeps the standard chrome.
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CornerWidget />
    </>
  );
}
