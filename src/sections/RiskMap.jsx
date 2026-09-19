import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import MapView from '../components/MapView.jsx';
import { SectionHeader, ScoreBar, RiskBadge, Panel } from '../components/Primitives.jsx';
import { habitations } from '../data/mockData.js';

export default function RiskMap({ selectedHabitationId, onSelectHabitation }) {
  const activeId = selectedHabitationId || habitations[0].id;
  const h = habitations.find((x) => x.id === activeId);

  return (
    <div>
      <SectionHeader
        eyebrow="Automated red-zone mapping"
        title="Hazard / Risk Analysis"
        description="Risk scores are derived from terrain and precipitation indicators combined through an explainable, weighted model — never presented as absolute ground truth."
      />

      <div className="grid lg:grid-cols-[1fr_380px] gap-4">
        <div style={{ height: 460 }}>
          <MapView
            layers={{ hazards: true, habitations: true, sites: false, route: false }}
            selectedHabitationId={activeId}
            onSelectHabitation={onSelectHabitation}
            flyTarget={[h.lat, h.lng]}
          />
        </div>

        <div className="space-y-4">
          <Panel className="p-4">
            <div className="flex items-center justify-between mb-1">
              <div className="text-[13px] text-ink-dim">{h.id}</div>
              <RiskBadge level={h.riskLevel} />
            </div>
            <div className="text-[15px] font-semibold mb-3">{h.name}</div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold tracking-tight">{h.riskScore}</span>
              <span className="text-ink-faint text-sm mb-1">/ 100 risk score</span>
            </div>

            <div className="space-y-3">
              {Object.values(h.factors).map((f) => (
                <ScoreBar key={f.label} label={f.label} value={f.value} level={f.level} />
              ))}
            </div>
          </Panel>

          <Panel className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-cyan" />
              <span className="text-[13px] font-semibold">Why is this area high-risk?</span>
            </div>
            <p className="text-[12.5px] text-ink-dim leading-relaxed">
              {h.name} sits on low-lying, {h.factors.elevation.level.toLowerCase()}-vulnerability
              terrain that has recorded {h.factors.rainfall.level.toLowerCase()} rainfall intensity
              in the current monitoring window. Combined with {h.factors.historical.level.toLowerCase()} historical
              hazard exposure and {h.factors.populationExposure.level.toLowerCase()} population density,
              the weighted model places this habitation in the {h.riskLevel} risk band. This score is a
              guide for prioritisation — field verification is recommended before action.
            </p>
          </Panel>

          <div className="flex gap-2">
            {habitations.map((hab) => (
              <button
                key={hab.id}
                onClick={() => onSelectHabitation(hab.id)}
                className={`flex-1 text-[12px] py-2 rounded-md border transition-colors
                ${hab.id === activeId ? 'border-cyan/40 text-cyan bg-cyan/5' : 'border-line text-ink-faint hover:text-ink'}`}
              >
                {hab.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
