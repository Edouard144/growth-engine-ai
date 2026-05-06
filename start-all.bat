@echo off
cd /d "%~dp0"

echo ===================================
echo  Starting Pluto AI Waitlist App
echo ===================================
echo.

echo [1/2] Starting backend server...
start "Backend - Pluto AI" cmd /k "cd /d "%~dp0backend" && node server.js"

echo Waiting for backend to initialize...
timeout /t 3 /nobreak >nul

echo [2/2] Starting frontend server...
start "Frontend - Pluto AI" cmd /k "npm run dev"

echo.
echo ===================================
echo  Servers are starting...
echo ===================================
echo  Backend:  http://localhost:5002
echo  Frontend: http://localhost:8081
echo.
echo  Close the server windows to stop.
echo ===================================
timeout /t 5 /nobreak >nul
