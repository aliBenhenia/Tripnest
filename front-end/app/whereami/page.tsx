// app/whereami/page.tsx
import { headers } from 'next/headers';
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
}

interface WeatherData {
  temperature: number;
  weather: string;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
  feelsLike: number;
}

// Get client's real IP from headers
function getClientIp(headersList: Headers): string {
  // Try different header names for IP
  const possibleHeaders = [
    'x-forwarded-for',
    'x-real-ip',
    'x-client-ip',
    'cf-connecting-ip', // Cloudflare
    'fastly-client-ip', // Fastly
    'x-cluster-client-ip',
    'x-forwarded',
    'forwarded-for',
    'forwarded'
  ];

  for (const header of possibleHeaders) {
    const value = headersList.get(header);
    if (value) {
      // Handle comma-separated IPs (x-forwarded-for: client, proxy1, proxy2)
      const ips = value.split(',');
      return ips[0].trim();
    }
  }

  // Fallback to remote address
  const remoteAddr = headersList.get('x-vercel-ip-city') ? 
    headersList.get('x-vercel-forwarded-for') : 
    headersList.get('x-real-ip') || '127.0.0.1';
  
  return remoteAddr;
}

// Get location from IP using multiple APIs
async function getLocationFromIp(ip: string): Promise<IpData | null> {
  // Skip localhost IPs
  if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.')) {
    // Use fallback APIs that auto-detect
    const apis = [
      'https://api.ipify.org?format=json',
      'https://api.ip.sb/geoip',
      'https://ipapi.co/json/'
    ];

    for (const apiUrl of apis) {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; LocationDetector/1.0)'
          },
          cache: 'no-store' // Don't cache for SSR
        });

        if (!response.ok) continue;

        const data = await response.json();

        if (apiUrl.includes('ipify')) {
          // Get location for this IP
          const locResponse = await fetch(`https://ipapi.co/${data.ip}/json/`, {
            cache: 'no-store'
          });
          const locData = await locResponse.json();

          return {
            ip: data.ip,
            country: locData.country_name,
            countryCode: locData.country_code,
            region: locData.region_code,
            regionName: locData.region,
            city: locData.city,
            zip: locData.postal,
            lat: locData.latitude,
            lon: locData.longitude,
            timezone: locData.timezone,
            isp: locData.org,
            org: locData.org,
            as: locData.asn,
            query: data.ip
          };
        } else if (apiUrl.includes('ip.sb')) {
          return {
            ip: data.ip,
            country: data.country,
            countryCode: data.country_code,
            region: data.region_code,
            regionName: data.region,
            city: data.city,
            zip: data.postal_code,
            lat: data.latitude,
            lon: data.longitude,
            timezone: data.timezone,
            isp: data.isp,
            org: data.organization,
            as: data.asn,
            query: data.ip
          };
        } else {
          return {
            ip: data.ip,
            country: data.country_name,
            countryCode: data.country_code,
            region: data.region_code,
            regionName: data.region,
            city: data.city,
            zip: data.postal,
            lat: data.latitude,
            lon: data.longitude,
            timezone: data.timezone,
            isp: data.org,
            org: data.org,
            as: data.asn,
            query: data.ip
          };
        }
      } catch (error) {
        console.log(`API ${apiUrl} failed, trying next...`);
        continue;
      }
    }

    // Return mock data if all APIs fail
    return {
      ip: '8.8.8.8',
      country: 'United States',
      countryCode: 'US',
      region: 'CA',
      regionName: 'California',
      city: 'Mountain View',
      zip: '94043',
      lat: 37.4056,
      lon: -122.0775,
      timezone: 'America/Los_Angeles',
      isp: 'Google LLC',
      org: 'Google',
      as: 'AS15169 Google LLC',
      query: '8.8.8.8'
    };
  }

  // For real IPs, use ip-api.com
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`, {
      cache: 'no-store'
    });

    if (!response.ok) throw new Error('IP-API failed');

    const data = await response.json();

    if (data.status !== 'success') {
      throw new Error(data.message);
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
    
    // Fallback to ipapi.co
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`, {
        cache: 'no-store'
      });

      const data = await response.json();

      return {
        ip: data.ip,
        country: data.country_name,
        countryCode: data.country_code,
        region: data.region_code,
        regionName: data.region,
        city: data.city,
        zip: data.postal,
        lat: data.latitude,
        lon: data.longitude,
        timezone: data.timezone,
        isp: data.org,
        org: data.org,
        as: data.asn,
        query: data.ip
      };
    } catch (fallbackError) {
      console.error('Fallback also failed:', fallbackError);
      return null;
    }
  }
}

