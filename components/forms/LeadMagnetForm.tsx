"use client";

import { useState, type FormEvent } from "react";

// Submission endpoint not yet wired — build brief Section 8 requires
// confirming the backend (email forward vs. AgencyZoom webhook, etc.)
// before this goes live. UI is complete and ready to point at a real
// endpoint once that's decided.
export function LeadMagnetForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="text-lg font-semibold text-white">
        Thanks — check your inbox for the guide shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="lead-magnet-email" className="sr-only">
        Email address
      </label>
      <input
        id="lead-magnet-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full min-w-0 flex-1 border-2 border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 focus:border-brand-blue focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue-dark"
      >
        Send Me The Guide
      </button>
    </form>
  );
}
