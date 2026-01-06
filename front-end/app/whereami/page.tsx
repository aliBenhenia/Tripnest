// app/whereami/page.tsx
import React from 'react';

interface IpData {
  ip: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}

interface CountryData {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  population: number;
  area: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  timezones: string[];
  latlng: [number, number];
  region: string;
  subregion: string;
  continents: string[];
  tld: string[];
  car: {
    side: 'left' | 'right';
    signs: string[];
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  independent: boolean;
  unMember: boolean;
  status: string;
  landlocked: boolean;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
}

interface WeatherData {
  temperature: number;
  weather: string;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
}

interface TimeData {
  abbreviation: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  timezone: string;
  week_number: number;
  unixtime: number;
}

// Server-side data fetching functions
async function getIpData(): Promise<IpData | null> {
  try {
    // Using ip-api.com (free, no rate limits for non-commercial use)
    // Fetch with user's real IP
    const response = await fetch('http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; YourApp/1.0)'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status !== 'success') {
      throw new Error(data.message || 'Failed to get IP data');
    }
    
    return {
      ip: data.query,
      country: data.country,
      countryCode: data.countryCode,
      region: data.region,
      regionName: data.regionName,
      city: data.city,
      zip: data.zip,
      lat: data.lat,
      lon: data.lon,
      timezone: data.timezone,
      isp: data.isp,
      org: data.org,
      as: data.as,
      query: data.query
    };
    
  } catch (error) {
    console.error('Error fetching IP data:', error);
    
    // Fallback to another free API
    try {
      const fallbackResponse = await fetch('https://api.ipify.org?format=json', {
        next: { revalidate: 3600 }
      });
      
      if (!fallbackResponse.ok) throw new Error('Fallback failed');
      
      const fallbackData = await fallbackResponse.json();
      
      // Get location from IP
      const locationResponse = await fetch(`https://ipapi.co/${fallbackData.ip}/json/`, {
        headers: {
          'User-Agent': 'YourApp/1.0'
        }
      });
      
      if (!locationResponse.ok) throw new Error('Location fallback failed');
      
      const locationData = await locationResponse.json();
      
      return {
        ip: fallbackData.ip,
        country: locationData.country_name,
        countryCode: locationData.country_code,
        region: locationData.region_code,
        regionName: locationData.region,
        city: locationData.city,
        zip: locationData.postal,
        lat: locationData.latitude,
        lon: locationData.longitude,
        timezone: locationData.timezone,
        isp: locationData.org,
        org: locationData.org,
        as: locationData.asn,
        query: fallbackData.ip
      };
    } catch (fallbackError) {
      console.error('Fallback also failed:', fallbackError);
      return null;
    }
  }
}

async function getCountryData(countryCode: string): Promise<CountryData | null> {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode.toLowerCase()}`, {
      next: { revalidate: 86400 } // Cache for 1 day
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: CountryData[] = await response.json();
    
    if (!data || data.length === 0) {
      throw new Error('No country data found');
    }
    
    return data[0];
  } catch (error) {
    console.error(`Error fetching country data for ${countryCode}:`, error);
    
    // Get by name if alpha code fails
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryCode}?fullText=true`, {
        next: { revalidate: 86400 }
      });
      
      if (!response.ok) throw new Error('Name lookup failed');
      
      const data: CountryData[] = await response.json();
      return data[0];
    } catch (nameError) {
      console.error('Name lookup also failed:', nameError);
      return null;
    }
  }
}

async function getWeatherData(lat: number, lon: number): Promise<WeatherData | null> {
  try {
    // Open-Meteo API (free, no key required)
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius`,
      { 
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Map weather codes to descriptions
    const weatherCodes: { [key: number]: string } = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      56: 'Light freezing drizzle',
      57: 'Dense freezing drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      66: 'Light freezing rain',
      67: 'Heavy freezing rain',
      71: 'Slight snow fall',
      73: 'Moderate snow fall',
      75: 'Heavy snow fall',
      77: 'Snow grains',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    };
    
    return {
      temperature: data.current_weather.temperature,
      weather: weatherCodes[data.current_weather.weathercode] || 'Unknown',
      humidity: 65, // Mock since not in free API
      windSpeed: data.current_weather.windspeed,
      windDirection: data.current_weather.winddirection,
      weatherCode: data.current_weather.weathercode
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

async function getTimeData(timezone: string): Promise<TimeData | null> {
  try {
    // WorldTimeAPI (free, no key required)
    const encodedTimezone = encodeURIComponent(timezone);
    const response = await fetch(`https://worldtimeapi.org/api/timezone/${encodedTimezone}`, {
      next: { revalidate: 60 } // Cache for 1 minute
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      abbreviation: data.abbreviation,
      datetime: data.datetime,
      day_of_week: data.day_of_week,
      day_of_year: data.day_of_year,
      timezone: data.timezone,
      week_number: data.week_number,
      unixtime: data.unixtime
    };
  } catch (error) {
    console.error('Error fetching time data:', error);
    
    // Fallback to local calculation
    const now = new Date();
    return {
      abbreviation: Intl.DateTimeFormat().resolvedOptions().timeZone,
      datetime: now.toISOString(),
      day_of_week: now.getDay(),
      day_of_year: Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000),
      timezone: timezone,
      week_number: Math.ceil((((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / 86400000) + new Date(now.getFullYear(), 0, 1).getDay() + 1) / 7),
      unixtime: Math.floor(now.getTime() / 1000)
    };
  }
}