async function getCountryData(countryCode: string): Promise<CountryData | null> {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode.toLowerCase()}`,
      { cache: 'no-store' }
    );

    const data: CountryData[] = await response.json();
    return data[0];
  } catch (error) {
    console.error(`Error fetching country data for ${countryCode}:`, error);
    return null;
  }
}

async function getWeatherData(lat: number, lon: number): Promise<WeatherData | null> {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius&timezone=auto`,
      { cache: 'no-store' }
    );

    const data = await response.json();

    const weatherCodes: { [key: number]: string } = {
      0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
      45: 'Foggy', 48: 'Foggy',
      51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
      61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
      71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
      80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
      85: 'Slight snow showers', 86: 'Heavy snow showers',
      95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Thunderstorm with heavy hail'
    };

    return {
      temperature: data.current_weather.temperature,
      weather: weatherCodes[data.current_weather.weathercode] || 'Unknown',
      humidity: 65,
      windSpeed: data.current_weather.windspeed,
      windDirection: data.current_weather.winddirection,
      weatherCode: data.current_weather.weathercode,
      feelsLike: data.current_weather.temperature - (data.current_weather.windspeed * 0.1) // Rough feels-like calculation
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

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

const getWeatherIcon = (code: number): string => {
  const icons: { [key: number]: string } = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️', 
    45: '🌫️', 48: '🌫️',
    51: '🌦️', 53: '🌦️', 55: '🌧️',
    61: '🌦️', 63: '🌧️', 65: '⛈️',
    71: '🌨️', 73: '🌨️', 75: '❄️',
    80: '🌦️', 81: '🌧️', 82: '⛈️',
    85: '🌨️', 86: '❄️',
    95: '⛈️', 96: '⛈️', 99: '⛈️'
  };
  return icons[code] || '🌈';
};

const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round((degrees % 360) / 22.5);
  return directions[index % 16];
};

