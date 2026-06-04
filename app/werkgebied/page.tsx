import Link from "next/link";
import type { Metadata } from "next";
import { citiesByArrondissement, cities } from "@/lib/cities";
import { site } from "@/lib/site";
import { CallToActionBand } from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Werkgebied — slotenmaker in heel Oost-Vlaanderen",
  description: `${site.name} is actief in alle steden en gemeenten van Oost-Vlaanderen. Vind uw gemeente en bel ${site.phone}.`,
  path: "/werkgebied",
});

export default function WerkgebiedPage() {
  const groups = citiesByArrondissement();
  const order = ["Gent", "Aalst", "Dendermonde", "Sint-Niklaas", "Eeklo", "Oudenaarde"];
  const sortedKeys = Object.keys(groups).sort((a, b) => order.indexOf(a) - order.indexOf(b));

  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Ons werkgebied: heel Oost-Vlaanderen</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">
            We zijn bewust gefocust op één provincie: Oost-Vlaanderen. Daardoor zijn we
            snel ter plaatse — in elk van deze {cities.length} steden en gemeenten.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sortedKeys.map((arr) => (
            <div key={arr} className="mb-10">
              <h2 className="text-xl font-bold text-primary">Arrondissement {arr}</h2>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {groups[arr].map((c) => (
                  <Link key={c.slug} href={`/slotenmaker/${c.slug}`} className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:border-primary/30 hover:shadow-sm">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CallToActionBand />
    </>
  );
}
