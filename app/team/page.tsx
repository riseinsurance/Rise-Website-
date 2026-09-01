import type { Metadata } from "next";

// Minimal placeholder so the About page's "Meet Our Team" button has
// somewhere to go. Replaced with the real Team page once the roster and
// photos are ready, not part of this build pass.
export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the people behind Rise Insurance Agency.",
};

export default function TeamPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Our Team</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink">
          Meet the people behind Rise.
        </h1>
        <p className="mt-6 text-lg text-ink/70">This page is on its way. Check back soon.</p>
      </div>
    </section>
  );
}
