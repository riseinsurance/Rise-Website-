import { NextResponse } from "next/server";
import { resend, escapeHtml, TEAM_RECIPIENTS } from "@/lib/email";

// AgencyZoom forwarding is intentionally not wired up yet — their webhook
// doesn't publicly document its expected payload format, and it's tied to a
// specific "lead vendor" template chosen when the webhook URL was created.
// Guessing field names risks silently creating malformed/empty leads rather
// than surfacing an error. Add the forward here once the field spec is
// confirmed (AgencyZoom support or the webhook setup page). The URL is
// already stored at process.env.AGENCYZOOM_WEBHOOK_URL.

export async function POST(request: Request) {
  const body = await request.json();
  const {
    firstName,
    lastName,
    email,
    phone,
    insuranceType,
    referralSource,
    message,
  } = body as Record<string, string>;

  if (!firstName || !lastName || !email || !phone || !insuranceType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Rise Insurance Agency <notifications@riseinsuranceagency.com>",
    to: TEAM_RECIPIENTS,
    replyTo: email,
    subject: `New quote request: ${firstName} ${lastName} (${insuranceType})`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Insuring:</strong> ${escapeHtml(insuranceType)}</p>
      ${referralSource ? `<p><strong>How they heard about us:</strong> ${escapeHtml(referralSource)}</p>` : ""}
      ${message ? `<p><strong>Notes:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
    `,
  });

  if (error) {
    console.error("Quote form email failed:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
