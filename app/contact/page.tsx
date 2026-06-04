import type { Metadata } from "next";
import { site } from "@/lib/site";
import LeadForm from "@/components/LeadForm";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact & offerte — slotenmaker Oost-Vlaanderen",
  description: `Contacteer ${site.name}. 24/7 wachtdienst in heel Oost-Vlaanderen. Bel ${site.phone} of vraag een vrijblijvende offerte aan.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact &amp; offerte</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">
            Bij spoed belt u ons het best direct. Voor een vrijblijvende offerte of advies
            vult u onderstaand formulier in.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-primary">Bel onze wachtdienst</h2>
              <p className="mt-2 text-muted">24 uur op 24, 7 dagen op 7 — heel Oost-Vlaanderen.</p>
              <p className="mt-3 text-2xl font-bold">
                <a href={`tel:${site.phoneE164}`} className="text-primary hover:text-accent">{site.phone}</a>
              </p>
              <p className="mt-1 text-sm text-muted">
                Vast: <a href={`tel:${site.phoneLandlineE164}`} className="text-primary">{site.phoneLandline}</a>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary">Gegevens</h2>
              <div className="mt-2 text-muted">
                <p>{site.name}</p>
                <p>{site.city} · {site.region}</p>
                <p>BTW {site.vat}</p>
                <p className="mt-2"><a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a></p>
              </div>
            </div>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
