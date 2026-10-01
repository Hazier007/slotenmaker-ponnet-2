"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, readConsent, writeConsent, type ConsentValue } from "@/lib/consent";

/**
 * Consent-gate + GA4. De component is volledig inert zonder NEXT_PUBLIC_GA_ID
 * en laadt niets zolang de bezoeker niet expliciet heeft aanvaard.
 */
export function Analytics({ gaId }: { gaId?: string }) {
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setShowBanner(stored === null);
    setMounted(true);
  }, []);

  useEffect(() => {
    const open = () => setShowBanner(true);
    window.addEventListener(CONSENT_EVENT, open);
    return () => window.removeEventListener(CONSENT_EVENT, open);
  }, []);

  const choose = useCallback((value: ConsentValue) => {
    writeConsent(value);
    setConsent(value);
    setShowBanner(false);
    // Weigeren na eerder aanvaarden: pas bij de volgende navigatie is alles weer weg.
    if (value === "denied") {
      window.location.reload();
    }
  }, []);

  const loadGa = mounted && consent === "granted" && Boolean(gaId);

  return (
    <>
      {loadGa ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`}
          </Script>
        </>
      ) : null}

      {showBanner ? (
        <div
          role="dialog"
          aria-label="Cookievoorkeuren"
          aria-live="polite"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white shadow-[0_-8px_24px_-18px_rgba(16,19,23,0.4)]"
        >
          <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
            <p className="text-[0.875rem] leading-relaxed text-ink-700">
              We gebruiken enkel analytische cookies om te zien welke pagina&apos;s bezoekers helpen.
              Geen advertentiecookies. Weiger je? Dan laden we niets.{" "}
              <a
                href="/privacybeleid"
                className="font-medium text-accent-dark underline underline-offset-2"
              >
                Privacybeleid
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="border border-line px-4 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-ink-800 hover:text-ink-900"
              >
                Weigeren
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Aanvaarden
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
