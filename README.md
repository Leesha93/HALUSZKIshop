# HALUSZKIshop

Interaktywny sklep i kalkulator zamówień stworzeń do gry ARK: Survival Ascended / Evolved (HTML5, Tailwind CSS, Vue 3).

## Funkcje

- **Dynamiczne filtrowanie i wyszukiwanie**: po nazwie, typie stworzenia (Bojowy, Użytkowy, Latający, Wodny, Towarzysz), nowościach i cenie maksymalnej.
- **Kalkulator mutacji i wariantów**: wybór poziomów bazowych, dynamiczne dodawanie punktów mutacji (HP, Stamina, Waga, DMG, Tlen, Jedzenie).
- **Automatyczna wycena**: precyzyjne skalowanie cen na podstawie poziomów, mutacji, zniżki na kastrata (-20%) oraz opcji siodła MAX ARMOR (+600 DD).
- **Kopiowanie gotowego zamówienia**: jednym kliknięciem generuje sformatowany tekst gotowy do wklejenia na Discordzie.
- **Responsywny interfejs**: przystosowany do urządzeń mobilnych oraz ekranów desktopowych z dedykowanym motywem graficznym.

## Struktura projektu

- `index.html` – główny szkielet interfejsu aplikacji
- `app.js` – logika aplikacji Vue 3 (reaktywność, filtry, kalkulator cen, parsowanie CSV)
- `style.css` – style wizualne, motyw, paski przewijania i animacje (shimmer, hover, transitions)
- `icon_mapping.js` – baza powiązań nazw stworzeń z ikonami gry
- `ark_data.js` – rejestr cen minimalnych i specyfikacji wariantów (`DINO_REGISTRY`)
- `shop_list.csv` – baza danych wariantów i statystyk stworzeń
- `ico/` – ikony portretowe poszczególnych gatunków
- `ui/` – grafiki interfejsu użytkownika (logo `raw.png`, ikony statystyk `30px-*.webp`)
- `aktualizuj_sklep.bat` – skrypt wsadowy do wysyłania aktualizacji na GitHuba
- `generuj_screeny.bat` – automatyczne generowanie podglądów kategorii w wysokiej rozdzielczości na Discorda

## Uruchomienie

1. Otwórz plik `index.html` bezpośrednio w przeglądarce internetowej lub uruchom lokalny serwer HTTP.
2. Wybierz stworzenie z listy lub skorzystaj z wyszukiwarki.
3. Skonfiguruj parametry, mutacje oraz opcje dodatkowe, a następnie kliknij **„Skopiuj zamówienie”**.
