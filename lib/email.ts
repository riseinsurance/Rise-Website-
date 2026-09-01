import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

// The forms where every submission is worth the whole team seeing
// immediately (get a quote, referrals) notify everyone on this list.
// Lower-signal forms (lead magnet downloads, careers interest) notify a
// single internal address instead.
export const TEAM_RECIPIENTS = [
  "braden@riseinsuranceagency.com",
  "journey@riseinsuranceagency.com",
  "gary@riseinsuranceagency.com",
  "brad@riseinsuranceagency.com",
];

// Every form field below is user-submitted and gets embedded directly into
// an HTML email body — escape it or a submitter can inject markup/scripts
// into the notification email an employee opens.
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
