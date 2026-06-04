import { site } from "@/lib/site";

/** Donkere CTA-band met telefoon + offerte-knop, herbruikbaar onderaan pagina's. */
export function CallToActionBand() {
  return (
    <section className="bg-primary py-12 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Dringend een slotenmaker nodig?</h2>
          <p className="mt-2 text-white/80">
            Bel onze wachtdienst voor Oost-Vlaanderen — 24 uur op 24, ook in het weekend.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${site.phoneE164}`}
            className="rounded-lg bg-accent px-8 py-4 font-semibold text-white hover:bg-accent-hover"
          >
            Bel {site.phone}
          </a>
          <a
            href="/contact"
            className="rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10"
          >
            Gratis offerte
          </a>
        </div>
      </div>
    </section>
  );
}
