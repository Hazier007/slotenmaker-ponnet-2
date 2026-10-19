import assert from "node:assert/strict";
import { test } from "node:test";
import sitemap from "../app/sitemap.ts";

test("sitemap geeft alleen echte wijzigingsdatums door", () => {
  const render = typeof sitemap === "function" ? sitemap : sitemap.default;
  const urls = render();
  const prijzen = urls.find((entry) => entry.url.endsWith("/prijzen"));
  const privacy = urls.find((entry) => entry.url.endsWith("/privacy"));
  const gent = urls.find((entry) => entry.url.endsWith("/slotenmaker/gent"));
  const article = urls.find((entry) => entry.url.endsWith("/blog/sleutel-afgebroken-in-slot"));
  assert.equal(prijzen?.lastModified, undefined);
  assert.equal(privacy, undefined);
  assert.equal(gent?.lastModified?.toISOString().slice(0, 10), "2026-10-19");
  assert.equal(article?.lastModified?.toISOString().slice(0, 10), "2026-06-18");
});