// Mock data for development/fallback
const MOCK_IP_DATA: IpData = {
  ip: "8.8.8.8",
  country: "United States",
  countryCode: "US",
  region: "CA",
  regionName: "California",
  city: "Mountain View",
  zip: "94043",
  lat: 37.4056,
  lon: -122.0775,
  timezone: "America/Los_Angeles",
  isp: "Google LLC",
  org: "Google",
  as: "AS15169 Google LLC",
  query: "8.8.8.8"
};

// Main Server Component
export default async function WhereAmIPage() {
  // Get IP data first
  const ipData = await getIpData();
  
  if (!ipData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Unable to Detect Location</h1>
          <p className="text-gray-600">Please check your internet connection or try again later.</p>
        </div>
      </div>
    );
  }
  
  // Get additional data based on IP location
  const [countryData, weatherData, timeData] = await Promise.all([
    getCountryData(ipData.countryCode),
    getWeatherData(ipData.lat, ipData.lon),
    getTimeData(ipData.timezone)
  ]);

  // Format helper functions
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatPopulation = (pop: number): string => {
    if (pop >= 1000000000) return `${(pop / 1000000000).toFixed(1)}B`;
    if (pop >= 1000000) return `${(pop / 1000000).toFixed(1)}M`;
    if (pop >= 1000) return `${(pop / 1000).toFixed(1)}K`;
    return formatNumber(pop);
  };

  const formatArea = (area: number): string => {
    return `${formatNumber(area)} km²`;
  };

  const getCurrencyInfo = () => {
    if (!countryData?.currencies) return { name: 'Unknown', symbol: '$' };
    const currency = Object.values(countryData.currencies)[0];
    return { name: currency?.name || 'Unknown', symbol: currency?.symbol || '$' };
  };

  const getLanguages = () => {
    if (!countryData?.languages) return ['Unknown'];
    return Object.values(countryData.languages);
  };

  const getWeatherIcon = (code: number): string => {
    const icons: { [key: number]: string } = {
      0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️', 
      45: '🌫️', 48: '🌫️',
      51: '🌦️', 53: '🌦️', 55: '🌧️',
      61: '🌦️', 63: '🌧️', 65: '⛈️',
      71: '🌨️', 73: '🌨️', 75: '❄️',
      95: '⛈️', 96: '⛈️', 99: '⛈️'
    };
    return icons[code] || '🌈';
  };

  const getLocalTime = () => {
    if (timeData) {
      return new Date(timeData.datetime).toLocaleTimeString('en-US', {
        timeZone: ipData.timezone,
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }
    return '--:--:--';
  };

  const getDayOfWeek = (dayNumber: number): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayNumber] || 'Unknown';
  };

  const currencyInfo = getCurrencyInfo();
  const languages = getLanguages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">📍</span>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Where Am I?
              </h1>
              <p className="text-gray-600 mt-2">Your location detected automatically via IP address</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 inline-block shadow-md">
            <p className="text-gray-700">
              <span className="font-semibold">IP Address:</span>{' '}
              <span className="font-mono bg-blue-50 px-2 py-1 rounded">{ipData.ip}</span>
            </p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Location Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <div className="relative">
                  <img 
                    src={countryData?.flags.png || `https://flagcdn.com/w320/${ipData.countryCode.toLowerCase()}.png`}
                    alt={`Flag of ${ipData.country}`}
                    className="w-24 h-16 sm:w-32 sm:h-20 rounded-lg shadow-lg border border-gray-200"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {ipData.city}, {ipData.country}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {countryData?.capital?.[0] || 'Capital: N/A'}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {countryData?.region || ipData.regionName}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {ipData.timezone}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <span className="text-blue-500">📍</span> Coordinates
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-mono font-bold text-gray-800">
                        {ipData.lat.toFixed(6)}, {ipData.lon.toFixed(6)}
                      </div>
                      <p className="text-gray-600 text-sm mt-2">Latitude, Longitude</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <span className="text-blue-500">🏢</span> Internet Provider
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-800 truncate">
                        {ipData.isp}
                      </div>
                      <p className="text-gray-600 text-sm mt-2">Organization: {ipData.org}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Card */}
          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl shadow-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>⛅</span> Current Weather
            </h3>
            {weatherData ? (
              <div className="text-center">
                <div className="text-6xl mb-4">{getWeatherIcon(weatherData.weatherCode)}</div>
                <div className="text-5xl font-bold mb-2">{weatherData.temperature}°C</div>
                <div className="text-xl mb-6">{weatherData.weather}</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <div className="text-sm opacity-90">Wind</div>
                    <div className="text-xl font-bold">{weatherData.windSpeed} km/h</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <div className="text-sm opacity-90">Humidity</div>
                    <div className="text-xl font-bold">{weatherData.humidity}%</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg opacity-90">Weather data unavailable</p>
              </div>
            )}
          </div>
        </div>

        {/* Country Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Population */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Population</h3>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {countryData ? formatPopulation(countryData.population) : 'N/A'}
              </div>
              <p className="text-gray-600 text-sm">Total residents</p>
            </div>
          </div>

          {/* Area */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Area</h3>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {countryData ? formatArea(countryData.area) : 'N/A'}
              </div>
              <p className="text-gray-600 text-sm">Square kilometers</p>
            </div>
          </div>

          {/* Currency */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Currency</h3>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{currencyInfo.symbol}</div>
              <p className="text-gray-600 text-sm">{currencyInfo.name}</p>
            </div>
          </div>

          {/* Time */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Local Time</h3>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-gray-900 mb-2">
                {getLocalTime()}
              </div>
              <p className="text-gray-600 text-sm">{timeData ? getDayOfWeek(timeData.day_of_week) : 'Unknown'}</p>
            </div>
          </div>
        </div>

        {/* Additional Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-500">🗣️</span> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Country Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-green-500">🇺🇳</span> Country Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Continent</span>
                <span className="font-semibold">{countryData?.continents?.[0] || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Subregion</span>
                <span className="font-semibold">{countryData?.subregion || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Driving Side</span>
                <span className="font-semibold">{countryData?.car?.side?.toUpperCase() || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Start of Week</span>
                <span className="font-semibold capitalize">{countryData?.startOfWeek || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Time Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-500">📅</span> Time Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Day of Year</span>
                <span className="font-semibold">{timeData?.day_of_year || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Week Number</span>
                <span className="font-semibold">{timeData?.week_number || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Timezone</span>
                <span className="font-semibold text-sm">{ipData.timezone}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">UNIX Time</span>
                <span className="font-mono font-semibold text-sm">
                  {timeData?.unixtime?.toString().slice(0, 10) || 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-500">🗺️</span> Location on Map
            </h3>
            <div className="h-64 rounded-xl overflow-hidden border border-gray-200">
              {/* Using OpenStreetMap - no API key required */}
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${ipData.lon-2},${ipData.lat-2},${ipData.lon+2},${ipData.lat+2}&layer=mapnik&marker=${ipData.lat},${ipData.lon}`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
                title={`Map of ${ipData.city}, ${ipData.country}`}
              />
            </div>
            <p className="text-gray-600 text-sm mt-3 text-center">
              Coordinates: {ipData.lat.toFixed(6)}, {ipData.lon.toFixed(6)} • OpenStreetMap
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-3">
              <span className="font-semibold">Location detected:</span>{' '}
              {ipData.city}, {ipData.regionName}, {ipData.country}
            </p>
            <p className="text-sm text-gray-500">
              Data updates hourly • APIs used: ip-api.com • restcountries.com • open-meteo.com • worldtimeapi.org
            </p>
            <p className="text-xs text-gray-400 mt-4">
              Note: Location accuracy depends on IP geolocation. For precise location, enable browser location services.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// SSG Configuration
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata() {
  const ipData = await getIpData();
  
  return {
    title: `Where Am I? - ${ipData?.city}, ${ipData?.country}`,
    description: `Location detection page showing information about ${ipData?.city}, ${ipData?.country} based on your IP address.`,
    keywords: ['location', 'ip address', 'geolocation', 'country', 'city', 'weather', 'timezone'],
    openGraph: {
      title: `Where Am I? - ${ipData?.city}, ${ipData?.country}`,
      description: `Detected location: ${ipData?.city}, ${ipData?.country}`,
      type: 'website',
    },
  };
}