import type { Product } from '../data/products';

/**
 * Stylised, illustrative UI mockup built in HTML/CSS — not a screenshot and
 * deliberately free of real or invented data.
 */
const config: Record<Product['slug'], { nav: string[]; cards: string[]; color: string; color2: string; table: string }> = {
  lumisas: { nav: ['Dashboard', 'Admissions', 'Attendance', 'Results', 'Fees', 'Parents'], cards: ['Students', 'Attendance', 'Fees'], color: '#1E5EFF', color2: '#22D3EE', table: 'Recent admissions' },
  'alkhairat-hms': { nav: ['Overview', 'Patients', 'Consultations', 'Laboratory', 'Pharmacy', 'Billing'], cards: ['Patients', 'Lab requests', 'Billing'], color: '#06B6D4', color2: '#34D399', table: 'Patient queue' },
  bizbook: { nav: ['Home', 'Sales', 'Expenses', 'Credit', 'Repayments', 'Reports'], cards: ['Sales', 'Expenses', 'Credit'], color: '#6366F1', color2: '#60A5FA', table: 'Recent transactions' },
};

const bars = [42, 64, 50, 78, 58, 88, 70];

export default function ProductMockup({ product, compact = false }: { product: Product; compact?: boolean }) {
  const c = config[product.slug];
  const Icon = product.icon;
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-navy/10"
      role="img"
      aria-label={`Illustrative interface of ${product.name} — ${product.category}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-white ring-1 ring-slate-200" />
      </div>
      <div className="flex" aria-hidden="true">
        {!compact && (
          <aside className="hidden w-36 shrink-0 flex-col gap-1 border-r border-slate-100 p-3 sm:flex">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg text-white" style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color2})` }}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-xs font-bold text-navy">{product.name}</span>
            </div>
            {c.nav.map((n, i) => (
              <span key={n} className={`rounded-md px-2 py-1.5 text-[10px] font-medium ${i === 0 ? 'text-white' : 'text-slate-500'}`} style={i === 0 ? { background: c.color } : undefined}>
                {n}
              </span>
            ))}
          </aside>
        )}
        <div className="min-w-0 flex-1 space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-navy">{c.nav[0]}</div>
              <div className="mt-1 h-1.5 w-20 rounded bg-slate-200" />
            </div>
            <span className="h-6 w-16 rounded-full" style={{ background: `${c.color}22` }} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {c.cards.map((card, i) => (
              <div key={card} className="rounded-xl border border-slate-100 p-2.5">
                <div className="text-[9px] font-medium text-slate-500">{card}</div>
                <div className="mt-2 h-2.5 w-3/4 rounded" style={{ background: i === 0 ? c.color : i === 1 ? c.color2 : '#CBD5E1' }} />
                <div className="mt-1.5 h-1.5 w-1/2 rounded bg-slate-100" />
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-slate-100 p-3">
            <div className="flex h-20 items-end gap-1.5">
              {bars.map((h, i) => (
                <span key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 2 ? c.color2 : c.color, opacity: 0.35 + (i / bars.length) * 0.65 }} />
              ))}
            </div>
          </div>
          {!compact && (
            <div className="rounded-xl border border-slate-100 p-3">
              <div className="mb-2 text-[9px] font-semibold text-slate-500">{c.table}</div>
              {[0, 1, 2].map((r) => (
                <div key={r} className="flex items-center gap-2 border-t border-slate-50 py-1.5">
                  <span className="h-4 w-4 rounded-full bg-slate-100" />
                  <span className="h-1.5 flex-1 rounded bg-slate-100" />
                  <span className="h-1.5 w-10 rounded" style={{ background: `${c.color}55` }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
