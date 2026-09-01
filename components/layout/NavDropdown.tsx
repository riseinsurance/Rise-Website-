"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="h-2.5 w-2.5 shrink-0 transition-transform duration-150 group-hover:rotate-180"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

// Pure CSS hover (group/group-hover), no open/close state needed on desktop.
// The panel sits inside the same relative `group` as the trigger, with the
// gap between them filled by padding rather than margin, so moving the
// cursor from the label down into the panel never drops the hover chain.
export function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const pathname = usePathname();
  const isActive = items.some((item) => item.href === pathname);

  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex items-center gap-1 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-wide transition-colors group-hover:text-brand-blue ${
          isActive ? "text-brand-blue" : "text-ink"
        }`}
      >
        {label}
        <ChevronIcon />
      </button>

      <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
        <div className="min-w-[210px] border border-ink/10 bg-white py-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block whitespace-nowrap px-4 py-2.5 font-display text-sm font-semibold transition-colors hover:bg-light-gray hover:text-brand-blue ${
                pathname === item.href ? "text-brand-blue" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
