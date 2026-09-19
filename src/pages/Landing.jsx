import { Link } from 'react-router-dom';
import {
  Radar, Users, Boxes, Route as RouteIcon, ArrowRight, Play, MapPinned,
} from 'lucide-react';

const capabilities = [
  {
    icon: Radar,
    title: 'Red-Zone Intelligence',
    body: 'Terrain and rainfall indicators combine into an explainable risk score — never a black-box verdict.',
  },
  {
    icon: Users,
    title: 'Exposure Assessment',
    body: 'Every red zone is translated into people: households, children, elderly, and priority level.',
  },
  {
    icon: Boxes,
    title: 'Capacity-Aware Allocation',
    body: 'Sphere-based minimum standards check whether a site can really hold the people sent to it.',
  },
  {
    icon: RouteIcon,
    title: 'Hazard-Aware Routing',
    body: 'Routes are chosen for safety first — steering around mapped hazards, not just the shortest path.',
  },
];

const workflow = [
  'Multi-source data',
  'Red-zone mapping',
  'Vulnerable population exposure',
  'Safe relocation site identification',
  'Site capacity validation',
  'Multi-site population allocation',
  'Hazard-aware routing',
  'Authority decision dashboard',
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-base text-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(51,199,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(51,199,232,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)',
        }}
      />

      {/* Top strip */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <MapPinned className="w-5 h-5 text-cyan" strokeWidth={2} />
          <span className="font-semibold tracking-tight text-[15px]">RESQ-GeoIntel</span>
        </div>
        <div className="text-xs text-ink-faint font-mono hidden sm:block">SIH26191 · TEAM DATHEON</div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan/80 border border-cyan/25 bg-cyan/5 rounded-full px-3 py-1 mb-7">
          Explainable geospatial decision support
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] max-w-3xl mx-auto">
          Intelligent hazard-based relocation decision support
        </h1>
        <p className="mt-5 text-ink-dim text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          RESQ-GeoIntel links hazard identification, population exposure, safer-site selection,
          capacity validation and hazard-aware routing into one authority-facing workflow —
          from red zone to verified relocation plan.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/dashboard"
            className="group inline-flex items-center gap-2 bg-cyan text-[#04141E] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-cyan-soft transition-colors"
          >
            Launch Decision Dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <button
  onClick={() =>
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  className="inline-flex items-center gap-2 border border-line text-ink text-sm px-6 py-3 rounded-lg hover:border-cyan/40 hover:bg-panel transition-colors"
>
  <Play className="w-3.5 h-3.5" />
  View how it works
</button>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="bg-panel border border-line rounded-xl p-5 hover:border-cyan/30 transition-colors shadow-panel"
            >
              <c.icon className="w-5 h-5 text-cyan mb-4" strokeWidth={1.75} />
              <h3 className="text-[15px] font-semibold mb-1.5">{c.title}</h3>
              <p className="text-[13px] text-ink-dim leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative z-10 max-w-6xl mx-auto px-6 pb-24 scroll-mt-10">
        <div className="border border-line rounded-2xl bg-panel/60 p-8">
          <h2 className="text-lg font-semibold mb-1">How the workflow chains together</h2>
          <p className="text-sm text-ink-dim mb-8 max-w-2xl">
            The platform does not stop at showing a hazard map. Every red zone is carried all the
            way through to a routed, capacity-checked relocation decision.
          </p>
          <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-0">
            {workflow.map((step, i) => (
              <div key={step} className="flex md:flex-1 items-center">
                <div className="flex-1 border border-line rounded-lg px-3.5 py-3 bg-base/60 text-[12.5px] text-ink-dim leading-snug min-h-[64px] flex items-center">
                  {step}
                </div>
                {i < workflow.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-ink-faint mx-2 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 max-w-6xl mx-auto px-6 pb-10 text-xs text-ink-faint font-mono flex items-center justify-between">
        <span>RESQ-GeoIntel — Team Datheon</span>
        <span>Decision support only · reviewed by authorised officials</span>
      </footer>
    </div>
  );
}
