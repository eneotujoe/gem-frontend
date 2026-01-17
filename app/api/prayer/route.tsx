import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({ ... })

    await transporter.sendMail({
      from: email,
      to: 'your_email@example.com',
      subject: `New contact form submission from ${name}`,
      text: message,
    });
    */

    return NextResponse.json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json({ message: 'Error sending message.' }, { status: 500 })
  }
}