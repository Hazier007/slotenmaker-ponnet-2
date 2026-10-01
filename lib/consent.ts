export const CONSENT_KEY = "slotenmakerponnet.consent";
export const CONSENT_EVENT = "slotenmakerponnet:open-cookie-settings";

export type ConsentValue = "granted" | "denied";

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw === "granted" || raw === "denied" ? raw : null;
  } catch {
    // Private mode / geblokkeerde storage: gedraag je als "nog niets gekozen".
    return null;
  }
}

export function writeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Niets aan te doen — meting is optioneel, de site werkt gewoon door.
  }
}
