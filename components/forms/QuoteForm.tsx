"use client";

import { useState, type FormEvent } from "react";
import { TextField, SelectField, TextAreaField } from "@/components/forms/FormField";

// Submission endpoint not yet wired — see build brief Section 8: needs a
// decision on backend (email forward vs. AgencyZoom webhook, etc.) before
// this goes live. Form UI and validation are complete.
export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-2 border-brand-blue bg-white p-8">
        <p className="text-2xl font-black text-ink">Thanks — we&apos;ve got it.</p>
        <p className="mt-2 text-ink/70">
          A real person from Rise will reach out shortly to talk through your quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border-2 border-ink/10 bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="First Name" id="firstName" name="firstName" type="text" required />
        <TextField label="Last Name" id="lastName" name="lastName" type="text" required />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Email" id="email" name="email" type="email" required />
        <TextField label="Phone" id="phone" name="phone" type="tel" required />
      </div>
      <SelectField label="What are you insuring?" id="insuranceType" name="insuranceType" required defaultValue="">
        <option value="" disabled>
          Select one
        </option>
        <option value="home">Home</option>
        <option value="auto">Auto</option>
        <option value="renters">Renters</option>
        <option value="business">Business</option>
        <option value="life">Life</option>
        <option value="other">Other / not sure yet</option>
      </SelectField>
      <SelectField label="How did you hear about us?" id="referralSource" name="referralSource" defaultValue="">
        <option value="" disabled>
          Select one
        </option>
        <option value="google">Google search</option>
        <option value="referral">Referral from a friend or family member</option>
        <option value="realtor-lender">Realtor / lender</option>
        <option value="social">Social media</option>
        <option value="other">Other</option>
      </SelectField>
      <TextAreaField
        label="Anything else we should know?"
        id="message"
        name="message"
        placeholder="Current carrier, renewal date, specific concerns — whatever's useful."
      />
      <button
        type="submit"
        className="w-full bg-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue-dark"
      >
        Request My Quote
      </button>
    </form>
  );
}
