@echo off
echo ========================================
echo Starting MediWise Backend Server...
echo ========================================
echo.

cd backend

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

echo Installing dependencies (if needed)...
call npm install
echo.

echo Starting backend server...
echo Server will run on http://localhost:5000
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause





