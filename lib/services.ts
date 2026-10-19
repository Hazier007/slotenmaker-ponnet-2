/**
 * Diensten van Slotenmaker Kristof Ponnet.
 * Elke dienst krijgt een eigen SEO-pagina onder /diensten/[slug].
 */

export type Service = {
  slug: string;
  title: string; // korte titel (nav, kaarten)
  h1: string;
  short: string; // korte omschrijving (kaarten / meta)
  intro: string; // openingsparagraaf op de dienstpagina
  sections: { heading: string; body: string }[];
  bullets: string[];
  keyword: string; // hoofdzoekwoord
};

export const services: Service[] = [
  {
    slug: "depannage",
    title: "Depannage & deur openen",
    h1: "Depannage: buitengesloten of slot kapot?",
    short: "Buitengesloten, sleutel afgebroken of slot defect? Bel voor hulp en een richtprijs vooraf.",
    keyword: "slotenmaker depannage",
    intro:
      "Buitengesloten? Sleutel afgebroken in het slot? Of krijgt u de deur plots niet meer open? Bel ons met uw postcode en vertel of de deur dichtgevallen of op slot is. We geven de beschikbaarheid, verwachte aankomsttijd en een richtprijs door. Waar mogelijk openen we zonder schade, zodat een nieuw slot niet nodig is.",
    sections: [
      {
        heading: "Schadevrij openen waar het kan",
        body: "Met de juiste techniek (flipperen, lockpicking, slotspecifiek gereedschap) openen we de meeste deuren zonder schade. Pas wanneer schadevrij openen technisch niet lukt — bijvoorbeeld bij een geblokkeerd of gesaboteerd slot — boren we het slot open. We bespreken dat altijd eerst met u en tonen de meerkost vooraf.",
      },
      {
        heading: "Ook 's nachts en in het weekend",
        body: "Bij spoed belt u direct. We bevestigen telefonisch of er iemand beschikbaar is, wanneer die kan komen en welk interventietarief voor het tijdstip geldt. Op feestdagen kunnen andere tarieven van toepassing zijn.",
      },
      {
        heading: "Wat kost het openen van een deur?",
        body: "Het interventietarief overdag op een weekdag start op € 100 exclusief btw. In het weekend of 's avonds is het € 200 en 's nachts € 250. Binnen de vermelde straal van 30 km zijn de voorrijkosten en het eerste werkuur inbegrepen. Vervangstukken en extra werk komen er zo nodig bij; we bespreken dit vooraf.",
      },
    ],
    bullets: [
      "Deur schadevrij openen na buitensluiting",
      "Afgebroken sleutel verwijderen",
      "Geblokkeerd of vastzittend slot",
      "Auto, kluis, brievenbus en hangsloten openen",
    ],
  },
  {
    slug: "slot-vervangen",
    title: "Slot vervangen",
    h1: "Slot of cilinder vervangen",
    short: "Defecte, versleten of onveilige sloten vervangen we door kwaliteitsmateriaal met certificaat.",
    keyword: "slot vervangen",
    intro:
      "Een versleten cilinder, een defect meerpuntsslot of gewoon nood aan meer zekerheid na een verhuis of inbraak? Wij vervangen alle types sloten door kwalitatief, inbraakwerend materiaal en plaatsen het vakkundig. Zo bent u zeker dat de nieuwe sleutel enkel bij u ligt.",
    sections: [
      {
        heading: "Wat kost een cilinder vervangen?",
        body: "Een standaardcilinder staat in onze prijslijst vanaf € 75 exclusief btw en een veiligheidscilinder vanaf € 150. De interventie en eventueel meerwerk kunnen daar bijkomen. We vragen naar het type slot en bespreken de totale richtprijs voordat we materiaal plaatsen.",
      },
      {
        heading: "Welke sloten vervangen we?",
        body: "Insteeksloten, oplegsloten, veiligheidscilinders, meerpuntssloten en cilindersloten met certificaat. We werken met gecertificeerd, inbraakwerend materiaal (o.a. SKG-keurmerk) dat voldoet aan de eisen van de meeste verzekeringen.",
      },
      {
        heading: "Na verhuis of inbraak",
        body: "Net verhuisd? Dan weet u nooit wie nog over een sleutel beschikt. Na een inbraak of inbraakpoging is het slot vaak beschadigd. In beide gevallen raden we aan de cilinder te vervangen — vaak volstaat enkel de cilinder, wat een stuk goedkoper is dan een volledig slot.",
      },
    ],
    bullets: [
      "Cilinder vervangen (vaak goedkoper dan volledig slot)",
      "Veiligheidscilinder met certificaat",
      "Meerpuntssloten en insteeksloten",
      "Gelijksluitende cilinders (één sleutel voor meerdere deuren)",
    ],
  },
  {
    slug: "inbraakbeveiliging",
    title: "Inbraakbeveiliging",
    h1: "Inbraakbeveiliging voor woning en bedrijf",
    short: "Advies en plaatsing van inbraakwerend hang- en sluitwerk volgens de verzekeringsnormen.",
    keyword: "inbraakbeveiliging",
    intro:
      "Beter voorkomen dan genezen. We bekijken samen met u de zwakke punten van uw woning of handelspand en plaatsen gericht inbraakwerend hang- en sluitwerk. Zo verhoogt u de inbraakwerendheid aanzienlijk — vaak voor minder dan u denkt.",
    sections: [
      {
        heading: "Risicoanalyse op maat",
        body: "Inbrekers kiezen de weg van de minste weerstand: een zwakke cilinder, een slecht beslag of een kwetsbaar raam. We brengen die punten in kaart en stellen een concrete, vrijblijvende offerte op met enkel wat echt nodig is.",
      },
      {
        heading: "Conform de verzekeringen",
        body: "We plaatsen gecertificeerd materiaal (SKG-sterren) dat voldoet aan de voorwaarden van de meeste woningverzekeringen. Handig als bewijs bij uw verzekeraar en, belangrijker nog, een echte drempel voor inbrekers.",
      },
    ],
    bullets: [
      "Inbraakwerende cilinders en veiligheidsbeslag",
      "Bijkomende sloten op deuren en ramen",
      "Raam- en kierbeveiliging",
      "Advies conform de verzekeringsvoorwaarden",
    ],
  },
  {
    slug: "sleutel-bijmaken",
    title: "Sleutel bijmaken",
    h1: "Sleutel bijmaken of dupliceren",
    short: "Extra sleutels nodig? Wij maken huis-, veiligheids- en kluissleutels nauwkeurig bij.",
    keyword: "sleutel bijmaken",
    intro:
      "Een extra sleutel voor een gezinslid, de poetshulp of gewoon als reserve? Vraag vooraf of uw sleuteltype kan worden bijgemaakt en welk bewijs of welke certificaatkaart nodig is. De prijs hangt af van het type sleutel en staat los van onze interventietarieven voor noodopeningen.",
    sections: [
      {
        heading: "Prijs en beschikbaarheid vooraf controleren",
        body: "Voor sleutelduplicatie is er geen vaste prijs voor elk sleuteltype. Bel met het merk of een foto van de sleutel en vraag vooraf naar de mogelijkheden, de prijs en de afhaalmethode. Stuur geen foto van een certificaatkaart via een openbaar kanaal.",
      },
      {
        heading: "Ook beveiligde sleutels",
        body: "Veiligheidssleutels met patent kunnen niet zomaar bij een gewone sleutelmaker worden gekopieerd. Wij regelen de duplicatie correct, met de nodige certificaatkaart, zodat uw beveiliging gegarandeerd blijft.",
      },
    ],
    bullets: [
      "Huissleutels en standaardsleutels",
      "Veiligheidssleutels met certificaat",
      "Kluis- en meubelsleutels",
      "Gelijksluitende sets",
    ],
  },
  {
    slug: "raambeveiliging",
    title: "Raambeveiliging",
    h1: "Raambeveiliging tegen inbraak",
    short: "Ramen en kiepramen zijn een geliefd inbraakpunt. Wij beveiligen ze doeltreffend.",
    keyword: "raambeveiliging",
    intro:
      "Ramen — en zeker kiepramen — zijn voor inbrekers vaak het makkelijkste toegangspunt. Met afsluitbare raamkrukken, bijkomende grendels en inbraakwerend beslag maakt u dat zwakke punt meteen een stuk sterker.",
    sections: [
      {
        heading: "Kiepramen extra beveiligen",
        body: "Een raam dat op kiep staat lijkt veilig, maar is in enkele seconden volledig te openen. We plaatsen beveiliging die dat onmogelijk maakt, zonder dat u inlevert op gebruiksgemak.",
      },
    ],
    bullets: [
      "Afsluitbare raamkrukken",
      "Bijkomende raamgrendels",
      "Inbraakwerend raambeslag",
      "Beveiliging van kiepramen",
    ],
  },
  {
    slug: "slot-herstellen",
    title: "Slot herstellen",
    h1: "Slot of deur herstellen",
    short: "Klemmend, stroef of beschadigd slot? Vaak volstaat een herstelling i.p.v. vervanging.",
    keyword: "slot herstellen",
    intro:
      "Draait uw sleutel stroef, klemt de deur of sluit het slot niet meer goed? Niet elk probleem vraagt een nieuw slot. Vaak kunnen we het slot of het beslag herstellen of afstellen, wat u kosten bespaart.",
    sections: [
      {
        heading: "Eerst herstellen, dan pas vervangen",
        body: "We kijken altijd eerst of een herstelling of afstelling volstaat. Pas als de veiligheid niet meer gegarandeerd kan worden, adviseren we vervanging — met een eerlijke uitleg waarom.",
      },
    ],
    bullets: [
      "Klemmende of stroeve sloten",
      "Beschadigd slot na inbraakpoging",
      "Deur die niet meer goed sluit",
      "Afstellen van meerpuntssloten",
    ],
  },
  {
    slug: "auto-openen",
    title: "Auto openen",
    h1: "Auto openen zonder sleutel",
    short: "Sleutel in de auto laten liggen of autosleutel kwijt? Wij openen uw wagen schadevrij.",
    keyword: "auto openen zonder sleutel",
    intro:
      "Sleutel in de auto laten liggen, autosleutel kwijt of de centrale vergrendeling die dichtviel met de sleutel binnen? Vervelend, maar geen reden om een ruit in te slaan. Bel met uw locatie en automodel; we bespreken de mogelijkheden, beschikbaarheid en richtprijs vooraf.",
    sections: [
      {
        heading: "Schadevrij, voor zo goed als elk merk",
        body: "Met het juiste gereedschap openen we de meeste personenwagens en bestelwagens zonder schade aan de deur, het slot of de ruit. We werken voorzichtig en snel, zodat u weer verder kan.",
      },
      {
        heading: "Sleutel kwijt of in de auto?",
        body: "Ligt de sleutel binnen, dan openen we gewoon de deur. Bent u de enige sleutel kwijt, dan helpen we u toegang te krijgen; voor een nieuwe gecodeerde autosleutel verwijzen we u indien nodig door naar een gespecialiseerde partner.",
      },
    ],
    bullets: [
      "Sleutel in de auto laten liggen",
      "Autosleutel kwijt of gebroken",
      "Schadevrij openen van personen- en bestelwagens",
      "Aankomsttijd telefonisch bevestigd",
    ],
  },
  {
    slug: "kluis-openen",
    title: "Kluis openen",
    h1: "Kluis openen zonder sleutel of code",
    short: "Kluissleutel kwijt of code vergeten? Wij openen uw kluis vakkundig, vaak zonder schade.",
    keyword: "kluis openen",
    intro:
      "Komt u niet meer in uw kluis omdat u de sleutel kwijt bent, de code vergeten bent of het slot blokkeert? Wij openen kluizen voor particulieren en bedrijven: discreet, vakkundig en waar mogelijk zonder de kluis te beschadigen, zodat u hem nadien gewoon verder kan gebruiken.",
    sections: [
      {
        heading: "Veel types kluizen",
        body: "Sleutelkluizen, cijferkluizen, elektronische kluizen en inbouwkluizen: we bekijken het type en kiezen de methode die de minste schade veroorzaakt. Lukt openen zonder schade niet, dan bespreken we de gevolgen eerst met u.",
      },
      {
        heading: "Discreet en op afspraak",
        body: "Een geblokkeerde kluis vraagt vaak om bewijs van eigendom. We werken discreet en correct, en plannen waar nodig een afspraak in die voor u past.",
      },
    ],
    bullets: [
      "Kluissleutel kwijt",
      "Cijfercode vergeten",
      "Geblokkeerde of defecte kluis",
      "Particuliere en bedrijfskluizen",
    ],
  },
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);

export function getService(slug: string): Service | undefined {
  return servicesBySlug[slug];
}
