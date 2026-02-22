---
id: TASK-06
status: todo
priority: P1
depends_on: [TASK-05]
owner: agent
estimated_effort: L
---

# Konverzni a technicke bloky (kalkulace, FAQ, formular)

## Cíl
Doplnit bloky, ktere prodavaji duveru v remeslo i konverzi: technicke parametry, proces, udrzba, FAQ, kalkulace a lead form.

## Scope
- Spec Card (technicke parametry: vlhkost, UV, udrzba, mistnosti, odolnost)
- Process Timeline (konzultace -> zamereni -> priprava -> aplikace -> ochrana -> predani)
- Care & Maintenance accordion
- FAQ sekce pro betonove/dekorativni sterky
- `FAQPage` schema napojeni (vyuzit helper z TASK-03)
- Sample CTA blok (vzorek / zkusebni plocha)
- Quote Builder (orientacni kalkulace rozsahu dle m², mistnosti, typu, pripravy)
- Lead form (kratky) + upload fotek + rozmery + preferovany vzhled
- Download blok pro technicky list (PDF placeholder)
- Mobilni sticky bottom CTA bar (Kalkulace / Vzorek / Konzultace)

## Mimo scope
- Backend CRM integrace / realne odesilani do produkce (pokud neni v projektu vyzadovano)
- Plna validace podle konkretniho backendu

## Vstupy (nacti pred prací)
- `agent/context/project-brief.md`
- `agent/context/design-system.md`
- `agent/context/tech-seo-guardrails.md`

## Deliverables
- Komponenty pro spec/proces/faq/care/sample CTA/quote builder/form
- FAQ schema na detailu nebo home (dle IA rozhodnuti)
- Mobilni sticky CTA bar

## Definition of Done
- [ ] FAQ obsah je renderovan v HTML + schema je generovana
- [ ] Quote Builder vraci orientacni rozsah a CTA navaznost
- [ ] Lead form je pouzitelny na mobilu a desktopu
- [ ] Sticky bottom CTA je viditelne a neprekryva kriticky obsah
- [ ] Technicke bloky podporuji narativ „remeslo + realism“ (ne marketing fluff)

## Agent Notes
- Stav: todo
- Rizika / blokery: upload muze vyzadovat rozhodnuti o endpointu/storage
- Follow-up: TASK-07 provede audit, optimalizace a deployment readiness

