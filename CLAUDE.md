# CLAUDE.md

Richtlijnen voor Claude Code in deze repo: ainova.be.

## Commando's

```bash
npm run dev      # dev-server op http://localhost:5173
npm run build    # productiebuild naar dist/, prerendert / en /bedankt
npm run preview  # productiebuild lokaal bekijken
npm run lint     # ESLint
```

**Push naar `main` = live.** Vercel deployt binnen een minuut. Nooit pushen
zonder akkoord van Tristan.

## Opbouw

- Alle secties van de homepage staan in `src/App.jsx` als losse functies:
  `Probleem` (obstakels) → `Aanpak` → `UseCases` → `OverAinova` → `Contact`
  → `Footer`. De hero staat in `src/components/ui/hero-landschap.jsx`.
- **Alle zichtbare tekst staat in `src/lib/teksten.js`**, in het Nederlands
  (standaard) en het Engels. Pas tekst daar aan, niet in de componenten.
- Contactformulier: `src/components/ui/contact-form.jsx`, een gewone POST
  naar Web3Forms die doorstuurt naar `/bedankt`. Werkt (getest 17 okt).
- `scripts/prerender.mjs` rendert de pagina's naar statische HTML voor
  zoekmachines. Titel, meta en structured data staan in `index.html`.
- `src/components/demo-hub/` en een deel van `src/components/ui/` zijn oude
  onderdelen die nergens meer gebruikt worden.

## Huisstijl

De bron is de skill `ainova-huisstijl` (`~/.claude/skills/ainova-huisstijl/`).
Kort:

| Wat | Waarde |
|---|---|
| Achtergrond | `#FBFCFD`, vlakken `#F1F4F8`, lijnen `#E2E8EF` |
| Inkt / tekst | `#0B1B2E` koppen, `#2F3D50` lopende tekst |
| Accent | `#1F5A94` |
| Beeld | `public/hero-blauw.webp` met een donkere laag, in hero, contact en use cases |
| Lettertype | Newsreader voor alles (`font-hero-serif`, `font-hero-sans`, `.woordmerk`). `font-ui` (Instrument Sans) alleen voor nagebouwde schermen en de logoband |

De klasse `font-hero-sans` heet nog zo, maar is sinds 17 okt Newsreader.

## Toon

Vlaams, **"je"**, nooit "u". Ainova spreekt als **"wij"**. Kort en concreet,
geen AI-jargon, geen verzonnen cases of cijfers. Geen prijzen of garanties
op de site.

## Animaties

GSAP met ScrollTrigger, geregistreerd bovenaan `App.jsx`. Elke sectie
gebruikt `useReveal(ref)` voor een zachte fade-in en ruimt op met
`ctx.revert()`. Respecteer `prefers-reduced-motion` (zie `rustig()`).
