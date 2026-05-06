@echo off
cd /d "%~dp0"

echo Starting backend...
start "Backend" cmd /k "cd backend && node server.js"

echo Waiting for backend to start...
timeout /t 3 /nobreak >nul

echo Starting frontend...
start "Frontend" cmd /k "npm run dev"

echo Both servers starting...
echo Backend: http://localhost:5002
echo Frontend: http://localhost:8081
echo.
echo Close the server windows to stop the app.
