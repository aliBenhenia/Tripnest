// app/route-planner/page.js
'use client';

import { useState, useEffect } from 'react';
import { Button, Input, Card, Typography, Spin, Alert, List, Tag } from 'antd';
import { 
  MapPin, 
  Plus, 
  Trash2, 
  Route, 
  Clock, 
  Bed,
  Car,
  Train,
  Plane,
  Loader
} from 'lucide-react';

const { Title, Text } = Typography;

// Separate component for the map to handle client-side logic cleanly and avoid SSR issues
const RouteMap = ({ route }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const polylinesRef = useRef([]);

  useEffect(() => {
    // Ensure this only runs on the client
    if (typeof window === 'undefined' || !route || !route.places || route.places.length === 0) {
      return;
    }

    const initOrRefreshMap = async () => {
      // Dynamically import Leaflet only on the client
      let L;
      try {
        L = (await import('leaflet')).default;
      } catch (error) {
        console.error("Leaflet failed to load:", error);
        return;
      }

      // Fix Leaflet marker icons
      if (!L.Icon.Default.prototype._getIconUrl) {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });
      }

      // Initialize map if not already done
      if (!mapInstanceRef.current) {
        if (!mapContainerRef.current) {
          console.error("Map container not found");
          return;
        }
        
        const firstPlace = route.places[0];
        const map = L.map(mapContainerRef.current).setView([firstPlace.lat, firstPlace.lng], 8);
        
        // Use CartoDB Voyager tiles (no API key required, looks nice)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19
        }).addTo(map);

        mapInstanceRef.current = map;
      }

      const map = mapInstanceRef.current;

      // Clear previous layers
      try {
        markersRef.current.forEach(marker => {
          if (map.hasLayer(marker)) {
            map.removeLayer(marker);
          }
        });
        polylinesRef.current.forEach(polyline => {
          if (map.hasLayer(polyline)) {
            map.removeLayer(polyline);
          }
        });
      } catch (e) {
        console.warn("Error clearing previous layers:", e);
      }
      
      markersRef.current = [];
      polylinesRef.current = [];

      // Add markers for each place
      route.places.forEach((place, index) => {
        try {
          const marker = L.marker([place.lat, place.lng])
            .addTo(map)
            .bindPopup(`<b>Stop ${index + 1}:</b><br/>${place.displayName || place.name}`);
          
          markersRef.current.push(marker);
        } catch (e) {
          console.error("Error adding marker:", e);
        }
      });

      // Draw route lines between consecutive points with nice styling
      route.legs.forEach((leg) => {
        if (leg.routeCoordinates && leg.routeCoordinates.length > 0) {
          try {
            const polyline = L.polyline(leg.routeCoordinates, { 
              color: '#8B5CF6', // Purple color
              weight: 6,
              opacity: 0.9,
              lineCap: 'round',
              lineJoin: 'round',
              dashArray: '10, 10' // Dashed line for visual interest
            }).addTo(map);
            
            polylinesRef.current.push(polyline);
          } catch (e) {
            console.error("Error creating polyline:", e);
          }
        }
      });

      // Fit map to bounds
      try {
        if (markersRef.current.length > 0) {
          const group = new L.featureGroup(markersRef.current);
          map.fitBounds(group.getBounds().pad(0.1));
        }
      } catch (e) {
        console.error("Error fitting bounds:", e);
        // Fallback: set view to first point
        if (route.places.length > 0) {
          map.setView([route.places[0].lat, route.places[0].lng], 8);
        }
      }
    };

    // Use a small timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      initOrRefreshMap();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [route]); // Re-run when route changes

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          console.warn("Error removing map:", e);
        }
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      style={{ height: '100%', width: '100%', minHeight: '300px' }} 
      className="rounded-xl"
    />
  );
};

// Dynamically import the map component to prevent SSR issues
const MapWithNoSSR = dynamic(
  () => Promise.resolve(RouteMap),
  { 
    ssr: false, 
    loading: () => (
      <div className="h-full w-full flex items-center justify-center bg-gray-100 rounded-xl">
        <Loader className="animate-spin text-blue-500 w-8 h-8" />
      </div>
    )
  }
);

import dynamic from 'next/dynamic';
import { useRef } from 'react';