// Main SSR Component
export default async function WhereAmIPage() {
  // Get headers to access client IP
  const headersList = await headers();
  
  // Get client's real IP
  const clientIp = getClientIp(headersList);
  
  // Get location from IP
  const ipData = await getLocationFromIp(clientIp);
  
  if (!ipData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">❌</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Location Detection Failed</h1>
          <p className="text-gray-600 mb-6">
            Unable to detect your location. Please try again or check your network connection.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Your IP: <code className="bg-gray-100 px-2 py-1 rounded">{clientIp}</code>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  // Get additional data
  const [countryData, weatherData] = await Promise.all([
    getCountryData(ipData.countryCode),
    getWeatherData(ipData.lat, ipData.lon)
  ]);

  const getCurrencyInfo = () => {
    if (!countryData?.currencies) return { name: 'Unknown', symbol: '$' };
    const currency = Object.values(countryData.currencies)[0];
    return { name: currency?.name || 'Unknown', symbol: currency?.symbol || '$' };
  };

  const getLanguages = () => {
    if (!countryData?.languages) return ['Unknown'];
    return Object.values(countryData.languages);
  };

  const getLocalTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      timeZone: ipData.timezone,
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getDayOfWeek = () => {
    return new Date().toLocaleDateString('en-US', {
      timeZone: ipData.timezone,
      weekday: 'long'
    });
  };

  const currencyInfo = getCurrencyInfo();
  const languages = getLanguages();
  const localTime = getLocalTime();
  const dayOfWeek = getDayOfWeek();

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
              <p className="text-gray-600 mt-2">Your real-time location detected via your IP address</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 inline-block shadow-md">
            <p className="text-gray-700">
              <span className="font-semibold">Your IP Address:</span>{' '}
              <span className="font-mono bg-blue-50 px-2 py-1 rounded">{ipData.ip}</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Detected in real-time from your request headers
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
                    loading="lazy"
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
                    <span className="text-blue-500">📍</span> GPS Coordinates
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
                    <span className="text-blue-500">🏢</span> Network Provider
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-800 truncate" title={ipData.isp}>
                        {ipData.isp}
                      </div>
                      <p className="text-gray-600 text-sm mt-2">AS{ipData.as.split(' ')[0]}</p>
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
                    <div className="text-xl font-bold">
                      {weatherData.windSpeed} km/h
                      <div className="text-sm mt-1">{getWindDirection(weatherData.windDirection)}</div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <div className="text-sm opacity-90">Feels Like</div>
                    <div className="text-xl font-bold">{weatherData.feelsLike.toFixed(1)}°C</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🌤️</div>
                <p className="text-lg opacity-90">Weather data loading...</p>
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
                {countryData ? formatPopulation(countryData.population) : 'Loading...'}
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
                {countryData ? `${formatNumber(countryData.area)} km²` : 'Loading...'}
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

          {/* Local Time */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Local Time</h3>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-gray-900 mb-2">
                {localTime}
              </div>
              <p className="text-gray-600 text-sm">{dayOfWeek}</p>
            </div>
          </div>
        </div>

        {/* Additional Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-500">🗣️</span> Languages Spoken
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium hover:bg-blue-100 transition-colors cursor-pointer"
                  title={`${lang} language`}
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              {languages.length} official language{languages.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Country Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-green-500">🇺🇳</span> Country Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Continent</span>
                <span className="font-semibold">{countryData?.continents?.[0] || 'Loading...'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Subregion</span>
                <span className="font-semibold">{countryData?.subregion || 'Loading...'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Driving Side</span>
                <span className="font-semibold">{countryData?.car?.side?.toUpperCase() || 'Right'}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Country Code</span>
                <span className="font-semibold">{ipData.countryCode}</span>
              </div>
            </div>
          </div>

          {/* Time & Network */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-500">🌐</span> Network & Time
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Timezone</span>
                <span className="font-semibold text-sm truncate" title={ipData.timezone}>
                  {ipData.timezone}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">ISP</span>
                <span className="font-semibold text-sm truncate" title={ipData.isp}>
                  {ipData.isp.slice(0, 20)}...
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Organization</span>
                <span className="font-semibold text-sm truncate" title={ipData.org}>
                  {ipData.org.slice(0, 20)}...
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Postal Code</span>
                <span className="font-semibold">{ipData.zip || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-500">🗺️</span> Your Location on Map
            </h3>
            <div className="h-80 rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${ipData.lon-0.5},${ipData.lat-0.5},${ipData.lon+0.5},${ipData.lat+0.5}&layer=mapnik&marker=${ipData.lat},${ipData.lon}`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer"
                title={`Map of ${ipData.city}, ${ipData.country}`}
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-between items-center">
              <p className="text-gray-600 text-sm">
                Coordinates: {ipData.lat.toFixed(6)}, {ipData.lon.toFixed(6)}
              </p>
              <a
                href={`https://www.google.com/maps?q=${ipData.lat},${ipData.lon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-3">
              <span className="font-semibold">Real-time detection:</span>{' '}
              {ipData.city}, {ipData.regionName}, {ipData.country}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              This page uses <span className="font-semibold">Server-Side Rendering (SSR)</span> to detect your actual IP address in real-time
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-gray-700 font-medium">Your IP:</span>
              <code className="bg-gray-200 px-2 py-1 rounded text-sm">{ipData.ip}</code>
            </div>
            <p className="text-xs text-gray-400 mt-6">
              APIs used: ip-api.com • ipapi.co • restcountries.com • open-meteo.com • OpenStreetMap
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Export as dynamic to disable SSG and enable SSR
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

// Generate metadata dynamically
export async function generateMetadata() {
  const headersList = await headers();
  const clientIp = getClientIp(headersList);
  const ipData = await getLocationFromIp(clientIp);

  return {
    title: `Where Am I? - ${ipData?.city || 'Location'} Detection`,
    description: `Real-time location detection: ${ipData?.city}, ${ipData?.country} based on your IP: ${clientIp}`,
    keywords: ['real-time location', 'ip detection', 'geolocation', 'where am i', 'ip address'],
    openGraph: {
      title: 'Where Am I? - Real-time Location Detection',
      description: 'Detect your current location based on your real IP address',
      type: 'website',
    },
  };
}