import type { Metadata } from "next";
import { site } from "./site";
import type { Faq } from "./faqs";

/** Bouw consistente metadata voor een pagina. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const url = site.url + (opts.path ?? "");
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: "nl_BE",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}

// ── JSON-LD generators ────────────────────────────────────────────────

export function localBusinessLd(opts?: { cityName?: string; path?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": site.url + "/#business",
    name: site.name,
    image: site.url + "/images/og.jpg",
    url: site.url + (opts?.path ?? ""),
    telephone: site.phoneE164,
    priceRange: "€€",
    vatID: site.vat,
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      postalCode: site.postalCode,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: opts?.cityName
      ? { "@type": "City", name: opts.cityName }
      : { "@type": "AdministrativeArea", name: "Oost-Vlaanderen" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reviewRating,
      reviewCount: site.reviewCount,
    },
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: site.url + it.path,
    })),
  };
}

export function serviceLd(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: site.url + opts.path,
    provider: { "@id": site.url + "/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "Oost-Vlaanderen" },
    serviceType: opts.name,
  };
}
