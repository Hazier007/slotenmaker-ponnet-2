import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { featuredCitySlugs, getCity } from "@/lib/cities";

export default function Footer() {
  const year = new Date().getFullYear();
  const gmb = site.social.google;
  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white font-bold">
              KP
            </span>
            <span className="font-bold text-white">Slotenmaker Ponnet</span>
          </div>
          <p className="mt-4 text-sm">
            {site.tagline}. {site.owner} en team helpen u 24/7 met buitensluitingen,
            slotvervanging en inbraakbeveiliging in heel Oost-Vlaanderen.
          </p>
          <p className="mt-4 text-sm">
            <a href={`tel:${site.phoneE164}`} className="font-semibold text-white hover:text-accent">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
            <br />
            BTW {site.vat}
          </p>
          {gmb && (
            <a
              href={gmb}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
            >
              <span className="text-accent">★ {site.reviewRating.toString().replace(".", ",")}</span>
              {site.reviewCount} Google-reviews
            </a>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-white">Diensten</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/diensten/${s.slug}`} className="hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Populaire steden</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {featuredCitySlugs.map((slug) => {
              const c = getCity(slug);
              if (!c) return null;
              return (
                <li key={slug}>
                  <Link href={`/slotenmaker/${slug}`} className="hover:text-accent">
                    Slotenmaker {c.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Info</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/werkgebied" className="hover:text-accent">Volledig werkgebied</Link></li>
            <li><Link href="/prijzen" className="hover:text-accent">Prijzen</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Blog &amp; tips</Link></li>
            <li><Link href="/over-ons" className="hover:text-accent">Over Kristof Ponnet</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact &amp; offerte</Link></li>
            <li><Link href="/privacy" className="hover:text-accent">Privacy &amp; cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} {site.name} · BTW {site.vat}</p>
          <p>Slotenmaker met wachtdienst voor heel Oost-Vlaanderen</p>
        </div>
      </div>
    </footer>
  );
}
