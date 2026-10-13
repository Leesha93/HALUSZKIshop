@echo off
chcp 65001 >nul
echo =======================================
echo   AKTYWACJA I WYSYŁANIE NA GITHUB
echo =======================================
echo.

git add .
git commit -m "Aktualizacja sklepu %date% %time%"
git push origin main

echo.
echo =======================================
echo   ZAKONCZONO! Wcisnij dowolny klawisz.
echo =======================================
pause
