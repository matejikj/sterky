---
id: TASK-07
status: todo
priority: P0
depends_on: [TASK-06]
owner: agent
estimated_effort: M
---

# Performance, QA a Cloudflare Pages deployment readiness

## Cíl
Finalne dotahnout SEO/performance/a11y detaily a pripravit projekt na nasazeni na Cloudflare Pages.

## Scope
- Audit obrazku (hero priority, srcset, AVIF/WebP, lazy loading mimo hero)
- Kontrola LCP/CLS/INP rizik v implementaci
- A11y kontrola (focus states, kontrast, klavesnice, formulare labels)
- Responsive polish (mobilni carousel/accordion/bottom CTA, `svh` stabilita)
- Kontrola canonical/OG/schema/robots/sitemap v build vystupu
- Build & preview smoke test
- Cloudflare Pages deployment docs/config (build command, output dir, env placeholders)
- Finalni README doplneni (lokalni run + build + deploy)

## Mimo scope
- Produkcni observabilita nebo analytika (pokud neni vyzadovano)
- Plna copy/asset production handoff

## Vstupy (nacti pred prací)
- `agent/context/tech-seo-guardrails.md`
- `agent/tasks/TASK-01-bootstrap-astro-tailwind.md`
- `agent/tasks/TASK-06-conversion-spec-faq-form.md`

## Deliverables
- Vyladeny build pripraveny pro Cloudflare Pages
- Dokumentace deploye + provozni poznamky
- Seznam zbyvajicich rizik (pokud neco chybi: finalni assets/domena/form backend)

## Definition of Done
- [ ] `npm run build` a `npm run preview` smoke test proběhne
- [ ] Hero media ma prioritu a definovane rozmery/aspect ratio
- [ ] Mimo hero obrazky jsou lazy a optimalizovane pipeline
- [ ] robots/sitemap/canonical/OG/schema jsou overene v build vystupu
- [ ] Cloudflare Pages instrukce jsou zapsane v dokumentaci

## Agent Notes
- Stav: todo
- Rizika / blokery: finalni domena a produkcni env promene
- Follow-up: produkcni obsah/fotky a realny form endpoint

