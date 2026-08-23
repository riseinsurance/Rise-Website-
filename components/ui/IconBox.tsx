import type { ReactNode } from "react";

export function IconBox({ icon, className = "" }: { icon: ReactNode; className?: string }) {
  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center border-2 border-white text-brand-blue ${className}`}
    >
      {icon}
    </div>
  );
}
