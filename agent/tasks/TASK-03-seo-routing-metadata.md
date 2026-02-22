---
id: TASK-03
status: todo
priority: P0
depends_on: [TASK-02]
owner: agent
estimated_effort: M
---

# SEO infrastruktura, routy a metadata

## Cíl
Postavit technicky korektni SEO vrstvu (metadata, sitemap, robots, canonical, schema utility) a pripravit URL strukturu pro typy sterek a realizace.

## Scope
- URL struktura dle briefu (`/sterky/...`, `/realizace/...`)
- Shared SEO layout/head komponenta
- Canonical URL generace
- OpenGraph + Twitter card metadata
- `robots.txt` a `sitemap.xml` (Astro plugin nebo custom route)
- Schema helpery: `Organization/LocalBusiness`, `Service`, `BreadcrumbList`, `FAQPage`
- Breadcrumb komponenta (markup + schema hook)
- Prerender potvrzeni pro hlavni routy

## Mimo scope
- Finalni FAQ obsah
- Vsechny interaktivni UX prvky
- Finalni copywriting

## Vstupy (nacti pred prací)
- `agent/context/tech-seo-guardrails.md`
- `agent/context/project-brief.md`

## Deliverables
- `SEOHead` / metadata utility
- Schema generators/helpers
- `robots.txt`, `sitemap.xml`
- Routing skeleton pro detail typu sterky a detail realizace

## Definition of Done
- [ ] Kazda stranka ma title + meta description + canonical
- [ ] OG/Twitter metadata je centralizovane a pouzitelne napric routami
- [ ] Sitemap obsahuje hlavni routy
- [ ] Schema helpery existuji alespon pro `Organization/Service/Breadcrumb/FAQ`
- [ ] Struktura rout odpovida SEO pozadavkum ze zadani

## Agent Notes
- Stav: todo
- Rizika / blokery: chybi finalni domena (pouzit config placeholder)
- Follow-up: TASK-04 naplni semanticky obsah a interni prolinkovani

