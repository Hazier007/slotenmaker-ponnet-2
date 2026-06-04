"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) setShow(true);
    } catch {
      /* localStorage niet beschikbaar */
    }
  }, []);

  function decide(value: "all" | "necessary") {
    try {
      localStorage.setItem("cookie-consent", value);
    } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white p-4 shadow-lg md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-xl md:border">
      <p className="text-sm text-foreground">
        We gebruiken cookies om de website goed te laten werken en het gebruik te analyseren.
        Lees meer in ons <Link href="/privacy" className="font-semibold text-primary underline">privacybeleid</Link>.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => decide("all")}
          className="flex-1 rounded-lg bg-accent py-2 text-sm font-semibold text-white hover:bg-accent-hover"
        >
          Alles accepteren
        </button>
        <button
          onClick={() => decide("necessary")}
          className="flex-1 rounded-lg border border-border py-2 text-sm font-semibold text-foreground hover:bg-surface"
        >
          Enkel noodzakelijk
        </button>
      </div>
    </div>
  );
}
