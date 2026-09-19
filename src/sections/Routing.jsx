import { useState } from 'react';
import { Navigation2, Clock, ShieldCheck, AlertTriangle } from 'lucide-react';
import { SectionHeader, Panel } from '../components/Primitives.jsx';
import MapView from '../components/MapView.jsx';
import { route, habitations, sites } from '../data/mockData.js';

export default function Routing() {
  const [generated, setGenerated] = useState(false);
  const [showAlt, setShowAlt] = useState(false);
  const origin = habitations.find((h) => h.id === route.originId);
  const destination = sites.find((s) => s.id === route.destinationId);

  return (
    <div>
      <SectionHeader
        eyebrow="Hazard-aware navigation"
        title="Hazard-Aware Routing"
        description="The route is chosen for safety, not just distance — the road network is used, but paths that cross mapped hazard zones are avoided."
      />

      <div className="grid lg:grid-cols-[1fr_360px] gap-4">
        <div style={{ height: 460 }}>
          <MapView
            layers={{ hazards: true, habitations: true, sites: true, route: generated }}
            showAlternativeRoute={showAlt}
            flyTarget={[22.716, 75.816]}
          />
        </div>

        <div className="space-y-4">
          <Panel className="p-4">
            <div className="text-[11px] text-ink-faint mb-1">Origin</div>
            <div className="text-[13.5px] font-medium mb-3">{origin.id} · {origin.name.split('— ')[1]}</div>
            <div className="text-[11px] text-ink-faint mb-1">Destination</div>
            <div className="text-[13.5px] font-medium mb-4">{destination.name}</div>

            {!generated ? (
              <button
                onClick={() => setGenerated(true)}
                className="w-full flex items-center justify-center gap-1.5 bg-cyan text-[#04141E] text-[12.5px] font-semibold py-2.5 rounded-md hover:bg-cyan-soft transition-colors"
              >
                <Navigation2 className="w-3.5 h-3.5" /> Generate Route
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Stat icon={Navigation2} label="Route distance" value={`${route.distanceKm} km`} />
                <Stat icon={Clock} label="Travel time" value={`${route.travelTimeMin} min`} />
                <Stat icon={ShieldCheck} label="Hazard exposure" value={route.hazardExposure} accent="text-risk-safe" />
                <Stat icon={ShieldCheck} label="Route status" value={route.status} accent="text-risk-safe" />
              </div>
            )}
          </Panel>

          {generated && (
            <Panel className="p-4">
              <div className="text-[12.5px] font-semibold mb-2">Hazard zones avoided</div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {route.hazardZonesAvoided.map((z) => (
                  <span key={z} className="text-[11px] bg-risk-high/10 text-risk-high border border-risk-high/25 rounded-full px-2 py-0.5">
                    {z}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setShowAlt((v) => !v)}
                className="w-full text-[12px] text-ink-dim border border-line rounded-md py-2 hover:border-cyan/30 transition-colors"
              >
                {showAlt ? 'Hide' : 'Show'} shortest-path alternative
              </button>

              {showAlt && (
                <div className="mt-3 border border-risk-high/25 bg-risk-high/5 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-[12px] text-risk-high font-medium mb-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> {route.alternative.label}
                  </div>
                  <div className="text-[11.5px] text-ink-dim leading-relaxed">
                    {route.alternative.distanceKm} km · {route.alternative.travelTimeMin} min ·
                    {' '}hazard exposure {route.alternative.hazardExposure}.{' '}
                    {route.alternative.status}. Shorter, but rejected by the hazard-aware router.
                  </div>
                </div>
              )}
            </Panel>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value, accent }) {
  return (
    <div className="border border-line rounded-lg p-3 bg-base/50">
      <Icon className="w-3.5 h-3.5 text-ink-faint mb-1.5" />
      <div className="text-[11px] text-ink-faint mb-0.5">{label}</div>
      <div className={`text-[13.5px] font-semibold ${accent || 'text-ink'}`}>{value}</div>
    </div>
  );
}
