import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Recommendation } from './constants';

// Fix for default marker icons in Leaflet with Webpack/Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewProps {
  items: Recommendation[];
}

const MapView: React.FC<MapViewProps> = ({ items }) => {
  // Center of Hacienda Pinilla area
  const center: [number, number] = [10.26, -85.84];

  return (
    <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-inner border border-black/5 z-0">
      <MapContainer 
        center={center} 
        zoom={12} 
        scrollWheelZoom={false} 
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Marker key={item.id} position={[item.lat, item.lng]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-serif text-lg mb-1">{item.name}</h3>
                <p className="text-xs text-jungle/60 mb-2">{item.description}</p>
                <div className="text-[10px] font-display tracking-widest uppercase text-gold">
                  {item.category}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
