import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const variantClasses = {
  primary: "bg-brand-blue text-white hover:bg-brand-blue-dark",
  secondary: "bg-near-black text-white hover:bg-black",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-8 py-4 font-display text-sm font-semibold uppercase tracking-wide transition-colors ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
