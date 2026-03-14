# HALUSZKIshop

Prosty interaktywny sklep ARK (HTML + Vue 3) do przeglądania stworków, wariantów, mutacji i kalkulacji cen.

## Funkcje

- Dynamiczny filtr gatunków i wyszukiwanie
- Szczegóły wybranego zwierzęcia + grafika
- Wybór mutacji i modyfikacja wymiarów parametrów
- Obliczenia ceny na podstawie poziomu i mutacji
- Kopiowanie gotowego zamówienia do schowka

## Struktura

- `ark_shop.html` - główna aplikacja UI
- `ark_data.js` - baza cen/specyfikacji stworzeń (DINO_REGISTRY + ICON_DATA)
- `shop_list.csv` - dane wariantów i wartości bazowe
- `ico/` - ikony dla poszczególnych gatunków

## Uruchomienie

1. Otwórz `ark_shop.html` w przeglądarce (lokalnie). 2. Zobacz listę, wybierz stworzenie i dopasuj parametry.

## Propozycje rozwoju

- REST API dla ofert w czasie rzeczywistym
- eksport/import konfiguracji zamówienia JSON
- wersja Multiuser z koszykiem i historią zamówień
