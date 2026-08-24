import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

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
