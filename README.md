# Slotenmaker Kristof Ponnet — slotenmakerponnet.be

Next.js-site voor Slotenmaker Kristof Ponnet, met groot Wetteren en groot Gent als belangrijkste werkgebied.

## Stack
- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- Statisch gegenereerde pagina's

## Wat zit erin
- **66 lokale pagina's** (`/slotenmaker/[stad]`). Veel pagina's delen een sjabloon; voeg alleen verifieerbare, nuttige lokale informatie toe.
- **Dienstpagina's** (`/diensten/[slug]`) per kernopdracht.
- **Structured data**: `Locksmith`/LocalBusiness, `Service`, `FAQPage`, `BreadcrumbList` en `Article`.
- **Prijsoverzicht**, contactgegevens en een verwijzing naar Google-reviews.
- Sticky **bel-balk** op mobiel, snel leadformulier, FAQ met schema.
- Auto-gegenereerde `sitemap.xml` en `robots.txt`.

## Aan de slag
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # productie-build
npm test         # gerichte regressietests
```

## Configuratie
Kopieer `.env.example` naar `.env.local` en vul in waar nodig:
- `NEXT_PUBLIC_SITE_URL` etc. → in `lib/site.ts` staan de bedrijfsgegevens (NAP).
- Het leadformulier vereist minstens één afleverroute: `SUPABASE_URL` +
  `SUPABASE_SERVICE_ROLE_KEY` (tabel `leads`) of `RESEND_API_KEY` +
  `LEAD_NOTIFY_EMAIL` + `LEAD_FROM_EMAIL` (afzenderdomein geverifieerd in Resend).
  Zonder geldige configuratie toont de site bellen en e-mailen in plaats van
  het formulier. De API geeft dan een fout bij rechtstreekse aanroepen.
  Leads worden niet in logs bewaard.
- GA4 laadt pas na analytische toestemming. Stel `NEXT_PUBLIC_GA_ID` in en controleer
  de gebeurtenissen `phone_click` en `lead_submitted` in de bedoelde GA4-property.
- Het maandelijkse groeiproces en de nulmeting staan in `docs/organic-growth.md`.

## Controle vóór de volgende publicatie
1. Echte hero-/teamfoto's met toestemming toevoegen in `public/images/`.
2. De actuele Google-reviewscore en bedrijfsclaims met Kristof verifiëren.
3. Sociale profielen invullen in `lib/site.ts`.
4. Google Bedrijfsprofiel en NAP-gegevens controleren.
5. Lead-aflevering en GA4-gebeurtenissen in de productieomgeving testen.

## Uitbreiden
- Nieuwe gemeente? Voeg een object toe aan `lib/cities.ts` — pagina, sitemap en interne links volgen automatisch.
- Nieuwe dienst? Voeg toe aan `lib/services.ts`.
