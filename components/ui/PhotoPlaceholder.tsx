export function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-brand-charcoal p-6 text-center text-sm font-semibold text-white/40">
      {label}
    </div>
  );
}
