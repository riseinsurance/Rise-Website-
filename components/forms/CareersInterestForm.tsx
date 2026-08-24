"use client";

import { useState, type FormEvent } from "react";
import { TextField, TextAreaField, FileField } from "@/components/forms/FormField";

export function CareersInterestForm({
  defaultRole,
  buttonClassName = "bg-brand-blue hover:bg-brand-blue-dark",
}: {
  /** Prefills the "what role" field when linked from a specific job page. */
  defaultRole?: string;
  buttonClassName?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-2 border-brand-blue bg-white p-8">
        <p className="text-2xl font-black text-ink">Thanks for reaching out.</p>
        <p className="mt-2 text-ink/70">We&apos;ll be in touch if there&apos;s a fit.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border-2 border-ink/10 bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Full Name" id="careersName" name="careersName" type="text" required />
        <TextField label="Email" id="careersEmail" name="careersEmail" type="email" required />
      </div>
      <TextField label="Phone" id="careersPhone" name="careersPhone" type="tel" required />
      <TextField
        label="LinkedIn or Portfolio Link"
        id="careersLink"
        name="careersLink"
        type="url"
        placeholder="Optional"
      />
      <FileField
        label="Resume"
        id="careersResume"
        name="careersResume"
        accept=".pdf,.doc,.docx"
      />
      <TextAreaField
        label="What kind of role are you looking for?"
        id="careersMessage"
        name="careersMessage"
        required
        defaultValue={defaultRole ? `Interested in: ${defaultRole}` : undefined}
        placeholder="Tell us a bit about yourself and what you're looking for."
      />
      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">
          Something went wrong sending this. Please try again in a moment.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors disabled:opacity-60 ${buttonClassName}`}
      >
        {status === "sending" ? "Sending..." : "Send It Over"}
      </button>
    </form>
  );
}
