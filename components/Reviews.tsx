import { site } from "@/lib/site";

export default function Reviews() {
  const gmb = site.social.google;

  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary">Wat klanten zeggen</h2>

        <p className="mt-4 text-muted">Bekijk de actuele ervaringen van klanten op ons Google-profiel.</p>

        {gmb && (
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={gmb}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light"
            >
              Lees reviews op Google
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
