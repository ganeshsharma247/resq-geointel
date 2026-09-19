export default function MapLegend({ layers, onToggle }) {
  const items = [
    { key: 'hazards', label: 'Hazard zones', swatch: 'bg-gradient-to-r from-risk-high to-risk-med' },
    { key: 'habitations', label: 'Habitations', swatch: 'bg-risk-high' },
    { key: 'sites', label: 'Relocation sites', swatch: 'bg-cyan' },
    { key: 'route', label: 'Route', swatch: 'bg-cyan' },
  ];
  return (
    <div className="absolute bottom-3 left-3 bg-panel/95 backdrop-blur border border-line rounded-lg px-3 py-2.5 z-[400] text-[11.5px]">
      <div className="text-ink-faint mb-1.5 font-medium">Layers</div>
      <div className="flex flex-col gap-1.5">
        {items.map((it) => (
          <label key={it.key} className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={!!layers[it.key]}
              onChange={() => onToggle(it.key)}
              className="accent-cyan w-3.5 h-3.5"
            />
            <span className={`w-2.5 h-2.5 rounded-full ${it.swatch}`} />
            <span className="text-ink-dim">{it.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
