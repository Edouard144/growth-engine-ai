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

async function testOtpEmail(toEmail) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  try {
    console.log(`Sending test OTP ${otp} to ${toEmail}...`);
    
    const info = await transporter.sendMail({
      from: `"Pluto AI Waitlist" <${process.env.GMAIL_USER}>`,
      to: toEmail,
      subject: "Your Pluto AI Waitlist Verification Code",
      text: `Welcome to Pluto AI!\n\nYour verification code is: ${otp}\n\nThis code will expire in 10 minutes.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Welcome to Pluto AI!</h2>
          <p>Thank you for joining our waitlist. Your verification code is:</p>
          <p style="font-size: 24px; font-weight: bold; color: #007bff;">${otp}</p>
          <p style="color: #666; font-size: 14px;">This code will expire in 10 minutes.</p>
        </div>
      `,
    });
    
    console.log("Email sent successfully!");
    console.log('Message ID:', info.messageId);
    console.log('Accepted:', info.accepted);
    console.log('Rejected:', info.rejected);
    console.log('Response:', info.response);
    
    if (info.rejected && info.rejected.length > 0) {
      console.error("Gmail REJECTED this email!");
    }
  } catch (error) {
    console.error("Failed to send email:", error.message);
    console.error("Full error:", error);
  }
}

const testEmail = process.argv[2] || process.env.GMAIL_USER;
testOtpEmail(testEmail);
