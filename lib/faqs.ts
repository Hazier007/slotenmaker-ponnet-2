export type Faq = { q: string; a: string };

/** Algemene FAQ (homepage + FAQ-schema). */
export const generalFaqs: Faq[] = [
  {
    q: "Hoe snel zijn jullie ter plaatse in Oost-Vlaanderen?",
    a: "Bij een spoedoproep zijn we doorgaans binnen 30 minuten bij u. Onze wachtdienst bestrijkt heel Oost-Vlaanderen, 24 uur op 24 en 7 dagen op 7.",
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
    a: "Ja. Onze wachtdienst voor Oost-Vlaanderen is dag en nacht bereikbaar, ook op zon- en feestdagen. U belt een nummer.",
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
      a: `Vanuit onze uitvalsbasis in Wetteren bereiken we ${cityName} doorgaans binnen 30 minuten. Bij spoed komen we 24/7.`,
    },
    {
      q: `Kan ik in ${cityName} ook 's nachts een slotenmaker bellen?`,
      a: `Ja, onze wachtdienst voor ${cityName} en omgeving is dag en nacht bereikbaar, ook in het weekend en op feestdagen.`,
    },
    {
      q: `Wat kost een slotenmaker in ${cityName}?`,
      a: `In ${cityName} kost een interventie overdag op een weekdag 100 euro, inclusief voorrijkosten en het eerste werkuur. In het weekend of 's avonds is dat 200 euro en 's nachts 250 euro. Alle prijzen zijn exclusief btw en we spreken ze vooraf met u af.`,
    },
    {
      q: `Openen jullie de deur in ${cityName} zonder schade?`,
      a: `In de meeste gevallen openen we uw deur in ${cityName} volledig schadevrij. Enkel als dat technisch niet lukt, bijvoorbeeld bij een geblokkeerd slot, boren we het slot open, en dat bespreken we altijd eerst met u.`,
    },
  ];
}
