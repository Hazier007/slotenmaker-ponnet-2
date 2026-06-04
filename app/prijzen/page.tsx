import type { Metadata } from "next";
import CostTable from "@/components/CostTable";
import { site } from "@/lib/site";
import { CallToActionBand } from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Prijzen — wat kost een slotenmaker in Oost-Vlaanderen?",
  description: "Transparante richtprijzen voor deur openen, slot vervangen en inbraakbeveiliging. Eerlijke prijs vooraf, zonder verrassingen.",
  path: "/prijzen",
});

export default function PrijzenPage() {
  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Eerlijke, transparante prijzen</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">
            Een slotenmaker hoort u nooit te overvallen met de factuur. Daarom communiceren
            we onze tarieven open en spreken we de prijs steeds vooraf met u af.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CostTable />
          <div className="mt-8 rounded-xl bg-surface p-6 text-sm text-muted">
            <p>
              Let op malafide slotenmakers die misbruik maken van uw noodsituatie met
              torenhoge facturen voor goedkoop materiaal. Bij {site.name} krijgt u een
              eerlijke prijs en kwalitatief, gecertificeerd materiaal.
            </p>
          </div>
        </div>
      </section>

      <CallToActionBand />
    </>
  );
}
