---
id: TASK-05
status: todo
priority: P1
depends_on: [TASK-04]
owner: agent
estimated_effort: L
---

# Islands interaktivita (GSAP/Lenis lokalne)

## Cíl
Pridat premium motion a interaktivitu jen do vybranych sekci bez poruseni SEO/performance guardrails.

## Scope
- Integrace `GSAP + ScrollTrigger` jen v relevantnich islands
- `Lenis` jen pokud prinese realnou hodnotu a je omezen na konkretni stranku/sekce
- Hero Texture Stage (pomaly parallax)
- Typ sterky switcher (crossfade, bez reloadu)
- Finish/Texture swatches (aktivni stav ring + dot)
- `Real vs Render` toggle (transparentnost)
- Galerie realizaci hover / mobilni carousel interakce
- Before/After slider
- Layer Stack (scroll-scrub reveal vrstev)
- `prefers-reduced-motion` fallback

## Mimo scope
- Finalni kalkulacka a lead form backend integrace
- Kompletní performance tuning vsech assetu

## Vstupy (nacti pred prací)
- `agent/context/design-system.md`
- `agent/context/tech-seo-guardrails.md`

## Deliverables
- Islands komponenty pro vybrane interakce
- Lazy/lokalni importy motion knihoven
- Reduced motion fallback chovani

## Definition of Done
- [ ] `gsap`/`lenis` nejsou importovane v globalnim layoutu
- [ ] Interaktivni prvky funguji bez rozbiti SSR obsahu
- [ ] Prepinace pouzivaji klidny motion (fade/scale), ne agresivni slide
- [ ] Mobilni galerie funguje touch-friendly (tap/swipe, 44px targety)
- [ ] Reduced-motion rezim vypne/omezi pohyb bez funkcni regrese

## Agent Notes
- Stav: todo
- Rizika / blokery: potreba hlidat bundle size a init timing ScrollTriggeru
- Follow-up: TASK-06 prida konverzni a technicke bloky (kalkulace, FAQ, formular)

