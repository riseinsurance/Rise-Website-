import { NextResponse } from "next/server";
import { resend, escapeHtml, TEAM_RECIPIENTS } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const { refName, refCompany, refEmail, refPhone, clientName, clientContact, refNotes } =
    body as Record<string, string>;

  if (!refName || !refCompany || !refEmail || !refPhone || !clientName || !clientContact) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Rise Insurance Agency <notifications@riseinsuranceagency.com>",
    to: TEAM_RECIPIENTS,
    replyTo: refEmail,
    subject: `New referral: ${clientName} (from ${refName})`,
    html: `
      <p><strong>Referred by:</strong> ${escapeHtml(refName)}, ${escapeHtml(refCompany)}</p>
      <p><strong>Their email:</strong> ${escapeHtml(refEmail)}</p>
      <p><strong>Their phone:</strong> ${escapeHtml(refPhone)}</p>
      <p><strong>Client name:</strong> ${escapeHtml(clientName)}</p>
      <p><strong>Client phone or email:</strong> ${escapeHtml(clientContact)}</p>
      ${refNotes ? `<p><strong>Notes:</strong></p><p>${escapeHtml(refNotes).replace(/\n/g, "<br>")}</p>` : ""}
    `,
  });

  if (error) {
    console.error("Referral form email failed:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
