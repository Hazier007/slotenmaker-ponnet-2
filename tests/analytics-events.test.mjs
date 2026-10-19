import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { trackAnalyticsEvent } from "../lib/analytics-events.ts";

const originalWindow = globalThis.window;
afterEach(() => { globalThis.window = originalWindow; });

function browser(consent) {
  const calls = [];
  globalThis.window = {
    localStorage: { getItem: () => consent },
    gtag: (...args) => calls.push(args),
  };
  return calls;
}

test("verzendt geen conversie zonder toestemming", () => {
  const calls = browser("denied");
  trackAnalyticsEvent("phone_click", "/contact");
  assert.equal(calls.length, 0);
});

test("verzendt alleen de gebeurtenis en paginaroute na toestemming", () => {
  const calls = browser("granted");
  trackAnalyticsEvent("lead_submitted", "/slotenmaker/gent");
  assert.deepEqual(calls, [["event", "lead_submitted", { page_path: "/slotenmaker/gent" }]]);
});
