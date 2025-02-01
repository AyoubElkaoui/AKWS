import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, phone, selectedPackage, selectedService, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  console.log("Verstuur e-mail via SMTP:", process.env.SMTP_HOST);

  const mailOptions = {
    from: `"AK Web Solutions" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Nieuw contactformulier: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #007BFF;">Nieuw bericht via contactformulier</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telefoon:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Pakket:</strong> ${selectedPackage}</p>
        <p><strong>Dienst:</strong> ${selectedService}</p>
        <p><strong>Onderwerp:</strong> ${subject}</p>
        <p><strong>Bericht:</strong></p>
        <p style="border-left: 3px solid #007BFF; padding-left: 10px; color: #555;">${message}</p>

        <hr style="border-top: 1px solid #ddd; margin-top: 20px;">

        <table style="width: 100%; max-width: 500px; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
          <tr>
            <td style="width: 100px; text-align: center; vertical-align: middle; padding-right: 15px; border-right: 1px solid #ccc;">
              <img src="https://www.akwebsolutions.nl/images/logo/logo-light.svg" alt="AK Web Solutions Logo" style="max-width: 80px;">
            </td>
            <td style="padding-left: 15px;">
              <p style="margin: 0; font-size: 16px; font-weight: bold; color: #000;">Ayoub El Kaoui</p>
              <p style="margin: 0; font-size: 14px; color: #555;">Eigenaar</p>
              <p style="margin: 10px 0 5px 0;">
                <img src="https://img.icons8.com/ios-filled/15/000000/phone.png" style="vertical-align: middle;">
                <a href="tel:+31685722387" style="color: #000; text-decoration: none;">06 85 72 23 87</a>
              </p>
              <p style="margin: 5px 0;">
                <img src="https://img.icons8.com/ios-filled/15/000000/email.png" style="vertical-align: middle;">
                <a href="mailto:info@akwebsolutions.nl" style="color: #000; text-decoration: none;">info@akwebsolutions.nl</a>
              </p>
              <p style="margin: 5px 0;">
                <img src="https://img.icons8.com/ios-filled/15/000000/domain.png" style="vertical-align: middle;">
                <a href="https://akwebsolutions.nl" target="_blank" style="color: #000; text-decoration: none;">akwebsolutions.nl</a>
              </p>
            </td>
          </tr>
        </table>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "E-mail succesvol verzonden!" }, { status: 200 });
  } catch (error) {
    console.error("Fout bij verzenden e-mail:", error);
    return NextResponse.json({ message: "Er is een fout opgetreden bij het verzenden van de e-mail." }, { status: 500 });
  }
}
