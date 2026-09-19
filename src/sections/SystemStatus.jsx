import { CheckCircle2, Wifi, WifiOff, RefreshCcw, HardDriveDownload } from 'lucide-react';
import { SectionHeader, Panel } from '../components/Primitives.jsx';
import { systemStatus } from '../data/mockData.js';

export default function SystemStatus({ online, onToggleOnline }) {
  return (
    <div>
      <SectionHeader
        eyebrow="Offline-first / low connectivity"
        title="System Status"
        description="Field operations often run on unreliable connectivity. Essential map layers and results stay cached and sync automatically once connection returns."
      />

      <div className="grid md:grid-cols-[1fr_320px] gap-4">
        <Panel className="p-4">
          <div className="text-[13px] font-semibold mb-3">Data layers</div>
          <div className="space-y-2">
            {systemStatus.dataLayers.map((d) => (
              <div key={d.name} className="flex items-center justify-between border-b border-line/60 pb-2 text-[12.5px]">
                <span className="text-ink-dim">{d.name}</span>
                <span className="flex items-center gap-1.5 text-risk-safe">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Loaded
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel className="p-4">
            <div className="text-[12px] text-ink-faint mb-2">Connectivity</div>
            <button
              onClick={onToggleOnline}
              className={`w-full flex items-center justify-center gap-2 text-[13px] font-semibold py-2.5 rounded-md border transition-colors
              ${online ? 'text-risk-safe border-risk-safe/30 bg-risk-safe/5' : 'text-risk-med border-risk-med/30 bg-risk-med/5'}`}
            >
              {online ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
              {online ? 'ONLINE' : 'OFFLINE'}
            </button>
            <p className="text-[11px] text-ink-faint mt-2 leading-relaxed">
              Simulated toggle — demonstrates offline-ready cached mode for field devices.
            </p>
          </Panel>

          <Panel className="p-4">
            <div className="flex items-center gap-1.5 text-[12px] text-ink-faint mb-1">
              <RefreshCcw className="w-3.5 h-3.5" /> Last sync
            </div>
            <div className="text-[14px] font-medium mb-3">{systemStatus.lastSync}</div>
            <div className="flex items-center gap-1.5 text-[12px] text-ink-faint mb-1">
              <HardDriveDownload className="w-3.5 h-3.5" /> Offline cache
            </div>
            <div className="text-[13px] text-risk-safe">{systemStatus.offlineCache}</div>
          </Panel>

          {!online && (
            <button className="w-full text-[12.5px] font-medium bg-cyan text-[#04141E] py-2.5 rounded-md hover:bg-cyan-soft transition-colors">
              Sync when connection returns
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
