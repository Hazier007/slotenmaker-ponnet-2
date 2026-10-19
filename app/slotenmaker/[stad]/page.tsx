import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { allCitySlugs, getCity, cityExtra, type City } from "@/lib/cities";
import { services } from "@/lib/services";
import { cityFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import CostTable from "@/components/CostTable";
import JsonLd from "@/components/JsonLd";
import { CallToActionBand } from "@/components/Section";
import { localBusinessLd, faqLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return allCitySlugs().map((stad) => ({ stad }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stad: string }>;
}): Promise<Metadata> {
  const { stad } = await params;
  const city = getCity(stad);
  if (!city) return {};
  return pageMeta({
    title: `Slotenmaker ${city.name} | Deur openen en slot vervangen`,
    description: `Slotenmaker nodig in ${city.name}? ${site.owner} helpt bij buitensluiting, een defect slot en cilindervervanging. Bel ${site.phone} voor beschikbaarheid en een richtprijs.`,
    path: `/slotenmaker/${city.slug}`,
  });
}

function joinNl(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return items.slice(0, -1).join(", ") + " en " + items[items.length - 1];
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ stad: string }>;
}) {
  const { stad } = await params;
  const city = getCity(stad);
  if (!city) notFound();

  const faqs = cityFaqs(city.name);
  const nearby = city.nearby.map(getCity).filter(Boolean) as City[];
  const heeftDeelgemeenten = city.deelgemeenten.length > 0;
  const extra = cityExtra[city.slug] ?? [];

  return (
    <>
      <JsonLd
        data={[
          localBusinessLd({ cityName: city.name, path: `/slotenmaker/${city.slug}` }),
          faqLd(faqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Werkgebied", path: "/werkgebied" },
            { name: city.name, path: `/slotenmaker/${city.slug}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            {" › "}
            <Link href="/werkgebied" className="hover:text-white">Werkgebied</Link>
            {" › "}
            <span className="text-white">{city.name}</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Slotenmaker {city.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">
            Buitengesloten of een slot defect in {city.name}? Bel {site.owner} voor de
            beschikbaarheid, de verwachte aankomsttijd en een richtprijs. We bekijken eerst
            of de deur zonder schade open kan.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phoneE164}`} className="rounded-lg bg-accent px-8 py-4 text-center font-semibold text-white hover:bg-accent-hover">
              Bel {site.phone}
            </a>
            <a href="#leadform" className="rounded-lg border-2 border-white/30 px-8 py-4 text-center font-semibold text-white hover:bg-white/10">
              Offerte aanvragen
            </a>
          </div>
        </div>
      </section>

      {/* UNIEKE LOKALE CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-foreground">
            <h2 className="text-2xl font-bold text-primary">Uw slotenmaker in {city.name}</h2>
            <p className="text-muted">
              {city.name} is {city.kenmerk}. Of u nu plots buitenstaat, een afgebroken sleutel
              uit het slot moet halen of na een verhuis nieuwe cilinders wil: vertel ons bij uw
              oproep waar u zich bevindt en welk type deur of slot het betreft. Zo kunnen we
              meteen aangeven welke hulp mogelijk is.
            </p>

            {extra.map((p, i) => (
              <p key={i} className="text-muted">{p}</p>
            ))}

            <h3 className="pt-2 text-xl font-bold text-primary">Buitengesloten in {city.name}?</h3>
            <p className="text-muted">
              Deur achter u dichtgetrokken met de sleutel nog binnen, of sleutel afgebroken in het
              slot? Forceer de deur liever niet. Bel ons met uw adres en een korte beschrijving;
              we bespreken de aanpak en de verwachte kosten voordat we vertrekken. Vaak kan een
              dichtgevallen deur zonder vervanging van het slot open.
            </p>

            {heeftDeelgemeenten && (
              <p className="text-muted">
                We werken in heel {city.name}, inclusief deelgemeenten als{" "}
                {joinNl(city.deelgemeenten.slice(0, 6))}
                {city.deelgemeenten.length > 6 ? " en de andere kernen" : ""}. Zo bent u overal in
                de gemeente snel geholpen.
              </p>
            )}

            <h3 className="pt-2 text-xl font-bold text-primary">Waarvoor kunt u ons bellen in {city.name}?</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug} className="flex gap-2 text-muted">
                  <span className="text-accent">✓</span>
                  <span>
                    <Link href={`/diensten/${s.slug}`} className="font-medium text-primary hover:underline">
                      {s.title}
                    </Link>{" "}
                    — {s.short}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="pt-2 text-xl font-bold text-primary">Snel én schadevrij in {city.name}</h3>
            <p className="text-muted">
              We behandelen aanvragen in {city.name}
              {nearby.length > 0 ? ` en buurgemeenten als ${joinNl(nearby.slice(0, 3).map((c) => c.name))}` : ""}.
              De aankomsttijd hangt af van de locatie en de lopende opdrachten. In de meeste gevallen
              proberen we de deur zonder schade te openen. Als boren nodig blijkt, bespreken we
              eerst de aanpak en de mogelijke meerkost.
            </p>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="leadform" className="bg-primary-dark py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Slotenmaker {city.name} aanvragen</h2>
              <p className="mt-4 text-white/80">
                Vul uw gegevens in, dan nemen we snel contact op. Spoed in {city.name}? Bel ons
                direct — dan kunnen we meteen de beschikbaarheid en aankomsttijd doorgeven.
              </p>
              <p className="mt-6 text-lg font-semibold">
                <a href={`tel:${site.phoneE164}`} className="hover:text-accent">📞 {site.phone}</a>
              </p>
            </div>
            <LeadForm defaultCity={city.name} />
          </div>
        </div>
      </section>

      {/* KOSTEN */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">Wat kost een slotenmaker in {city.name}?</h2>
          <p className="mt-2 max-w-3xl text-muted">
            Hieronder staan de interventietarieven en mogelijke extra kosten, exclusief btw.
            Vraag telefonisch welke prijs voor uw locatie en situatie geldt voordat u akkoord gaat.
          </p>
          <div className="mt-8">
            <CostTable />
          </div>
        </div>
      </section>

      {/* OOK ACTIEF IN */}
      {nearby.length > 0 && (
        <section className="bg-surface py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary">Ook actief in de buurt van {city.name}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  href={`/slotenmaker/${c.slug}`}
                  className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary hover:border-primary/30 hover:shadow-sm"
                >
                  Slotenmaker {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ faqs={faqs} title={`Veelgestelde vragen — slotenmaker ${city.name}`} />

      <CallToActionBand />
    </>
  );
}
