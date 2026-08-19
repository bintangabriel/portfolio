import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

export default async function sendMailHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, message, email } = req.body;

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER || "",
          pass: process.env.EMAIL_APP_PASSWORD // App password
        }
      });

      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: name,
        text: message + "\n\nSent by: " + email,
      });

      console.log('Message sent: %s', info.messageId);
      return res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
