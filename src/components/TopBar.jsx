import { useState } from 'react';
import { Menu, ChevronDown, Wifi, WifiOff, RefreshCcw } from 'lucide-react';
import { district } from '../data/mockData.js';

export default function TopBar({ onMenuClick, online, onToggleOnline }) {
  const [districtOpen, setDistrictOpen] = useState(false);

  return (
    <header className="h-14 shrink-0 border-b border-line bg-panel/80 backdrop-blur flex items-center gap-3 px-3 sm:px-5">
      <button onClick={onMenuClick} className="lg:hidden text-ink-dim hover:text-ink">
        <Menu className="w-5 h-5" />
      </button>

      <div className="relative">
        <button
          onClick={() => setDistrictOpen((v) => !v)}
          className="flex items-center gap-1.5 text-[13px] font-medium px-2.5 py-1.5 rounded-md border border-line hover:border-cyan/30 bg-base/50"
        >
          {district.name} · DEMO
          <ChevronDown className="w-3.5 h-3.5 text-ink-faint" />
        </button>
        {districtOpen && (
          <div className="absolute top-full mt-1 left-0 bg-panel2 border border-line rounded-lg shadow-panel py-1 w-48 z-20 text-[13px]">
            <div className="px-3 py-2 text-cyan bg-cyan/5">{district.name} · DEMO</div>
            <div className="px-3 py-2 text-ink-faint">Other districts (demo)</div>
          </div>
        )}
      </div>

      <div className="hidden md:flex items-center gap-2 text-[12px] text-ink-dim">
        <span className="w-1.5 h-1.5 rounded-full bg-risk-high pulse-dot" />
        Situation: Active monitoring — 1 critical habitation
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-ink-faint">
          <RefreshCcw className="w-3 h-3" />
          Last sync: {district.lastSync}
        </div>
        <button
          onClick={onToggleOnline}
          className={`flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1.5 rounded-md border transition-colors
          ${online ? 'text-risk-safe border-risk-safe/30 bg-risk-safe/5' : 'text-risk-med border-risk-med/30 bg-risk-med/5'}`}
          title="Simulated connectivity toggle"
        >
          {online ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
          {online ? 'ONLINE' : 'OFFLINE · CACHED'}
        </button>
      </div>
    </header>
  );
}
