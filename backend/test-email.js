import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

async function sendTestEmail(toEmail) {
  try {
    const mailOptions = {
      from: `"Pluto AI Waitlist" <${process.env.GMAIL_USER}>`,
      to: toEmail || process.env.GMAIL_USER,
      subject: "Test OTP Email",
      text: "Your test OTP is: 123456\n\nThis code will expire in 10 minutes.",
      html: "<h1>Test OTP: 123456</h1>"
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Test email sent successfully!");
    console.log('Email details:', {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response
    });
    
    if (info.rejected && info.rejected.length > 0) {
      console.error("Gmail rejected recipients:", info.rejected);
    }
  } catch (error) {
    console.error("Test email failed:", error);
  }
}

// Check if email argument provided
const testEmail = process.argv[2];
sendTestEmail(testEmail);