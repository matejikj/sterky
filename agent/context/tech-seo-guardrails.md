# Tech + SEO Guardrails

## Stack (pevne rozhodnuti)
- `Astro` (SSG / prerender)
- `Tailwind CSS`
- `GSAP + ScrollTrigger` pouze v interaktivnich islands
- `Lenis` pouze na strankach/sekcich, kde je realna UX hodnota
- Astro image pipeline (`astro:assets` / built-in image optimization)

## Proc Astro (duvod rozhodnuti)
- Ciste staticke HTML a minimum JS defaultne
- Vhodne pro content-heavy editorial prezentaci
- Islands architektura pro izolovanou interaktivitu bez globalniho JS overheadu

## SEO kriticke pozadavky
1. Rendering a obsah
- Vsechny hlavni stranky prerenderovat (SSG)
- Semanticke HTML (`header`, `nav`, `main`, `section`, `article`)
- Jedno `H1` na stranku
- Texty nesmi byt zavisle na animaci (obsah musi byt v DOM hned)

2. Core Web Vitals
- LCP: hero obrazek prioritni, spravne rozmery, AVIF/WebP
- CLS: definovat `width/height` nebo `aspect-ratio`, stabilni font loading
- INP: neinstalovat globalni scroll skripty; init animaci pouze v islands

3. Obrazky
- `srcset` velikosti (2-3 varianty)
- Lazy load mimo hero
- Popisne `alt` texty (typ, finish, odstin, mistnost)
- Oddelit makro textury vs realizace v prostoru

4. Structured data (rychle SEO wins)
- `Organization` / `LocalBusiness`
- `Service`
- `FAQPage`
- `BreadcrumbList`

5. Technicke minimum
- `sitemap.xml`
- `robots.txt`
- `canonical`
- OpenGraph + Twitter cards
- ciste URL struktury (`/sterky/...`, `/realizace/...`)
- interni prolinkovani: typ sterky -> realizace -> poptavka

## Performance guardrails
- Zadny GSAP/Lenis import v globalnim layoutu bez vyjimky
- `prefers-reduced-motion` fallback pro vsechny animovane islands
- Obrazky optimalizovat pred pixel-perfect tunenim UI

## Deployment
- Cileny deployment: `Cloudflare Pages`
- Staticky export + CDN distribuce
- Pripravit build instrukce a env poznamky v poslednim tasku

