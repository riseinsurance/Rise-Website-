import { NextResponse } from "next/server";
import { resend, escapeHtml } from "@/lib/email";

export async function POST(request: Request) {
  const formData = await request.formData();
  const careersName = formData.get("careersName") as string | null;
  const careersEmail = formData.get("careersEmail") as string | null;
  const careersPhone = formData.get("careersPhone") as string | null;
  const careersLink = formData.get("careersLink") as string | null;
  const careersMessage = formData.get("careersMessage") as string | null;
  const resume = formData.get("careersResume") as File | null;

  if (!careersName || !careersEmail || !careersPhone || !careersMessage) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const attachments = [];
  if (resume && resume.size > 0) {
    const buffer = Buffer.from(await resume.arrayBuffer());
    attachments.push({ filename: resume.name, content: buffer });
  }

  const { error } = await resend.emails.send({
    from: "Rise Insurance Agency <notifications@riseinsuranceagency.com>",
    to: ["service@riseinsuranceagency.com"],
    replyTo: careersEmail,
    subject: `New career interest: ${careersName}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(careersName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(careersEmail)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(careersPhone)}</p>
      ${careersLink ? `<p><strong>LinkedIn / Portfolio:</strong> ${escapeHtml(careersLink)}</p>` : ""}
      <p><strong>What they're looking for:</strong></p>
      <p>${escapeHtml(careersMessage).replace(/\n/g, "<br>")}</p>
      ${resume && resume.size > 0 ? "<p>Resume attached.</p>" : ""}
    `,
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  if (error) {
    console.error("Careers form email failed:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
