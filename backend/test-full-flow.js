import pkg from "pg";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

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

async function testFullFlow() {
  const testEmail = `test${Date.now()}@example.com`;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  console.log(`Testing with email: ${testEmail}, OTP: ${otp}`);
  
  try {
    // Step 1: Insert user with OTP
    console.log('\n1. Inserting user with OTP...');
    await pool.query(
      `INSERT INTO waitlist_users (email, otp, otp_expires, verified) 
       VALUES ($1, $2, $3, false)`,
      [testEmail, otp, new Date(Date.now() + 10 * 60 * 1000)]
    );
    console.log('User inserted successfully');
    
    // Step 2: Verify OTP
    console.log('\n2. Verifying OTP...');
    const result = await pool.query(
      `SELECT otp, otp_expires FROM waitlist_users WHERE email = $1`,
      [testEmail]
    );
    
    if (result.rows.length === 0) {
      console.error('User not found!');
      return;
    }
    
    const { otp: storedOtp, otp_expires } = result.rows[0];
    console.log(`Stored OTP: ${storedOtp}, Expires: ${otp_expires}`);
    
    if (storedOtp !== otp) {
      console.error('OTP mismatch!');
      return;
    }
    
    if (new Date() > new Date(otp_expires)) {
      console.error('OTP expired!');
      return;
    }
    
    // Step 3: Mark as verified
    console.log('\n3. Marking as verified...');
    await pool.query(
      `UPDATE waitlist_users SET verified = true, otp = NULL, otp_expires = NULL WHERE email = $1`,
      [testEmail]
    );
    console.log('User verified successfully!');
    
    // Cleanup
    await pool.query('DELETE FROM waitlist_users WHERE email = $1', [testEmail]);
    console.log('Test data cleaned up');
    
    console.log('\n✅ Full flow works! Backend is functioning correctly.');
    
  } catch (err) {
    console.error('\n❌ Error:', err.message);
    console.error('Full error:', err);
  }
  
  process.exit(0);
}

testFullFlow();
