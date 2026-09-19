import { CheckCircle2, MapPin, Navigation } from 'lucide-react';
import { SectionHeader, Panel } from '../components/Primitives.jsx';
import MapView from '../components/MapView.jsx';
import { sites } from '../data/mockData.js';

export default function Sites({ selectedSiteId, onSelectSite, onNavigate }) {
  const activeId = selectedSiteId || sites[0].id;
  const site = sites.find((s) => s.id === activeId);

  return (
    <div>
      <SectionHeader
        eyebrow="Safe-site assessment"
        title="Relocation Sites"
        description="Candidate sites are evaluated on distance, accessibility, hazard exposure, available facilities and road connectivity — not proximity alone."
      />

      <div className="grid lg:grid-cols-[1fr_360px] gap-4">
        <div className="space-y-4">
          <div style={{ height: 300 }}>
            <MapView
              layers={{ hazards: true, habitations: true, sites: true, route: false }}
              selectedSiteId={activeId}
              onSelectSite={onSelectSite}
              flyTarget={[site.lat, site.lng]}
            />
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {sites.map((s) => {
              const available = s.capacity - s.requiredAllocation;
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectSite(s.id)}
                  className={`text-left p-3.5 rounded-xl border transition-colors bg-panel
                  ${isActive ? 'border-cyan/50 ring-1 ring-cyan/20' : 'border-line hover:border-cyan/30'}`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[12px] text-ink-faint">{s.id.replace('SITE-', 'Site ')}</span>
                    <span className="text-[11px] font-mono text-risk-safe">Suitability {s.suitability}</span>
                  </div>
                  <div className="text-[13px] font-medium mb-2 leading-snug">{s.name}</div>
                  <div className="grid grid-cols-2 gap-y-1 text-[11.5px] text-ink-dim">
                    <span>Distance</span><span className="text-ink text-right">{s.distanceKm} km</span>
                    <span>Capacity</span><span className="text-ink text-right">{s.capacity.toLocaleString()}</span>
                    <span>Required</span><span className="text-ink text-right">{s.requiredAllocation.toLocaleString()}</span>
                    <span>Available</span><span className="text-risk-safe text-right">{available.toLocaleString()}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <Panel className="p-4 h-fit sticky top-0">
          <div className="flex items-center gap-1.5 text-[12px] text-ink-faint mb-1">
            <MapPin className="w-3.5 h-3.5" /> {site.distanceKm} km from H-17
          </div>
          <div className="text-[15px] font-semibold mb-4 leading-snug">{site.name}</div>

          <dl className="space-y-2.5 text-[12.5px] mb-4">
            <Row k="Current capacity" v={site.capacity.toLocaleString()} />
            <Row k="Required capacity" v={site.requiredAllocation.toLocaleString()} />
            <Row k="Available capacity" v={(site.capacity - site.requiredAllocation).toLocaleString()} accent="text-risk-safe" />
            <Row k="Accessibility" v={site.accessibility} />
            <Row k="Road connectivity" v={site.roadConnectivity} />
            <Row k="Hazard risk" v={site.hazardRisk} accent="text-risk-safe" />
          </dl>

          <div className="mb-4">
            <div className="text-[11px] text-ink-faint mb-1.5">Facilities</div>
            <div className="flex flex-wrap gap-1.5">
              {site.facilities.map((f) => (
                <span key={f} className="flex items-center gap-1 text-[11px] bg-base border border-line rounded-full px-2 py-0.5 text-ink-dim">
                  <CheckCircle2 className="w-3 h-3 text-risk-safe" /> {f}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('capacity')}
            className="w-full flex items-center justify-center gap-1.5 bg-cyan text-[#04141E] text-[12.5px] font-semibold py-2.5 rounded-md hover:bg-cyan-soft transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" /> Check capacity
          </button>
        </Panel>
      </div>
    </div>
  );
}

function Row({ k, v, accent }) {
  return (
    <div className="flex items-center justify-between border-b border-line/60 pb-2">
      <dt className="text-ink-faint">{k}</dt>
      <dd className={`font-medium ${accent || 'text-ink'}`}>{v}</dd>
    </div>
  );
}
