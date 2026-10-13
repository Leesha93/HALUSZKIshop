@echo off
chcp 65001 >nul
echo =======================================
echo   POBIERANIE I WYSYLANIE NA GITHUB
echo =======================================
echo.

git pull --rebase origin main
git add .
git commit -m "Aktualizacja sklepu %date% %time%"
git push origin main

echo.
echo =======================================
echo   ZAKONCZONO POMYSLNIE!
echo =======================================
pause
