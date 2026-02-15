# Konstrukcje WM — Strona internetowa

Strona internetowa Pracowni Projektowej Konstrukcje WM zbudowana w [Astro](https://astro.build/) i hostowana na GitHub Pages.

## 🌐 Wersje językowe

- 🇵🇱 Polski (domyślny) — `/`
- 🇬🇧 English — `/en/`
- 🇩🇪 Deutsch — `/de/`

## 🏗️ Struktura strony

```
/                    Strona główna
/uslugi/             Usługi
  ├── prefabrykacja
  ├── konstrukcje-zelbetowe
  ├── sprezone
  └── optymalizacja
/realizacje/         Realizacje (case studies)
  ├── kv-babord-malmo
  ├── ikea-kopenhaga
  ├── formee-miedzyrzecz
  └── ...
/kontakt             Kontakt (Bezpłatna analiza projektu)
```

## 🚀 Rozwój lokalny

```bash
# Instalacja zależności
bun install

# Serwer deweloperski
bun run dev

# Budowanie produkcyjne
bun run build

# Podgląd wersji produkcyjnej
bun run preview
```

## 📦 Deploy

Deploy automatyczny na GitHub Pages przez GitHub Actions (push na `main`).

## 🛠️ Technologie

- **Astro** — statyczny generator stron
- **Bun** — runtime i package manager
- **GitHub Pages** — hosting

---

*Pracownia Projektowa Konstrukcje WM*  
*ul. Sarnia 6, 80-336 Gdańsk*  
*biuro@konstrukcje-wm.pl | +48 791 392 370*
