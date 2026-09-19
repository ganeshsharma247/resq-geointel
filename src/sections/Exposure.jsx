import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { SectionHeader, RiskBadge, Panel } from '../components/Primitives.jsx';
import MapView from '../components/MapView.jsx';
import { habitations, hazardZones } from '../data/mockData.js';

export default function Exposure({ selectedHabitationId, onSelectHabitation }) {
  const activeId = selectedHabitationId || habitations[0].id;
  const h = habitations.find((x) => x.id === activeId);

  const demoData = [
    { name: 'Children', value: h.children },
    { name: 'Elderly', value: h.elderly },
    { name: 'Other vulnerable', value: h.otherVulnerable },
    { name: 'Remaining pop.', value: h.population - h.vulnerablePopulation },
  ];

  return (
    <div>
      <SectionHeader
        eyebrow="Vulnerable population exposure"
        title="Exposure Analysis"
        description="When a red-zone habitation is selected, the platform quantifies exactly who is exposed — not just how large the hazard footprint is."
      />

      <div className="grid lg:grid-cols-[380px_1fr] gap-4">
        <Panel className="p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[13px] text-ink-dim">{h.id}</span>
            <RiskBadge level={h.riskLevel} />
          </div>
          <div className="text-[15px] font-semibold mb-4">{h.name}</div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <div className="text-[11px] text-ink-faint mb-1">Population</div>
              <div className="text-2xl font-bold">{h.population.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-faint mb-1">Vulnerable population</div>
              <div className="text-2xl font-bold text-risk-med">{h.vulnerablePopulation.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-faint mb-1">Households</div>
              <div className="text-xl font-semibold">{h.households.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-faint mb-1">Priority</div>
              <div className="text-xl font-semibold text-risk-high">{h.priority}</div>
            </div>
          </div>

          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demoData} layout="vertical" margin={{ left: 8, right: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1B324A" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#93A6BC', fontSize: 11 }} stroke="#1B324A" />
                <YAxis type="category" dataKey="name" tick={{ fill: '#93A6BC', fontSize: 11 }} stroke="#1B324A" width={100} />
                <Tooltip
                  contentStyle={{ background: '#0D1B2A', border: '1px solid #1B324A', borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: '#E7EEF6' }}
                />
                <Bar dataKey="value" fill="#33C7E8" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <div className="flex flex-col gap-4">
          <div style={{ height: 300 }}>
            <MapView
              layers={{ hazards: true, habitations: true, sites: false, route: false }}
              selectedHabitationId={activeId}
              onSelectHabitation={onSelectHabitation}
              flyTarget={[h.lat, h.lng]}
            />
          </div>
          <Panel className="p-4">
            <div className="text-[13px] font-semibold mb-2">Spatial relationship to hazard zone</div>
            <p className="text-[12.5px] text-ink-dim leading-relaxed">
              {h.name} falls within or immediately adjacent to{' '}
              {hazardZones.find((z) => z.level === h.riskLevel)?.label || 'a mapped hazard zone'},
              placing {h.vulnerablePopulation.toLocaleString()} vulnerable residents inside the
              zone's estimated impact footprint. This overlay of habitation and hazard geometry is
              what triggers the relocation-assessment workflow.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  );
}
