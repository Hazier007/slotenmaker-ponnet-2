import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-5xl font-bold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-bold text-primary">Pagina niet gevonden</h1>
        <p className="mt-2 text-muted">
          Deze pagina bestaat niet (meer). Keer terug naar de homepage of bel ons direct.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light">
            Naar de homepage
          </Link>
          <a href={`tel:${site.phoneE164}`} className="rounded-lg border border-border px-6 py-3 font-semibold text-primary hover:bg-surface">
            Bel {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
