"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faqs";

export default function FAQ({ faqs, title = "Veelgestelde vragen" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <FaqItem key={i} faq={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-primary"
        aria-expanded={open}
      >
        {faq.q}
        <span className="text-accent text-xl leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="border-t border-border px-5 py-4 text-muted">{faq.a}</p>}
    </div>
  );
}
