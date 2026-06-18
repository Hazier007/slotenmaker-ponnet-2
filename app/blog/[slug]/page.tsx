import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts, getPost } from "@/lib/posts";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { CallToActionBand } from "@/components/Section";
import { articleLd, faqLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.description, path: `/blog/${p.slug}` });
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleLd({ title: p.title, description: p.description, path: `/blog/${p.slug}`, date: p.date }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: p.title, path: `/blog/${p.slug}` },
          ]),
          ...(p.faqs && p.faqs.length ? [faqLd(p.faqs)] : []),
        ]}
      />

      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>{" › "}
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{p.h1}</h1>
          <p className="mt-3 text-sm text-white/70">{fmt(p.date)} · {p.readMinutes} min lezen · {site.owner}</p>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-foreground">{p.intro}</p>

          {p.sections.map((s, i) => (
            <div key={i} className="mt-8">
              <h2 className="text-xl font-bold text-primary">{s.heading}</h2>
              {s.body.map((para, j) => (
                <p key={j} className="mt-3 text-muted">{para}</p>
              ))}
              {s.bullets && (
                <ul className="mt-3 space-y-2">
                  {s.bullets.map((b, k) => (
                    <li key={k} className="flex gap-2 text-muted"><span className="text-accent">✓</span>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-10 rounded-xl bg-surface p-6">
            <p className="font-semibold text-primary">Hulp nodig in Oost-Vlaanderen?</p>
            <p className="mt-1 text-sm text-muted">
              {site.owner} helpt u 24/7, doorgaans binnen 30 minuten ter plaatse en schadevrij waar mogelijk.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneE164}`} className="rounded-lg bg-accent px-6 py-3 text-center font-semibold text-white hover:bg-accent-hover">
                Bel {site.phone}
              </a>
              <Link href="/contact" className="rounded-lg border border-border bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-surface">
                Vrijblijvende offerte
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.slice(0, 4).map((s) => (
                <Link key={s.slug} href={`/diensten/${s.slug}`} className="text-sm font-medium text-accent hover:underline">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {p.faqs && p.faqs.length > 0 && <FAQ faqs={p.faqs} />}

      <CallToActionBand />
    </>
  );
}
