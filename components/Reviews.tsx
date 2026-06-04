import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex text-accent" aria-label={`${n} op 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < n ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <h2 className="text-2xl font-bold text-primary">Wat klanten zeggen</h2>
          <p className="text-sm text-muted">
            <span className="font-semibold text-primary">{site.reviewRating}/5</span> op basis van {site.reviewCount} beoordelingen
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <Stars n={r.rating} />
              <blockquote className="mt-3 text-sm text-foreground">“{r.text}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-primary">
                {r.name} · <span className="font-normal text-muted">{r.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
