import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function testVerify() {
  const testEmail = "test-verify@example.com";
  const otp = "123456";
  
  try {
    // Insert test user
    console.log('Inserting test user...');
    await pool.query(
      `INSERT INTO waitlist_users (email, otp, otp_expires, verified) 
       VALUES ($1, $2, $3, false)
       ON CONFLICT (email) DO UPDATE SET otp = $2, otp_expires = $3, verified = false`,
      [testEmail, otp, new Date(Date.now() + 10 * 60 * 1000)]
    );
    console.log('Test user inserted');
    
    // Now verify
    console.log('\nVerifying OTP...');
    const result = await pool.query(
      `SELECT otp, otp_expires FROM waitlist_users WHERE email = $1`,
      [testEmail]
    );
    
    console.log('Query result:', result.rows);
    
    if (result.rows.length === 0) {
      console.error('User not found!');
      return;
    }
    
    const { otp: storedOtp, otp_expires } = result.rows[0];
    console.log(`Stored OTP: ${storedOtp}, Expires: ${otp_expires}, Now: ${new Date()}`);
    
    if (storedOtp !== otp) {
      console.error(`OTP mismatch! Stored: ${storedOtp}, Provided: ${otp}`);
      return;
    }
    
    if (new Date() > new Date(otp_expires)) {
      console.error('OTP expired!');
      return;
    }
    
    // Update
    console.log('\nUpdating user to verified...');
    await pool.query(
      `UPDATE waitlist_users SET verified = true, otp = NULL, otp_expires = NULL WHERE email = $1`,
      [testEmail]
    );
    
    console.log('✅ Verification successful!');
    
    // Cleanup
    await pool.query('DELETE FROM waitlist_users WHERE email = $1', [testEmail]);
    console.log('Test data cleaned up');
    
  } catch (err) {
    console.error('❌ Error:', err.message);
    console.error('Full error:', err);
  }
  
  process.exit(0);
}

testVerify();
