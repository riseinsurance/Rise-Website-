"use client";

import { useState, type FormEvent } from "react";

export function LeadMagnetForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "submitted" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <p className="text-lg font-semibold text-white">
        Thanks! Check your inbox for the guide shortly.
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
        disabled={status === "sending"}
        className="shrink-0 bg-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Me The Guide"}
      </button>
      {status === "error" && (
        <p className="text-sm font-semibold text-red-400 sm:basis-full">
          Something went wrong sending the guide. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
