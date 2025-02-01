// app/api/send-email/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { recaptchaValue, ...formData } = await request.json();

  // Valideer de reCAPTCHA-response
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaValue}`,
    {
      method: "POST",
    }
  );

  const data = await response.json();

  if (!data.success) {
    return NextResponse.json({ message: "reCAPTCHA validatie mislukt." }, { status: 400 });
  }

  // Verwerk het formulier
  return NextResponse.json({ message: "Formulier succesvol verwerkt!" }, { status: 200 });
}