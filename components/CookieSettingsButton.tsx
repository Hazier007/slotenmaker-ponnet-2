"use client";

import { CONSENT_EVENT } from "@/lib/consent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="font-medium text-primary underline hover:text-accent"
      onClick={() => window.dispatchEvent(new Event(CONSENT_EVENT))}
    >
      Cookiekeuze aanpassen
    </button>
  );
}
