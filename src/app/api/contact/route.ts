import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/portfolio";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field, so pretend success for bots.
  if (data.website) return NextResponse.json({ ok: true });

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || name.length > 100 || !EMAIL_RE.test(email) || email.length > 200 || !message || message.length > 5000) {
    return NextResponse.json({ error: "Please fill in all fields correctly." }, { status: 400 });
  }

  // Until a domain is verified in Resend, only onboarding@resend.dev can send,
  // and only to the email address the Resend account was created with.
  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL || profile.email,
    replyTo: email,
    subject: `Portfolio enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Couldn't send your message. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
