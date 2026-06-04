import { pricing, pricingNotes } from "@/lib/pricing";

export default function CostTable() {
  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-surface">
              <th className="px-4 py-3 font-semibold text-primary">Dienst</th>
              <th className="px-4 py-3 font-semibold text-primary">Indicatieve prijs</th>
              <th className="hidden px-4 py-3 font-semibold text-primary sm:table-cell">Toelichting</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((row, i) => (
              <tr key={i} className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">{row.service}</td>
                <td className="px-4 py-3 whitespace-nowrap text-primary">{row.price}</td>
                <td className="hidden px-4 py-3 text-muted sm:table-cell">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-4 space-y-1 text-sm text-muted">
        {pricingNotes.map((n, i) => (
          <li key={i}>• {n}</li>
        ))}
      </ul>
    </div>
  );
}
