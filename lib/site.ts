/**
 * Centrale bedrijfs- en siteconfiguratie.
 * Eén bron van waarheid voor NAP-gegevens (Name, Address, Phone) → consistent voor lokale SEO.
 */
export const site = {
  name: "Slotenmaker Kristof Ponnet",
  shortName: "Slotenmaker Ponnet",
  owner: "Kristof Ponnet",
  tagline: "Dé slotenmaker van Oost-Vlaanderen",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://slotenmakerponnet.be",

  // Contact (zelfde gegevens als de bestaande zaak)
  phone: "0468 11 33 99",
  phoneE164: "+32468113399",
  phoneLandline: "09 335 47 56",
  phoneLandlineE164: "+3293354756",
  email: "info@slotenmaker-ponnet.be",

  // Vestiging
  city: "Wetteren",
  postalCode: "9230",
  region: "Oost-Vlaanderen",
  country: "BE",
  vat: "BE0698.958.244",

  // Reikwijdte
  province: "Oost-Vlaanderen",

  // Socials (vul aan met echte profielen)
  social: {
    facebook: "",
    instagram: "",
    google: "https://maps.app.goo.gl/rrbsqFFYuYDVZ3QK6",
  },

  // Vertrouwenscijfers (pas aan naar realiteit)
  yearsExperience: 12,
  responseMinutes: 30,
  reviewRating: 4.9,
  reviewCount: 347,
} as const;

export type Site = typeof site;
