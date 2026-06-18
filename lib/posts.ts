import type { Faq } from "./faqs";

export type PostSection = { heading: string; body: string[]; bullets?: string[] };

export type Post = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  date: string; // ISO
  readMinutes: number;
  keyword: string;
  excerpt: string;
  intro: string;
  sections: PostSection[];
  faqs?: Faq[];
};

export const posts: Post[] = [
  {
    slug: "wat-kost-een-slotenmaker",
    title: "Wat kost een slotenmaker in Oost-Vlaanderen? (tarieven 2026)",
    h1: "Wat kost een slotenmaker?",
    description:
      "Een transparant overzicht van slotenmaker-tarieven in Oost-Vlaanderen: deur openen, slot vervangen, voorrijkosten en wat de prijs beïnvloedt. Alle bedragen excl. btw.",
    date: "2026-06-18",
    readMinutes: 4,
    keyword: "wat kost een slotenmaker",
    excerpt:
      "Voorrijkosten, deur openen overdag of 's nachts, een slot vervangen: dit zijn de realistische tarieven in Oost-Vlaanderen, en wat de prijs bepaalt.",
    intro:
      "De prijs van een slotenmaker hangt af van het tijdstip, het type slot en wat er precies moet gebeuren. Hieronder vindt u realistische richtprijzen voor Oost-Vlaanderen, zodat u nooit voor verrassingen komt te staan. Alle bedragen zijn exclusief btw.",
    sections: [
      {
        heading: "Voorrijkosten en een deur laten openen",
        body: [
          "Voor een dringende interventie rekent u in onze regio op voorrijkosten vanaf 45 euro. Het openen van een dichtgevallen deur overdag (op weekdagen tussen 8 en 18 uur) kost doorgaans 80 tot 145 euro.",
          "'s Avonds, 's nachts en in het weekend liggen de tarieven hoger door de permanentie: reken dan op 120 tot 200 euro. Een seriueze slotenmaker geeft u dit vooraf, telefonisch of ter plaatse, nog voor het werk begint.",
        ],
      },
      {
        heading: "Een slot of cilinder vervangen",
        body: [
          "Vaak volstaat het om enkel de cilinder te vervangen in plaats van het volledige slot, wat een stuk goedkoper is. Een cilinder vervangen start rond 75 euro (exclusief materiaal).",
          "Wil u meteen veiliger? Een gecertificeerde veiligheidscilinder (met SKG-keurmerk) inclusief plaatsing kost afhankelijk van het type 150 tot 350 euro. Die voldoet aan de voorwaarden van de meeste woningverzekeringen.",
        ],
      },
      {
        heading: "Welke factoren bepalen de prijs?",
        body: ["De uiteindelijke prijs hangt af van enkele zaken:"],
        bullets: [
          "Het tijdstip: weekdag overdag is goedkoper dan nacht, weekend of feestdag.",
          "Schadevrij openen of niet: lukt schadevrij openen niet, dan kost uitboren extra.",
          "Het type slot: een eenvoudig cilinderslot is goedkoper dan een meerpuntsslot.",
          "Materiaal: de prijs van de cilinder of het slot zelf komt erbij.",
        ],
      },
      {
        heading: "Pas op voor malafide slotenmakers",
        body: [
          "Sommige spelers misbruiken uw noodsituatie met torenhoge facturen voor goedkoop materiaal. Vraag daarom altijd vooraf een richtprijs en kies voor een lokale, erkende slotenmaker met echte reviews.",
          "Bekijk ons volledige, transparante prijsoverzicht op de prijzenpagina, of bel ons gerust voor een vrijblijvende richtprijs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wat kost het openen van een dichtgevallen deur?",
        a: "Overdag op een weekdag doorgaans 80 tot 145 euro plus voorrijkosten vanaf 45 euro. 's Nachts en in het weekend loopt dit op tot 200 euro. Alle bedragen excl. btw.",
      },
      {
        q: "Is een slotenmaker duurder in het weekend?",
        a: "Ja. Door de permanentie liggen avond-, nacht- en weekendtarieven hoger dan op een weekdag overdag.",
      },
    ],
  },
  {
    slug: "sleutel-afgebroken-in-slot",
    title: "Sleutel afgebroken in het slot: wat kun je zelf doen?",
    h1: "Sleutel afgebroken in het slot: wat nu?",
    description:
      "Sleutel afgebroken in het slot? Lees wat u beter wel en niet zelf doet, hoe een slotenmaker het stuk schadevrij verwijdert en wanneer u best belt.",
    date: "2026-06-18",
    readMinutes: 3,
    keyword: "sleutel afgebroken in slot",
    excerpt:
      "Breek niet verder en forceer niets. Zo voorkomt u dat het slot vervangen moet worden, en zo halen wij de afgebroken sleutel er schadevrij uit.",
    intro:
      "Een afgebroken sleutel in het slot is vervelend, maar betekent niet automatisch dat het slot vervangen moet worden. Vaak is enkel de sleutel versleten. Belangrijk is dat u het niet erger maakt.",
    sections: [
      {
        heading: "Wat u beter NIET doet",
        body: ["De grootste fout is het stuk verder in het slot duwen of proberen rond te draaien. Dat duwt het dieper en beschadigt het mechanisme, waardoor het slot vaak alsnog vervangen moet worden."],
        bullets: [
          "Duw het afgebroken stuk niet verder naar binnen.",
          "Steek geen lijm, ijzerdraad of andere voorwerpen in het slot.",
          "Probeer het slot niet te forceren.",
        ],
      },
      {
        heading: "Wat u wel kunt proberen",
        body: [
          "Steekt een stukje van de sleutel nog uit en zit het slot niet op slot? Dan kunt u voorzichtig met een fijne pincet proberen het uit te trekken, zonder te wrikken.",
          "Lukt dat niet meteen, stop dan en bel een slotenmaker. Verder prutsen kost u meestal meer dan de interventie zelf.",
        ],
      },
      {
        heading: "Zo halen wij de sleutel eruit",
        body: [
          "Een slotenmaker beschikt over speciaal gereedschap (extractietangen) om het afgebroken deel in de meeste gevallen schadevrij te verwijderen, zodat uw bestaande slot gewoon verder kan.",
          "Is de cilinder toch beschadigd, dan vervangen we enkel de cilinder, wat goedkoper is dan een volledig nieuw slot. We bespreken de prijs altijd vooraf.",
        ],
      },
    ],
    faqs: [
      {
        q: "Moet het slot vervangen worden als mijn sleutel afbreekt?",
        a: "Niet noodzakelijk. Vaak kunnen we het afgebroken stuk schadevrij verwijderen. Enkel bij schade aan de cilinder is vervanging nodig, en dan vaak alleen de cilinder.",
      },
    ],
  },
  {
    slug: "buitengesloten-wat-nu",
    title: "Buitengesloten? Dit doe je het best (en dit beter niet)",
    h1: "Buitengesloten? Dit doe je het best",
    description:
      "Buitengesloten thuis of op het werk? Blijf kalm, forceer niets en lees hoe een slotenmaker uw deur snel en schadevrij opent in Oost-Vlaanderen.",
    date: "2026-06-18",
    readMinutes: 3,
    keyword: "buitengesloten",
    excerpt:
      "Deur dichtgetrokken met de sleutel binnen? Forceer niets. Zo komt u het snelst en goedkoopst weer binnen, zonder schade.",
    intro:
      "Uzelf buitensluiten overkomt iedereen wel eens, vaak op het slechtst mogelijke moment. Geen paniek: in de meeste gevallen is dit snel en schadevrij op te lossen.",
    sections: [
      {
        heading: "Blijf kalm en check de alternatieven",
        body: [
          "Ga eerst na of er een achterdeur, raam of garage openstaat, of dat een huisgenoot of buur een reservesleutel heeft. Soms bent u sneller binnen dan u denkt.",
          "Heeft u geen alternatief? Forceer dan niets, want een geforceerde deur of een kapotgewrikt slot kost u veel meer dan een nette interventie.",
        ],
      },
      {
        heading: "Bel een slotenmaker in uw buurt",
        body: [
          "Een lokale slotenmaker is doorgaans binnen 30 minuten ter plaatse en opent de meeste deuren volledig schadevrij. U hoeft dus meestal geen nieuw slot te laten plaatsen.",
          "Vraag bij het bellen meteen naar een richtprijs en de verwachte aanrijtijd, zodat u weet waar u aan toe bent.",
        ],
      },
      {
        heading: "Wat kost buitengesloten zijn?",
        body: [
          "Overdag rekent u doorgaans op 80 tot 145 euro voor het openen, plus voorrijkosten vanaf 45 euro. 's Nachts en in het weekend ligt dat hoger. Alle bedragen exclusief btw, en steeds vooraf besproken.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe snel is een slotenmaker ter plaatse als ik buitengesloten ben?",
        a: "In Oost-Vlaanderen doorgaans binnen 30 minuten. Onze wachtdienst is 24/7 bereikbaar, ook 's nachts en in het weekend.",
      },
      {
        q: "Wordt mijn deur beschadigd bij het openen?",
        a: "In de meeste gevallen openen we de deur volledig schadevrij. Enkel als dat technisch niet lukt, is uitboren nodig, en dat bespreken we eerst met u.",
      },
    ],
  },
];

export const postsBySlug: Record<string, Post> = Object.fromEntries(
  posts.map((p) => [p.slug, p]),
);

export function getPost(slug: string): Post | undefined {
  return postsBySlug[slug];
}

export function postsByDate(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
