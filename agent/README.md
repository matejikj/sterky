# Agent Development Scaffold

Tato slozka slouzi jako operacni vrstva pro agentni vyvoj webu (Astro + Tailwind + islands animace).

## Cile
- Rozdelit implementaci do malych, delegovatelnych tasku.
- Udrzet konzistenci v SEO, designu a performance rozhodnutich.
- Mit jasne `Definition of Done` pro kazdy task.

## Struktura
- `agent/context/` sdileny kontext a guardrails (produkt, styl, SEO/tech)
- `agent/tasks/` backlog + konkretni tasky v poradi implementace
- `agent/templates/` sablona pro dalsi tasky

## Zpusob prace (doporučeno)
1. Zacni v `agent/tasks/INDEX.md` a vyber prvni task bez nesplnenych dependency.
2. Pred implementaci nacti relevantni soubory z `agent/context/`.
3. Implementuj pouze scope daneho tasku.
4. Zapis vysledek do sekce `Agent Notes` v tasku (co bylo hotove / co chybi).
5. Teprve potom spoustet dalsi task.

## Pravidla pro tento projekt
- SEO-first: obsah musi byt v DOM, ne schovany pouze v animaci.
- Minimal JS: GSAP/Lenis pouze v islands, nikdy globalne bez duvodu.
- Luxusni styl = material/gallery feeling, ne genericky marketing web.
- Mobilni UX musi mit sticky CTA pro poptavku/kalkulaci.

## Doporučené workflow vetveni (volitelne)
- `feat/task-01-bootstrap`
- `feat/task-02-design-foundation`
- ...

