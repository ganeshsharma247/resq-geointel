import {
  LayoutGrid, Radar, Users, Home as HomeIcon, Boxes, GitMerge, Route as RouteIcon,
  FileSearch, Activity, MapPinned, X,
} from 'lucide-react';

export const SECTIONS = [
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'risk-map', label: 'Risk Map', icon: Radar },
  { id: 'exposure', label: 'Exposure', icon: Users },
  { id: 'sites', label: 'Relocation Sites', icon: HomeIcon },
  { id: 'capacity', label: 'Capacity Engine', icon: Boxes },
  { id: 'allocation', label: 'Allocation', icon: GitMerge },
  { id: 'routing', label: 'Routing', icon: RouteIcon },
  { id: 'evidence', label: 'Evidence & Assumptions', icon: FileSearch },
  { id: 'status', label: 'System Status', icon: Activity },
];

export default function Sidebar({ active, onSelect, open, onClose }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed lg:static z-40 top-0 left-0 h-full w-64 bg-panel border-r border-line flex flex-col
        transition-transform duration-200 ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="h-14 flex items-center justify-between px-4 border-b border-line">
          <div className="flex items-center gap-2">
            <MapPinned className="w-4.5 h-4.5 text-cyan" />
            <span className="font-semibold text-[14px] tracking-tight">RESQ-GeoIntel</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-ink-faint hover:text-ink">
            <X className="w-4 h-4" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-3 px-2.5 space-y-0.5">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => { onSelect(s.id); onClose(); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] transition-colors text-left
                ${isActive
                    ? 'bg-cyan/10 text-cyan border border-cyan/25'
                    : 'text-ink-dim hover:bg-white/[0.03] hover:text-ink border border-transparent'}`}
              >
                <s.icon className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                <span className="truncate">{s.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="px-4 py-3 border-t border-line text-[11px] text-ink-faint font-mono leading-relaxed">
          SIH26191 · Team Datheon
          <br />
          Decision support only
        </div>
      </aside>
    </>
  );
}
