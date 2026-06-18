import Link from "next/link";
import type { Metadata } from "next";
import { postsByDate } from "@/lib/posts";
import { site } from "@/lib/site";
import { CallToActionBand } from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Blog & tips — slotenmaker Oost-Vlaanderen",
  description: `Praktische tips over sloten, buitengesloten zijn, inbraakbeveiliging en prijzen van ${site.name}.`,
  path: "/blog",
});

function fmt(d: string) {
  return new Date(d).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogIndex() {
  const posts = postsByDate();
  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Blog &amp; tips</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">
            Praktische uitleg over slotproblemen, inbraakbeveiliging en prijzen — van uw lokale slotenmaker.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:border-primary/30 hover:shadow-md">
                <span className="text-xs text-muted">{fmt(p.date)} · {p.readMinutes} min</span>
                <h2 className="mt-2 font-semibold text-primary">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted">{p.excerpt}</p>
                <span className="mt-3 text-sm font-medium text-accent">Lees meer →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBand />
    </>
  );
}
