"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold">
            KP
          </span>
          <span className="leading-tight">
            <span className="block font-bold text-primary">Slotenmaker Ponnet</span>
            <span className="block text-xs text-muted">Oost-Vlaanderen · 24/7</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/diensten" className="text-sm font-medium text-foreground hover:text-primary">
            Diensten
          </Link>
          <Link href="/werkgebied" className="text-sm font-medium text-foreground hover:text-primary">
            Werkgebied
          </Link>
          <Link href="/prijzen" className="text-sm font-medium text-foreground hover:text-primary">
            Prijzen
          </Link>
          <Link href="/over-ons" className="text-sm font-medium text-foreground hover:text-primary">
            Over Kristof
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneE164}`}
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover sm:inline-block"
          >
            Bel {site.phone}
          </a>
          {/* Mobile toggle */}
          <button
            aria-label="Menu openen"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-white px-4 py-3 lg:hidden">
          <ul className="space-y-1">
            {[
              { href: "/diensten", label: "Diensten" },
              { href: "/werkgebied", label: "Werkgebied" },
              { href: "/prijzen", label: "Prijzen" },
              { href: "/over-ons", label: "Over Kristof" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 font-medium text-foreground hover:bg-surface"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3 text-sm">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-muted hover:bg-surface"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
