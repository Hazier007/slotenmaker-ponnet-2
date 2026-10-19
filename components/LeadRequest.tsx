import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

/** Toon het formulier alleen wanneer minstens één afleverroute is ingesteld. */
export default function LeadRequest({ defaultCity = "" }: { defaultCity?: string } = {}) {
  const supabaseReady = Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
  const resendReady = Boolean(process.env.RESEND_API_KEY && process.env.LEAD_NOTIFY_EMAIL && process.env.LEAD_FROM_EMAIL);

  if (supabaseReady || resendReady) return <LeadForm defaultCity={defaultCity} />;

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
      <h3 className="text-xl font-bold text-primary">Vraag advies of een offerte aan</h3>
      <p className="mt-3 text-muted">
        Vertel ons waar u hulp nodig heeft en wat er met uw deur of slot aan de hand is.
        We bespreken de mogelijkheden en een richtprijs met u.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <a href={`tel:${site.phoneE164}`} className="rounded-lg bg-accent px-6 py-3 text-center font-semibold text-white hover:bg-accent-hover">
          Bel {site.phone}
        </a>
        <a href={`mailto:${site.email}`} className="rounded-lg border border-primary px-6 py-3 text-center font-semibold text-primary hover:bg-surface">
          Mail ons uw vraag
        </a>
      </div>
    </div>
  );
}
