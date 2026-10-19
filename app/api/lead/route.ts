import { NextResponse } from "next/server";

/** Een aanvraag is pas geslaagd zodra minstens één afleverroute ze heeft aanvaard. */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const lead = {
    naam: String(body.naam ?? "").slice(0, 120),
    telefoon: String(body.telefoon ?? "").slice(0, 40),
    email: String(body.email ?? "").slice(0, 160),
    postcode: String(body.postcode ?? "").slice(0, 10),
    situatie: String(body.situatie ?? "").slice(0, 120),
    beschrijving: String(body.beschrijving ?? "").slice(0, 2000),
    created_at: new Date().toISOString(),
  };

  if (!lead.naam || !lead.telefoon) {
    return NextResponse.json({ error: "naam en telefoon zijn verplicht" }, { status: 422 });
  }

  const sbUrl = process.env.SUPABASE_URL;
  const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!(sbUrl && sbKey) && !(resendKey && notify && from)) {
    console.error("Lead-aflevering is niet geconfigureerd");
    return NextResponse.json({ error: "Aanvraag kan momenteel niet worden verzonden. Bel ons rechtstreeks." }, { status: 503 });
  }

  let delivered = false;
  if (sbUrl && sbKey) {
    try {
      const response = await fetch(`${sbUrl}/rest/v1/leads`, {
        method: "POST",
        headers: {
          apikey: sbKey,
          Authorization: `Bearer ${sbKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(lead),
      });
      if (response.ok) delivered = true;
      else console.error("Lead-opslag faalde met status", response.status);
    } catch (e) {
      console.error("Lead-opslag faalde door een netwerkfout", e instanceof Error ? e.name : "onbekend");
    }
  }

  if (resendKey && notify && from) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: [notify],
          subject: `Nieuwe lead: ${lead.situatie} (${lead.postcode})`,
          text: `Naam: ${lead.naam}\nTelefoon: ${lead.telefoon}\nE-mail: ${lead.email}\nPostcode: ${lead.postcode}\nSituatie: ${lead.situatie}\n\n${lead.beschrijving}`,
        }),
      });
      if (response.ok) delivered = true;
      else console.error("Lead-melding faalde met status", response.status);
    } catch (e) {
      console.error("Lead-melding faalde door een netwerkfout", e instanceof Error ? e.name : "onbekend");
    }
  }

  if (!delivered) {
    return NextResponse.json({ error: "Aanvraag kon niet worden verzonden. Bel ons rechtstreeks." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
