"use client";

import { useState, type FormEvent } from "react";
import { TextField, TextAreaField } from "@/components/forms/FormField";

// Submission endpoint not yet wired — see build brief Section 8.
export function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-2 border-brand-blue bg-white p-8">
        <p className="text-2xl font-black text-ink">Got it, thank you.</p>
        <p className="mt-2 text-ink/70">
          We&apos;ll reach out to your client quickly and keep you posted along the way.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border-2 border-ink/10 bg-white p-6 sm:p-8">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Your Info</p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Your Name" id="refName" name="refName" type="text" required />
        <TextField label="Company" id="refCompany" name="refCompany" type="text" required />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Your Email" id="refEmail" name="refEmail" type="email" required />
        <TextField label="Your Phone" id="refPhone" name="refPhone" type="tel" required />
      </div>

      <p className="pt-4 text-sm font-bold uppercase tracking-widest text-brand-blue">
        Your Client
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Client Name" id="clientName" name="clientName" type="text" required />
        <TextField label="Client Phone or Email" id="clientContact" name="clientContact" type="text" required />
      </div>
      <TextAreaField
        label="What should we know?"
        id="refNotes"
        name="refNotes"
        placeholder="Closing date, type of coverage they need, anything time-sensitive."
      />

      <button
        type="submit"
        className="w-full bg-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue-dark"
      >
        Send The Referral
      </button>
    </form>
  );
}
