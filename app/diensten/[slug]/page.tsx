import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { services, getService } from "@/lib/services";
import { featuredCitySlugs, getCity } from "@/lib/cities";
import { site } from "@/lib/site";
import LeadForm from "@/components/LeadForm";
import CostTable from "@/components/CostTable";
import JsonLd from "@/components/JsonLd";
import { CallToActionBand } from "@/components/Section";
import { serviceLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({
    title: `${s.title} in Oost-Vlaanderen | ${site.shortName}`,
    description: `${s.short} ${site.owner}, 24/7 in heel Oost-Vlaanderen. Bel ${site.phone}.`,
    path: `/diensten/${s.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceLd({ name: s.title, description: s.short, path: `/diensten/${s.slug}` }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Diensten", path: "/diensten" },
            { name: s.title, path: `/diensten/${s.slug}` },
          ]),
        ]}
      />

      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>{" › "}
            <Link href="/diensten" className="hover:text-white">Diensten</Link>{" › "}
            <span className="text-white">{s.title}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">{s.h1}</h1>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phoneE164}`} className="rounded-lg bg-accent px-8 py-4 text-center font-semibold text-white hover:bg-accent-hover">
              Bel {site.phone}
            </a>
            <a href="#leadform" className="rounded-lg border-2 border-white/30 px-8 py-4 text-center font-semibold text-white hover:bg-white/10">
              Offerte aanvragen
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-foreground">{s.intro}</p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-muted">
                <span className="mt-0.5 text-accent">✓</span> {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-6">
            {s.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-xl font-bold text-primary">{sec.heading}</h2>
                <p className="mt-2 text-muted">{sec.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-surface p-6">
            <h2 className="text-xl font-bold text-primary">Andere diensten</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.filter((o) => o.slug !== s.slug).map((o) => (
                <Link key={o.slug} href={`/diensten/${o.slug}`} className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:border-primary/30">
                  {o.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="leadform" className="bg-primary-dark py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="text-white">
              <h2 className="text-2xl font-bold">{s.title} aanvragen</h2>
              <p className="mt-4 text-white/80">
                Laat uw gegevens achter voor een vrijblijvende offerte, of bel ons direct bij spoed.
              </p>
              <p className="mt-6 text-lg font-semibold">
                <a href={`tel:${site.phoneE164}`} className="hover:text-accent">📞 {site.phone}</a>
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">Indicatieve prijzen</h2>
          <div className="mt-8"><CostTable /></div>
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">{s.title} in uw gemeente</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {featuredCitySlugs.map((slug) => {
              const c = getCity(slug);
              if (!c) return null;
              return (
                <Link key={slug} href={`/slotenmaker/${slug}`} className="rounded-lg border border-border bg-white px-4 py-3 text-center font-medium text-primary hover:border-primary/30 hover:shadow-sm">
                  {c.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CallToActionBand />
    </>
  );
}
