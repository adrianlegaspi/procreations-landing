import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL;
const fromEmail =
  process.env.CONTACT_FROM_EMAIL || "contacto@adrianlegaspi.dev";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const NAME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]{2,60}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { success: false, error: "Email service not configured." },
      { status: 500 }
    );
  }

  if (!toEmail) {
    return NextResponse.json(
      { success: false, error: "Recipient email not configured." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();

    if (!NAME_REGEX.test(name)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid name. Use 2-60 characters with letters, spaces, hyphen, or apostrophe.",
        },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          error: "Message should be between 10 and 2000 characters.",
        },
        { status: 400 }
      );
    }

    const subject = `New inquiry from ${name}`;
    const safeMessage = escapeHtml(message);

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="margin-bottom: 16px;">New inquiry from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] ?? char;
  });
}
