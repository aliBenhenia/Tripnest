// app/route-planner/page.js
'use client';

import { useState, useEffect } from 'react';
import { Button, Input, Card, Typography, Spin, Alert, List, Tag, Collapse, Statistic, Divider } from 'antd';
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
  Loader,
  Fuel,
  Euro,
  Wrench,
  Coffee,
  Zap
} from 'lucide-react';

const { Title, Text } = Typography;
const { Panel } = Collapse;

// Separate component for the map
const RouteMap = ({ route }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const polylinesRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !route || !route.places || route.places.length === 0) {
      return;
    }

    const initOrRefreshMap = async () => {
      let L;
      try {
        L = (await import('leaflet')).default;
      } catch (error) {
        console.error("Leaflet failed to load:", error);
        return;
      }

      if (!L.Icon.Default.prototype._getIconUrl) {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });
      }

      if (!mapInstanceRef.current) {
        if (!mapContainerRef.current) return;
        
        const firstPlace = route.places[0];
        const map = L.map(mapContainerRef.current).setView([firstPlace.lat, firstPlace.lng], 8);
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19
        }).addTo(map);

        mapInstanceRef.current = map;
      }

      const map = mapInstanceRef.current;

      try {
        markersRef.current.forEach(marker => map.hasLayer(marker) && map.removeLayer(marker));
        polylinesRef.current.forEach(polyline => map.hasLayer(polyline) && map.removeLayer(polyline));
      } catch (e) { console.warn("Error clearing layers:", e); }
      
      markersRef.current = [];
      polylinesRef.current = [];

      route.places.forEach((place, index) => {
        try {
          const marker = L.marker([place.lat, place.lng])
            .addTo(map)
            .bindPopup(`<b>Stop ${index + 1}:</b><br/>${place.displayName || place.name}`);
          markersRef.current.push(marker);
        } catch (e) { console.error("Error adding marker:", e); }
      });

      route.legs.forEach((leg) => {
        if (leg.routeCoordinates && leg.routeCoordinates.length > 0) {
          try {
            const polyline = L.polyline(leg.routeCoordinates, { 
              color: '#8B5CF6',
              weight: 6,
              opacity: 0.9,
              lineCap: 'round',
              lineJoin: 'round'
            }).addTo(map);
            polylinesRef.current.push(polyline);
          } catch (e) { console.error("Error creating polyline:", e); }
        }
      });

      try {
        if (markersRef.current.length > 0) {
          const group = new L.featureGroup(markersRef.current);
          map.fitBounds(group.getBounds().pad(0.1));
        }
      } catch (e) {
        console.error("Error fitting bounds:", e);
        if (route.places.length > 0) {
          map.setView([route.places[0].lat, route.places[0].lng], 8);
        }
      }
    };

    const timer = setTimeout(initOrRefreshMap, 100);
    return () => clearTimeout(timer);
  }, [route]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        try { mapInstanceRef.current.remove(); } catch (e) { console.warn("Error removing map:", e); }
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

const MapWithNoSSR = dynamic(() => Promise.resolve(RouteMap), { ssr: false, loading: () => <div className="h-full w-full flex items-center justify-center bg-gray-100 rounded-xl"><Loader className="animate-spin text-blue-500 w-8 h-8" /></div> });
import dynamic from 'next/dynamic';
import { useRef } from 'react';

