import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    console.log("Gmail:", process.env.NEXT_PUBLIC_GMAIL_USER);
    console.log("pass:", process.env.NEXT_PUBLIC_GMAIL_PASS);

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_GMAIL_USER,
      to: "gouraw1@gmail.com",
      subject: `New Inquiry from ${firstName} via Contact Form`,
      text: `First Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
