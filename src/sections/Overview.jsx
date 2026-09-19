import { useState } from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import MapView from '../components/MapView.jsx';
import MapLegend from '../components/MapLegend.jsx';
import { MetricCard } from '../components/Primitives.jsx';
import { habitations, metrics, focusHabitationId } from '../data/mockData.js';

export default function Overview({ onNavigate, onSelectHabitation }) {
  const [layers, setLayers] = useState({ hazards: true, habitations: true, sites: true, route: false });
  const critical = habitations.find((h) => h.id === focusHabitationId);

  const toggleLayer = (key) => setLayers((l) => ({ ...l, [key]: !l[key] }));

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex-1 min-h-[420px] grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4">
        <div className="relative">
          <MapView
            layers={layers}
            selectedHabitationId={focusHabitationId}
            onSelectHabitation={(id) => { onSelectHabitation(id); onNavigate('exposure'); }}
          />
          <MapLegend layers={layers} onToggle={toggleLayer} />
        </div>

        <div className="bg-panel border border-line rounded-xl p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-risk-high" />
            <h3 className="text-[13px] font-semibold">Priority Alerts</h3>
          </div>

          <div className="border border-risk-high/30 bg-risk-high/5 rounded-lg p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10.5px] font-semibold tracking-wide text-risk-high bg-risk-high/10 px-2 py-0.5 rounded-full">
                HIGH PRIORITY
              </span>
              <span className="text-[11px] text-ink-faint font-mono">Risk {critical.riskScore}</span>
            </div>
            <div className="text-[13.5px] font-medium mb-1">{critical.id} · Rajpura Basti</div>
            <div className="text-[12px] text-ink-dim mb-3">
              Population at risk: <span className="text-ink font-medium">{critical.vulnerablePopulation.toLocaleString()}</span>
            </div>
            <div className="text-[11.5px] text-ink-dim mb-3">
              Recommended action: Relocation assessment required
            </div>
            <button
              onClick={() => { onSelectHabitation(critical.id); onNavigate('risk-map'); }}
              className="w-full flex items-center justify-center gap-1.5 bg-cyan text-[#04141E] text-[12.5px] font-semibold py-2 rounded-md hover:bg-cyan-soft transition-colors"
            >
              Analyse <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {habitations.filter((h) => h.id !== focusHabitationId).map((h) => (
              <button
                key={h.id}
                onClick={() => { onSelectHabitation(h.id); onNavigate('exposure'); }}
                className="w-full flex items-center justify-between text-left border border-line rounded-lg px-3 py-2.5 hover:border-cyan/30 transition-colors"
              >
                <div>
                  <div className="text-[12.5px] font-medium">{h.id}</div>
                  <div className="text-[11px] text-ink-faint">{h.priority} priority</div>
                </div>
                <span className={`text-[11px] font-mono ${h.riskLevel === 'high' ? 'text-risk-high' : 'text-risk-med'}`}>
                  {h.riskScore}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <MetricCard label="High-Risk Zones" value={metrics.highRiskZones} accent="text-risk-high" />
        <MetricCard label="Population Exposed" value={metrics.populationExposed.toLocaleString()} accent="text-risk-med" />
        <MetricCard label="Sites Available" value={metrics.sitesAvailable} accent="text-cyan" />
        <MetricCard label="Capacity Available" value={metrics.capacityAvailable.toLocaleString()} accent="text-risk-safe" />
        <MetricCard label="Relocation Priority" value="Critical" sub={metrics.relocationPriority} accent="text-risk-high" />
      </div>
    </div>
  );
}
