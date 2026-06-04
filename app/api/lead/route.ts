import { NextResponse } from "next/server";

/**
 * Lead-endpoint. Werkt out-of-the-box (logt de lead).
 * - Zijn SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY gezet → lead wordt in tabel `leads` geschreven.
 * - Is RESEND_API_KEY gezet → er wordt een e-mailmelding gestuurd naar LEAD_NOTIFY_EMAIL.
 */
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

  // Optioneel: Supabase
  const sbUrl = process.env.SUPABASE_URL;
  const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (sbUrl && sbKey) {
    try {
      await fetch(`${sbUrl}/rest/v1/leads`, {
        method: "POST",
        headers: {
          apikey: sbKey,
          Authorization: `Bearer ${sbKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(lead),
      });
    } catch (e) {
      console.error("Supabase insert faalde:", e);
    }
  }

  // Optioneel: e-mailmelding via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Leads <leads@slotenmaker-ponnet.be>",
          to: [notify],
          subject: `Nieuwe lead: ${lead.situatie} (${lead.postcode})`,
          text: `Naam: ${lead.naam}\nTelefoon: ${lead.telefoon}\nE-mail: ${lead.email}\nPostcode: ${lead.postcode}\nSituatie: ${lead.situatie}\n\n${lead.beschrijving}`,
        }),
      });
    } catch (e) {
      console.error("Resend mail faalde:", e);
    }
  }

  // Altijd loggen zodat geen enkele lead verloren gaat
  console.log("NIEUWE LEAD:", JSON.stringify(lead));

  return NextResponse.json({ ok: true });
}
