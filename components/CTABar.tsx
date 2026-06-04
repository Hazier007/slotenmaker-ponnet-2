import { site } from "@/lib/site";

/** Vaste oproepbalk onderaan op mobiel — spoedconversie. */
export default function CTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white p-2 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${site.phoneE164}`}
          className="flex items-center justify-center gap-2 rounded-lg bg-accent py-3 font-semibold text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
          </svg>
          Bel nu
        </a>
        <a
          href="#leadform"
          className="flex items-center justify-center gap-2 rounded-lg border border-primary py-3 font-semibold text-primary"
        >
          Offerte
        </a>
      </div>
    </div>
  );
}
