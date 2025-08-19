// components/RouteMap.js
'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icons (as shown in previous examples)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const RouteMap = ({ route }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!route || !route.places || route.places.length === 0) return;

    // Initialize map only once
    if (!mapInstanceRef.current) {
      const firstPlace = route.places[0];
      const map = L.map(mapRef.current).setView([firstPlace.lat, firstPlace.lng], 8);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear previous layers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    // Add markers for each place
    const markers = [];
    route.places.forEach((place, index) => {
      const marker = L.marker([place.lat, place.lng])
        .addTo(map)
        .bindPopup(`<b>Day ${index + 1}:</b> ${place.displayName}`);
      
      markers.push(marker);
    });

    // Create a simple polyline connecting the points
    // Note: This is a straight line. For real routes, you'd use a routing service.
    const latlngs = route.places.map(place => [place.lat, place.lng]);
    const polyline = L.polyline(latlngs, { color: '#8B5CF6' }).addTo(map);

    // Fit map to bounds
    if (markers.length > 0) {
      const group = new L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1));
    }

  }, [route]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} className="rounded-xl" />;
};

export default RouteMap;