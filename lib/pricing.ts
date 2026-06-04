/**
 * Indicatieve prijzen. Transparantie = vertrouwen én een sterk zoekwoord
 * ("slotenmaker prijs / tarief"). Pas bedragen aan naar de echte tarieven.
 */

export type PriceRow = {
  service: string;
  price: string;
  note?: string;
};

export const pricing: PriceRow[] = [
  { service: "Voorrijkosten (Oost-Vlaanderen)", price: "vanaf € 40", note: "binnen ± 30 min ter plaatse" },
  { service: "Deur openen overdag (ma–vr, 8–18u)", price: "€ 80 – € 120", note: "schadevrij waar mogelijk" },
  { service: "Deur openen 's avonds/nacht", price: "€ 120 – € 180", note: "spoed buiten kantooruren" },
  { service: "Deur openen weekend/feestdag", price: "€ 130 – € 190", note: "doorlopend tarief" },
  { service: "Cilinder vervangen", price: "vanaf € 75", note: "exclusief materiaal" },
  { service: "Veiligheidscilinder (SKG) incl. plaatsing", price: "€ 120 – € 250", note: "afhankelijk van type" },
  { service: "Slot uitboren (indien nodig)", price: "meerprijs op offerte", note: "enkel als schadevrij niet lukt" },
  { service: "Sleutel bijmaken (standaard)", price: "vanaf € 8", note: "per sleutel" },
  { service: "Inbraakbeveiliging / raambeveiliging", price: "gratis offerte op maat", note: "na risicoanalyse" },
];

export const pricingNotes = [
  "Voor standaardsituaties geven we in 95% van de gevallen telefonisch een correcte richtprijs.",
  "Voor renovatie aan een woning ouder dan 10 jaar geldt vaak het verlaagde btw-tarief van 6% bij levering én plaatsing door dezelfde aannemer.",
  "U krijgt de prijs steeds vooraf, zonder verrassingen achteraf. Een onverwachte moeilijkheid bespreken we eerst met u.",
];
