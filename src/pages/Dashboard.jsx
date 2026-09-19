import { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import TopBar from '../components/TopBar.jsx';
import Overview from '../sections/Overview.jsx';
import RiskMap from '../sections/RiskMap.jsx';
import Exposure from '../sections/Exposure.jsx';
import Sites from '../sections/Sites.jsx';
import Capacity from '../sections/Capacity.jsx';
import Allocation from '../sections/Allocation.jsx';
import Routing from '../sections/Routing.jsx';
import Evidence from '../sections/Evidence.jsx';
import SystemStatus from '../sections/SystemStatus.jsx';
import { focusHabitationId, sites as sitesData } from '../data/mockData.js';

export default function Dashboard() {
  const [active, setActive] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [online, setOnline] = useState(true);
  const [selectedHabitationId, setSelectedHabitationId] = useState(focusHabitationId);
  const [selectedSiteId, setSelectedSiteId] = useState(sitesData[0].id);

  const renderSection = () => {
    switch (active) {
      case 'overview':
        return <Overview onNavigate={setActive} onSelectHabitation={setSelectedHabitationId} />;
      case 'risk-map':
        return <RiskMap selectedHabitationId={selectedHabitationId} onSelectHabitation={setSelectedHabitationId} />;
      case 'exposure':
        return <Exposure selectedHabitationId={selectedHabitationId} onSelectHabitation={setSelectedHabitationId} />;
      case 'sites':
        return <Sites selectedSiteId={selectedSiteId} onSelectSite={setSelectedSiteId} onNavigate={setActive} />;
      case 'capacity':
        return <Capacity />;
      case 'allocation':
        return <Allocation />;
      case 'routing':
        return <Routing />;
      case 'evidence':
        return <Evidence />;
      case 'status':
        return <SystemStatus online={online} onToggleOnline={() => setOnline((v) => !v)} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex bg-base text-ink overflow-hidden">
      <Sidebar active={active} onSelect={setActive} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar onMenuClick={() => setSidebarOpen(true)} online={online} onToggleOnline={() => setOnline((v) => !v)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-5">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}
