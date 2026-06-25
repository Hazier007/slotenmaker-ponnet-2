/**
 * Prijsmodel in pakketvorm (kaarten). Eén forfait van 1 werkuur inbegrepen,
 * inclusief voorrijkosten (heen & terug). Alle bedragen EXCL. btw.
 */

export type Pkg = {
  name: string;
  time: string;
  days: string;
  price: string;
  included: string[];
  excluded: string[];
  featured?: boolean;
};

const baseIncl = [
  "Straal van 30 km",
  "Directe hulp 24/7",
  "Noodopening",
  "Inclusief 1ste werkuur",
  "Inclusief voorrijkosten, brandstof & administratie",
];

export const packages: Pkg[] = [
  {
    name: "Dag interventie (week)",
    time: "8u – 18u",
    days: "ma – vrij",
    price: "€ 100",
    included: baseIncl,
    excluded: ["Geen vervangstukken", "Geen meerwerk (>1u)", "Exclusief spoedservice (+ € 45)"],
  },
  {
    name: "Dag interventie (weekend)",
    time: "8u – 22u",
    days: "za – zo",
    price: "€ 200",
    included: [...baseIncl, "Inclusief spoedservice"],
    excluded: ["Geen vervangstukken", "Geen meerwerk (>1u)"],
    featured: true,
  },
  {
    name: "Avond interventie",
    time: "18u – 22u",
    days: "ma – zo",
    price: "€ 200",
    included: [...baseIncl, "Inclusief spoedservice"],
    excluded: ["Geen vervangstukken", "Geen meerwerk (>1u)"],
  },
  {
    name: "Nacht interventie",
    time: "22u – 08u",
    days: "ma – zo",
    price: "€ 250",
    included: [...baseIncl, "Inclusief spoedservice"],
    excluded: ["Geen vervangstukken", "Geen meerwerk (>1u)"],
  },
];

export type ExtraItem = { label: string; value: string };

export const extraKosten: ExtraItem[] = [
  { label: "Meerwerk per 60 minuten (na het 1ste uur)", value: "€ 75" },
  { label: "Spoedservice overdag", value: "€ 45" },
  { label: "Cilinder vervangen", value: "vanaf € 75" },
  { label: "Veiligheidscilinder (SKG)", value: "vanaf € 150" },
  { label: "Cilinder uitboren / frezen (indien nodig)", value: "zie meerwerk" },
];

export const btwInfo: ExtraItem[] = [
  { label: "Woning ouder dan 10 jaar", value: "6%" },
  { label: "Woning jonger dan 10 jaar / nieuwbouw", value: "21%" },
  { label: "Bedrijf (BTW-plichtig)", value: "0% medecontractant" },
  { label: "Bedrijf (niet BTW-plichtig)", value: "21%" },
];

export const pricingNotes = [
  "Alle vermelde prijzen zijn exclusief btw; het btw-tarief hangt af van de leeftijd van de woning.",
  "In elk tarief zit een forfait van 1 werkuur inbegrepen (incl. voorrijkosten heen & terug).",
  "U krijgt de prijs steeds vooraf, zonder verrassingen achteraf.",
];
