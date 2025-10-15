// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { Button, Input, Select, Card, Typography, Spin, Tag, Alert, Checkbox, DatePicker } from 'antd';
// Import Lucide React icons
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Image as ImageIcon, // Renamed to avoid conflict
  ChevronLeft, 
  ChevronRight, 
  ChevronLeftIcon, // For slider
  ChevronRightIcon, // For slider
  User, 
  Wallet, 
  Baby, 
  ShieldAlert, 
  Wine, 
  Utensils,
  Loader
} from 'lucide-react';
import { Image as AntdImage } from 'antd';


const { Title, Text } = Typography;
const { Option } = Select;

export default function TravelPlanner() {
  const [isClient, setIsClient] = useState(false); // For hydration safety
  const [inputs, setInputs] = useState({
    city: '',
    days: 3,
    type: 'leisure',
    interests: [],
    startDate: null,
    budget: 'medium',
    childFriendly: false,
    hideTouristActivities: false,
    hideAlcohol: false,
    hideMeals: false
  });

  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeDay, setActiveDay] = useState(0);
  const [imageLoading, setImageLoading] = useState({});
  // State for image sliders
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts on the client
  }, []);

  // Don't render anything that depends on state until client-side hydration is confirmed
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-center">
          <Spin indicator={<Loader className="animate-spin h-8 w-8 text-blue-500" />} />
          <p className="mt-4 text-gray-600">Loading travel planner...</p>
        </div>
      </div>
    );
  }

  const interestOptions = [
    'food', 'history', 'nature', 'shopping', 'nightlife', 'adventure', 'romantic', 'family'
  ];

  const tripTypes = [
    { value: 'leisure', label: 'Leisure' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'romantic', label: 'Romantic' },
    { value: 'family', label: 'Family' },
    { value: 'business', label: 'Business' },
    { value: 'budget', label: 'Budget' },
    { value: 'luxury', label: 'Luxury' }
  ];

  const budgetOptions = [
    { value: 'low', label: 'Budget Friendly ($)', icon: '💵' },
    { value: 'medium', label: 'Moderate ($$)', icon: '💰' },
    { value: 'high', label: 'Luxury ($$$)', icon: '💎' }
  ];

  const handleChange = (name, value) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setInputs(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleDateChange = (date) => {
    setInputs(prev => ({ ...prev, startDate: date }));
  };

  // --- Real API Logic ---

  // Use WikiData + WikiMedia Commons for places with images
  const generateRealItinerary = async () => {
    try {
      setError('');

      // Step 1: Geocode city using Nominatim
      const geoResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(inputs.city)}&format=json&limit=1`,
        {
          headers: {
            'User-Agent': 'TravelPlanner/1.0 (educational project)'
          }
        }
      );

      if (!geoResponse.ok) {
        throw new Error('Geocoding service temporarily unavailable');
      }

      const geoData = await geoResponse.json();

      if (!geoData.length) {
        throw new Error('City not found. Please check the spelling or try a different location.');
      }

      const { lat, lon } = geoData[0];

      // Step 2: Search for places using WikiData API
      const allPlaces = [];

      // WikiData SPARQL query to find places with images
      // Simplified query to find places around the city with images
      const sparqlQuery = `
        SELECT ?place ?placeLabel ?image ?description ?lat ?lon WHERE {
          SERVICE wikibase:around {
            ?place wdt:P625 ?location .
            bd:serviceParam wikibase:center "Point(${lon} ${lat})"^^geo:wktLiteral .
            bd:serviceParam wikibase:radius "5" . # 5km radius
          }
          ?place wdt:P18 ?image . # Image property
          OPTIONAL { ?place wdt:P625 ?coordinate . }
          OPTIONAL { ?place schema:description ?description . FILTER(LANG(?description) = "en") }
          SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
        }
        LIMIT 30
      `;

      const encodedQuery = encodeURIComponent(sparqlQuery);
      const wikiDataResponse = await fetch(
        `https://query.wikidata.org/sparql?query=${encodedQuery}&format=json`
      );

      if (wikiDataResponse.ok) {
        const wikiData = await wikiDataResponse.json();

        wikiData.results.bindings.forEach(item => {
          if (item.placeLabel && item.image) {
            // Extract coordinates from the WKT format if available, otherwise use city center
            let placeLat = parseFloat(lat);
            let placeLng = parseFloat(lon);

            if (item.location && item.location.value) {
              const coords = item.location.value.replace('Point(', '').replace(')', '').split(' ');
              placeLng = parseFloat(coords[0]);
              placeLat = parseFloat(coords[1]);
            }

            allPlaces.push({
              name: item.placeLabel.value,
              lat: placeLat,
              lng: placeLng,
              images: [item.image.value], // WikiData usually gives one main image
              description: item.description ? item.description.value : `A popular attraction in ${inputs.city}`,
              category: 'tourism' // Default category
            });
          }
        });
      }

      // If WikiData didn't return enough places, or we want more variety, fallback to Overpass API
      if (allPlaces.length < 10) { // Arbitrary threshold
        const categories = inputs.interests.length > 0 ? inputs.interests : ['tourism', 'amenity'];
        const overpassPlaces = [];

        // Build Overpass queries based on user interests and preferences
        const categoryQueries = {
            food: inputs.hideMeals ? [] : [
                `node["amenity"="restaurant"](around:5000,${lat},${lon});out 5;relation["amenity"="restaurant"](around:5000,${lat},${lon});out 5;`,
                `node["amenity"="cafe"](around:5000,${lat},${lon});out 5;`
            ],
            history: [
                `node["historic"](around:5000,${lat},${lon});out 5;`,
                `node["tourism"="museum"](around:5000,${lat},${lon});out 5;`
            ],
            nature: [
                `node["leisure"="park"](around:5000,${lat},${lon});out 5;`,
                `way["leisure"="park"](around:5000,${lat},${lon});out 5;`,
                `node["natural"="wood"](around:5000,${lat},${lon});out 3;`
            ],
            shopping: [
                `node["shop"](around:5000,${lat},${lon});out 5;`,
                `node["amenity"="marketplace"](around:5000,${lat},${lon});out 3;`
            ],
            nightlife: inputs.hideAlcohol ? [] : [
                `node["amenity"="bar"](around:5000,${lat},${lon});out 5;`,
                `node["amenity"="nightclub"](around:5000,${lat},${lon});out 3;`
            ],
            adventure: [
                `node["tourism"="viewpoint"](around:5000,${lat},${lon});out 5;`,
                `node["leisure"="sports_centre"](around:5000,${lat},${lon});out 3;`
            ],
            romantic: [
                `node["tourism"="artwork"](around:5000,${lat},${lon});out 5;`,
                `node["leisure"="garden"](around:5000,${lat},${lon});out 5;`
            ],
            family: inputs.childFriendly ? [
                `node["leisure"="playground"](around:5000,${lat},${lon});out 5;`,
                `node["tourism"="zoo"](around:5000,${lat},${lon});out 3;`
            ] : [
                `node["leisure"="playground"](around:5000,${lat},${lon});out 5;`
            ],
            tourism: [
                `node["tourism"](around:5000,${lat},${lon});out 10;`
            ],
            amenity: [
                `node["amenity"](around:5000,${lat},${lon});out 10;`
            ]
        };


        // Fetch places for relevant categories
        const categoriesToSearch = categories.length > 0 ? categories : ['tourism', 'amenity'];
        for (const category of categoriesToSearch) {
            const queries = categoryQueries[category] || categoryQueries['tourism'];
            
            for (const query of queries) {
                if (!query || (category === 'food' && inputs.hideMeals) || (category === 'nightlife' && inputs.hideAlcohol)) continue;
                
                try {
                    const overpassResponse = await fetch('https://overpass-api.de/api/interpreter', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: `data=${encodeURIComponent(query)}`
                    });
                    
                    if (overpassResponse.ok) {
                        const overpassData = await overpassResponse.json();
                        
                        if (overpassData.elements) {
                            // Use a Map to deduplicate by name within this query batch
                            const uniqueInBatch = new Map();
                            overpassData.elements.forEach(element => {
                                if (element.tags && element.tags.name) {
                                    const name = element.tags.name;
                                    // Only add if not already found by WikiData or in this batch
                                    if (!allPlaces.some(p => p.name === name) && !uniqueInBatch.has(name)) {
                                        uniqueInBatch.set(name, {
                                            name: name,
                                            lat: element.lat,
                                            lng: element.lon,
                                            // Placeholder images for Overpass results
                                            images: [
                                                `https://placehold.co/600x400/4F46E5/FFFFFF?text=${encodeURIComponent(name)}`,
                                                `https://placehold.co/600x400/7C3AED/FFFFFF?text=${encodeURIComponent(name)}+2`,
                                                `https://placehold.co/600x400/059669/FFFFFF?text=${encodeURIComponent(name)}+3`
                                            ],
                                            description: element.tags.description || 
                                                       element.tags.amenity || 
                                                       element.tags.tourism || 
                                                       element.tags.leisure ||
                                                       element.tags.shop ||
                                                       `A ${category} location in ${inputs.city}`,
                                            category: category
                                        });
                                    }
                                }
                            });
                            // Add unique places from this batch to the main list
                            overpassPlaces.push(...uniqueInBatch.values());
                        }
                    }
                } catch (queryError) {
                    console.warn(`Overpass query failed for category ${category}:`, queryError);
                    // Continue with other queries
                }
            }
        }

        // Combine WikiData and Overpass places, prioritizing WikiData
        allPlaces.push(...overpassPlaces);
      }

      // Remove duplicates based on name (final deduplication)
      const uniquePlaces = allPlaces.filter((place, index, self) =>
        index === self.findIndex(p => p.name === place.name)
      );

      // If still no places, create some basic places
      if (uniquePlaces.length === 0) {
        uniquePlaces.push({
          name: `City Center ${inputs.city}`,
          lat: parseFloat(lat),
          lng: parseFloat(lon),
          images: [`https://placehold.co/600x400/4F46E5/FFFFFF?text=City+Center`],
          category: 'general',
          description: `Central area of ${inputs.city}`
        });
        
        uniquePlaces.push({
          name: `Main Square`,
          lat: parseFloat(lat) + 0.001,
          lng: parseFloat(lon) + 0.001,
          images: [`https://placehold.co/600x400/7C3AED/FFFFFF?text=Main+Square`],
          category: 'general',
          description: `Main public square in ${inputs.city}`
        });
      }

      // Step 3: Generate daily itinerary
      const days = [];
      const totalPlaces = Math.min(uniquePlaces.length, 20); // Cap for performance
      const placesPerDay = Math.max(1, Math.ceil(totalPlaces / inputs.days));

      for (let i = 0; i < inputs.days; i++) {
        const startIndex = i * placesPerDay;
        const endIndex = Math.min(startIndex + placesPerDay, totalPlaces);
        const dayPlaces = uniquePlaces.slice(startIndex, endIndex);
        
        const activities = dayPlaces.map((place, idx) => {
          const timeSlots = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '8:00 PM'];
          const timeSlot = timeSlots[idx % timeSlots.length];
          
          return {
            time: timeSlot,
            activity: place.name,
            details: place.description,
            category: place.category,
            images: place.images, // Array of images
            lat: place.lat,
            lng: place.lng
          };
        });

        let dayDate = 'Date not set';
        if (inputs.startDate) {
            const baseDate = new Date(inputs.startDate);
            const dateForThisDay = new Date(baseDate);
            dateForThisDay.setDate(baseDate.getDate() + i);
            dayDate = dateForThisDay.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
            });
        }

        days.push({
            day: i + 1,
            title: `Day ${i + 1}: Explore ${inputs.city}`,
            date: dayDate,
            activities: activities.length ? activities : [{
                time: 'All Day',
                activity: 'Explore the city at your own pace',
                details: 'Discover hidden gems and local favorites',
                category: 'adventure',
                images: [`https://placehold.co/600x400/059669/FFFFFF?text=Explore`],
                lat: parseFloat(lat),
                lng: parseFloat(lon)
            }]
        });
      }

      return {
        city: inputs.city,
        tripType: inputs.type,
        duration: inputs.days,
        days,
        places: uniquePlaces.slice(0, 25) // Limit places list too
      };
    } catch (error) {
      console.error('Error generating itinerary:', error);
      throw error;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.city.trim()) {
      setError('Please enter a destination city');
      return;
    }

    setLoading(true);
    setItinerary(null);
    setActiveDay(0);
    setImageLoading({});
    setCurrentImageIndices({}); // Reset slider indices
    setError('');

    try {
      const itineraryData = await generateRealItinerary();
      setItinerary(itineraryData);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Sorry, we could not generate an itinerary for this location. Please try another city or check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      food: 'blue',
      history: 'gold',
      nature: 'green',
      shopping: 'purple',
      nightlife: 'magenta',
      adventure: 'cyan',
      romantic: 'pink',
      family: 'orange',
      tourism: 'geekblue',
      general: 'default',
      amenity: 'volcano'
    };
    return colors[category] || 'default';
  };

  const openInMap = (lat, lng, placeName) => {
    const url = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`;
    window.open(url, '_blank');
  };

  const navigateDay = (direction) => {
    if (!itinerary) return;
    const newDay = direction === 'next'
      ? Math.min(activeDay + 1, itinerary.days.length - 1)
      : Math.max(activeDay - 1, 0);
    setActiveDay(newDay);
  };

  const handleImageLoad = (key) => {
    setImageLoading(prev => ({ ...prev, [key]: false }));
  };

  const handleImageError = (key) => {
    setImageLoading(prev => ({ ...prev, [key]: false }));
  };

  // --- Image Slider Logic ---
  const nextImage = (activityIndex) => {
    const key = `${activeDay}-${activityIndex}`;
    const activity = itinerary?.days[activeDay]?.activities[activityIndex];
    if (!activity || !activity.images || activity.images.length <= 1) return;
    
    setCurrentImageIndices(prev => ({
      ...prev,
      [key]: ((prev[key] || 0) + 1) % activity.images.length
    }));
  };

  const prevImage = (activityIndex) => {
    const key = `${activeDay}-${activityIndex}`;
    const activity = itinerary?.days[activeDay]?.activities[activityIndex];
    if (!activity || !activity.images || activity.images.length <= 1) return;
    
    setCurrentImageIndices(prev => {
        const currentIndex = prev[key] || 0;
        const newIndex = (currentIndex - 1 + activity.images.length) % activity.images.length;
        return { ...prev, [key]: newIndex };
    });
  };

   const [previewVisible, setPreviewVisible] = useState(false);
  const imageKey = `${activityIndex}-${currentImageIndex}`;
  // --- End Image Slider Logic ---


  // Skeleton component for loading images
  const ImageSkeleton = ({ className = "" }) => (
    <div className={`bg-gray-200 animate-pulse rounded-lg flex items-center justify-center ${className}`}>
      <Loader className="animate-spin text-gray-400 w-8 h-8" />
    </div>
  );


  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-center max-w-md w-full">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-purple-200 border-b-purple-600 rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
          <Title level={3} className="text-gray-800 mb-2">Planning Your Adventure</Title>
          <p className="text-gray-600">Searching for amazing places in {inputs.city}...</p>
          <div className="mt-6 flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <Title level={1} className="text-center mb-2 text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🌍 Smart Travel Planner
        </Title>
        <p className="text-center mb-8 text-gray-600 text-base md:text-lg">
          Create personalized itineraries with real places and images
        </p>

        <Card className="mb-8 shadow-xl bg-white/80 backdrop-blur-sm border-0 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Destination City</label>
                <Input
                  size="large"
                  placeholder="e.g., Barcelona, Paris, Tokyo"
                  value={inputs.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className="rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Trip Duration</label>
                <Select
                  size="large"
                  value={inputs.days}
                  onChange={(value) => handleChange('days', value)}
                  className="w-full rounded-lg"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <Option key={num} value={parseInt(num)}>{num} {num === 1 ? 'Day' : 'Days'}</Option>
                  ))}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Trip Type</label>
                <Select
                  size="large"
                  value={inputs.type}
                  onChange={(value) => handleChange('type', value)}
                  className="w-full rounded-lg"
                >
                  {tripTypes.map(type => (
                    <Option key={type.value} value={type.value}>{type.label}</Option>
                  ))}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Start Date</label>
                <DatePicker
                  size="large"
                  value={inputs.startDate}
                  onChange={handleDateChange}
                  className="w-full rounded-lg"
                  placeholder="Select start date"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 flex items-center gap-2">
                  <Wallet className="w-4 h-4" /> Select your budget
                </label>
                <Select
                  size="large"
                  value={inputs.budget}
                  onChange={(value) => handleChange('budget', value)}
                  className="w-full rounded-lg"
                >
                  {budgetOptions.map(option => (
                    <Option key={option.value} value={option.value}>
                      <span className="mr-2">{option.icon}</span>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="flex items-end">
                <Checkbox
                  checked={inputs.childFriendly}
                  onChange={(e) => handleChange('childFriendly', e.target.checked)}
                  className="text-base"
                >
                  <span className="flex items-center gap-2">
                    <Baby className="w-4 h-4" /> Child-friendly recommendations
                  </span>
                </Checkbox>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 rounded-lg text-base font-semibold hover:from-blue-600 hover:to-purple-700 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Planning...' : 'Generate Itinerary'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <Checkbox
                  checked={inputs.hideTouristActivities}
                  onChange={(e) => handleChange('hideTouristActivities', e.target.checked)}
                  className="text-base"
                >
                  <span className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> Hide tourist activities
                  </span>
                </Checkbox>
                <p className="block text-xs text-gray-500 mt-1">Exclude quad, camel rides, etc.</p>
              </div>

              <div>
                <Checkbox
                  checked={inputs.hideAlcohol}
                  onChange={(e) => handleChange('hideAlcohol', e.target.checked)}
                  className="text-base"
                >
                  <span className="flex items-center gap-2">
                    <Wine className="w-4 h-4" /> Hide places with alcohol
                  </span>
                </Checkbox>
                <p className="block text-xs text-gray-500 mt-1">Exclude bars and alcohol-serving restaurants</p>
              </div>

              <div>
                <Checkbox
                  checked={inputs.hideMeals}
                  onChange={(e) => handleChange('hideMeals', e.target.checked)}
                  className="text-base"
                >
                  <span className="flex items-center gap-2">
                    <Utensils className="w-4 h-4" /> Hide meals
                  </span>
                </Checkbox>
                <p className="block text-xs text-gray-500 mt-1">Exclude restaurants and food places</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">Your Interests</label>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map(interest => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                      inputs.interests.includes(interest)
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {interest.charAt(0).toUpperCase() + interest.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </form>
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

        {itinerary && !loading && (
          <div className="space-y-6">
            {/* Header Card */}
            <Card className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl border-0 shadow-xl">
              <Title level={2} className="text-white mb-2">Your {itinerary.city} Adventure</Title>
              <p className="text-white/90 text-base md:text-lg">
                {itinerary.duration}-day {itinerary.tripType} trip with {itinerary.places.length} places found
              </p>
              {inputs.startDate && (
                <p className="text-white/80 text-sm mt-2">
                  Starting on {inputs.startDate ? inputs.startDate.format('MMMM D, YYYY') : 'Selected date'}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {inputs.budget && (
                  <Tag icon={<Wallet className="w-3 h-3" />} color="gold">
                    {budgetOptions.find(b => b.value === inputs.budget)?.label}
                  </Tag>
                )}
                {inputs.childFriendly && (
                  <Tag icon={<Baby className="w-3 h-3" />} color="green">
                    Child-Friendly
                  </Tag>
                )}
                {inputs.hideTouristActivities && (
                  <Tag icon={<ShieldAlert className="w-3 h-3" />} color="red">
                    No Tourist Activities
                  </Tag>
                )}
                {inputs.hideAlcohol && (
                  <Tag icon={<Wine className="w-3 h-3" />} color="red">
                    No Alcohol
                  </Tag>
                )}
                {inputs.hideMeals && (
                  <Tag icon={<Utensils className="w-3 h-3" />} color="red">
                    No Meals
                  </Tag>
                )}
              </div>
            </Card>

            {/* Day Navigation - Using standard buttons */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white rounded-2xl shadow-lg p-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigateDay('prev')}
                  disabled={activeDay === 0}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    activeDay === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline ml-2">Previous</span>
                </button>
                <div className="text-center">
                  <Title level={4} className="mb-0">Day {itinerary.days[activeDay]?.day}</Title>
                  <p className="text-gray-600 text-sm">{itinerary.days[activeDay]?.date}</p>
                </div>
                <button
                  onClick={() => navigateDay('next')}
                  disabled={activeDay === itinerary.days.length - 1}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    activeDay === itinerary.days.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="hidden sm:inline mr-2">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-2 flex-wrap">
                {itinerary.days.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDay(index)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all text-sm flex items-center justify-center ${
                      activeDay === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </div>

            {/* Day Content */}
            <div className="space-y-6">
              {itinerary.days[activeDay] && (
                <Card className="shadow-xl border-0 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <Title level={3} className="text-white mb-1 flex items-center gap-2">
                          <Calendar className="w-5 h-5" /> Day {itinerary.days[activeDay].day}
                        </Title>
                        <p className="text-white/90 text-base">{itinerary.days[activeDay].title}</p>
                      </div>
                      <p className="text-white/80 text-sm mt-2 md:mt-0">{itinerary.days[activeDay].date}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-6">
                      {itinerary.days[activeDay].activities.map((activity, activityIndex) => {
                        const imageKey = `${activeDay}-${activityIndex}`;
                        const isLoading = imageLoading[imageKey] !== false;
                        const currentImageIndex = currentImageIndices[imageKey] || 0;
                        const currentImage = activity.images?.[currentImageIndex] || activity.images?.[0];

                        // Apply filters based on user preferences (for day view)
                        if (inputs.hideMeals && activity.category === 'food') return null;
                        if (inputs.hideAlcohol && activity.category === 'nightlife') return null;
                        // Note: Child-friendly filtering is complex without specific data tags, so we rely on category selection
                        
                        return (
                          <div key={activityIndex} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl hover:bg-gray-50 transition-all border border-gray-100 shadow-sm">
                            {/* Image Slider Section */}
                            <div className="md:w-1/3">
      <div className="relative group rounded-lg overflow-hidden">
        {isLoading && <ImageSkeleton className="w-full h-48" />}

        {/* Main Image */}
        <AntdImage
          src={currentImage}
          alt={`${activity.activity} - Image ${currentImageIndex + 1}`}
          className={`w-full h-48 object-cover cursor-pointer transition-opacity ${isLoading ? "hidden" : "block"}`}
          onLoad={() => handleImageLoad(imageKey)}
          onError={() => handleImageError(imageKey)}
          style={{ display: isLoading ? "none" : "block" }}
          preview={{
            visible: previewVisible,
            onVisibleChange: (visible) => setPreviewVisible(visible),
          }}
          onClick={() => setPreviewVisible(true)} // 👈 ensures modal opens on click
        />

        {/* Slider Controls */}
        {activity.images && activity.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage(activityIndex);
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage(activityIndex);
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {activity.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentImageIndex ? "bg-white" : "bg-white bg-opacity-50"
                  }`}
                ></div>
              ))}
            </div>
          </>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center pointer-events-none">
          <ImageIcon className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
                            
                            {/* Activity Details Section */}
                            <div className="md:w-2/3">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                <div className="flex items-center gap-3 mb-2 md:mb-0">
                                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {activity.time}
                                  </div>
                                  <Tag color={getCategoryColor(activity.category)}>
                                    {activity.category}
                                  </Tag>
                                </div>
                                <button
                                  onClick={() => openInMap(activity.lat, activity.lng, activity.activity)}
                                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all text-sm flex items-center"
                                >
                                  <MapPin className="w-4 h-4" />
                                  <span className="hidden sm:inline ml-2">View on Map</span>
                                  <span className="sm:hidden ml-2">Map</span>
                                </button>
                              </div>
                              <Title level={4} className="mb-2 text-gray-800 text-lg">{activity.activity}</Title>
                              <p className="text-gray-600 leading-relaxed">{activity.details}</p>
                            </div>
                          </div>
                        );
                      }).filter(activity => activity !== null)}
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Map and Places Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Title level={3} className="mb-4 text-xl font-bold text-gray-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Places on Map
                </Title>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-96">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${itinerary.places[0]?.lng-0.05},${itinerary.places[0]?.lat-0.05},${itinerary.places[0]?.lng+0.05},${itinerary.places[0]?.lat+0.05}&layer=mapnik`}
                    allowFullScreen
                    title="OpenStreetMap"
                  ></iframe>
                </div>
              </div>

              <div>
                <Title level={3} className="mb-4 text-xl font-bold text-gray-800 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" /> All Recommended Places
                </Title>

                <div className="bg-white rounded-2xl shadow-xl p-4">
                  <div className="max-h-96 overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {itinerary.places.map((place, index) => {
                        const imageKey = `place-${index}`;
                        const isLoading = imageLoading[imageKey] !== false;
                        const placeImage = place.images?.[0] || `https://placehold.co/100x100/6366F1/FFFFFF?text=${place.name.charAt(0)}`;

                        // Apply filters based on user preferences (for places list)
                        if (inputs.hideMeals && place.category === 'food') return null;
                        if (inputs.hideAlcohol && place.category === 'nightlife') return null;
                        // Child-friendly filtering logic here if needed

                        return (
                          <div key={index} className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                            <div className="relative group flex-shrink-0">
                              {isLoading && (
                                <ImageSkeleton className="w-16 h-16" />
                              )}
                              <AntdImage
                                src={placeImage}
                                alt={place.name}
                                className={`w-16 h-16 object-cover rounded-lg ${isLoading ? 'hidden' : 'block'}`}
                                onLoad={() => handleImageLoad(imageKey)}
                                onError={() => handleImageError(imageKey)}
                                style={{ display: isLoading ? 'none' : 'block' }}
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                                <MapPin className="text-white w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold block text-sm truncate">{place.name}</p>
                              <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <Tag color={getCategoryColor(place.category)} className="text-xs px-2 py-0">
                                  {place.category}
                                </Tag>
                                <button
                                  onClick={() => openInMap(place.lat, place.lng, place.name)}
                                  className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors flex items-center"
                                >
                                  <MapPin className="w-3 h-3" />
                                  <span className="ml-1">Map</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      }).filter(place => place !== null)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!itinerary && !loading && !error && (
          <Card className="text-center py-8 bg-white/50 backdrop-blur-sm border-0 rounded-2xl">
            <div className="text-5xl mb-4">✈️</div>
            <Title level={3} className="mb-2">Start Planning Your Trip</Title>
            <p className="text-gray-600">
              Enter your destination, trip duration, and interests to get a personalized travel itinerary
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium flex items-center gap-2">
                  <User className="w-4 h-4" /> Personalized Preferences
                </p>
                <p className="block mt-1 text-blue-700 text-sm">
                  Set your budget, travel dates, and special requirements
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-purple-800 font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Real Places
                </p>
                <p className="block mt-1 text-purple-700 text-sm">
                  Uses WikiData, OpenStreetMap, and Overpass for authentic locations
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="inline-flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
              <p className="block mt-2 text-gray-500">Experience smooth loading animations</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}