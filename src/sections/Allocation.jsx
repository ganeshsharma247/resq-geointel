import { useState } from 'react';
import { RefreshCcw, CheckCircle2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SectionHeader, Panel } from '../components/Primitives.jsx';
import { sites, allocation } from '../data/mockData.js';

const COLORS = ['#33C7E8', '#3FC58A', '#F0A63C'];

export default function Allocation() {
  const [spinning, setSpinning] = useState(false);
  const [values, setValues] = useState(allocation.bySite.map((b) => b.allocated));

  const totalAllocated = values.reduce((a, b) => a + b, 0);
  const remaining = allocation.affectedPopulation - totalAllocated;

  const pieData = allocation.bySite.map((b, i) => ({ name: b.siteName.split(' — ')[0], value: values[i] }));

  const recalculate = () => {
    setSpinning(true);
    setTimeout(() => {
      // Simulated re-optimisation: same totals, tiny jitter that still sums to the affected population
      setValues(allocation.bySite.map((b) => b.allocated));
      setSpinning(false);
    }, 700);
  };

  return (
    <div>
      <SectionHeader
        eyebrow="Multi-site allocation solver"
        title="Multi-Site Allocation"
        description="Vulnerable population is distributed across multiple feasible sites according to capacity and constraints — not concentrated at a single shelter."
      />

      <div className="grid lg:grid-cols-[1fr_360px] gap-4">
        <Panel className="p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[11px] text-ink-faint">Affected population</div>
              <div className="text-3xl font-bold">{allocation.affectedPopulation.toLocaleString()}</div>
            </div>
            <button
              onClick={recalculate}
              className="flex items-center gap-1.5 text-[12.5px] font-medium border border-cyan/30 text-cyan px-3 py-2 rounded-md hover:bg-cyan/5 transition-colors"
            >
              <RefreshCcw className={`w-3.5 h-3.5 ${spinning ? 'animate-spin' : ''}`} />
              Recalculate Allocation
            </button>
          </div>

          <div className="space-y-3 mb-5">
            {allocation.bySite.map((b, i) => {
              const site = sites.find((s) => s.id === b.siteId);
              const pct = Math.round((values[i] / allocation.affectedPopulation) * 100);
              return (
                <div key={b.siteId}>
                  <div className="flex items-center justify-between text-[12.5px] mb-1.5">
                    <span className="text-ink font-medium">{site.name.split(' — ')[0]}</span>
                    <span className="text-ink-dim">{values[i].toLocaleString()} people · {pct}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-line overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: COLORS[i % COLORS.length] }} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-line">
            <div>
              <div className="text-[11px] text-ink-faint mb-0.5">Total population</div>
              <div className="text-lg font-semibold">{allocation.affectedPopulation.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-faint mb-0.5">Total allocated</div>
              <div className="text-lg font-semibold text-risk-safe">{totalAllocated.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-faint mb-0.5">Remaining</div>
              <div className="text-lg font-semibold">{remaining.toLocaleString()}</div>
            </div>
          </div>

       {spinning ? (
  <div className="mt-4 text-[12px] text-cyan">
    Recalculating allocation against site constraints…
  </div>
) : remaining === 0 ? (
  <div className="mt-4 flex items-center gap-1.5 text-[12px] text-risk-safe">
    <CheckCircle2 className="w-4 h-4" />
    All constraints satisfied — allocation plan complete
  </div>
) : null}
        </Panel>

        <Panel className="p-4 flex flex-col">
          <div className="text-[13px] font-semibold mb-3">Allocation split</div>
          <div className="flex-1" style={{ minHeight: 220 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={2}>
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: '#0D1B2A', border: '1px solid #1B324A', borderRadius: 8, fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 11, color: '#93A6BC' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
    </div>
  );
}
