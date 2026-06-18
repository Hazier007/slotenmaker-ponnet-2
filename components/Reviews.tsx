import { site } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex text-2xl text-accent" aria-label={`${rating} op 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < Math.round(rating) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const gmb = site.social.google;
  const rating = site.reviewRating.toString().replace(".", ",");

  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary">Wat klanten zeggen</h2>

        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary">{rating}</span>
            <span className="text-muted">/ 5</span>
          </div>
          <Stars rating={site.reviewRating} />
          <p className="text-muted">
            Gebaseerd op <strong className="text-primary">{site.reviewCount}</strong> Google-reviews
          </p>
        </div>

        {gmb && (
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={gmb}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light"
            >
              Lees onze {site.reviewCount} reviews op Google
            </a>
            <a
              href={gmb}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-white px-6 py-3 font-semibold text-primary hover:bg-surface"
            >
              Laat een review achter
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
