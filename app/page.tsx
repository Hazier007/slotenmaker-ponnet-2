import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { featuredCitySlugs, getCity, cities } from "@/lib/cities";
import { generalFaqs } from "@/lib/faqs";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import CostTable from "@/components/CostTable";
import Reviews from "@/components/Reviews";
import JsonLd from "@/components/JsonLd";
import { faqLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(generalFaqs)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-accent" /> 24/7 wachtdienst · heel Oost-Vlaanderen
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Dé slotenmaker van Oost-Vlaanderen
            </h1>
            <p className="mt-4 text-lg text-white/85 sm:text-xl">
              Buitengesloten, slot kapot of sleutel afgebroken? {site.owner} en team
              staan dag en nacht voor u klaar — doorgaans binnen 30 minuten ter plaatse
              en in de meeste gevallen openen we uw deur volledig schadevrij.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phoneE164}`}
                className="rounded-lg bg-accent px-8 py-4 text-center font-semibold text-white hover:bg-accent-hover"
              >
                Bel direct {site.phone}
              </a>
              <a
                href="#leadform"
                className="rounded-lg border-2 border-white/30 px-8 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Vrijblijvende offerte
              </a>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-white/85 sm:grid-cols-3">
              <li className="flex items-center gap-2"><Check /> Binnen 30 min ter plaatse</li>
              <li className="flex items-center gap-2"><Check /> Schadevrij openen</li>
              <li className="flex items-center gap-2"><Check /> Eerlijke prijs vooraf</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HERKENNINGSSIGNALEN */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">Herkent u een van deze situaties?</h2>
          <p className="mt-4 max-w-3xl text-muted">
            U trok de deur achter u dicht met de sleutel nog binnen. Uw sleutel brak af in
            het slot. De cilinder draait stroef of blokkeert. Of u wil na een verhuis of
            inbraakpoging gewoon zeker zijn dat uw woning weer veilig is. In al die gevallen
            helpen we u snel en correct verder — zonder onnodige kosten.
          </p>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">Waarmee kunnen wij u helpen?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}`}
                className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
                <span className="mt-3 inline-block text-sm font-medium text-accent">Meer info →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WAAROM KRISTOF */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">Waarom kiezen voor Slotenmaker Ponnet?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Een echte, lokale vakman", `Geen anoniem callcenter: u krijgt ${site.owner} uit ${site.city} en zijn vast team aan de lijn. Lokaal, herkenbaar en aanspreekbaar.`],
              ["Binnen 30 minuten ter plaatse", "Onze wachtdienst is verspreid over Oost-Vlaanderen, zodat we snel bij u zijn — waar u ook woont in de provincie."],
              ["Schadevrij waar het kan", "We openen de meeste deuren zonder schade. Boren is altijd de laatste optie en bespreken we eerst met u."],
              ["Eerlijke, transparante prijs", "U krijgt vooraf een duidelijke richtprijs. Geen misbruik van uw noodsituatie, geen verrassingen op de factuur."],
              ["Gecertificeerd materiaal", "We plaatsen inbraakwerend materiaal met SKG-keurmerk, conform de voorwaarden van de meeste verzekeringen."],
              [`${site.yearsExperience}+ jaar ervaring`, "Van een simpele buitensluiting tot complexe inbraakbeveiliging: we kennen elk type slot en elke situatie."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-surface p-6">
                <div className="mb-3 text-2xl text-accent">✓</div>
                <h3 className="font-semibold text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZO WERKT HET */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">Zo werkt het</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {[
              ["1", "U belt of vult het formulier in", "Beschrijf kort uw situatie. Bij spoed bellen is het snelst."],
              ["2", "Wij komen snel ter plaatse", "Doorgaans binnen 30 minuten, met de juiste materialen in de wagen."],
              ["3", "Opgelost tegen een eerlijke prijs", "We lossen het probleem op en u kent de prijs vooraf."],
            ].map(([n, t, d]) => (
              <div key={n} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">{n}</div>
                <h3 className="mt-4 font-semibold text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="leadform" className="bg-primary-dark py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Vraag vrijblijvend advies of een offerte aan</h2>
              <p className="mt-4 text-white/80">
                Laat uw gegevens achter en we nemen zo snel mogelijk contact op. Bij spoed
                belt u ons uiteraard beter direct — dan staan we doorgaans binnen het half uur bij u.
              </p>
              <p className="mt-6 text-lg font-semibold">
                <a href={`tel:${site.phoneE164}`} className="hover:text-accent">📞 {site.phone}</a>
              </p>
              <p className="mt-1 text-sm text-white/70">24/7 wachtdienst · heel Oost-Vlaanderen</p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <Reviews />

      {/* KOSTEN */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">Indicatieve prijzen</h2>
          <p className="mt-2 max-w-3xl text-muted">
            Transparantie vinden we even belangrijk als kwaliteit. Hieronder vindt u richtprijzen;
            de exacte prijs spreken we vooraf met u af.
          </p>
          <div className="mt-8">
            <CostTable />
          </div>
        </div>
      </section>

      {/* REGIO */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">Slotenmaker bij u in de buurt</h2>
          <p className="mt-2 text-muted">
            Actief in heel Oost-Vlaanderen — {cities.length} steden en gemeenten. Een greep uit ons werkgebied:
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {featuredCitySlugs.map((slug) => {
              const c = getCity(slug);
              if (!c) return null;
              return (
                <Link
                  key={slug}
                  href={`/slotenmaker/${slug}`}
                  className="rounded-lg border border-border bg-white px-4 py-3 text-center font-medium text-primary transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  {c.name}
                </Link>
              );
            })}
          </div>
          <div className="mt-6">
            <Link href="/werkgebied" className="font-medium text-accent hover:underline">
              Bekijk het volledige werkgebied →
            </Link>
          </div>
        </div>
      </section>

      <FAQ faqs={generalFaqs} />
    </>
  );
}

function Check() {
  return <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">✓</span>;
}
