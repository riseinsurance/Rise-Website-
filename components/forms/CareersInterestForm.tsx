"use client";

import { useState, type FormEvent } from "react";
import { TextField, TextAreaField } from "@/components/forms/FormField";

// Submission endpoint not yet wired — see build brief Section 8.
export function CareersInterestForm({
  defaultRole,
  buttonClassName = "bg-brand-blue hover:bg-brand-blue-dark",
}: {
  /** Prefills the "what role" field when linked from a specific job page. */
  defaultRole?: string;
  buttonClassName?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
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
      <TextField
        label="LinkedIn or Portfolio Link"
        id="careersLink"
        name="careersLink"
        type="url"
        placeholder="Optional"
      />
      <TextAreaField
        label="What kind of role are you looking for?"
        id="careersMessage"
        name="careersMessage"
        required
        defaultValue={defaultRole ? `Interested in: ${defaultRole}` : undefined}
        placeholder="Tell us a bit about yourself and what you're looking for."
      />
      <button
        type="submit"
        className={`w-full px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors ${buttonClassName}`}
      >
        Send It Over
      </button>
    </form>
  );
}
