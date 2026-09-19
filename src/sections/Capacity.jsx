import { CheckCircle2, Droplet, Ruler, ToiletIcon } from 'lucide-react';
import { SectionHeader, Panel } from '../components/Primitives.jsx';
import { sites, sphereStandards, allocation } from '../data/mockData.js';

export default function Capacity() {
  const totalCapacity = sites.reduce((s, x) => s + x.capacity, 0);
  const totalRequired = sites.reduce((s, x) => s + x.requiredAllocation, 0);
  const utilization = Math.round((totalRequired / totalCapacity) * 100);

  return (
    <div>
      <SectionHeader
        eyebrow="Sphere-based capacity engine"
        title="Capacity Validation"
        description="Each candidate site's rated capacity is checked against humanitarian minimum requirements before it is accepted into the allocation plan."
      />

      <div className="grid lg:grid-cols-3 gap-3 mb-5">
        <Panel className="p-4">
          <div className="text-[11px] text-ink-faint mb-1">Affected population</div>
          <div className="text-2xl font-bold">{allocation.affectedPopulation.toLocaleString()}</div>
        </Panel>
        <Panel className="p-4">
          <div className="text-[11px] text-ink-faint mb-1">Total available capacity</div>
          <div className="text-2xl font-bold text-cyan">{totalCapacity.toLocaleString()}</div>
        </Panel>
        <Panel className="p-4">
          <div className="text-[11px] text-ink-faint mb-1">Capacity utilization</div>
          <div className="text-2xl font-bold text-risk-safe">{utilization}%</div>
        </Panel>
      </div>

      <div className="grid lg:grid-cols-3 gap-3 mb-6">
        {sites.map((s) => {
          const util = Math.round((s.requiredAllocation / s.capacity) * 100);
          const sufficient = s.capacity >= s.requiredAllocation;
          return (
            <Panel key={s.id} className="p-4">
              <div className="text-[12px] text-ink-faint mb-1">{s.id.replace('SITE-', 'Site ')}</div>
              <div className="text-[13.5px] font-medium mb-3 leading-snug">{s.name}</div>

              <div className="grid grid-cols-2 gap-y-1.5 text-[12px] mb-3">
                <span className="text-ink-faint">Required capacity</span>
                <span className="text-right">{s.requiredAllocation.toLocaleString()}</span>
                <span className="text-ink-faint">Available capacity</span>
                <span className="text-right">{s.capacity.toLocaleString()}</span>
                <span className="text-ink-faint">Utilization</span>
                <span className="text-right">{util}%</span>
              </div>

              <div className="h-1.5 rounded-full bg-line overflow-hidden mb-3">
                <div
                  className={`h-full rounded-full ${sufficient ? 'bg-risk-safe' : 'bg-risk-high'}`}
                  style={{ width: `${Math.min(util, 100)}%` }}
                />
              </div>

              <span
                className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border
                ${sufficient ? 'text-risk-safe bg-risk-safe/10 border-risk-safe/30' : 'text-risk-high bg-risk-high/10 border-risk-high/30'}`}
              >
                <CheckCircle2 className="w-3 h-3" /> {sufficient ? 'CAPACITY SUFFICIENT' : 'CAPACITY INSUFFICIENT'}
              </span>
            </Panel>
          );
        })}
      </div>

      <Panel className="p-5">
        <div className="text-[13px] font-semibold mb-1">Humanitarian minimum standards applied</div>
        <p className="text-[12px] text-ink-dim mb-4">
          Capacity constraints are derived from the Sphere Handbook's minimum standards, converted
          into per-site occupancy limits rather than assumed head counts.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          <StandardCard
            icon={Ruler}
            label="Covered floor space"
            value={`${sphereStandards.coveredFloorSpacePerPerson} m² / person`}
          />
          <StandardCard
            icon={ToiletIcon}
            label="Toilet ratio"
            value={`1 : ${sphereStandards.toiletRatio} people`}
          />
          <StandardCard
            icon={Droplet}
            label="Water minimum"
            value={`${sphereStandards.waterLitersPerPersonPerDay} L / person / day`}
          />
        </div>
      </Panel>
    </div>
  );
}

function StandardCard({ icon: Icon, label, value }) {
  return (
    <div className="border border-line rounded-lg p-3.5 bg-base/50">
      <Icon className="w-4 h-4 text-cyan mb-2" />
      <div className="text-[11px] text-ink-faint mb-0.5">{label}</div>
      <div className="text-[13.5px] font-semibold">{value}</div>
    </div>
  );
}
