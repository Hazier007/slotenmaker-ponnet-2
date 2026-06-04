import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CallToActionBand } from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Over ${site.owner} — uw lokale slotenmaker`,
  description: `Maak kennis met ${site.owner} uit ${site.city}, uw lokale meesterslotenmaker voor heel Oost-Vlaanderen. Vakmanschap, eerlijkheid en snelle service.`,
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
            lokale meesterslotenmaker voor heel Oost-Vlaanderen. Met meer dan
            {" "}{site.yearsExperience} jaar ervaring helpen {site.owner} en zijn vaste
            medewerkers u dagelijks uit de nood — van een simpele buitensluiting tot
            complexe inbraakbeveiliging voor woningen en handelspanden.
          </p>
          <p>
            We kozen er bewust voor om ons te focussen op één provincie. Door enkel in
            Oost-Vlaanderen te werken, zijn we écht snel ter plaatse en kennen we de regio,
            haar woningen en de meest voorkomende slotproblemen door en door.
          </p>
          <h2 className="pt-2 text-xl font-bold text-primary">Waar we voor staan</h2>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-accent">✓</span> <span><strong className="text-foreground">Eerlijkheid:</strong> we maken nooit misbruik van uw noodsituatie en spreken de prijs vooraf af.</span></li>
            <li className="flex gap-2"><span className="text-accent">✓</span> <span><strong className="text-foreground">Vakmanschap:</strong> we volgen de nieuwste technieken en materialen op de voet.</span></li>
            <li className="flex gap-2"><span className="text-accent">✓</span> <span><strong className="text-foreground">Snelheid:</strong> een 24/7-wachtdienst verspreid over de hele provincie.</span></li>
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
