export function RiskBadge({ level }) {
  const map = {
    high: { label: 'High Risk', cls: 'text-risk-high bg-risk-high/10 border-risk-high/30' },
    medium: { label: 'Medium Risk', cls: 'text-risk-med bg-risk-med/10 border-risk-med/30' },
    low: { label: 'Low Risk', cls: 'text-risk-safe bg-risk-safe/10 border-risk-safe/30' },
    safe: { label: 'Safe', cls: 'text-risk-safe bg-risk-safe/10 border-risk-safe/30' },
  };
  const m = map[level] || map.medium;
  return (
    <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full border ${m.cls}`}>
      {m.label}
    </span>
  );
}

export function MetricCard({ label, value, sub, accent }) {
  return (
    <div className="bg-panel border border-line rounded-xl px-4 py-3.5">
      <div className="text-[11px] text-ink-faint mb-1.5">{label}</div>
      <div className={`text-2xl font-bold tracking-tight ${accent || 'text-ink'}`}>{value}</div>
      {sub && <div className="text-[11px] text-ink-dim mt-1">{sub}</div>}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-5">
      {eyebrow && <div className="text-[11px] font-mono text-cyan/80 mb-1">{eyebrow}</div>}
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {description && <p className="text-[13px] text-ink-dim mt-1 max-w-2xl leading-relaxed">{description}</p>}
    </div>
  );
}

export function ScoreBar({ label, value, level }) {
  const colors = { High: 'bg-risk-high', Medium: 'bg-risk-med', Low: 'bg-risk-safe' };
  return (
    <div>
      <div className="flex items-center justify-between text-[12.5px] mb-1.5">
        <span className="text-ink-dim">{label}</span>
        <span className="text-ink font-medium">{level} · {value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-line overflow-hidden">
        <div
          className={`h-full rounded-full ${colors[level] || 'bg-cyan'}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function Panel({ children, className = '' }) {
  return (
    <div className={`bg-panel border border-line rounded-xl ${className}`}>
      {children}
    </div>
  );
}
