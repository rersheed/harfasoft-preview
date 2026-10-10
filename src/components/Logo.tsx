interface Props { light?: boolean; className?: string }

/** Proposed HARFASOFT wordmark (not an official logo). */
export default function Logo({ light = false, className = '' }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="lg-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1E5EFF" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill={light ? '#ffffff' : '#0B1B3F'} fillOpacity={light ? 0.08 : 1} />
        <path d="M18 16v32M46 16v32M18 32h28" stroke="url(#lg-mark)" strokeWidth="7" strokeLinecap="round" />
        <circle cx="46" cy="16" r="4.5" fill="#22D3EE" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] font-extrabold tracking-[0.08em] ${light ? 'text-white' : 'text-navy'}`}>HARFASOFT</span>
        <span className={`mt-1 text-[0.58rem] font-semibold tracking-[0.28em] ${light ? 'text-cyan' : 'text-brand'}`}>ACADEMY LIMITED</span>
      </span>
    </span>
  );
}
