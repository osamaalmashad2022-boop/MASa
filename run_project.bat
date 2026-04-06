@echo off
title MASa
echo =========================================
echo    MASa - Auto Start Script
echo =========================================
echo.

echo [1/2] Checking and installing dependencies...
call npm install

echo.
echo [2/2] Starting Development Server and opening browser...
call npm run dev -- --open

pause
