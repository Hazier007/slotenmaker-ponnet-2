import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CallToActionBand } from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Over ${site.owner} — uw lokale slotenmaker`,
  description: `Maak kennis met ${site.owner} uit ${site.city}, slotenmaker voor groot Wetteren, groot Gent en omgeving.`,
  path: "/over-ons",
});

export default function OverOnsPage() {
  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Over {site.owner}</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">
            Geen anoniem nummer of doorgeschakeld callcenter, maar een echte lokale
            vakman die u kunt vertrouwen.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-muted sm:px-6 lg:px-8">
          <p>
            <strong className="text-foreground">{site.owner}</strong> uit {site.city} is uw
            slotenmaker voor groot Wetteren, groot Gent en omgeving. {site.owner} en zijn vaste
            medewerkers helpen u bij slotproblemen — van een simpele buitensluiting tot
            complexe inbraakbeveiliging voor woningen en handelspanden.
          </p>
          <p>
            We werken vanuit Wetteren. Vertel bij een aanvraag waar u zich bevindt en
            welk slotprobleem u heeft; dan bespreken we de aanpak, verwachte aankomsttijd
            en richtprijs voordat we vertrekken.
          </p>
          <h2 className="pt-2 text-xl font-bold text-primary">Waar we voor staan</h2>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-accent">✓</span> <span><strong className="text-foreground">Eerlijkheid:</strong> we maken nooit misbruik van uw noodsituatie en spreken de prijs vooraf af.</span></li>
            <li className="flex gap-2"><span className="text-accent">✓</span> <span><strong className="text-foreground">Vakmanschap:</strong> we volgen de nieuwste technieken en materialen op de voet.</span></li>
            <li className="flex gap-2"><span className="text-accent">✓</span> <span><strong className="text-foreground">Duidelijkheid:</strong> we spreken beschikbaarheid en aankomsttijd vooraf met u af.</span></li>
            <li className="flex gap-2"><span className="text-accent">✓</span> <span><strong className="text-foreground">Kwaliteit:</strong> enkel gecertificeerd, inbraakwerend materiaal conform de verzekeringen.</span></li>
          </ul>
          <div className="rounded-xl bg-surface p-6 text-sm">
            <p><strong className="text-foreground">{site.name}</strong></p>
            <p>{site.city} · {site.region}</p>
            <p>BTW {site.vat}</p>
            <p className="mt-2">Telefoon: <a href={`tel:${site.phoneE164}`} className="font-semibold text-primary">{site.phone}</a></p>
            <p>E-mail: <a href={`mailto:${site.email}`} className="text-primary">{site.email}</a></p>
          </div>
        </div>
      </section>

      <CallToActionBand />
    </>
  );
}
