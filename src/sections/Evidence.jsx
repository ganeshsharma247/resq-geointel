import { CheckCircle2, Database, Sliders, Boxes, GitMerge, Route as RouteIcon, ShieldAlert } from 'lucide-react';
import { SectionHeader, Panel } from '../components/Primitives.jsx';
import { evidence } from '../data/mockData.js';

export default function Evidence() {
  return (
    <div>
      <SectionHeader
        eyebrow="Transparency"
        title="Evidence & Explainability"
        description="RESQ-GeoIntel does not behave like a black box. Every recommendation is backed by visible data sources, model weights and assumptions."
      />

      <Panel className="p-4 mb-4 border-cyan/25 bg-cyan/5">
        <div className="text-[12px] text-ink-faint mb-1">Recommendation</div>
        <div className="text-[14px] font-medium mb-3">{evidence.recommendation}</div>
        <div className="grid sm:grid-cols-2 gap-1.5">
          {evidence.checks.map((c) => (
            <div key={c} className="flex items-center gap-1.5 text-[12px] text-ink-dim">
              <CheckCircle2 className="w-3.5 h-3.5 text-risk-safe shrink-0" /> {c}
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <Panel className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-4 h-4 text-cyan" />
            <span className="text-[13px] font-semibold">Data sources</span>
          </div>
          <div className="space-y-2">
            {evidence.dataSources.map((d) => (
              <div key={d.name} className="flex items-center justify-between text-[12px] border-b border-line/60 pb-2">
                <div>
                  <div className="text-ink">{d.name}</div>
                  <div className="text-ink-faint">{d.role}</div>
                </div>
                <span className="text-risk-safe text-[11px]">{d.status}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sliders className="w-4 h-4 text-cyan" />
            <span className="text-[13px] font-semibold">Risk model</span>
          </div>
          <div className="space-y-2.5">
            {evidence.riskModel.criteria.map((c, i) => (
              <div key={c}>
                <div className="flex items-center justify-between text-[12px] mb-1">
                  <span className="text-ink-dim">{c}</span>
                  <span className="text-ink">{evidence.riskModel.weights[i]}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-line overflow-hidden">
                  <div className="h-full rounded-full bg-cyan" style={{ width: `${evidence.riskModel.weights[i]}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <LogicCard icon={Boxes} title="Capacity assumptions" items={[
          'Sphere-based minimum floor-space constraint',
          'Sphere-based water and sanitation constraints',
          'Site capacity shown from prototype demo data',
        ]} />
        <LogicCard icon={GitMerge} title="Allocation logic" items={[
          'Constrained multi-site optimisation',
          'Population and per-site capacity limits',
          'No single site absorbs the full population',
        ]} />
        <LogicCard icon={RouteIcon} title="Routing logic" items={[
          'Road-network based pathfinding',
          'Hazard-zone avoidance constraint',
          'Shortest safe path, not shortest path',
        ]} />
      </div>

      <Panel className="p-4">
        <div className="text-[13px] font-semibold mb-2">Assumptions</div>
        <ul className="space-y-1.5">
          {evidence.assumptions.map((a) => (
            <li key={a} className="text-[12px] text-ink-dim flex items-start gap-1.5">
              <span className="text-ink-faint mt-0.5">·</span> {a}
            </li>
          ))}
        </ul>
      </Panel>

      <div className="mt-4 flex items-start gap-2.5 border border-risk-med/30 bg-risk-med/5 rounded-lg p-3.5">
        <ShieldAlert className="w-4 h-4 text-risk-med shrink-0 mt-0.5" />
        <p className="text-[12px] text-ink-dim leading-relaxed">
          AI / model output is decision support and must be reviewed by authorised officials.
          RESQ-GeoIntel supports human decision-making — it does not replace the authority of
          district disaster-management officials.
        </p>
      </div>
    </div>
  );
}

function LogicCard({ icon: Icon, title, items }) {
  return (
    <Panel className="p-4">
      <div className="flex items-center gap-2 mb-2.5">
        <Icon className="w-4 h-4 text-cyan" />
        <span className="text-[13px] font-semibold">{title}</span>
      </div>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it} className="text-[12px] text-ink-dim">· {it}</li>
        ))}
      </ul>
    </Panel>
  );
}
