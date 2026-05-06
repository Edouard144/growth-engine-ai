import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:5002';

async function testAPI() {
  const testEmail = `test${Date.now()}@example.com`;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  console.log(`Testing with email: ${testEmail}, OTP: ${otp}\n`);
  
  try {
    // Step 1: Join waitlist
    console.log('1. Testing /join...');
    const joinResponse = await fetch(`${BASE_URL}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail })
    });
    
    const joinData = await joinResponse.json();
    console.log(`Status: ${joinResponse.status}`);
    console.log('Response:', joinData);
    
    if (!joinResponse.ok) {
      console.error('Join failed!');
      return;
    }
    
    console.log('✅ Join successful\n');
    
    // Wait a bit
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Step 2: Verify OTP
    console.log('2. Testing /verify-otp...');
    const verifyResponse = await fetch(`${BASE_URL}/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail, otp })
    });
    
    const verifyData = await verifyResponse.json();
    console.log(`Status: ${verifyResponse.status}`);
    console.log('Response:', verifyData);
    
    if (verifyResponse.ok) {
      console.log('✅ Verification successful!');
    } else {
      console.error('❌ Verification failed!');
    }
    
  } catch (err) {
    console.error('❌ Network error:', err.message);
    console.error('Make sure the backend is running on port 5002');
  }
}

testAPI();
