# Podsumowanie Wszystkich Cech (Traits) - ARK: Survival Ascended

Ten dokument zawiera pełny wykaz i opis wszystkich cech wprowadzonych do gry **ARK: Survival Ascended** (m.in. w dodatku *Bob's Tall Tales*). Dane zostały podzielone na cechy genetyczne stworzeń (Dino Gene Traits) oraz cechy przedmiotów (Weapon & Armor Traits).

## Spis Treści
1. [Cechy Genetyczne Dinozaurów (Dino Gene Traits)](#1-cechy-genetyczne-dinozaurów-dino-gene-traits)
   - [Walka / Bojowe](#walka-bojowe)
   - [Przetrwanie](#przetrwanie)
   - [Mobilność / Ruch](#mobilnosc-ruch)
   - [Wsparcie](#wsparcie)
   - [Użyteczność i Udźwig](#uzytecznosc-i-udzwig)
   - [Hodowla i Genetyka](#hodowla-i-genetyka)
2. [Cechy Broni i Pancerza (Weapon & Armor Traits)](#2-cechy-broni-i-pancerza-weapon--armor-traits)
   - [Cechy Pancerza (Armor Traits)](#cechy-pancerza-armor-traits)
   - [Cechy Broni do Walki Wręcz (Melee Traits)](#cechy-broni-do-walki-wrecz-melee-traits)
   - [Cechy Broni Palnej (Gun Traits)](#cechy-broni-palnej-gun-traits)
   - [Cechy Broni Miotanej i Pocisków (Projectile Traits)](#cechy-broni-miotanej-i-pociskow-projectile-traits)

---
## 1. Cechy Genetyczne Dinozaurów (Dino Gene Traits)

> [!NOTE]
> Cechy te występują losowo u dzikich stworzeń. Można je zeskanować i pobrać za pomocą **Gene Scannera**, a następnie aplikować młodym stworzeniom (w fazie wzrostu) tego samego gatunku za pomocą **Makeshift Megalab** (maksymalnie **5 cech** na stworzenie).

### Walka / Bojowe

#### 🦖 Agresywny (*Aggressive*)
- **Opis:** Zwiększa prędkość poruszania się podczas ataku.
- **Szczegóły:** Gdy stworzenie zada obrażenia nieprzyjacielskiemu celowi, otrzymuje premię do prędkości ruchu o 2.5% na 3.75 sekund (odnawia się przy kolejnych trafieniach).
- **Maksymalna kumulacja (Max Stacks):** 2
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Aggressive`

#### 🦖 Wściekły (*Angry*)
- **Opis:** Zwiększa zadawane obrażenia wraz ze spadkiem poziomu zdrowia.
- **Szczegóły:** Zadaje dodatkowe +12.5-18.75% obrażeń, gdy zdrowie spada do poziomu 1.25-%.
- **Maksymalna kumulacja (Max Stacks):** 2
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Angry`

#### 🦖 Krwiożerczy (*Bloodthirsty*)
- **Opis:** Zwiększa zadawane obrażenia w walce wręcz.
- **Szczegóły:** Obrażenia wręcz zwiększone o 5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Nie
- **Kod blueprint:** `Trait_Bloodthirsty`

#### 🦖 Forteca (*Bulwark*)
- **Opis:** Zmniejsza obrażenia otrzymywane w trybie wieżyczki.
- **Szczegóły:** Zmniejsza obrażenia otrzymywane w trybie wieżyczki (Turret Mode) o -5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Nie
- **Kod blueprint:** `Trait_Bulwark`

#### 🦖 Rozpraszający (*Distracting*)
- **Opis:** Rozprasza trafione cele, sprawiając, że zadają mniej obrażeń innym celom.
- **Szczegóły:** Nieprzyjacielskie cele trafione atakiem wręcz tego stworzenia zadają o -5% mniej obrażeń wszystkim innym celom przez 20 sekund.
- **Maksymalna kumulacja (Max Stacks):** 1
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Distracting`

#### 🦖 Ekscytowalny (*Excitable*)
- **Opis:** Skraca czas odnowienia umiejętności przy trafieniach.
- **Szczegóły:** Trafienie wroga podstawowym atakiem wręcz skraca czas odnowienia innych umiejętności o 0.25 sek.
- **Maksymalna kumulacja (Max Stacks):** 1
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Excitable`

#### 🦖 Pogromca Gigantów (*Giantslaying*)
- **Opis:** Zadaje większe obrażenia dużym stworzeniom, ale mniejsze małym.
- **Szczegóły:** Zadawane obrażenia stworzeniom o wadze (DragWeight) 500+ są zwiększone o 2.5%, natomiast przeciw stworzeniom o wadze 200- są zmniejszone o 3.75%.
- **Maksymalna kumulacja (Max Stacks):** 2
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Giantslaying`

#### 🦖 Mocne Uderzenie (*Heavy-Hitting*)
- **Opis:** Zwiększa obrażenia kosztem szybkości ataku.
- **Szczegóły:** Obrażenia wręcz zwiększone o -5%, ale prędkość ataku zmniejszona o -7.5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_HeavyHitting`

#### 🦖 Pogromca Królów (*Kingslaying*)
- **Opis:** Zadaje dodatkowe obrażenia bossom i stworzeniom Alfa, kosztem innych celów.
- **Szczegóły:** Zwiększa obrażenia zadawane stworzeniom Alfa oraz Bossom o 5%, ale zmniejsza obrażenia zadawane wszystkim innym celom o 7.5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Kingslaying`

#### 🦖 Szybkie Uderzenie (*Quick-Hitting*)
- **Opis:** Zwiększa szybkość ataku kosztem ich siły.
- **Szczegóły:** Szybkość ataku zwiększona o 2.5%, ale obrażenia wręcz zmniejszone o 3.75%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_QuickHitting`

#### 🦖 Strzelec Wyborowy (*Sharpshooter*)
- **Opis:** Zwiększa obrażenia zadawane w trybie wieżyczki.
- **Szczegóły:** Zwiększa obrażenia zadawane w trybie wieżyczki (Turret Mode) o 5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Nie
- **Kod blueprint:** `Trait_Sharpshooter`

### Przetrwanie

#### 🦖 Atletyczny (*Athletic*)
- **Opis:** Wysoka pojemność płuc pozwala na szybszą regenerację zdrowia i staminy.
- **Szczegóły:** Otrzymuje +0.05 do regeneracji zdrowia i +0.075% do regeneracji staminy za każdy punkt zainwestowany w Tlen (Oxygen).
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Athletic`

#### 🦖 Zimny (*Cold*)
- **Opis:** Chłodzi otoczenie, chroniąc jeźdźca przed upałem.
- **Szczegóły:** Stworzenie oraz jego jeździec zyskują +40 izolacji hipertermicznej (ochrona przed gorącem). Zmniejsza obrażenia otrzymywane od ataków OGNISTYCH/GORĄCYCH o 60%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Cold`

#### 🦖 Wydajny (*Efficient*)
- **Opis:** Zwiększa plony uzyskiwane podczas zbierania surowców.
- **Szczegóły:** Ilość zbieranych surowców zwiększona o 5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Nie
- **Kod blueprint:** `Trait_Efficient`

#### 🦖 Tłuścioch (*Fatty*)
- **Opis:** Daje dodatkowy pancerz na podstawie statystyki Jedzenia.
- **Szczegóły:** Zyskuje +0.1 pancerza za każdy punkt zainwestowany w Jedzenie (Food).
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Fatty`

#### 🦖 Frenetyczny (*Frenetic*)
- **Opis:** Stworzenie znacznie szybciej regeneruje się z otumanienia (torpor).
- **Szczegóły:** Regeneracja torporu zwiększona o 7.5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Frenetic`

#### 🦖 Znieczulony (*Numb*)
- **Opis:** Ignoruje część obrażeń, otrzymując je z opóźnieniem w czasie.
- **Szczegóły:** Otrzymywane obrażenia są zmniejszone o 0.75%, ale stworzenie otrzymuje to zredukowane 0.75% jako obrażenia rozłożone w czasie (DoT) przez następne 5 sekund (nie można ich w żaden sposób zmniejszyć).
- **Maksymalna kumulacja (Max Stacks):** 1
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Numb`

#### 🦖 Wolna Przemiana Materii (*Slow-Metabolism*)
- **Opis:** Spowalnia zużycie jedzenia.
- **Szczegóły:** Spowalnia zużycie jedzenia przez stworzenie o -5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_SlowMetabolism`

#### 🦖 Nieustępliwy (*Tenacious*)
- **Opis:** Zmniejsza otrzymywane obrażenia, gdy poziom zdrowia jest niski.
- **Szczegóły:** Zmniejsza otrzymywane obrażenia o -12.5--18.75% (skalowane liniowo), gdy poziom zdrowia spada od 0.75% do %.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Tenacious`

#### 🦖 Wampiryczny (*Vampiric*)
- **Opis:** Leczy stworzenie na podstawie zadawanych obrażeń.
- **Szczegóły:** Odzyskuje 5% zadanych obrażeń jako punkty zdrowia. Mniejsze stworzenia otrzymują większy procent leczenia.
- **Maksymalna kumulacja (Max Stacks):** 1
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Vampiric`

#### 🦖 Ciepły (*Warm*)
- **Opis:** Ogrzewa otoczenie, chroniąc jeźdźca przed zimnem.
- **Szczegóły:** Stworzenie oraz jego jeździec zyskują +40 izolacji hipotermicznej (ochrona przed zimnem). Zmniejsza obrażenia otrzymywane od ataków ZIMNYCH/LODOWYCH o 60%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Warm`

### Mobilność / Ruch

#### 🦖 Wodny (*Aquatic*)
- **Opis:** Przystosowanie do życia w wodzie.
- **Szczegóły:** Szybkość pływania zwiększona o -12.5%. Zużycie tlenu pod wodą zmniejszone o -18.75%. Zużycie staminy podczas sprintu w wodzie zmniejszone o 0.75%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Swimmer`

#### 🦖 Beztroski (*Carefree*)
- **Opis:** Zwiększa prędkość poruszania się, gdy stworzenie nie uczestniczy w walce.
- **Szczegóły:** Zyskuje +7.5% do szybkości ruchu. Premia jest tracona na 20 sekund po zadaniu/otrzymaniu obrażeń lub dosiądnięciu przez jeźdźca.
- **Maksymalna kumulacja (Max Stacks):** 1
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Carefree`

#### 🦖 Tchórzliwy (*Cowardly*)
- **Opis:** Stworzenie porusza się szybciej, gdy jest atakowane.
- **Szczegóły:** Gdy stworzenie otrzyma obrażenia od nieprzyjacielskiego celu, zyskuje premię do prędkości ruchu o 2.5% na 5 sekund (odnawia się przy kolejnych trafieniach).
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Cowardly`

#### 🦖 Dzienny (*Diurnal*)
- **Opis:** Zmniejsza zużycie staminy w ciągu dnia.
- **Szczegóły:** Zmniejsza zużycie staminy w ciągu dnia o -2.5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Diurnal`

#### 🦖 Wysoka Wytrzymałość (*High Endurance*)
- **Opis:** Pozwala na dłuższy bieg bez zmęczenia.
- **Szczegóły:** Zużycie staminy podczas sprintu zmniejszone o -4%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_High_Endurance`

#### 🦖 Nocny (*Nocturnal*)
- **Opis:** Zmniejsza zużycie staminy w nocy.
- **Szczegóły:** Zmniejsza zużycie staminy w nocy o -2.5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Nocturnal`

#### 🦖 Szybki (*Swift*)
- **Opis:** Zwiększa prędkość poruszania się.
- **Szczegóły:** Szybkość poruszania się zwiększona o 5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Nie
- **Kod blueprint:** `Trait_Swift`

### Wsparcie

#### 🦖 Władca Bestii (*Beastmaster*)
- **Opis:** Zwiększa obrażenia zadawane w walce wręcz przez stworzenia, na których jeździ.
- **Szczegóły:** Zwiększa obrażenia w walce wręcz ujeżdżanych stworzeń o 5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Nie
- **Kod blueprint:** `Trait_Beastmaster`

#### 🦖 Żelazna Skóra (*Ironhide*)
- **Opis:** Zwiększa maksymalne zdrowie ujeżdżanych stworzeń.
- **Szczegóły:** Zwiększa maksymalne zdrowie ujeżdżanych stworzeń o 5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Nie
- **Kod blueprint:** `Trait_Ironhide`

#### 🦖 Ochronny (*Protective*)
- **Opis:** Zmniejsza obrażenia otrzymywane przez jeźdźca.
- **Szczegóły:** Zmniejsza obrażenia otrzymywane przez jeźdźca o -15%. Efekt utrzymuje się przez 10 sekund po zejściu ze stworzenia.
- **Maksymalna kumulacja (Max Stacks):** 2
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Protective`

### Użyteczność i Udźwig

#### 🦖 Tragarz Padliny (*Carcass-Bearing*)
- **Opis:** Zmniejsza wagę zwłok/padliny w ekwipunku.
- **Szczegóły:** Zmniejsza wagę ciał/zwłok stworzeń w ekwipunku o {0}%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Carrier_Carcass`

#### 🦖 Tragarz Jaskiniowy (*Cave-Bearing*)
- **Opis:** Zmniejsza wagę przedmiotów z dodatku Aberration w ekwipunku.
- **Szczegóły:** Zmniejsza wagę przedmiotów z mapy Aberration o {0}%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Carrier_Cave`

#### 🦖 Tragarz Pustynny (*Desert-Bearing*)
- **Opis:** Zmniejsza wagę przedmiotów z dodatku Scorched Earth w ekwipunku.
- **Szczegóły:** Zmniejsza wagę przedmiotów z mapy Scorched Earth o {0}%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Carrier_Desert`

#### 🦖 Tragarz Egzotyczny (*Exotic-Bearing*)
- **Opis:** Zmniejsza wagę przedmiotów egzotycznych w ekwipunku.
- **Szczegóły:** Zmniejsza wagę egzotycznych surowców o {0}%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Carrier_Exotic`

#### 🦖 Szybki Uczeń (*Fast Learner*)
- **Opis:** Zwiększa zdobywane punkty doświadczenia.
- **Szczegóły:** Zwiększa zdobywane doświadczenie (XP) o 15%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Nie
- **Kod blueprint:** `Trait_FastLearner`

#### 🦖 Tragarz Mięsa (*Meat-Bearing*)
- **Opis:** Zmniejsza wagę mięsa w ekwipunku.
- **Szczegóły:** Zmniejsza wagę surowego/upieczonego mięsa o {0}%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Carrier_Meat`

#### 🦖 Tragarz Minerałów (*Mineral-Bearing*)
- **Opis:** Zmniejsza wagę minerałów w ekwipunku.
- **Szczegóły:** Zmniejsza wagę kamienia, metalu, krzemienia, obsydianu i kryształów o {0}%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Carrier_Mineral`

#### 🦖 Juk Mularz (*PackMule*)
- **Opis:** Zwiększa ogólny udźwig stworzenia.
- **Szczegóły:** Udźwig stworzenia zwiększony o 5%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Nie
- **Kod blueprint:** `Trait_PackMule`

#### 🦖 Tragarz Roślin (*Plant-Bearing*)
- **Opis:** Zmniejsza wagę drewna, strzechy, włókna i jagód w ekwipunku.
- **Szczegóły:** Zmniejsza wagę drewna, strzechy, włókien i wszystkich jagód o {0}%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Carrier_Plant`

#### 🦖 Tragarz Pustkowi (*Wastes-Bearing*)
- **Opis:** Zmniejsza wagę przedmiotów z dodatku Extinction w ekwipunku.
- **Szczegóły:** Zmniejsza wagę przedmiotów z mapy Extinction o {0}%.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Carrier_Waste`

### Hodowla i Genetyka

#### 🦖 Słaby Gen Jedzenia (*Food-Frail*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy gorszą statystykę Jedzenia.
- **Szczegóły:** Potomstwo ma o 0.015% mniejszą szansę na odziedziczenie wyższej statystyki Jedzenia po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Food_Frail`

#### 🦖 Silny Gen Jedzenia (*Food-Robust*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy lepszą statystykę Jedzenia.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na odziedziczenie wyższej statystyki Jedzenia po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Food_Robust`

#### 🦖 Słaby Gen Zdrowia (*Health-Frail*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy gorszą statystykę Zdrowia.
- **Szczegóły:** Potomstwo ma o 0.015% mniejszą szansę na odziedziczenie wyższej statystyki Zdrowia po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_HP_Frail`

#### 🦖 Silny Gen Zdrowia (*Health-Robust*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy lepszą statystykę Zdrowia.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na odziedziczenie wyższej statystyki Zdrowia po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_HP_Robust`

#### 🦖 Słaby Gen Obrażeń (*Melee-Frail*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy gorszą statystykę Obrażeń.
- **Szczegóły:** Potomstwo ma o 0.015% mniejszą szansę na odziedziczenie wyższej statystyki Obrażeń wręcz po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Melee_Frail`

#### 🦖 Silny Gen Obrażeń (*Melee-Robust*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy lepszą statystykę Obrażeń.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na odziedziczenie wyższej statystyki Obrażeń wręcz po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Melee_Robust`

#### 🦖 Mutowalne Jedzenie (*Mutable Food*)
- **Opis:** Zwiększa szansę na mutacje u potomstwa w statystyce Jedzenia.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na mutację, z dodatkową szansą na to, że mutacja trafi w Jedzenie.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Food_Mutable`

#### 🦖 Mutowalne Zdrowie (*Mutable Health*)
- **Opis:** Zwiększa szansę na mutacje u potomstwa w statystyce Zdrowia.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na mutację, z dodatkową szansą na to, że mutacja trafi w Zdrowie.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_HP_Mutable`

#### 🦖 Mutowalne Obrażenia (*Mutable Melee*)
- **Opis:** Zwiększa szansę na mutacje u potomstwa w statystyce Obrażeń.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na mutację, z dodatkową szansą na to, że mutacja trafi w Obrażenia.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Melee_Mutable`

#### 🦖 Mutowalny Tlen (*Mutable Oxygen*)
- **Opis:** Zwiększa szansę na mutacje u potomstwa w statystyce Tlenu.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na mutację, z dodatkową szansą na to, że mutacja trafi w Tlen.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Oxygen_Mutable`

#### 🦖 Mutowalna Stamina (*Mutable Stamina*)
- **Opis:** Zwiększa szansę na mutacje u potomstwa w statystyce Staminy.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na mutację, z dodatkową szansą na to, że mutacja trafi w Staminę.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Stamina_Mutable`

#### 🦖 Mutowalny Udźwig (*Mutable Weight*)
- **Opis:** Zwiększa szansę na mutacje u potomstwa w statystyce Udźwigu (Wagi).
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na mutację, z dodatkową szansą na to, że mutacja trafi w Udźwig.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Weight_Mutable`

#### 🦖 Słaby Gen Tlenu (*Oxygen-Frail*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy gorszą statystykę Tlenu.
- **Szczegóły:** Potomstwo ma o 0.015% mniejszą szansę na odziedziczenie wyższej statystyki Tlenu po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Oxygen_Frail`

#### 🦖 Silny Gen Tlenu (*Oxygen-Robust*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy lepszą statystykę Tlenu.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na odziedziczenie wyższej statystyki Tlenu po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Oxygen_Robust`

#### 🦖 Słaby Gen Staminy (*Stamina-Frail*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy gorszą statystykę Staminy.
- **Szczegóły:** Potomstwo ma o 0.015% mniejszą szansę na odziedziczenie wyższej statystyki Staminy po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Stamina_Frail`

#### 🦖 Silny Gen Staminy (*Stamina-Robust*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy lepszą statystykę Staminy.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na odziedziczenie wyższej statystyki Staminy po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Stamina_Robust`

#### 🦖 Słaby Gen Udźwigu (*Weight-Frail*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy gorszą statystykę Udźwigu.
- **Szczegóły:** Potomstwo ma o 0.015% mniejszą szansę na odziedziczenie wyższej statystyki Udźwigu po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Weight_Frail`

#### 🦖 Silny Gen Udźwigu (*Weight-Robust*)
- **Opis:** Zwiększa szansę, że potomstwo odziedziczy lepszą statystykę Udźwigu.
- **Szczegóły:** Potomstwo ma o 0.015% większą szansę na odziedziczenie wyższej statystyki Udźwigu po rodzicach.
- **Maksymalna kumulacja (Max Stacks):** 3
- **Czy można zastąpić u dorosłego:** Tak
- **Kod blueprint:** `Trait_Inherit_Weight_Robust`

---
## 2. Cechy Broni i Pancerza (Weapon & Armor Traits)

> [!NOTE]
> Cechy te występują na przedmiotach (broniach i pancerzach). Posiadają trzy poziomy jakości: **Lesser** (Słaba), **Moderate** (Średnia) i **Greater** (Silna/Wyborna).

### Cechy Pancerza (Armor Traits)

#### 🛡️ Łapacz (*Catching*)
- **Ogólny opis:** Szansa na zebranie amunicji, która trafiła w noszącego ten pancerz.
- **Dozwolony sprzęt:** Koszulka (Shirt)

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Podczas noszenia tego pancerza, masz 10% szansę na dodanie do ekwipunku amunicji, która Cię trafi. |
| Średni (Moderate) | Podczas noszenia tego pancerza, masz 15% szansę na dodanie do ekwipunku amunicji, która Cię trafi. |
| Silny (Greater) | Podczas noszenia tego pancerza, masz 20% szansę na dodanie do ekwipunku amunicji, która Cię trafi. |


#### 🛡️ Oczyszczenie (*Cleansing*)
- **Ogólny opis:** Skraca czas trwania negatywnych efektów (debuffów).
- **Dozwolony sprzęt:** Koszulka (Shirt)

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Podczas noszenia tego pancerza, czas trwania wszystkich negatywnych efektów jest skrócony o 5%. |
| Średni (Moderate) | Podczas noszenia tego pancerza, czas trwania wszystkich negatywnych efektów jest skrócony o 7.5%. |
| Silny (Greater) | Podczas noszenia tego pancerza, czas trwania wszystkich negatywnych efektów jest skrócony o 10%. |


#### 🛡️ Maraton (*Marathon*)
- **Ogólny opis:** Pozwala na nieskończony bieg kosztem głodu i pragnienia.
- **Dozwolony sprzęt:** Koszulka (Shirt)

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Podczas noszenia tego pancerza, możesz biegać bez staminy... ale w zamian spada głód i pragnienie. Gdy te statystyki osiągną zero, nie możesz biegać. |
| Średni (Moderate) | Podczas noszenia tego pancerza, możesz biegać bez staminy... ale w zamian spada głód i pragnienie. Gdy te statystyki osiągną zero, nie możesz biegać. |
| Silny (Greater) | Podczas noszenia tego pancerza, możesz biegać bez staminy... ale w zamian spada głód i pragnienie. Gdy te statystyki osiągną zero, nie możesz biegać. |


#### 🛡️ Medyczny (*Medical*)
- **Ogólny opis:** Zwiększa efekty leczenia otrzymywanego przez postać.
- **Dozwolony sprzęt:** Koszulka (Shirt)

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Podczas noszenia tego pancerza, efekty wszelkiego przychodzącego leczenia są zwiększone o 10%. |
| Średni (Moderate) | Podczas noszenia tego pancerza, efekty wszelkiego przychodzącego leczenia są zwiększone o 15%. |
| Silny (Greater) | Podczas noszenia tego pancerza, efekty wszelkiego przychodzącego leczenia są zwiększone o 20%. |


#### 🛡️ Mobilny (*Mobile*)
- **Ogólny opis:** Zapobiega spowolnieniu postaci poniżej określonego limitu.
- **Dozwolony sprzęt:** Koszulka (Shirt)

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Podczas noszenia tego pancerza, efekty spowolnienia nie mogą obniżyć Twojej prędkości poniżej 30% Twojej normalnej maksymalnej prędkości. |
| Średni (Moderate) | Podczas noszenia tego pancerza, efekty spowolnienia nie mogą obniżyć Twojej prędkości poniżej 45% Twojej normalnej maksymalnej prędkości. |
| Silny (Greater) | Podczas noszenia tego pancerza, efekty spowolnienia nie mogą obniżyć Twojej prędkości poniżej 60% Twojej normalnej maksymalnej prędkości. |


### Cechy Broni do Walki Wręcz (Melee Traits)

#### 🛡️ Berserk (*Berserker's*)
- **Ogólny opis:** Zwiększa szybkość poruszania się kosztem większych otrzymywanych obrażeń.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Zwiększa prędkość poruszającego się o 2.5%, ale zwiększa otrzymywane obrażenia o 10%. |
| Średni (Moderate) | Zwiększa prędkość poruszającego się o 3.75%, ale zwiększa otrzymywane obrażenia o 10%. |
| Silny (Greater) | Zwiększa prędkość poruszającego się o 5%, ale zwiększa otrzymywane obrażenia o 10%. |


#### 🛡️ Pijawka (*Lifedrinking*)
- **Ogólny opis:** Wysysa punkty życia z trafionych celów.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Leczy o 5% obrażeń zadanych tą bronią, do maksymalnie 5% Twojego maksymalnego HP. |
| Średni (Moderate) | Leczy o 7.5% obrażeń zadanych tą bronią, do maksymalnie 5% Twojego maksymalnego HP. |
| Silny (Greater) | Leczy o 10% obrażeń zadanych tą bronią, do maksymalnie 5% Twojego maksymalnego HP. |


#### 🛡️ Łotr (*Rogue's*)
- **Ogólny opis:** Zwiększa obrażenia przy atakach od tyłu.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Obrażenia zadawane celom od tyłu są zwiększone o 20%. |
| Średni (Moderate) | Obrażenia zadawane celom od tyłu są zwiększone o 30%. |
| Silny (Greater) | Obrażenia zadawane celom od tyłu są zwiększone o 40%. |


#### 🛡️ Tarczownik (*Shielding*)
- **Ogólny opis:** Trafienia dają małą tarczę pochłaniającą obrażenia.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Trafienia w żywe, wrogie cele zapewniają osłonę równą 2.5% of you max HP, kumuluje się do 5 razy. |
| Średni (Moderate) | Trafienia w żywe, wrogie cele zapewniają osłonę równą 3.75% of you max HP, kumuluje się do 5 razy. |
| Silny (Greater) | Trafienia w żywe, wrogie cele zapewniają osłonę równą 5% of you max HP, kumuluje się do 5 razy. |


#### 🛡️ Robotnik (*Worker's*)
- **Ogólny opis:** Zwiększa obrażenia zadawane strukturom i surowcom.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Ataki tą bronią zadają o 7.5% więcej obrażeń strukturom budowlanym i surowcom (innym niż padlina) |
| Średni (Moderate) | Ataki tą bronią zadają o 11.2% więcej obrażeń strukturom budowlanym i surowcom (innym niż padlina) |
| Silny (Greater) | Ataki tą bronią zadają o 15% więcej obrażeń strukturom budowlanym i surowcom (innym niż padlina) |


### Cechy Broni Palnej (Gun Traits)

#### 🛡️ Kanibalistyczny (*Cannibalizing*)
- **Ogólny opis:** Broń może strzelać częściami samej siebie po wyczerpaniu amunicji.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Ta broń może wciąż strzelać mimo braku amunicji. Każdy strzał zadaje obrażenia trwałości równe: Maks. Trwałość / 50% ilości amunicji (AmmoCount) |
| Średni (Moderate) | Ta broń może wciąż strzelać mimo braku amunicji. Każdy strzał zadaje obrażenia trwałości równe: Maks. Trwałość / 75% ilości amunicji (AmmoCount) |
| Silny (Greater) | Ta broń może wciąż strzelać mimo braku amunicji. Każdy strzał zadaje obrażenia trwałości równe: Maks. Trwałość / 100% ilości amunicji (AmmoCount) |


#### 🛡️ Skupienie (*Focusing*)
- **Ogólny opis:** Każde kolejne trafienie tego samego celu zwiększa zadawane mu obrażenia.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Każde trafienie nieprzyjacielskiego celu sprawia, że otrzymuje on o 1% zwiększone obrażenia od gracza na 10 sekund (kumuluje się do 10 razy). |
| Średni (Moderate) | Każde trafienie nieprzyjacielskiego celu sprawia, że otrzymuje on o 1.5% zwiększone obrażenia od gracza na 10 sekund (kumuluje się do 10 razy). |
| Silny (Greater) | Każde trafienie nieprzyjacielskiego celu sprawia, że otrzymuje on o 2% zwiększone obrażenia od gracza na 10 sekund (kumuluje się do 10 razy). |


#### 🛡️ Ochronny (*Protecting*)
- **Ogólny opis:** Trafienie celu zmniejsza obrażenia od następnego nadchodzącego ataku.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Każde trafienie nieprzyjacielskiego celu zmniejsza obrażenia od następnego otrzymanego ataku o 2.5%, kumuluje się do 10 razy. |
| Średni (Moderate) | Każde trafienie nieprzyjacielskiego celu zmniejsza obrażenia od następnego otrzymanego ataku o 3.75%, kumuluje się do 10 razy. |
| Silny (Greater) | Każde trafienie nieprzyjacielskiego celu zmniejsza obrażenia od następnego otrzymanego ataku o 5%, kumuluje się do 10 razy. |


#### 🛡️ Rykoszet (*Ricocheting*)
- **Ogólny opis:** Pociski mają szansę na rykoszetowanie w drugi pobliski cel.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Strzały z tej broni mają 12.5% szansę na rykoszet w drugi, pobliski cel. |
| Średni (Moderate) | Strzały z tej broni mają 18.8% szansę na rykoszet w drugi, pobliski cel. |
| Silny (Greater) | Strzały z tej broni mają 25% szansę na rykoszet w drugi, pobliski cel. |


#### 🛡️ Tropiciel (*Tracker's*)
- **Ogólny opis:** Trafienie oznacza cel punktem nawigacyjnym.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Żywe cele trafione tą bronią wyświetlają punkt nawigacyjny przez 5 sekund, widoczny tylko dla strzelca. |
| Średni (Moderate) | Żywe cele trafione tą bronią wyświetlają punkt nawigacyjny przez 7.5 sekund, widoczny tylko dla strzelca. |
| Silny (Greater) | Żywe cele trafione tą bronią wyświetlają punkt nawigacyjny przez 10 sekund, widoczny tylko dla strzelca. |


### Cechy Broni Miotanej i Pocisków (Projectile Traits)

#### 🛡️ Czatownik (*Ambusher's*)
- **Ogólny opis:** Pierwszy atak tą bronią po wyjściu z walki zadaje ogromne obrażenia.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Po niezadawaniu i nieotrzymywaniu obrażeń przez 30 sekund, kolejny atak tej broni zadaje dodatkowe 50% obrażeń. |
| Średni (Moderate) | Po niezadawaniu i nieotrzymywaniu obrażeń przez 30 sekund, kolejny atak tej broni zadaje dodatkowe 75% obrażeń. |
| Silny (Greater) | Po niezadawaniu i nieotrzymywaniu obrażeń przez 30 sekund, kolejny atak tej broni zadaje dodatkowe 100% obrażeń. |


#### 🛡️ Antygrawitacja (*Antigrav*)
- **Ogólny opis:** Pociski wystrzeliwane z tej broni są lżejsze i szybsze.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Pociski wystrzeliwane z tej broni mają prędkość zwiększoną o 25%, oraz zmniejszony opad grawitacyjny o 25%. |
| Średni (Moderate) | Pociski wystrzeliwane z tej broni mają prędkość zwiększoną o 37.5%, oraz zmniejszony opad grawitacyjny o 37.5%. |
| Silny (Greater) | Pociski wystrzeliwane z tej broni mają prędkość zwiększoną o 50%, oraz zmniejszony opad grawitacyjny o 50%. |


#### 🛡️ Asasyn (*Assassin's*)
- **Ogólny opis:** Zwiększa obrażenia zadawane w czułe punkty.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Pociski wystrzelone z tej broni zwiększają obrażenia zależne od lokalizacji trafienia (np. headshoty) o 12.5%. |
| Średni (Moderate) | Pociski wystrzelone z tej broni zwiększają obrażenia zależne od lokalizacji trafienia (np. headshoty) o 18.8%. |
| Silny (Greater) | Pociski wystrzelone z tej broni zwiększają obrażenia zależne od lokalizacji trafienia (np. headshoty) o 25%. |


#### 🛡️ Łowca Grubej Zwierzyny (*Big Game Hunter’s*)
- **Ogólny opis:** Zwiększa obrażenia przeciwko bossom i stworzeniom Alfa.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Pociski wystrzeliwane z tej broni zadają o 2.5% większe obrażenia stworzeniom Alfa, Bossom oraz skażonym. |
| Średni (Moderate) | Pociski wystrzeliwane z tej broni zadają o 3.75% większe obrażenia stworzeniom Alfa, Bossom oraz skażonym. |
| Silny (Greater) | Pociski wystrzeliwane z tej broni zadają o 5% większe obrażenia stworzeniom Alfa, Bossom oraz skażonym. |


#### 🛡️ Echo (*Echoing*)
- **Ogólny opis:** Szansa na wystrzelenie dodatkowych pocisków natychmiast po pierwszym strzale.
- **Dozwolony sprzęt:** Wszystkie bronie danego typu

| Poziom (Tier) | Dokładny Efekt w Grze |
| :--- | :--- |
| Słaby (Lesser) | Pociski z tej broni mają 5% szansę na wystrzelenie 2 dodatkowych razy z tej samej pozycji i w tym samym kierunku. Każdy kolejny strzał następuje po 0,2 sek. |
| Średni (Moderate) | Pociski z tej broni mają 7.5% szansę na wystrzelenie 2 dodatkowych razy z tej samej pozycji i w tym samym kierunku. Każdy kolejny strzał następuje po 0,2 sek. |
| Silny (Greater) | Pociski z tej broni mają 10% szansę na wystrzelenie 2 dodatkowych razy z tej samej pozycji i w tym samym kierunku. Każdy kolejny strzał następuje po 0,2 sek. |

