# Project Brief (Dekorativni a betonove sterky)

## Business cil
Vytvorit luxusne pusobici prezentačni web pro dekorativni a betonove sterky, ktery prodava konzultaci/kalkulaci/vzorek (nikoliv e-shop).

## Primarni publika
- Koncovy zakaznik (majitel domu/bytu)
- Architekt / designer
- Developer / realizacni firma

## Primarni konverze
- `Nezavazna konzultace`
- `Orientační kalkulace`
- `Vzorek / zkusebni plocha`

## Informacni architektura (minimalni)
- `/` home (hero, kolekce, realizace, proces, spec, FAQ, CTA)
- `/sterky/` listing typu sterek
- `/sterky/[slug]/` detail typu (napr. betonova sterka)
- `/realizace/` listing realizaci
- `/realizace/[slug]/` detail projektu
- `/kontakt/` (nebo sekce + formular, dle rozhodnuti v implementaci)

## Klicove UX principy
- Texture-first a showroom feeling
- Realisticke informace (odolnost, udrzba, vhodnost, mikropraskliny)
- Duvra v remeslo: reference + detail vrstvy + proces
- Technicka vrstva pro architekty (spec cards, PDF, skladba systemu)

## Klicove komponenty (must-have v roadmap)
- Sticky header
- Scroll progress
- Hero Texture Stage
- Typ sterky switcher
- Swatches struktur
- Real vs Render toggle
- Galerie realizaci
- Detail projektu (vrstvy, odstin, podklad, cas)
- Before/After slider
- Technicke parametry (spec card)
- Skladba systemu (layer stack)
- Sample CTA
- Quote builder (orientacni kalkulace)
- Process timeline
- Care accordion
- FAQ
- Lead form s uploadem fotek
- Download technickeho listu

