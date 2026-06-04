"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const situaties = [
  "Buitengesloten / deur openen",
  "Sleutel afgebroken",
  "Slot kapot of klemt",
  "Slot / cilinder vervangen",
  "Inbraak(poging) - herstel",
  "Inbraakbeveiliging / advies",
  "Sleutel bijmaken",
  "Andere",
];

type Status = "idle" | "sending" | "ok" | "error";

export default function LeadForm({ defaultCity = "" }: { defaultCity?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-2xl text-success">
          ✓
        </div>
        <h3 className="text-lg font-bold text-primary">Bedankt, uw aanvraag is verzonden!</h3>
        <p className="mt-2 text-muted">
          We nemen zo snel mogelijk contact op. Heeft u spoed? Bel ons gerust direct op{" "}
          <a href={`tel:${site.phoneE164}`} className="font-semibold text-primary">{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Naam" name="naam" required autoComplete="name" />
          <Field label="Telefoon" name="telefoon" type="tel" required autoComplete="tel" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="E-mail" name="email" type="email" required autoComplete="email" />
          <Field label="Postcode" name="postcode" required maxLength={4} inputMode="numeric" pattern="[0-9]{4}" placeholder="9000" />
        </div>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-foreground">Uw situatie</span>
          <select
            name="situatie"
            required
            defaultValue={defaultCity ? "Buitengesloten / deur openen" : ""}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground focus:border-primary focus:outline-none"
          >
            <option value="" disabled>Kies een situatie…</option>
            {situaties.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-foreground">Korte beschrijving (optioneel)</span>
          <textarea
            name="beschrijving"
            rows={3}
            defaultValue={defaultCity ? `Locatie: ${defaultCity}. ` : ""}
            className="w-full rounded-lg border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none"
            placeholder="Bv. type slot, merk, wat er precies aan de hand is…"
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-accent py-4 font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {status === "sending" ? "Versturen…" : "Vrijblijvend contact aanvragen"}
        </button>

        {status === "error" && (
          <p className="text-sm text-red-600">
            Er ging iets mis. Bel ons gerust direct op{" "}
            <a href={`tel:${site.phoneE164}`} className="font-semibold underline">{site.phone}</a>.
          </p>
        )}

        <p className="text-center text-xs text-muted">
          Wij bellen u vrijblijvend op en respecteren uw privacy.
        </p>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", ...rest
}: { label: string; name: string; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        className="w-full rounded-lg border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none"
        {...rest}
      />
    </label>
  );
}
