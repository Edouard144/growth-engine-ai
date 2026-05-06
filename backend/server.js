import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config();

const { Pool } = pkg;
const app = express();
app.use(express.json());
const corsOptions = {
  origin: ['http://localhost:8081', 'https://plutoai-waitlist.onrender.com'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.log('Transporter verification failed:', error);
  } else {
    console.log('Transporter is ready to send emails');
  }
});

// Join waitlist endpoint
app.post("/join", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: "Email required" });

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    await pool.query(
      `INSERT INTO waitlist_users (email, otp, otp_expires)
       VALUES ($1, $2, $3)
       ON CONFLICT (email) DO UPDATE SET otp = EXCLUDED.otp, otp_expires = EXCLUDED.otp_expires`,
      [email, otp, otpExpires]
    );

    // Send OTP email
    try {
      console.log(`Attempting to send OTP email to ${email}`);
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Welcome to Pluto AI - Verify your email",
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%); padding: 40px 30px; text-align: center;">
              <div style="width: 80px; height: 80px; background: #ffffff; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 32px rgba(255,255,255,0.2);">
                <img src="https://pluto.ai/assets/pluto-logo.png" alt="Pluto AI Logo" style="width: 50px; height: auto;" />
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; margin-bottom: 8px;">Welcome to Pluto AI</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 0; font-size: 16px;">The Future of AI-Powered Growth</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #0f0f23; font-size: 24px; font-weight: 600; margin: 0 0 20px 0; text-align: center;">You're Joining Something Revolutionary</h2>

              <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for joining the Pluto AI waitlist! You're among the first to experience the next evolution in growth operating systems.
              </p>

              <div style="background: #f8f9fa; border-radius: 8px; padding: 24px; margin: 30px 0; text-align: center;">
                <h3 style="color: #0f0f23; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">Your Verification Code</h3>
                <div style="background: #ffffff; border: 2px solid #007bff; border-radius: 8px; padding: 20px; display: inline-block; margin: 10px 0;">
                  <span style="font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 4px; font-family: 'Courier New', monospace;">${otp}</span>
                </div>
                <p style="color: #666; font-size: 14px; margin: 15px 0 0 0;">This code expires in 10 minutes</p>
              </div>

              <!-- What You're Joining -->
              <div style="margin: 30px 0;">
                <h3 style="color: #0f0f23; font-size: 20px; font-weight: 600; margin: 0 0 15px 0;">What is Pluto AI?</h3>
                <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Pluto AI is a multi-agent growth operating system that puts a coordinated team of AI specialists at the center of your workflow. Research, creative, ads, SEO, and analytics work together seamlessly to accelerate your business growth.
                </p>

                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 20px 0;">
                  <div style="background: #f0f4ff; padding: 15px; border-radius: 12px;">
                    <div style="font-weight: 600; color: #0f0f23; margin-bottom: 5px;">🤖 Multi-Agent OS</div>
                    <div style="font-size: 14px; color: #4a4a4a;">Specialized agents, not just chatbots</div>
                  </div>
                  <div style="background: #fff4f0; padding: 15px; border-radius: 12px;">
                    <div style="font-weight: 600; color: #0f0f23; margin-bottom: 5px;">🧠 Continuous Learning</div>
                    <div style="font-size: 14px; color: #4a4a4a;">Every campaign improves the next</div>
                  </div>
                  <div style="background: #f0fff4; padding: 15px; border-radius: 12px;">
                    <div style="font-weight: 600; color: #0f0f23; margin-bottom: 5px;">👥 Human in Control</div>
                    <div style="font-size: 14px; color: #4a4a4a;">Approvals, brand rules, budget guardrails</div>
                  </div>
                  <div style="background: #fffef0; padding: 15px; border-radius: 12px;">
                    <div style="font-weight: 600; color: #0f0f23; margin-bottom: 5px;">⚡ Lightning Fast</div>
                    <div style="font-size: 14px; color: #4a4a4a;">Execute campaigns at the speed of thought</div>
                  </div>
                </div>
              </div>

              <!-- Benefits -->
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; padding: 24px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">Why Early Access Matters</h3>
                <ul style="margin: 0; padding-left: 20px; font-size: 16px; line-height: 1.6;">
                  <li style="margin-bottom: 8px;">🚀 <strong>Early Access:</strong> Be among the first to use Pluto AI</li>
                  <li style="margin-bottom: 8px;">💰 <strong>Lifetime Pricing:</strong> Lock in founding member rates</li>
                  <li style="margin-bottom: 8px;">🎯 <strong>Direct Access:</strong> Shape the product with our team</li>
                  <li style="margin-bottom: 8px;">🌟 <strong>Exclusive Perks:</strong> Priority support and beta features</li>
                </ul>
              </div>

              <!-- CTA -->
              <div style="text-align: center; margin: 30px 0;">
                <p style="color: #4a4a4a; font-size: 16px; margin: 0 0 20px 0;">
                  Ready to revolutionize your growth strategy? Complete your verification to secure your spot.
                </p>
                <div style="background: #007bff; color: white; padding: 12px 24px; border-radius: 6px; display: inline-block; font-weight: 600; text-decoration: none;">
                  Verify Your Email
                </div>
              </div>

              <!-- Footer -->
              <div style="border-top: 1px solid #e9ecef; padding-top: 20px; margin-top: 30px; text-align: center;">
                <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">
                  Questions? Reply to this email or visit <a href="https://pluto.ai" style="color: #007bff; text-decoration: none;">pluto.ai</a>
                </p>
                <p style="color: #999; font-size: 12px; margin: 0;">
                  © 2026 Pluto AI · Building the future growth engine for everyone
                </p>
                <p style="color: #999; font-size: 12px; margin: 10px 0 0 0;">
                  If you didn't request this, please ignore this email.
                </p>
              </div>
            </div>
          </div>
        `,
      });

      console.log(`OTP email sent to ${email}`);
      res.json({ message: "Check your email for OTP" });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Still return success since user was added to DB
      res.json({ message: "Email verification pending (check your inbox)" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Verify email endpoint
app.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) return res.status(400).json({ error: "Email and OTP required" });

  try {
    const result = await pool.query(
      `SELECT otp, otp_expires FROM waitlist_users WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) return res.status(400).json({ error: "Email not found" });

    const { otp: storedOtp, otp_expires } = result.rows[0];

    if (storedOtp !== otp || new Date() > new Date(otp_expires)) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    await pool.query(
      `UPDATE waitlist_users SET verified = true, otp = NULL, otp_expires = NULL WHERE email = $1`,
      [email]
    );

    res.json({ message: "Email verified successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
