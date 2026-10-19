# Organische groei: Wetteren en Gent

## Doel en nulmeting

- Doel: 1.500 Google Search Console webklikken in een voortschrijdende periode van 30 dagen, uiterlijk rond april 2027. Dit benadert 50 bezoeken per dag, maar klikken zijn geen unieke bezoekers.
- Nulmeting 17 september–16 oktober 2026: 12 klikken en 2.983 vertoningen. Vergelijk steeds twee volledige perioden van 30 dagen; gebruik geen onvolledige recente GSC-dagen.
- In dezelfde periode registreerde de gekoppelde GSC-property `https://ovl-slotenmaker.be/` 386 klikken en 66.205 vertoningen, waaronder zoekopdrachten voor Wetteren en Gent. Beide domeinen blijven voorlopig naast elkaar bestaan. `slotenmakerponnet.be` is het beoogde hoofddomein zodra de groei dat ondersteunt. Maak vóór een eventuele overstap een URL-voor-URL-migratieplan met behoud van het bestaande verkeer; voer nu geen redirects uit. Twee sites voor dezelfde plaats en dienst kunnen om dezelfde zoekintentie strijden.
- Meet daarnaast telefoontikken (`phone_click`) en afgeleverde aanvragen (`lead_submitted`) in GA4. GA4 laadt alleen na toestemming en telt dus niet alle bezoekers. Markeer deze twee gebeurtenissen desgewenst als belangrijke gebeurtenissen in GA4.
- Controleer per maand de echte aanvragen en telefoongesprekken; meer klikken zonder relevante aanvragen is geen geslaagde groei.

## Eerste pagina's

1. Wetteren, Gent, Melle, Merelbeke, Destelbergen en de Gentse deelgemeenten. Verbeter de bestaande pagina's voordat er nieuwe plaatsen bijkomen.
2. Deur openen, slot vervangen en sleutel bijmaken. Houd op de sleutelpagina de prijs van duplicatie gescheiden van interventietarieven.
3. Behoud de overige plaats­pagina's. Controleer elke belofte over dekking en aankomsttijd; publiceer geen opdrachtverhalen die niet hebben plaatsgevonden.

## Maandelijkse werkwijze (2–3 uur van het team)

1. Exporteer in Search Console de laatste twee volledige perioden van 30 dagen: klikken, vertoningen, CTR en gemiddelde positie per pagina en zoekopdracht. Noteer apart Wetteren, Gent en hun randgemeenten.
2. Kies maximaal drie bestaande URL's met relevante vertoningen en een lage positie of CTR. Noteer per URL de zoekintentie, de concrete verbetering en de datum waarop de pagina is gewijzigd.
3. Vraag Kristof om één of twee echte opdrachten: gemeente, probleem, uitgevoerde oplossing, eventuele prijsfactoren, een foto zonder persoonlijke gegevens en toestemming voor publicatie. Plaats de informatie alleen op de passende pagina. Gebruik geen fictieve testimonials of werkfoto's.
4. Controleer in het Google Bedrijfsprofiel het telefoonnummer, de diensten, het echte werkgebied, openingstijden, recente foto's en nieuwe reviews. Vraag na een geslaagde opdracht op gewone wijze om een review; koop of verzin geen reviews.
5. Controleer in Search Console de indexeringsstatus van de verbeterde URL's en de sitemap. Een URL zonder vertoningen is niet automatisch buiten de index.
6. Werk `lastModified` in de sitemap en `modified` van een blogartikel uitsluitend bij wanneer de zichtbare inhoud echt verandert.

## Voor publicatie verifiëren

- Kristof bevestigt de actuele uren, werkgebieden, aankomsttijden, erkenningen en gebruikte keurmerken. Publiceer aantallen ervaringsjaren en reviewscores pas na verificatie.
- Controleer in Vercel dat `NEXT_PUBLIC_GA_ID` naar de juiste GA4-property verwijst. Test na toestemming één paginaweergave, één telefoontik en één afgeleverde proefaanvraag in GA4 DebugView. Zonder toestemming mogen geen GA4-gebeurtenissen worden verzonden.
- Configureer minimaal één werkende afleverroute voor het formulier: Supabase (`SUPABASE_URL` en `SUPABASE_SERVICE_ROLE_KEY`) of Resend (`RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL` en `LEAD_FROM_EMAIL`). Voor Resend is `slotenmakerponnet.be` opgegeven als geverifieerd afzenderdomein en `info@slotenmaker-ponnet.be` als ontvanger; controleer dit met een echte aanvraag vóór activering. Zolang geen route is ingesteld, toont de site telefoon en e-mail in plaats van het formulier en geeft de API bij rechtstreekse aanroepen een foutmelding.
- Controleer of foto's en reviews met toestemming op de site mogen staan. Het ongebruikte bestand met fictieve voorbeeldrecensies is verwijderd.

## Beslismoment na drie maanden

Als de klikken voor de kernregio's dan niet duidelijk stijgen, controleer eerst de indexeringsstatus, lokale concurrentie en het zoekvolume. Maak pas daarna extra pagina's. Het doel van 1.500 klikken per 30 dagen is een ambitie, geen voorspelling.
