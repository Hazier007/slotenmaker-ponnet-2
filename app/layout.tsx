import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABar from "@/components/CTABar";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { localBusinessLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Slotenmaker Oost-Vlaanderen 24/7`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Dé slotenmaker van Oost-Vlaanderen. Buitengesloten, slot kapot of inbraakbeveiliging nodig? Kristof Ponnet helpt u 24/7, binnen 30 minuten ter plaatse. Bel 0468 11 33 99.",
  applicationName: site.name,
  authors: [{ name: site.owner }],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: site.name,
    url: site.url,
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE">
      <body>
        <JsonLd data={localBusinessLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CTABar />
        <CookieConsent />
      </body>
    </html>
  );
}