export default function MultiDayRoutePlanner() {
  const [isClient, setIsClient] = useState(false);
  const [destinations, setDestinations] = useState([{ id: 1, name: '' }]);
  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [vehicleType, setVehicleType] = useState('car'); // car, motorcycle, van
  const [fuelPrice, setFuelPrice] = useState(1.5); // € per liter

  useEffect(() => { setIsClient(true); }, []);

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
    setDestinations(destinations.map(dest => dest.id === id ? { ...dest, name: value } : dest));
  };

  // Enhanced route calculation with fuel and time estimates
  const fetchRouteBetweenPoints = async (from, to) => {
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson&steps=true`;
      const response = await fetch(url);
      
      if (!response.ok) throw new Error(`OSRM API error: ${response.status}`);
      
      const data = await response.json();
      
      if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
        throw new Error('No route found');
      }
      
      const route = data.routes[0];
      const distanceKm = route.distance / 1000;
      const durationHours = route.duration / 3600;
      
      // Extract coordinates
      const coordinates = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
      
      // Calculate fuel consumption (simplified)
      let fuelConsumptionPer100Km;
      switch(vehicleType) {
        case 'motorcycle': fuelConsumptionPer100Km = 4; break; // 4L/100km
        case 'van': fuelConsumptionPer100Km = 10; break; // 10L/100km
        default: fuelConsumptionPer100Km = 7; // 7L/100km for car
      }
      
      const fuelNeededLiters = (distanceKm / 100) * fuelConsumptionPer100Km;
      const fuelCost = fuelNeededLiters * fuelPrice;
      
      // Estimate rest stops (15 min every 2 hours)
      const restStops = Math.floor(durationHours / 2);
      const restTimeHours = restStops * 0.25; // 15 minutes each
      
      // Estimate refueling stops (every 400km)
      const refuelStops = Math.floor(distanceKm / 400);
      const refuelTimeHours = refuelStops * 0.17; // 10 minutes each
      
      const totalTimeWithStops = durationHours + restTimeHours + refuelTimeHours;
      
      return {
        coordinates,
        distance: Math.round(distanceKm),
        duration: durationHours,
        fuelNeeded: fuelNeededLiters,
        fuelCost: fuelCost,
        restStops,
        refuelStops,
        totalTimeWithStops
      };
    } catch (error) {
      console.error('Routing error:', error);
      return {
        coordinates: [[from.lat, from.lng], [to.lat, to.lng]],
        distance: Math.sqrt(Math.pow(to.lat - from.lat, 2) + Math.pow(to.lng - from.lng, 2)) * 111,
        duration: 0,
        fuelNeeded: 0,
        fuelCost: 0,
        restStops: 0,
        refuelStops: 0,
        totalTimeWithStops: 0
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
      // Geocode destinations
      const geocodedPlaces = [];
      for (const dest of validDestinations) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const geoResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(dest.name)}&format=json&limit=1`,
          { headers: { 'User-Agent': 'RoutePlanner/1.0' } }
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

      // Calculate routes with enhanced data
      const legs = [];
      let totalDistance = 0;
      let totalFuelCost = 0;
      let totalTravelTime = 0;
      let totalRestStops = 0;
      let totalRefuelStops = 0;

      for (let i = 0; i < geocodedPlaces.length - 1; i++) {
        const from = geocodedPlaces[i];
        const to = geocodedPlaces[i + 1];
        
        const routeData = await fetchRouteBetweenPoints(
          { lat: from.lat, lng: from.lng },
          { lat: to.lat, lng: to.lng }
        );
        
        legs.push({
          from: from.name,
          to: to.name,
          distance: routeData.distance,
          travelTime: `${Math.floor(routeData.duration)}h ${Math.round((routeData.duration % 1) * 60)}m`,
          totalTimeWithStops: routeData.totalTimeWithStops,
          fuelNeeded: routeData.fuelNeeded,
          fuelCost: routeData.fuelCost,
          restStops: routeData.restStops,
          refuelStops: routeData.refuelStops,
          routeCoordinates: routeData.coordinates
        });
        
        totalDistance += routeData.distance;
        totalFuelCost += routeData.fuelCost;
        totalTravelTime += routeData.totalTimeWithStops;
        totalRestStops += routeData.restStops;
        totalRefuelStops += routeData.refuelStops;
      }

      // Create day plan
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
        days,
        summary: {
          totalDistance,
          totalFuelCost,
          totalTravelTime,
          totalRestStops,
          totalRefuelStops,
          vehicleType
        }
      });

    } catch (err) {
      console.error('Routing error:', err);
      setError(err.message || 'Failed to calculate route. Please check your destinations and try again.');
    } finally {
      setLoading(false);
    }
  };

  // Problem-solving suggestions
  const getSuggestions = () => {
    if (!route) return [];
    
    const suggestions = [];
    const summary = route.summary;
    
    if (summary.totalTravelTime > 12) {
      suggestions.push({
        icon: <Coffee className="w-5 h-5 text-blue-500" />,
        title: "Plan Rest Stops",
        description: "Your trip is long. Schedule regular breaks to avoid fatigue."
      });
    }
    
    if (summary.totalFuelCost > 100) {
      suggestions.push({
        icon: <Fuel className="w-5 h-5 text-green-500" />,
        title: "Fuel Cost Alert",
        description: `Estimated fuel cost is €${summary.totalFuelCost.toFixed(2)}. Consider fuel-efficient routes.`
      });
    }
    
    if (summary.totalRefuelStops > 2) {
      suggestions.push({
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        title: "Refueling Strategy",
        description: "Plan your refueling stops in advance to save time."
      });
    }
    
    // Always add a general tip
    suggestions.push({
      icon: <Wrench className="w-5 h-5 text-purple-500" />,
      title: "Vehicle Check",
      description: "Ensure your vehicle is serviced before this long trip."
    });
    
    return suggestions;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Title level={1} className="text-center mb-2 text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🗺️ Smart Multi-Day Route Planner
        </Title>
        <Text className="text-center block mb-8 text-gray-600 text-base md:text-lg">
          Plan trips with fuel costs, travel time, and smart suggestions
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

              <div className="space-y-4 mb-4">
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

              <Divider orientation="left" className="my-4">Trip Preferences</Divider>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="car">Car (7L/100km)</option>
                    <option value="motorcycle">Motorcycle (4L/100km)</option>
                    <option value="van">Van (10L/100km)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Price (€/L)</label>
                  <Input
                    type="number"
                    step="0.01"
                    value={fuelPrice}
                    onChange={(e) => setFuelPrice(parseFloat(e.target.value) || 1.5)}
                    prefix={<Fuel className="w-4 h-4 text-gray-400" />}
                  />
                </div>
              </div>

              <Button
                type="primary"
                size="large"
                onClick={calculateRoute}
                loading={loading}
                disabled={loading}
                className="w-full mt-2 h-12 bg-gradient-to-r from-blue-500 to-purple-600 border-0 rounded-lg text-base font-semibold hover:from-blue-600 hover:to-purple-700"
              >
                {loading ? 'Calculating Smart Route...' : 'Plan My Smart Route'}
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

            {/* Route Summary Stats */}
            {route && !loading && (
              <Card className="shadow-xl bg-white rounded-2xl border-0 mb-6">
                <Title level={3} className="flex items-center gap-2 text-gray-800 mb-4">
                  <Car className="w-5 h-5" /> Trip Summary
                </Title>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Statistic
                    title="Total Distance"
                    value={route.summary.totalDistance}
                    suffix="km"
                    prefix={<Route className="w-4 h-4" />}
                  />
                  <Statistic
                    title="Fuel Cost"
                    value={route.summary.totalFuelCost.toFixed(2)}
                    suffix="€"
                    prefix={<Fuel className="w-4 h-4" />}
                  />
                  <Statistic
                    title="Travel Time"
                    value={`${Math.floor(route.summary.totalTravelTime)}h ${Math.round((route.summary.totalTravelTime % 1) * 60)}m`}
                    prefix={<Clock className="w-4 h-4" />}
                  />
                  <Statistic
                    title="Rest Stops"
                    value={route.summary.totalRestStops}
                    prefix={<Coffee className="w-4 h-4" />}
                  />
                  <Statistic
                    title="Refuel Stops"
                    value={route.summary.totalRefuelStops}
                    prefix={<Zap className="w-4 h-4" />}
                  />
                  <Statistic
                    title="Vehicle"
                    value={vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)}
                    prefix={<Car className="w-4 h-4" />}
                  />
                </div>
              </Card>
            )}

            {/* Smart Suggestions */}
            {route && !loading && (
              <Card className="shadow-xl bg-white rounded-2xl border-0">
                <Title level={3} className="flex items-center gap-2 text-gray-800 mb-4">
                  <Wrench className="w-5 h-5" /> Smart Suggestions
                </Title>
                
                <div className="space-y-3">
                  {getSuggestions().map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="mt-0.5">
                        {suggestion.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{suggestion.title}</h4>
                        <p className="text-sm text-gray-600">{suggestion.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                      <p className="mt-2 text-gray-600">Calculating your smart route...</p>
                    </div>
                  </div>
                ) : route ? (
                  <MapWithNoSSR route={route} />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p>Enter your destinations and click "Plan My Smart Route"</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Route Details */}
              {route && !loading && (
                <div className="mb-6">
                  <Title level={3} className="flex items-center gap-2 text-gray-800 mb-4">
                    <Route className="w-5 h-5" /> Route Details
                  </Title>
                  
                  <Collapse ghost>
                    {route.legs.map((leg, index) => (
                      <Panel 
                        header={
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{leg.from} → {leg.to}</span>
                            <Tag color="blue">{leg.distance} km</Tag>
                          </div>
                        } 
                        key={index}
                        extra={
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{leg.travelTime}</span>
                          </div>
                        }
                      >
                        <div className="grid grid-cols-2 gap-2 pl-6">
                          <div className="flex items-center gap-2">
                            <Fuel className="w-4 h-4 text-green-500" />
                            <span>Fuel: {leg.fuelNeeded.toFixed(1)}L (€{leg.fuelCost.toFixed(2)})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Coffee className="w-4 h-4 text-amber-600" />
                            <span>Rest Stops: {leg.restStops}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-blue-500" />
                            <span>Refuel Stops: {leg.refuelStops}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-purple-500" />
                            <span>Total Time: {Math.floor(leg.totalTimeWithStops)}h {Math.round((leg.totalTimeWithStops % 1) * 60)}m</span>
                          </div>
                        </div>
                      </Panel>
                    ))}
                  </Collapse>
                </div>
              )}

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