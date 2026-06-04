import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { CallToActionBand } from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Onze diensten — slotenmaker Oost-Vlaanderen",
  description: `Alle diensten van ${site.name}: deur openen, slot vervangen, inbraakbeveiliging, sleutel bijmaken en meer. 24/7 in heel Oost-Vlaanderen.`,
  path: "/diensten",
});

export default function DienstenPage() {
  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Onze diensten</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">
            Van een dringende buitensluiting tot doordachte inbraakbeveiliging:
            {" "}{site.owner} en team helpen u met alle slotenwerk in Oost-Vlaanderen.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/diensten/${s.slug}`} className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:border-primary/30 hover:shadow-md">
                <h2 className="font-semibold text-primary">{s.title}</h2>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
                <span className="mt-3 inline-block text-sm font-medium text-accent">Meer info →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBand />
    </>
  );
}
