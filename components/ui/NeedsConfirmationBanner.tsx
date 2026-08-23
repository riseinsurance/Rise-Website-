import type { ReactNode } from "react";

// Visible flag for pages built around a real business/product claim that
// Braden hasn't confirmed yet (see build brief Section 6 & 7) — keeps the
// gap in front of whoever is reviewing the page, not buried in code.
export function NeedsConfirmationBanner({ children }: { children: ReactNode }) {
  return (
    <div className="border-b-2 border-red-600 bg-red-50 px-6 py-4 text-center text-sm font-semibold text-red-700">
      {children}
    </div>
  );
}
