"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-display text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand-blue ${
        isActive ? "text-brand-blue underline underline-offset-8" : "text-ink"
      }`}
    >
      {label}
    </Link>
  );
}
