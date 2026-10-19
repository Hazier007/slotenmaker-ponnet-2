import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABar from "@/components/CTABar";
import JsonLd from "@/components/JsonLd";
import { localBusinessLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Slotenmaker Wetteren en Gent`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Slotenmaker vanuit Wetteren voor groot Wetteren en groot Gent. Hulp bij buitensluiting, een defect slot en cilindervervanging. Bel 0468 11 33 99 voor beschikbaarheid en een richtprijs.",
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
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
