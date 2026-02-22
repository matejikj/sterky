# Design System DNA (Luxury Sterky / Beton)

## Style DNA (10 bodu)
1. Texture-first: UI ma byt tiche a nechava vyniknout material.
2. Showroom / gallery: velke plochy, ciste okraje, minimum ramecku.
3. Teple neutralno + cement akcent pro technicke info.
4. Draz na svetlo a odlesk povrchu (realisticky dojem).
5. Remeslo a proces komunikovat konkretne a klidne.
6. Realisticnost nad sliby (odolnost, udrzba, vhodnost, mikropraskliny).
7. Pomalejsi motion, inertni easing, crossfade misto agresivnich slide.
8. Technicka vrstva pro architekty (spec, skladba, spotreba, schnuti, kompatibilita).
9. Lead = konzultace/kalkulace/vzorek (ne e-shop flow).
10. Duvěra = reference + close-up + popis systemu.

## Tokeny (doporučené CSS variables)
### Base
- `--cream-50: #FCF6EC`
- `--sand-100: #EFE9DF`
- `--stone-200: #CEC0AB`
- `--charcoal-900: #1D1916`
- `--espresso-950: #0A0A0A`

### Cement / tech
- `--cement-500: #8C8F94`
- `--cement-700: #5E6166`
- `--slate-800: #3A3D41`

### Highlight
- `--gold-400: #FEC873`
- `--terracotta-400: #FF7D5E`

### System
- `--text-muted: #9CA3AF`
- `--danger: #E22C2C`

## Typografie
- Primarni: `Systemia` (400/500)
- Sekundarni: `Azeret Mono` (spec, kody, labels)
- H1: `5rem-7rem`
- H2: `3rem-4rem`
- Body: `1.6rem`
- Labels/spec: `1.2rem` (mono, jemny tracking)

## Radius
- `--radius-s: 10px`
- `--radius-m: 20px`
- `--radius-xl: 100px`
- circle: `9999px`

## Hloubka
- Preferovat border pred shadow
- Hover overlay v galerii: `rgba(0,0,0,.06-.12)`
- Jemny blur pouze jako showroom light efekt

## Spacing
- Sekce: `py-100` (100px)
- Komponenty: `12/16/20/40px`
- Container padding: `12px` mobile / `18px` desktop

## Motion pravidla
- Pomalý parallax textur (hero + detaily)
- Scroll-scrub pro `Skladba systemu`
- Crossfade prepinacu (switcher/swatch/real-render)
- Galerie hover = jemny lift + caption fade, bez tvrdeho shadow
- CTA hover = dlouhy easing `0.6-0.9s`
- Radsi ambient blur/light nez rotujici dekorativni ikony

## Mobilni pravidla (kriticke)
1. Sticky bottom CTA (Kalkulace / Vzorek / Konzultace)
2. Galerie realizaci -> horizontalni carousel
3. Spec + vrstvy -> accordion
4. Tap target min `44px`
5. Nahradit hover-only patterny tap-to-reveal
6. Na mobilu posunout reference/vizualizace vys nez dlouhe texty
7. Pouzivat `svh` u hero/pinned sekci

