---
id: TASK-04
status: todo
priority: P0
depends_on: [TASK-03]
owner: agent
estimated_effort: L
---

# Obsahove stranky a semanticka struktura

## Cíl
Postavit hlavni stranky (home, listingy, detaily) tak, aby byl obsah SEO-ready, semanticky korektni a odpovidal showroom/architect spec narativu.

## Scope
- Home page sections (hero, kolekce, realizace teaser, proces, spec, FAQ teaser, CTA)
- `/sterky/` listing typů sterek
- `/sterky/[slug]/` detail typu (napr. betonova sterka)
- `/realizace/` listing realizaci
- `/realizace/[slug]/` detail projektu (vrstvy, odstin, podklad, cas realizace, udrzba)
- Interni prolinkovani: typ sterky -> realizace -> poptavka
- Vsechny dulezite texty v DOM (zadne animation-only content)
- Obrazkove komponenty s alt text placeholder strukturou

## Mimo scope
- Pokrocile motion efekty a scroll scrubbing
- Kalkulacka / upload formular logika

## Vstupy (nacti pred prací)
- `agent/context/project-brief.md`
- `agent/context/design-system.md`
- `agent/context/tech-seo-guardrails.md`

## Deliverables
- Semanticky markup stranek s jednim H1 na kazde route
- Reusable sekcni komponenty pro realizace/spec/proces
- Placeholder data/content model (muze byt lokalni JSON/TS kolekce)
- Breadcrumbs na detailech

## Definition of Done
- [ ] Home + listing + 2 detail routy existuji a buildi
- [ ] Semanticke landmarky a heading hierarchy jsou korektni
- [ ] Texty o materialech/procesu jsou renderovane server-side v HTML
- [ ] Interni linky propojuji typy sterek, realizace a CTA
- [ ] Alt text pattern je pripraven pro realna data (typ + finish + mistnost)

## Agent Notes
- Stav: todo
- Rizika / blokery: finalni fotografie a copy budou nejspis placeholder
- Follow-up: TASK-05 doplni islands interaktivitu nad existujici semantickou strukturou

