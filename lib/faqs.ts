export type Faq = { q: string; a: string };

/** Algemene FAQ (homepage + FAQ-schema). */
export const generalFaqs: Faq[] = [
  {
    q: "Hoe snel kunnen jullie ter plaatse zijn?",
    a: "Dat hangt af van uw locatie en de lopende opdrachten. Bel met uw postcode; we geven de verwachte aankomsttijd door voordat u beslist.",
  },
  {
    q: "Openen jullie de deur zonder schade?",
    a: "In de meeste gevallen wel. We gebruiken technieken om de deur schadevrij te openen. Enkel wanneer dat technisch niet lukt, bijvoorbeeld bij een geblokkeerd slot, boren we het slot open, en dat bespreken we altijd eerst met u.",
  },
  {
    q: "Wat kost het om een deur te laten openen?",
    a: "We werken met duidelijke interventietarieven waarin de voorrijkosten en het eerste werkuur al inbegrepen zitten. Overdag op een weekdag is dat 100 euro, in het weekend of 's avonds 200 euro en 's nachts 250 euro. Alle prijzen zijn exclusief btw en u kent ze vooraf.",
  },
  {
    q: "Zijn jullie ook 's nachts en in het weekend bereikbaar?",
    a: "Bel voor de actuele beschikbaarheid. Voor avond-, nacht-, weekend- en feestdagopdrachten bespreken we het toepasselijke tarief vooraf.",
  },
  {
    q: "Werken jullie met gecertificeerd, inbraakwerend materiaal?",
    a: "Ja. We plaatsen gecertificeerde veiligheidssloten (o.a. SKG) die voldoen aan de voorwaarden van de meeste woningverzekeringen.",
  },
  {
    q: "Zit er meerwerk of bijkomende kosten op?",
    a: "In elk tarief zit een forfait van 1 werkuur inbegrepen. Duurt het werk langer, dan rekenen we meerwerk aan van 75 euro per bijkomend uur. Vervangstukken (zoals een nieuwe cilinder) komen er apart bij. We bespreken alles vooraf.",
  },
];

/** Genereer stadspecifieke FAQ-vragen voor een stadspagina. */
export function cityFaqs(cityName: string): Faq[] {
  return [
    {
      q: `Hoe snel is de slotenmaker ter plaatse in ${cityName}?`,
      a: `Onze uitvalsbasis is Wetteren. Voor ${cityName} bevestigen we de beschikbaarheid en verwachte aankomsttijd telefonisch zodra we uw adres kennen.`,
    },
    {
      q: `Kan ik in ${cityName} ook 's nachts een slotenmaker bellen?`,
      a: `Bel voor de actuele beschikbaarheid in ${cityName}. We bespreken vooraf wanneer we kunnen komen en welk tarief op dat moment geldt.`,
    },
    {
      q: `Wat kost een slotenmaker in ${cityName}?`,
      a: `Een interventie overdag op een weekdag start op 100 euro, in het weekend of 's avonds op 200 euro en 's nachts op 250 euro, exclusief btw. Binnen 30 km zijn voorrijkosten en het eerste werkuur inbegrepen. Vraag voor ${cityName} naar de totale richtprijs inclusief eventuele extra kosten.`,
    },
    {
      q: `Openen jullie de deur in ${cityName} zonder schade?`,
      a: `In de meeste gevallen openen we uw deur in ${cityName} volledig schadevrij. Enkel als dat technisch niet lukt, bijvoorbeeld bij een geblokkeerd slot, boren we het slot open, en dat bespreken we altijd eerst met u.`,
    },
  ];
}
