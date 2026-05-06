@echo off
echo Killing old backend processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo Starting backend with updated config...
cd /d "%~dp0\backend"
start "Pluto AI Backend" cmd /k "node server.js"

echo.
echo Backend starting... Check the new window.
echo.
pause
