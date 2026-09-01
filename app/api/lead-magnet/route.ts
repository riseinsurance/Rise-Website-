import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { resend, escapeHtml } from "@/lib/email";

const GUIDE_PATH = path.join(process.cwd(), "public/guides/5-insurance-mistakes.pdf");

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body as Record<string, string>;

  if (!email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const guide = await readFile(GUIDE_PATH);

  const { error } = await resend.emails.send({
    from: "Rise Insurance Agency <notifications@riseinsuranceagency.com>",
    to: email,
    subject: "Your Guide: 5 Insurance Mistakes That Cost People Thousands",
    html: `
      <p>Here's your free guide, attached as a PDF.</p>
      <p>If you have any questions in the meantime, just reply to this email, a real person from Rise will get back to you.</p>
    `,
    attachments: [{ filename: "5-insurance-mistakes.pdf", content: guide }],
  });

  if (error) {
    console.error("Lead magnet email failed:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  const { error: notifyError } = await resend.emails.send({
    from: "Rise Insurance Agency <notifications@riseinsuranceagency.com>",
    to: "service@riseinsuranceagency.com",
    replyTo: email,
    subject: `New guide download: ${email}`,
    html: `<p><strong>Email:</strong> ${escapeHtml(email)}</p><p>Downloaded the "5 Insurance Mistakes" guide.</p>`,
  });
  if (notifyError) {
    console.error("Lead magnet internal notification failed:", notifyError);
  }

  return NextResponse.json({ success: true });
}
