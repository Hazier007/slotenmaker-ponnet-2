/** Voorbeeldrecensies. Vervang door echte Google-reviews voor livegang. */
export type Review = { name: string; city: string; rating: number; text: string };

export const reviews: Review[] = [
  {
    name: "Sofie D.",
    city: "Gent",
    rating: 5,
    text: "Om 23u buitengesloten met de kleine al in bed. Kristof was er binnen 25 minuten en had de deur zonder schade open. Topservice en een eerlijke prijs.",
  },
  {
    name: "Marc V.",
    city: "Aalst",
    rating: 5,
    text: "Na een inbraakpoging meteen langsgekomen, slot vervangen door een veiligheidscilinder en goede uitleg gegeven over de rest van de woning. Echte vakman.",
  },
  {
    name: "Nadia B.",
    city: "Sint-Niklaas",
    rating: 5,
    text: "Correct, snel en netjes. Vooraf de prijs besproken en die ook gerespecteerd. Een aanrader voor het Waasland.",
  },
  {
    name: "Tom L.",
    city: "Wetteren",
    rating: 5,
    text: "Sleutel afgebroken in het slot op zondag. Snel geholpen en vriendelijk. Fijn dat het een lokale slotenmaker is.",
  },
  {
    name: "Ann P.",
    city: "Dendermonde",
    rating: 5,
    text: "Nieuwe cilinders laten plaatsen na verhuis. Proper werk, duidelijke offerte, geen verrassingen. Dikke aanrader.",
  },
];
