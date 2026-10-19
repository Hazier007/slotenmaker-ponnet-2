import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as React from "react";
import CTABar from "../components/CTABar.tsx";

globalThis.React = React;

test("mobiele offerteknop leidt op elke pagina naar een formulier", () => {
  const Component = typeof CTABar === "function" ? CTABar : CTABar.default;
  const html = renderToStaticMarkup(Component());
  assert.match(html, /href="\/contact"/);
});
