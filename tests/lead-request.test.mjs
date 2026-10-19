import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import LeadRequest from "../components/LeadRequest.tsx";

globalThis.React = React;

const keys = ["RESEND_API_KEY", "LEAD_NOTIFY_EMAIL", "LEAD_FROM_EMAIL", "SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"];
const original = Object.fromEntries(keys.map((key) => [key, process.env[key]]));

afterEach(() => {
  for (const key of keys) {
    if (original[key] === undefined) delete process.env[key];
    else process.env[key] = original[key];
  }
});

test("toont telefoon en e-mail zolang aanvragen niet afgeleverd kunnen worden", () => {
  for (const key of keys) delete process.env[key];
  const Component = typeof LeadRequest === "function" ? LeadRequest : LeadRequest.default;
  const html = renderToStaticMarkup(Component());
  assert.match(html, /href="tel:\+32468113399"/);
  assert.match(html, /href="mailto:info@slotenmaker-ponnet.be"/);
  assert.doesNotMatch(html, /<form/);
});

test("activeert het formulier zodra Resend volledig is ingesteld", () => {
  for (const key of keys) delete process.env[key];
  process.env.RESEND_API_KEY = "test-key";
  process.env.LEAD_NOTIFY_EMAIL = "owner@example.com";
  process.env.LEAD_FROM_EMAIL = "leads@example.com";
  const Component = typeof LeadRequest === "function" ? LeadRequest : LeadRequest.default;
  assert.equal(Component().type.name, "LeadForm");
});
