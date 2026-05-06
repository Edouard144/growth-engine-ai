@echo off
echo Testing backend endpoints...
echo.
echo 1. Testing /health endpoint:
curl -s http://localhost:5002/health
echo.
echo.
echo 2. Testing /join with test email:
curl -s -X POST http://localhost:5002/join -H "Content-Type: application/json" -d "{\"email\":\"quicktest@example.com\"}"
echo.
echo.
echo 3. Testing /verify-otp with wrong OTP (should give proper error, not network error):
curl -s -X POST http://localhost:5002/verify-otp -H "Content-Type: application/json" -d "{\"email\":\"quicktest@example.com\",\"otp\":\"000000\"}"
echo.
pause
