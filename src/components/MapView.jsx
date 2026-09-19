import { MapContainer, TileLayer, Polygon, CircleMarker, Polyline, Tooltip, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { hazardZones, habitations, sites, route } from '../data/mockData.js';

const ZONE_COLORS = {
  high: '#E8544A',
  medium: '#F0A63C',
  safe: '#3FC58A',
};

function FlyTo({ target }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo(target, 14, { duration: 0.6 });
  }, [target, map]);
  return null;
}

export default function MapView({
  layers = { hazards: true, habitations: true, sites: true, route: false },
  selectedHabitationId,
  selectedSiteId,
  onSelectHabitation,
  onSelectSite,
  flyTarget,
  showAlternativeRoute = false,
  height = '100%',
}) {
  return (
    <div style={{ height, width: '100%' }} className="rounded-xl overflow-hidden border border-line">
      <MapContainer
        center={[22.726, 75.818]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom
      >
        <TileLayer
  attribution='&copy; OpenStreetMap contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
        {layers.hazards && hazardZones.map((z) => (
          <Polygon
            key={z.id}
            positions={z.coords}
            pathOptions={{
              color: ZONE_COLORS[z.level],
              weight: 1.5,
              fillColor: ZONE_COLORS[z.level],
              fillOpacity: z.level === 'high' ? 0.22 : z.level === 'medium' ? 0.16 : 0.1,
            }}
          >
            <Tooltip sticky>{z.label}</Tooltip>
          </Polygon>
        ))}

        {layers.habitations && habitations.map((h) => (
          <CircleMarker
            key={h.id}
            center={[h.lat, h.lng]}
            radius={selectedHabitationId === h.id ? 11 : 8}
            pathOptions={{
              color: '#fff',
              weight: selectedHabitationId === h.id ? 2.5 : 1.5,
              fillColor: h.riskLevel === 'high' ? ZONE_COLORS.high : h.riskLevel === 'medium' ? ZONE_COLORS.medium : ZONE_COLORS.safe,
              fillOpacity: 0.9,
            }}
            eventHandlers={onSelectHabitation ? { click: () => onSelectHabitation(h.id) } : undefined}
          >
            <Tooltip direction="top" offset={[0, -6]}>
              {h.id} · Risk {h.riskScore} · Pop {h.population.toLocaleString()}
            </Tooltip>
          </CircleMarker>
        ))}

        {layers.sites && sites.map((s) => (
          <CircleMarker
            key={s.id}
            center={[s.lat, s.lng]}
            radius={selectedSiteId === s.id ? 10 : 7}
            pathOptions={{
              color: '#33C7E8',
              weight: selectedSiteId === s.id ? 2.5 : 1.5,
              fillColor: '#0D1B2A',
              fillOpacity: 0.9,
            }}
            eventHandlers={onSelectSite ? { click: () => onSelectSite(s.id) } : undefined}
          >
            <Tooltip direction="top" offset={[0, -6]}>
              {s.name} · {s.capacity.toLocaleString()} capacity
            </Tooltip>
          </CircleMarker>
        ))}

        {layers.route && (
          <>
            <Polyline positions={route.path} pathOptions={{ color: '#33C7E8', weight: 4, opacity: 0.9 }} />
            {showAlternativeRoute && (
              <Polyline
                positions={route.alternative.path}
                pathOptions={{ color: '#E8544A', weight: 3, opacity: 0.6, dashArray: '6 6' }}
              />
            )}
          </>
        )}

        <FlyTo target={flyTarget} />
      </MapContainer>
    </div>
  );
}
