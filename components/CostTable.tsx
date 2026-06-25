import { packages, extraKosten, btwInfo, pricingNotes } from "@/lib/pricing";
import { site } from "@/lib/site";

export default function CostTable() {
  return (
    <div>
      {/* Interventie-pakketten */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
              p.featured ? "border-accent ring-1 ring-accent/30" : "border-border"
            }`}
          >
            <h3 className="text-base font-semibold text-primary">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.time} · {p.days}</p>
            <p className="mt-3 text-3xl font-bold text-primary">
              {p.price}<span className="align-top text-sm font-normal text-muted"> *</span>
            </p>

            <ul className="mt-4 space-y-1.5 text-sm">
              {p.included.map((i) => (
                <li key={i} className="flex gap-2 text-foreground">
                  <span className="text-success">✓</span> {i}
                </li>
              ))}
              {p.excluded.map((e) => (
                <li key={e} className="flex gap-2 text-muted">
                  <span className="text-red-500">✕</span> {e}
                </li>
              ))}
            </ul>

            <a
              href={`tel:${site.phoneE164}`}
              className="mt-5 rounded-lg bg-accent py-2.5 text-center text-sm font-semibold text-white hover:bg-accent-hover"
            >
              Bel nu
            </a>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted">
        * Alle prijzen zijn exclusief btw. Het btw-tarief hangt af van de leeftijd van de woning (zie onder).
      </p>

      {/* Bijkomende informatie */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="font-semibold text-primary">Bijkomende kosten</h3>
          <ul className="mt-3 divide-y divide-border text-sm">
            {extraKosten.map((x) => (
              <li key={x.label} className="flex items-center justify-between gap-4 py-2">
                <span className="text-foreground">{x.label}</span>
                <span className="whitespace-nowrap font-semibold text-primary">{x.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="font-semibold text-primary">Btw-tarief</h3>
          <ul className="mt-3 divide-y divide-border text-sm">
            {btwInfo.map((x) => (
              <li key={x.label} className="flex items-center justify-between gap-4 py-2">
                <span className="text-foreground">{x.label}</span>
                <span className="whitespace-nowrap font-semibold text-primary">{x.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="mt-4 space-y-1 text-sm text-muted">
        {pricingNotes.map((n, i) => (
          <li key={i}>• {n}</li>
        ))}
      </ul>
    </div>
  );
}
