import type { Metadata } from "next";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy & cookies",
  description: "Privacybeleid en cookiebeleid van " + site.name + ".",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl space-y-5 px-4 text-muted sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary">Privacy &amp; cookiebeleid</h1>
        <p>
          {site.name} ({site.city}, BTW {site.vat}) hecht belang aan uw privacy. Deze pagina
          legt uit welke gegevens we verzamelen en waarom.
        </p>
        <h2 className="text-xl font-bold text-primary">Welke gegevens verzamelen we?</h2>
        <p>
          Wanneer u ons contactformulier invult, verwerken we uw naam, telefoonnummer,
          e-mailadres, postcode en de omschrijving van uw aanvraag. We gebruiken deze gegevens
          uitsluitend om u te contacteren en uw aanvraag te behandelen. We verkopen uw
          gegevens niet aan derden.
        </p>
        <h2 className="text-xl font-bold text-primary">Cookies</h2>
        <p>
          We gebruiken noodzakelijke cookies om de website te laten werken en, met uw
          toestemming, analytische cookies om het gebruik van de site te meten. U kunt uw
          keuze op elk moment aanpassen.
        </p>
        <h2 className="text-xl font-bold text-primary">Uw rechten</h2>
        <p>
          U heeft het recht om uw gegevens in te kijken, te laten corrigeren of te laten
          verwijderen. Stuur daarvoor een e-mail naar{" "}
          <a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a>.
        </p>
        <p className="text-sm">Laatst bijgewerkt: {new Date().getFullYear()}.</p>
      </div>
    </section>
  );
}
