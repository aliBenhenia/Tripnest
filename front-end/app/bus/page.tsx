// ```jsx

"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bus, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  RefreshCw, 
  Route, 
  Navigation,
  Wifi,
  Battery,
  Filter,
  Search
} from 'lucide-react';

const RealTimeBusTracker = () => {
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');

  // Using a free GTFS-realtime API (example with Transit.land)
  // Note: In production, you'd use your local transit authority's GTFS-realtime feed
  const GTFS_API_ENDPOINT = 'https:// transit.land/api/v1/routes?bbox=-74.0060,40.7128,-73.9934,40.7589';

  // Mock data since most GTFS APIs require specific setup
  const mockRoutes = [
    { id: '1', name: 'Downtown Loop', color: '#3b82f6' },
    { id: '2', name: 'Airport Express', color: '#10b981' },
    { id: '3', name: 'University Line', color: '#8b5cf6' },
    { id: '4', name: 'Shopping District', color: '#f59e0b' }
  ];

  const mockBuses = [
    { 
      id: '1024', 
      routeId: '1', 
      lat: 40.7128, 
      lng: -74.0060, 
      speed: 25, 
      heading: 45, 
      delay: 0,
      nextStop: 'Downtown Station',
      arrivalTime: '2:45 PM',
      capacity: '60%'
    },
    { 
      id: '1032', 
      routeId: '2', 
      lat: 40.7589, 
      lng: -73.9851, 
      speed: 30, 
      heading: 120, 
      delay: 5,
      nextStop: 'Airport Terminal',
      arrivalTime: '2:50 PM',
      capacity: '85%'
    },
    { 
      id: '1045', 
      routeId: '1', 
      lat: 40.7505, 
      lng: -73.9934, 
      speed: 20, 
      heading: 270, 
      delay: -2,
      nextStop: 'City Mall',
      arrivalTime: '2:55 PM',
      capacity: '40%'
    },
    { 
      id: '1056', 
      routeId: '3', 
      lat: 40.7282, 
      lng: -73.7949, 
      speed: 28, 
      heading: 90, 
      delay: 3,
      nextStop: 'University Campus',
      arrivalTime: '3:00 PM',
      capacity: '70%'
    }
  ];

  useEffect(() => {
    fetchBusData();
    setRoutes(mockRoutes);
    setBuses(mockBuses);
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchBusData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const fetchBusData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would fetch from GTFS-realtime API:
      // const response = await fetch(GTFS_API_ENDPOINT);
      // const data = await response.json();
      // setBuses(processGTFSData(data));
      
      // Update mock data with slight variations
      const updatedBuses = mockBuses.map(bus => ({
        ...bus,
        lat: bus.lat + (Math.random() - 0.5) * 0.001,
        lng: bus.lng + (Math.random() - 0.5) * 0.001,
        speed: Math.max(10, Math.min(40, bus.speed + (Math.random() - 0.5) * 5)),
        delay: bus.delay + Math.floor((Math.random() - 0.5) * 3)
      }));
      
      setBuses(updatedBuses);
      setLastUpdated(new Date());
    } catch (err) {
      setError('Failed to fetch real-time bus data');
      console.error('Error fetching bus data:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredBuses = buses.filter(bus => {
    const matchesRoute = !selectedRoute || bus.routeId === selectedRoute;
    const matchesSearch = !searchTerm || 
      bus.id.toString().includes(searchTerm) ||
      bus.nextStop.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRoute && matchesSearch;
  });

  const getRouteColor = (routeId) => {
    const route = routes.find(r => r.id === routeId);
    return route ? route.color : '#3b82f6';
  };

  const getDelayStatus = (delay) => {
    if (delay > 5) return { color: 'text-red-500', status: 'Delayed' };
    if (delay > 0) return { color: 'text-orange-500', status: 'Slight Delay' };
    if (delay < 0) return { color: 'text-green-500', status: 'Early' };
    return { color: 'text-blue-500', status: 'On Time' };
  };

  const BusMarker = ({ bus }) => {
    const { color, status } = getDelayStatus(bus.delay);
    const routeColor = getRouteColor(bus.routeId);
    
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        style={{ 
          left: `${50 + (bus.lng * 10)}%`, 
          top: `${50 - (bus.lat * 10)}%` 
        }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="relative">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2"
            style={{ 
              backgroundColor: 'white',
              borderColor: routeColor,
              color: routeColor
            }}
          >
            <Bus className="w-4 h-4" />
          </div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
            Bus #{bus.id} • {status}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Real-Time Bus Tracker</h1>
                <p className="text-gray-600">Never miss your shuttle again</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 text-sm font-medium">Live</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Last updated</div>
                <div className="text-sm font-medium">
                  {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search buses or stops..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              
              <select
                value={selectedRoute}
                onChange={(e) => setSelectedRoute(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              >
                <option value="">All Routes</option>
                {routes.map(route => (
                  <option key={route.id} value={route.id}>
                    {route.name}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              onClick={fetchBusData}
              disabled={loading}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Live Bus Map</h2>
                <div className="flex gap-2">
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Map Container */}
              <div className="relative bg-gray-100 rounded-xl overflow-hidden" style={{ height: '500px' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive map showing bus locations</p>
                  </div>
                </div>
                
                {/* Bus markers */}
                <AnimatePresence>
                  {filteredBuses.map(bus => (
                    <BusMarker key={bus.id} bus={bus} />
                  ))}
                </AnimatePresence>
                
                {/* Route lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path 
                    d="M 100 100 Q 200 50 300 100 T 500 100" 
                    stroke="#3b82f6" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeDasharray="5,5"
                    style={{ animation: 'dash 1s linear infinite' }}
                  />
                  <path 
                    d="M 150 200 Q 250 150 350 200 T 550 200" 
                    stroke="#10b981" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeDasharray="5,5"
                    style={{ animation: 'dash 1s linear infinite' }}
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Buses */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Buses</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  </div>
                ) : error ? (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                ) : filteredBuses.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Bus className="w-12 h-12 mx-auto mb-2" />
                    <p>No buses found</p>
                  </div>
                ) : (
                  filteredBuses.map(bus => {
                    const { color, status } = getDelayStatus(bus.delay);
                    const route = routes.find(r => r.id === bus.routeId);
                    
                    return (
                      <motion.div
                        key={bus.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: route?.color || '#3b82f6' }}
                            ></div>
                            <span className="font-medium">Bus #{bus.id}</span>
                          </div>
                          <span className={`text-sm ${color}`}>{status}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-600">{route?.name || `Route ${bus.routeId}`}</span>
                          <span className="text-sm font-medium text-blue-600">{bus.arrivalTime}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3 text-gray-500" />
                            <span className="text-xs text-gray-600">{bus.speed} km/h</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="h-1.5 rounded-full" 
                                style={{ 
                                  width: bus.capacity,
                                  backgroundColor: bus.capacity > '80%' ? '#ef4444' : bus.capacity > '60%' ? '#f59e0b' : '#10b981'
                                }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-600">{bus.capacity}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Route Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Route Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Route className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Downtown Loop</p>
                    <p className="text-sm text-gray-600">Route 1</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Next Arrival</p>
                    <p className="text-lg font-bold text-blue-600">2:45 PM</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Frequency</p>
                    <p className="text-lg font-bold text-green-600">12 min</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Upcoming Stops</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Downtown Station</span>
                      <span className="text-xs text-gray-500 ml-auto">2 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-sm">City Mall</span>
                      <span className="text-xs text-gray-500 ml-auto">8 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-sm">University</span>
                      <span className="text-xs text-gray-500 ml-auto">15 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Departures */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Departures</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Route</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Destination</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Scheduled</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Route 1</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">Downtown Terminal</td>
                  <td className="py-3 px-4">2:45 PM</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">On Time</span>
                  </td>
                  <td className="py-3 px-4">Platform A</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Route 3</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">University Campus</td>
                  <td className="py-3 px-4">2:50 PM</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Delayed 5 min</span>
                  </td>
                  <td className="py-3 px-4">Platform B</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Route 4</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">Shopping District</td>
                  <td className="py-3 px-4">2:55 PM</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">On Time</span>
                  </td>
                  <td className="py-3 px-4">Platform C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }
      `}</style>
    </div>
  );
};

export default RealTimeBusTracker;
// ```