export default function MultiDayRoutePlanner() {
  const [isClient, setIsClient] = useState(false);
  const [destinations, setDestinations] = useState([{ id: 1, name: '' }]);
  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Hydration safety check
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Spin indicator={<Loader className="animate-spin h-8 w-8 text-blue-500" />} />
      </div>
    );
  }

  const addDestination = () => {
    setDestinations([...destinations, { id: Date.now(), name: '' }]);
  };

  const removeDestination = (id) => {
    if (destinations.length > 1) {
      setDestinations(destinations.filter(dest => dest.id !== id));
    }
  };

  const updateDestination = (id, value) => {
    setDestinations(destinations.map(dest => 
      dest.id === id ? { ...dest, name: value } : dest
    ));
  };

  // Fetch real route data using OSRM
  const fetchRouteBetweenPoints = async (from, to) => {
    try {
      // OSRM public demo server (rate-limited, no API key)
      const url = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`OSRM API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
        throw new Error('No route found');
      }
      
      // Extract coordinates from the route geometry
      const routeCoordinates = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
      const distance = data.routes[0].distance / 1000; // Convert to km
      const duration = data.routes[0].duration / 3600; // Convert to hours
      
      return {
        coordinates: routeCoordinates,
        distance: Math.round(distance),
        duration: duration
      };
    } catch (error) {
      console.error('Routing error:', error);
      // Fallback to straight line if routing fails
      return {
        coordinates: [[from.lat, from.lng], [to.lat, to.lng]],
        distance: Math.sqrt(
          Math.pow(to.lat - from.lat, 2) + Math.pow(to.lng - from.lng, 2)
        ) * 111,
        duration: 0
      };
    }
  };

  const calculateRoute = async () => {
    const validDestinations = destinations.filter(d => d.name.trim() !== '');
    
    if (validDestinations.length < 2) {
      setError('Please enter at least two destinations.');
      return;
    }

    setLoading(true);
    setError('');
    setRoute(null);

    try {
      // 1. Geocode all destinations using Nominatim (no API key)
      const geocodedPlaces = [];
      for (const dest of validDestinations) {
        // Respect Nominatim usage policy with a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const geoResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(dest.name)}&format=json&limit=1`,
          { headers: { 'User-Agent': 'RoutePlanner/1.0 (educational project)' } }
        );
        
        if (!geoResponse.ok) throw new Error(`Failed to geocode ${dest.name}`);
        
        const geoData = await geoResponse.json();
        if (geoData.length > 0) {
          const { lat, lon, display_name } = geoData[0];
          geocodedPlaces.push({
            name: dest.name,
            displayName: display_name,
            lat: parseFloat(lat),
            lng: parseFloat(lon)
          });
        } else {
          throw new Error(`Location not found: ${dest.name}`);
        }
      }

      // 2. Calculate routes between consecutive points using OSRM (no API key)
      const legs = [];
      for (let i = 0; i < geocodedPlaces.length - 1; i++) {
        const from = geocodedPlaces[i];
        const to = geocodedPlaces[i + 1];
        
        // Get real route from OSRM
        const routeData = await fetchRouteBetweenPoints(
          { lat: from.lat, lng: from.lng },
          { lat: to.lat, lng: to.lng }
        );
        
        legs.push({
          from: from.name,
          to: to.name,
          distance: routeData.distance,
          travelTime: `${Math.floor(routeData.duration)}h ${Math.round((routeData.duration % 1) * 60)}m`,
          routeCoordinates: routeData.coordinates
        });
      }

      // 3. Create day plan
      const days = geocodedPlaces.map((place, index) => ({
        day: index + 1,
        destination: place.displayName,
        lat: place.lat,
        lng: place.lng,
        accommodation: `Hotel near ${place.name}`
      }));

      setRoute({
        places: geocodedPlaces,
        legs,
        days
      });

    } catch (err) {
      console.error('Routing error:', err);
      setError(err.message || 'Failed to calculate route. Please check your destinations and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Title level={1} className="text-center mb-2 text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🗺️ Multi-Day Route Planner
        </Title>
        <Text className="text-center block mb-8 text-gray-600 text-base md:text-lg">
          Plan your trip across multiple cities with optimized routes
        </Text>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div>
            <Card className="shadow-xl bg-white/80 backdrop-blur-sm border-0 rounded-2xl mb-6">
              <div className="flex items-center justify-between mb-6">
                <Title level={3} className="flex items-center gap-2 text-gray-800">
                  <Route className="w-6 h-6" /> Your Destinations
                </Title>
                <Button 
                  onClick={addDestination}
                  icon={<Plus className="w-4 h-4" />}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 hover:from-green-600 hover:to-blue-600"
                >
                  Add Destination
                </Button>
              </div>

              <div className="space-y-4">
                {destinations.map((dest, index) => (
                  <div key={dest.id} className="flex gap-2">
                    <Input
                      size="large"
                      placeholder={`e.g., City ${index + 1}`}
                      value={dest.name}
                      onChange={(e) => updateDestination(dest.id, e.target.value)}
                      className="flex-1 rounded-lg"
                      prefix={<MapPin className="w-4 h-4 text-gray-400" />}
                    />
                    {destinations.length > 1 && (
                      <Button
                        icon={<Trash2 className="w-4 h-4" />}
                        onClick={() => removeDestination(dest.id)}
                        danger
                      />
                    )}
                  </div>
                ))}
              </div>

              <Button
                type="primary"
                size="large"
                onClick={calculateRoute}
                loading={loading}
                disabled={loading}
                className="w-full mt-6 h-12 bg-gradient-to-r from-blue-500 to-purple-600 border-0 rounded-lg text-base font-semibold hover:from-blue-600 hover:to-purple-700"
              >
                {loading ? 'Calculating Route...' : 'Plan My Route'}
              </Button>
            </Card>

            {error && (
              <Alert
                message="Error"
                description={error}
                type="error"
                showIcon
                className="mb-6 rounded-2xl"
              />
            )}

            {/* Route Details */}
            {route && !loading && (
              <Card className="shadow-xl bg-white rounded-2xl border-0">
                <Title level={3} className="flex items-center gap-2 text-gray-800 mb-4">
                  <Clock className="w-5 h-5" /> Route Summary
                </Title>
                
                <List
                  itemLayout="horizontal"
                  dataSource={route.legs}
                  renderItem={(leg) => (
                    <List.Item className="py-3 px-2 hover:bg-gray-50 rounded-lg">
                      <List.Item.Meta
                        avatar={
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                            <Car className="w-5 h-5" />
                          </div>
                        }
                        title={
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{leg.from} → {leg.to}</span>
                            <Tag color="blue">{leg.distance} km</Tag>
                          </div>
                        }
                        description={
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-gray-600 flex items-center gap-1">
                              <Clock className="w-4 h-4" /> {leg.travelTime}
                            </span>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            )}
          </div>

          {/* Map and Results Section */}
          <div>
            <Card className="shadow-xl bg-white rounded-2xl border-0 h-full flex flex-col">
              <Title level={3} className="flex items-center gap-2 text-gray-800 mb-4">
                <MapPin className="w-5 h-5" /> Your Route Map
              </Title>
              
              <div className="bg-gray-100 rounded-xl overflow-hidden flex-grow h-96 mb-6 relative">
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 z-10">
                    <div className="text-center">
                      <Spin indicator={<Loader className="animate-spin h-8 w-8 text-blue-500" />} />
                      <p className="mt-2 text-gray-600">Calculating your route...</p>
                    </div>
                  </div>
                ) : route ? (
                  <MapWithNoSSR route={route} />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p>Enter your destinations and click "Plan My Route"</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Day-by-Day Plan */}
              {route && !loading && (
                <div>
                  <Title level={3} className="flex items-center gap-2 text-gray-800 mb-4">
                    <Bed className="w-5 h-5" /> Day-by-Day Plan
                  </Title>
                  
                  <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                    {route.days.map((day) => (
                      <div key={day.day} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <Title level={4} className="text-gray-800 mb-0">Day {day.day}</Title>
                          <Tag color="blue">Destination</Tag>
                        </div>
                        <p className="font-medium text-gray-700">{day.destination}</p>
                        <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                          <Bed className="w-4 h-4" /> Suggested: {day.accommodation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}