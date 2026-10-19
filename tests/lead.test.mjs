import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { POST } from "../app/api/lead/route.ts";

const keys = ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY", "RESEND_API_KEY", "LEAD_NOTIFY_EMAIL", "LEAD_FROM_EMAIL"];
const originalEnv = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
const originalFetch = globalThis.fetch;

afterEach(() => {
  for (const key of keys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
  globalThis.fetch = originalFetch;
});

function request() {
  return new Request("http://localhost/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      naam: "Test Persoon",
      telefoon: "0468000000",
      email: "test@example.com",
      postcode: "9230",
      situatie: "Slot vervangen",
    }),
  });
}

test("meldt geen succes zonder geconfigureerde afleverroute", async () => {
  for (const key of keys) delete process.env[key];
  const response = await POST(request());
  assert.equal(response.status, 503);
});

test("meldt geen succes als de afleverdienst een foutstatus geeft", async () => {
  for (const key of keys) delete process.env[key];
  process.env.RESEND_API_KEY = "test-key";
  process.env.LEAD_NOTIFY_EMAIL = "owner@example.com";
  process.env.LEAD_FROM_EMAIL = "leads@example.com";
  globalThis.fetch = async () => new Response("service error", { status: 500 });
  const response = await POST(request());
  assert.equal(response.status, 502);
});

test("meldt succes wanneer de aanvraag daadwerkelijk is afgeleverd", async () => {
  for (const key of keys) delete process.env[key];
  process.env.RESEND_API_KEY = "test-key";
  process.env.LEAD_NOTIFY_EMAIL = "owner@example.com";
  process.env.LEAD_FROM_EMAIL = "leads@example.com";
  globalThis.fetch = async (_url, options) => {
    assert.equal(JSON.parse(options.body).from, "leads@example.com");
    return new Response(null, { status: 202 });
  };
  const response = await POST(request());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});
