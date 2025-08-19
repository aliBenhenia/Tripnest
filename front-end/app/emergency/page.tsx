// ```jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Heart, 
  Shield, 
  AlertTriangle, 
  Globe, 
  Clock, 
  Users, 
  Hospital,
  Ambulance,
  PhoneCall,
  MessageCircle,
  Navigation,
  Wifi,
  Battery,
  Search,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const EmergencyContactsWidget = () => {
  const [userCountry, setUserCountry] = useState('');
  const [userCountryCode, setUserCountryCode] = useState('');
  const [emergencyData, setEmergencyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWidget, setShowWidget] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCountry, setExpandedCountry] = useState(null);
  const [showAllCountries, setShowAllCountries] = useState(false);

  // Using REST Countries API (no key required)
  const COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=name,cca2,cca3,flags,currencies,languages';

  // Emergency numbers data (common international emergency numbers)
  const emergencyNumbersData = {
    'US': { ambulance: '911', police: '911', fire: '911' },
    'GB': { ambulance: '999', police: '999', fire: '999' },
    'DE': { ambulance: '112', police: '110', fire: '112' },
    'FR': { ambulance: '112', police: '17', fire: '18' },
    'JP': { ambulance: '119', police: '110', fire: '119' },
    'AU': { ambulance: '000', police: '000', fire: '000' },
    'CA': { ambulance: '911', police: '911', fire: '911' },
    'IN': { ambulance: '102', police: '100', fire: '101' },
    'BR': { ambulance: '192', police: '190', fire: '193' },
    'RU': { ambulance: '103', police: '102', fire: '101' },
    'CN': { ambulance: '120', police: '110', fire: '119' },
    'MX': { ambulance: '066', police: '060', fire: '068' },
    'IT': { ambulance: '112', police: '113', fire: '115' },
    'ES': { ambulance: '112', police: '091', fire: '080' },
    'KR': { ambulance: '119', police: '112', fire: '119' }
  };

  // Health information data
  const healthInfoData = {
    'US': { 
      vaccinationRecommended: ['Hepatitis A', 'Hepatitis B', 'Typhoid', 'Rabies'],
      waterSafety: 'Generally safe in urban areas',
      foodSafety: 'Generally safe'
    },
    'GB': { 
      vaccinationRecommended: ['Hepatitis A', 'Hepatitis B', 'Typhoid'],
      waterSafety: 'Safe everywhere',
      foodSafety: 'Generally safe'
    },
    'DE': { 
      vaccinationRecommended: ['Hepatitis A', 'Hepatitis B', 'Tick-borne encephalitis'],
      waterSafety: 'Safe everywhere',
      foodSafety: 'Generally safe'
    },
    'FR': { 
      vaccinationRecommended: ['Hepatitis A', 'Hepatitis B', 'Tick-borne encephalitis'],
      waterSafety: 'Safe everywhere',
      foodSafety: 'Generally safe'
    },
    'JP': { 
      vaccinationRecommended: ['Hepatitis A', 'Hepatitis B', 'Japanese encephalitis'],
      waterSafety: 'Safe everywhere',
      foodSafety: 'Generally safe'
    }
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Get user's country from browser language
    const browserLanguage = navigator.language || navigator.userLanguage;
    const countryCode = browserLanguage.split('-')[1] || 'US';
    
    setUserCountryCode(countryCode);
    
    // Fetch all countries data
    fetchCountries();
    
    // Update current time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch(COUNTRIES_API);
      const data = await response.json();
      
      // Process countries data
      const processedCountries = data.map(country => ({
        name: country.name.common,
        code: country.cca2,
        flag: country.flags?.svg || '',
        currencies: country.currencies ? Object.keys(country.currencies) : [],
        languages: country.languages ? Object.values(country.languages) : []
      })).sort((a, b) => a.name.localeCompare(b.name));
      
      setCountries(processedCountries);
      
      // Set user's country
      const userCountryObj = processedCountries.find(c => c.code === userCountryCode);
      if (userCountryObj) {
        setUserCountry(userCountryObj.name);
        setEmergencyData({
          country: userCountryObj.name,
          countryCode: userCountryObj.code,
          flag: userCountryObj.flag,
          emergencyNumbers: emergencyNumbersData[userCountryObj.code] || { ambulance: '112', police: '112', fire: '112' },
          healthInfo: healthInfoData[userCountryObj.code] || {
            vaccinationRecommended: ['Check with healthcare provider'],
            waterSafety: 'Research local conditions',
            foodSafety: 'Research local conditions'
          }
        });
      }
    } catch (err) {
      setError('Failed to fetch country data');
      // Fallback to default data
      setUserCountry('United States');
      setEmergencyData({
        country: 'United States',
        countryCode: 'US',
        flag: '',
        emergencyNumbers: { ambulance: '911', police: '911', fire: '911' },
        healthInfo: {
          vaccinationRecommended: ['Hepatitis A', 'Hepatitis B', 'Typhoid', 'Rabies'],
          waterSafety: 'Generally safe in urban areas',
          foodSafety: 'Generally safe'
        }
      });
    } finally {
      setLoading(false);
    }
  };

  const searchCountries = (term) => {
    if (!term) return countries.slice(0, 10);
    return countries.filter(country => 
      country.name.toLowerCase().includes(term.toLowerCase()) ||
      country.code.toLowerCase().includes(term.toLowerCase())
    ).slice(0, 20);
  };

  const selectCountry = (country) => {
    setUserCountry(country.name);
    setUserCountryCode(country.code);
    setSearchTerm('');
    
    setEmergencyData({
      country: country.name,
      countryCode: country.code,
      flag: country.flag,
      emergencyNumbers: emergencyNumbersData[country.code] || { ambulance: '112', police: '112', fire: '112' },
      healthInfo: healthInfoData[country.code] || {
        vaccinationRecommended: ['Check with healthcare provider'],
        waterSafety: 'Research local conditions',
        foodSafety: 'Research local conditions'
      }
    });
  };

  const EmergencyButton = ({ icon: Icon, label, number, color }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br ${color} text-white shadow-md hover:shadow-lg transition-all w-full`}
    >
      <Icon className="w-6 h-6 mb-1" />
      <span className="font-medium text-xs mb-1">{label}</span>
      <span className="text-base font-bold">{number}</span>
    </motion.button>
  );

  const filteredCountries = searchCountries(searchTerm);

  if (!showWidget) {
    return (
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setShowWidget(true)}
          className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-all"
        >
          <Phone className="w-6 h-6" />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50 w-80 max-w-full md:w-96"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Emergency Help</h3>
                <div className="flex items-center gap-2 text-sm text-red-100">
                  <Globe className="w-4 h-4" />
                  <span className="truncate max-w-32">{userCountry}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowWidget(false)}
              className="text-red-100 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Current Time and Battery */}
          <div className="flex items-center justify-between mt-3 text-sm text-red-100">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Battery className="w-4 h-4" />
              <span>100%</span>
              <Wifi className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>

        {/* Search and Country Selection */}
        <div className="p-3 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search countries..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="p-8 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Search Results */}
        {searchTerm && (
          <div className="max-h-48 overflow-y-auto border-b border-gray-200">
            {filteredCountries.map((country) => (
              <button
                key={country.code}
                onClick={() => selectCountry(country)}
                className="w-full p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
              >
                <img 
                  src={country.flag} 
                  alt={country.name} 
                  className="w-6 h-4 object-cover rounded border"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <span className="text-sm">{country.name} ({country.code})</span>
              </button>
            ))}
          </div>
        )}

        {/* Emergency Numbers */}
        {emergencyData && !loading && (
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2 mb-4">
              <EmergencyButton
                icon={Ambulance}
                label="Ambulance"
                number={emergencyData.emergencyNumbers.ambulance || '112'}
                color="from-blue-500 to-blue-600"
              />
              <EmergencyButton
                icon={Shield}
                label="Police"
                number={emergencyData.emergencyNumbers.police || '112'}
                color="from-gray-700 to-gray-800"
              />
              <EmergencyButton
                icon={Heart}
                label="Fire"
                number={emergencyData.emergencyNumbers.fire || '112'}
                color="from-red-500 to-red-600"
              />
            </div>

            {/* Health Information */}
            <div className="bg-gray-50 rounded-xl p-3 mb-3">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                <Hospital className="w-4 h-4" />
                Health Info
              </h4>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-medium text-gray-700">Vaccinations:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {emergencyData.healthInfo.vaccinationRecommended.slice(0, 2).map((vaccine, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {vaccine}
                      </span>
                    ))}
                    {emergencyData.healthInfo.vaccinationRecommended.length > 2 && (
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                        +{emergencyData.healthInfo.vaccinationRecommended.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-gray-700">Water:</span>
                    <span className="text-gray-600 text-xs">{emergencyData.healthInfo.waterSafety}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-gray-700">Food:</span>
                    <span className="text-gray-600 text-xs">{emergencyData.healthInfo.foodSafety}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Emergency Contacts */}
            <div className="mb-3">
              <button
                onClick={() => setExpandedCountry(expandedCountry === emergencyData.countryCode ? null : emergencyData.countryCode)}
                className="w-full flex items-center justify-between p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <span>Additional Contacts</span>
                {expandedCountry === emergencyData.countryCode ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </button>
              
              <AnimatePresence>
                {expandedCountry === emergencyData.countryCode && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-yellow-800">Poison Control:</span>
                          <span className="font-medium">Not available</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-yellow-800">Consulate:</span>
                          <span className="font-medium">Contact embassy</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-yellow-800">Tourist Police:</span>
                          <span className="font-medium">Not available</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2">
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1">
                <PhoneCall className="w-4 h-4" />
                Call Emergency
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1">
                <Navigation className="w-4 h-4" />
                Find Help
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Tap to call emergency services</span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main App Component that includes the widget
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Travel Companion</h1>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-800">Weather</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Currency</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Maps</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Guides</a>
              </nav>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Dashboard */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Travel Companion</h2>
              <p className="text-gray-600 mb-6">Your all-in-one travel solution with 24/7 emergency assistance</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">Weather</h3>
                  </div>
                  <p className="text-blue-100 text-sm">Sunny, 24°C in your location</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">Currency</h3>
                  </div>
                  <p className="text-green-100 text-sm">$1 = €0.85</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Travel Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Real-time Maps</p>
                      <p className="text-sm text-gray-600">Offline navigation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Safety Alerts</p>
                      <p className="text-sm text-gray-600">24/7 monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Local Guides</p>
                      <p className="text-sm text-gray-600">Expert recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Emergency Help</p>
                      <p className="text-sm text-gray-600">One-tap assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Saved Paris itinerary</p>
                    <p className="text-sm text-gray-600">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Health check completed</p>
                    <p className="text-sm text-gray-600">Yesterday</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Emergency contacts updated</p>
                    <p className="text-sm text-gray-600">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-800">Find Nearby</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <Heart className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-800">Health Check</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-gray-800">Safety Tips</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-gray-800">Emergency Help</span>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Travel Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Countries Visited</span>
                    <span className="text-sm font-medium">12/50</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Trip Completion</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Safety Score</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Emergency Contacts Widget */}
      <EmergencyContactsWidget />
    </div>
  );
};

export default App;
// ```