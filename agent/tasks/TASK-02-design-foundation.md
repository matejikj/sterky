---
id: TASK-02
status: todo
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
- [ ] Tokeny odpovidaji zadanemu barevnemu setu a radiusum
- [ ] Typografie rozlisuje editorial text vs mono spec vrstvu
- [ ] Header je sticky a pri scrollu nerusi obsah (aspon CSS shrink/opacity stav)
- [ ] Mobilni layout drzi `12px` padding, desktop `18px`
- [ ] UI vizualne nepouziva defaultni Tailwind look (zretelna custom stylizace)

## Agent Notes
- Stav: todo
- Rizika / blokery: dostupnost fontu `Systemia` (mozna fallback do implementace)
- Follow-up: TASK-03 doplni metadata, schema helpers a technicke SEO

