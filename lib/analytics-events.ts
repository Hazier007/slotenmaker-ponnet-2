import { readConsent } from "./consent";

export const ANALYTICS_LEAD_EVENT = "slotenmakerponnet:lead-submitted";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

/** Alleen anonieme gebeurtenisgegevens versturen na expliciete toestemming. */
export function trackAnalyticsEvent(name: "phone_click" | "lead_submitted", path: string) {
  if (typeof window === "undefined" || readConsent() !== "granted") return;
  (window as GtagWindow).gtag?.("event", name, { page_path: path });
}
