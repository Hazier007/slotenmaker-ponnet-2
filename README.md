# Slotenmaker Kristof Ponnet — slotenmakerponnet.be

Snelle, SEO-geoptimaliseerde Next.js-site voor Slotenmaker Kristof Ponnet, gefocust op het **domineren van Oost-Vlaanderen** in de zoekresultaten.

## Stack
- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- Statisch gegenereerde pagina's (snel + goede Core Web Vitals)

## Wat zit erin (SEO-troeven vs. concurrent)
- **70+ lokale pagina's** (`/slotenmaker/[stad]`) met **unieke** content per gemeente (echte deelgemeenten, buurgemeenten, lokaal kenmerk) — geen gespinnte duplicaten.
- **Dienstpagina's** (`/diensten/[slug]`) per kernopdracht.
- Volledige **structured data**: `Locksmith`/LocalBusiness + geo, `Service`, `FAQPage`, `BreadcrumbList`, `AggregateRating`.
- **Transparante prijstabel**, **echte persoon** (Kristof) en **reviews** → sterke E-E-A-T.
- Sticky **bel-balk** op mobiel, snel leadformulier, FAQ met schema.
- Auto-gegenereerde `sitemap.xml` en `robots.txt`.

## Aan de slag
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # productie-build
```

## Configuratie
Kopieer `.env.example` naar `.env.local` en vul in waar nodig:
- `NEXT_PUBLIC_SITE_URL` etc. → in `lib/site.ts` staan de bedrijfsgegevens (NAP).
- Leadformulier (`app/api/lead/route.ts`) werkt meteen (logt de lead). Zet optioneel
  `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` (tabel `leads`) of `RESEND_API_KEY` +
  `LEAD_NOTIFY_EMAIL` voor opslag/e-mailmelding.

## Nog te doen vóór livegang
1. Echte hero-/teamfoto's toevoegen in `public/images/` (en hero-`<Image>` activeren).
2. Echte Google-reviews in `lib/reviews.ts` (en `reviewCount`/`reviewRating` in `lib/site.ts`).
3. Sociale profielen invullen in `lib/site.ts`.
4. Google Business Profile koppelen + NAP overal identiek houden.
5. Deployen op Vercel en domein `slotenmakerponnet.be` koppelen.

## Uitbreiden
- Nieuwe gemeente? Voeg een object toe aan `lib/cities.ts` — pagina, sitemap en interne links volgen automatisch.
- Nieuwe dienst? Voeg toe aan `lib/services.ts`.
