
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  Zap,
  Calendar,
  Clock,
  Navigation,
  TrendingUp,
  Activity,
  Sunrise,
  Sunset,
  Loader
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WeatherApp = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [activeTab, setActiveTab] = useState('current');
  const [hourlyData, setHourlyData] = useState([]);

  // Using wttr.in API which doesn't require API key
  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch current weather data
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await response.json();
      
      if (data.current_condition && data.current_condition.length > 0) {
        setWeatherData(data.current_condition[0]);
        setForecastData(data.weather || []);
        
        // Process hourly data from today's forecast
        if (data.weather && data.weather[0] && data.weather[0].hourly) {
          const hourly = data.weather[0].hourly.slice(0, 8).map(hour => ({
            time: hour.time.slice(0, -2),
            temp: parseInt(hour.tempC),
            condition: hour.weatherDesc[0].value,
            humidity: hour.humidity
          }));
          setHourlyData(hourly);
        }
      } else {
        throw new Error('City not found');
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setCity(searchInput);
      fetchWeatherData();
    }
  };

  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
      return <Sun className="w-8 h-8 text-yellow-500" />;
    } else if (conditionLower.includes('cloud')) {
      return <Cloud className="w-8 h-8 text-gray-500" />;
    } else if (conditionLower.includes('rain')) {
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    } else if (conditionLower.includes('snow')) {
      return <CloudSnow className="w-8 h-8 text-blue-300" />;
    } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
      return <Zap className="w-8 h-8 text-yellow-600" />;
    } else {
      return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    const hours = timeString.slice(0, 2);
    const minutes = timeString.slice(2, 4);
    return `${hours}:${minutes}`;
  };

  const getAqiDescription = (aqi) => {
    if (aqi <= 50) return { level: 'Good', color: 'text-green-600' };
    if (aqi <= 100) return { level: 'Moderate', color: 'text-yellow-600' };
    if (aqi <= 150) return { level: 'Unhealthy for Sensitive', color: 'text-orange-600' };
    if (aqi <= 200) return { level: 'Unhealthy', color: 'text-red-600' };
    if (aqi <= 300) return { level: 'Very Unhealthy', color: 'text-purple-600' };
    return { level: 'Hazardous', color: 'text-pink-600' };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/80 backdrop-blur-md shadow-lg rounded-b-2xl p-4 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Weather Planner
            </h1>
          </div>
          
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for a city..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
          
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">{city}</span>
          </div>
        </div>
      </motion.header>

      {error && (
        <div className="max-w-7xl mx-auto p-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
            <p className="font-semibold">Error: {error}</p>
            <p className="text-sm mt-1">Please check the city name and try again.</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white/60 backdrop-blur-sm p-1 rounded-xl">
          {['current', 'forecast', 'hourly'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? 'bg-white shadow-md text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'current' && weatherData && (
            <motion.div
              key="current"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Main Weather Card */}
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">{city}</h2>
                    <p className="text-blue-100 text-lg mb-4 capitalize">
                      {weatherData.weatherDesc[0].value}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      {getWeatherIcon(weatherData.weatherDesc[0].value)}
                      <span className="text-6xl font-bold">
                        {weatherData.temp_C}°
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer className="w-5 h-5" />
                      <span>Feels like {weatherData.FeelsLikeC}°</span>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-100">Humidity: {weatherData.humidity}%</p>
                      <p className="text-blue-100">Wind: {weatherData.windspeedKmph} km/h</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="text-blue-100 text-sm">Visibility</p>
                    <p className="text-xl font-bold">{weatherData.visibility || 'N/A'} km</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="text-blue-100 text-sm">Pressure</p>
                    <p className="text-xl font-bold">{weatherData.pressure || 'N/A'} hPa</p>
                  </div>
                </div>
              </div>

              {/* Weather Details */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Weather Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">Humidity</span>
                      </div>
                      <span className="font-semibold">{weatherData.humidity}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Wind className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600">Wind Speed</span>
                      </div>
                      <span className="font-semibold">{weatherData.windspeedKmph} km/h</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600">Visibility</span>
                      </div>
                      <span className="font-semibold">{weatherData.visibility || 'N/A'} km</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-600">Pressure</span>
                      </div>
                      <span className="font-semibold">{weatherData.pressure || 'N/A'} hPa</span>
                    </div>
                  </div>
                </div>

                {/* UV Index */}
                <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Sun className="w-6 h-6" />
                    <h3 className="text-xl font-semibold">UV Index</h3>
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    {weatherData.uvIndex || 'N/A'}
                  </div>
                  <p className="text-orange-100">
                    {weatherData.uvIndex ? 
                      (weatherData.uvIndex <= 2 ? 'Low' : 
                       weatherData.uvIndex <= 5 ? 'Moderate' : 
                       weatherData.uvIndex <= 7 ? 'High' : 
                       weatherData.uvIndex <= 10 ? 'Very High' : 'Extreme') : 
                      'Not available'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'forecast' && forecastData.length > 0 && (
            <motion.div
              key="forecast"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">3-Day Forecast</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {forecastData.slice(0, 3).map((day, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-md transition-all"
                  >
                    <p className="font-semibold text-gray-800 mb-4">
                      {index === 0 ? 'Today' : 
                       index === 1 ? 'Tomorrow' : 
                       new Date(new Date().setDate(new Date().getDate() + index)).toLocaleDateString('en-US', { weekday: 'long' })}
                    </p>
                    <div className="flex justify-center mb-4">
                      {getWeatherIcon(day.hourly[4]?.weatherDesc[0]?.value || 'Clear')}
                    </div>
                    <p className="text-sm text-gray-600 mb-4 capitalize">
                      {day.hourly[4]?.weatherDesc[0]?.value || 'Clear'}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">
                        {day.maxtempC}°
                      </span>
                      <span className="text-lg text-gray-600">
                        {day.mintempC}°
                      </span>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                      <p>Humidity: {day.hourly[4]?.humidity || 'N/A'}%</p>
                      <p>Wind: {day.hourly[4]?.windspeedKmph || 'N/A'} km/h</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Temperature Trend Chart */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Temperature Trend</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                      data={forecastData.slice(0, 3).map((day, index) => ({
                        date: index === 0 ? 'Today' : 
                              index === 1 ? 'Tomorrow' : 
                              new Date(new Date().setDate(new Date().getDate() + index)).toLocaleDateString('en-US', { weekday: 'short' }),
                        maxTemp: parseInt(day.maxtempC),
                        minTemp: parseInt(day.mintempC)
                      }))}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="date" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '8px',
                          border: '1px solid #e5e7eb'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="maxTemp" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        name="Max Temp"
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, fill: '#2563eb' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="minTemp" 
                        stroke="#8b5cf6" 
                        strokeWidth={3}
                        name="Min Temp"
                        dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, fill: '#7c3aed' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'hourly' && hourlyData.length > 0 && (
            <motion.div
              key="hourly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">24-Hour Forecast</h3>
              <div className="overflow-x-auto">
                <div className="flex gap-4 pb-4">
                  {hourlyData.map((hour, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center min-w-[120px]"
                    >
                      <p className="font-semibold text-gray-800 mb-2">{hour.time}</p>
                      <div className="flex justify-center mb-2">
                        {getWeatherIcon(hour.condition)}
                      </div>
                      <p className="text-lg font-bold text-gray-800">{hour.temp}°</p>
                      <p className="text-xs text-gray-600 mt-1">Hum: {hour.humidity}%</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Hourly Temperature Chart */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Hourly Temperature</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="time" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '8px',
                          border: '1px solid #e5e7eb'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="temp" 
                        stroke="#8b5cf6" 
                        strokeWidth={3}
                        dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, fill: '#7c3aed' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Planner Section */}
        {weatherData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-semibold text-gray-800">Activity Planner</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Morning Activities</h4>
                <ul className="text-green-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Jogging (6:00 AM)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    <span>Breakfast outdoors</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">Afternoon Activities</h4>
                <ul className="text-yellow-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Picnic in the park</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Cloud className="w-4 h-4" />
                    <span>Indoor museum visit</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Evening Activities</h4>
                <ul className="text-purple-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <Sunset className="w-4 h-4" />
                    <span>Sunset photography</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Navigation className="w-4 h-4" />
                    <span>Evening walk</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;