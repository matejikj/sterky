---
id: TASK-01
status: done
priority: P0
depends_on: []
owner: agent
estimated_effort: M
---

# Bootstrap projektu (Astro + Tailwind)

## Cíl
Zalozit funkcni projekt v `Astro` s `Tailwind`, pripraveny pro SSG a dalsi tasky bez zbytecneho globalniho JS.

## Scope
- Inicializace Astro projektu (SSG/prerender default)
- Integrace Tailwind CSS
- Zakladni struktura slozek (`src/pages`, `src/layouts`, `src/components`, `src/content`, `public`)
- Global styles soubor pripraveny na CSS tokeny
- Zakladni layout a placeholder routy (`/`, `/sterky/`, `/realizace/`)
- Nastaveni lint/format skriptu (pokud je v stacku standard)

## Mimo scope
- Finalni vizualni design komponent
- GSAP/Lenis integrace
- Pokrocila SEO schema logika

## Vstupy (nacti pred prací)
- `agent/context/tech-seo-guardrails.md`
- `agent/context/project-brief.md`

## Deliverables
- Funkcni `Astro` projekt s Tailwind
- `npm scripts` pro `dev`, `build`, `preview`
- Globalni layout s `main` landmarkem
- Placeholder stranky s jednim `H1` na route

## Definition of Done
- [x] `npm run build` probehne bez chyb
- [x] Projekt je nastaven jako staticky/prerender-first
- [x] Tailwind utility classes fungují ve strankach
- [x] Neexistuje globalni import `gsap` ani `lenis`
- [x] Zakladni struktura odpovida dalsim taskum (komponenty/layouts/pages)

## Agent Notes
- Stav: done
- Rizika / blokery: fonty jsou zatim placeholder (system font), rozhodnuti v TASK-02
- Follow-up: TASK-02 zavede plne tokeny, typografii a showroom visual foundation
