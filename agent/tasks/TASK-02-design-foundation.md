---
id: TASK-02
status: done
priority: P0
depends_on: [TASK-01]
owner: agent
estimated_effort: M
---

# Design foundation (tokeny, typografie, layout kostra)

## Cíl
Zavest design tokeny a globalni UI kostru, aby stranka od zacatku pusobila jako luxury material gallery a ne genericka sablona.

## Scope
- Implementace CSS variables dle `design-system.md`
- Tailwind theme mapping na tokeny (barvy, radius, spacing, typografie)
- Global typograficka pravidla (H1/H2/body/spec labels)
- Layout primitives: `Container`, `Section`, `SurfacePanel`, `PillButton`
- Sticky header (zakladni chovani bez pokrocilych animaci)
- Footer + zakladni navigace + CTA linky
- Volitelne: scroll progress placeholder (bez GSAP)

## Mimo scope
- Finalni obsah vsech sekci
- Motion effects a interaktivni islands
- Quote builder a formular logika

## Vstupy (nacti pred prací)
- `agent/context/design-system.md`
- `agent/context/project-brief.md`

## Deliverables
- `src/styles` / global theme s tokeny
- Reusable layout komponenty
- Základ homepage shell ve stylu showroomu (hero placeholder + content sections skeleton)
- Konzistentni dark/light surface styling podle DNA (bez agresivnich shadow)

## Definition of Done
- [x] Tokeny odpovidaji zadanemu barevnemu setu a radiusum
- [x] Typografie rozlisuje editorial text vs mono spec vrstvu
- [x] Header je sticky a pri scrollu nerusi obsah (aspon CSS shrink/opacity stav)
- [x] Mobilni layout drzi `12px` padding, desktop `18px`
- [x] UI vizualne nepouziva defaultni Tailwind look (zretelna custom stylizace)

## Agent Notes
- Stav: done
- Rizika / blokery: `Systemia` a `Azeret Mono` jsou zatim pouze deklarovane stacky bez self-hostingu
- Follow-up: TASK-03 doplni metadata, schema helpers, canonical/OG a technicke SEO utility
