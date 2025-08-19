// ```jsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Volume2, 
  Copy, 
  Check, 
  Star, 
  Heart, 
  Filter,
  Search,
  Globe,
  Mic,
  BookOpen,
  Users,
  Clock,
  MapPin,
  Phone,
  Wifi,
  Coffee,
  Utensils,
  Camera,
  Music,
  ShoppingCart,
  Car,
  Home,
  Briefcase,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const InstantPhrasebook = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('es');
  const [translatedPhrases, setTranslatedPhrases] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copiedPhrase, setCopiedPhrase] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showPhrasebook, setShowPhrasebook] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [speaking, setSpeaking] = useState(null);

  // LibreTranslate API endpoint (using a reliable free instance)
  const TRANSLATE_API = 'https://libretranslate.com/translate';

  // Supported languages
  const languages = [
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' }
  ];

  // Categories and phrases
  const categories = [
    { id: 'all', name: 'All', icon: Globe },
    { id: 'greetings', name: 'Greetings', icon: Users },
    { id: 'booking', name: 'Booking', icon: Clock },
    { id: 'directions', name: 'Directions', icon: MapPin },
    { id: 'emergency', name: 'Emergency', icon: Phone },
    { id: 'food', name: 'Food & Drink', icon: Utensils },
    { id: 'shopping', name: 'Shopping', icon: ShoppingCart },
    { id: 'activities', name: 'Activities', icon: Camera }
  ];

  const phrases = [
    // Greetings
    { id: 1, category: 'greetings', english: 'Hello', target: '' },
    { id: 2, category: 'greetings', english: 'Good morning', target: '' },
    { id: 3, category: 'greetings', english: 'Good afternoon', target: '' },
    { id: 4, category: 'greetings', english: 'Good evening', target: '' },
    { id: 5, category: 'greetings', english: 'How are you?', target: '' },
    { id: 6, category: 'greetings', english: 'Thank you', target: '' },
    { id: 7, category: 'greetings', english: 'You\'re welcome', target: '' },
    { id: 8, category: 'greetings', english: 'Goodbye', target: '' },

    // Booking
    { id: 9, category: 'booking', english: 'I would like to book', target: '' },
    { id: 10, category: 'booking', english: 'For how many people?', target: '' },
    { id: 11, category: 'booking', english: 'What time?', target: '' },
    { id: 12, category: 'booking', english: 'How much does it cost?', target: '' },
    { id: 13, category: 'booking', english: 'Do you have availability?', target: '' },
    { id: 14, category: 'booking', english: 'Can I cancel?', target: '' },
    { id: 15, category: 'booking', english: 'I need a refund', target: '' },
    { id: 16, category: 'booking', english: 'Where is the meeting point?', target: '' },

    // Directions
    { id: 17, category: 'directions', english: 'Where is...?', target: '' },
    { id: 18, category: 'directions', english: 'How do I get to...?', target: '' },
    { id: 19, category: 'directions', english: 'Left', target: '' },
    { id: 20, category: 'directions', english: 'Right', target: '' },
    { id: 21, category: 'directions', english: 'Straight ahead', target: '' },
    { id: 22, category: 'directions', english: 'Nearby', target: '' },
    { id: 23, category: 'directions', english: 'Far', target: '' },
    { id: 24, category: 'directions', english: 'Map', target: '' },

    // Emergency
    { id: 25, category: 'emergency', english: 'Help!', target: '' },
    { id: 26, category: 'emergency', english: 'I need a doctor', target: '' },
    { id: 27, category: 'emergency', english: 'Call the police', target: '' },
    { id: 28, category: 'emergency', english: 'Call an ambulance', target: '' },
    { id: 29, category: 'emergency', english: 'I am lost', target: '' },
    { id: 30, category: 'emergency', english: 'Where is the hospital?', target: '' },
    { id: 31, category: 'emergency', english: 'I don\'t feel well', target: '' },
    { id: 32, category: 'emergency', english: 'Where is the pharmacy?', target: '' },

    // Food & Drink
    { id: 33, category: 'food', english: 'I would like...', target: '' },
    { id: 34, category: 'food', english: 'Water', target: '' },
    { id: 35, category: 'food', english: 'Menu', target: '' },
    { id: 36, category: 'food', english: 'Vegetarian', target: '' },
    { id: 37, category: 'food', english: 'I am allergic to...', target: '' },
    { id: 38, category: 'food', english: 'Delicious!', target: '' },
    { id: 39, category: 'food', english: 'Check, please', target: '' },
    { id: 40, category: 'food', english: 'The bill', target: '' },

    // Shopping
    { id: 41, category: 'shopping', english: 'How much is this?', target: '' },
    { id: 42, category: 'shopping', english: 'Do you have...?', target: '' },
    { id: 43, category: 'shopping', english: 'I\'ll take it', target: '' },
    { id: 44, category: 'shopping', english: 'Too expensive', target: '' },
    { id: 45, category: 'shopping', english: 'Discount', target: '' },
    { id: 46, category: 'shopping', english: 'Credit card', target: '' },
    { id: 47, category: 'shopping', english: 'Cash', target: '' },
    { id: 48, category: 'shopping', english: 'Receipt', target: '' },

    // Activities
    { id: 49, category: 'activities', english: 'Tour guide', target: '' },
    { id: 50, category: 'activities', english: 'Photography', target: '' },
    { id: 51, category: 'activities', english: 'Museum', target: '' },
    { id: 52, category: 'activities', english: 'Beach', target: '' },
    { id: 53, category: 'activities', english: 'Hiking', target: '' },
    { id: 54, category: 'activities', english: 'Boat trip', target: '' },
    { id: 55, category: 'activities', english: 'Cooking class', target: '' },
    { id: 56, category: 'activities', english: 'Wine tasting', target: '' }
  ];

  // Translate all phrases
  const translatePhrases = async () => {
    if (!selectedLanguage || selectedLanguage === 'en') {
      // If English is selected, clear translations
      const clearedTranslations = {};
      phrases.forEach(phrase => {
        clearedTranslations[phrase.id] = phrase.english;
      });
      setTranslatedPhrases(clearedTranslations);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const newTranslations = {};
      
      // Translate phrases in smaller batches to avoid API limits
      for (let i = 0; i < phrases.length; i += 3) {
        const batch = phrases.slice(i, i + 3);
        const promises = batch.map(phrase => 
          fetch(TRANSLATE_API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              q: phrase.english,
              source: 'en',
              target: selectedLanguage,
              format: 'text'
            })
          }).then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
        );
        
        try {
          const results = await Promise.all(promises);
          results.forEach((result, index) => {
            if (result && result.translatedText) {
              newTranslations[batch[index].id] = result.translatedText;
            } else {
              newTranslations[batch[index].id] = batch[index].english; // Fallback to English
            }
          });
        } catch (batchError) {
          console.warn('Batch translation failed, using fallback:', batchError);
          batch.forEach(phrase => {
            newTranslations[phrase.id] = phrase.english; // Fallback to English
          });
        }
        
        // Add delay to respect API limits
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      setTranslatedPhrases(newTranslations);
    } catch (err) {
      console.error('Translation error:', err);
      setError('Failed to translate phrases. Showing English only.');
      
      // Fallback: show English phrases
      const englishOnly = {};
      phrases.forEach(phrase => {
        englishOnly[phrase.id] = phrase.english;
      });
      setTranslatedPhrases(englishOnly);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    translatePhrases();
  }, [selectedLanguage]);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPhrase(text);
      setTimeout(() => setCopiedPhrase(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const speakText = (text, phraseId) => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech
      if (speaking === phraseId) {
        speechSynthesis.cancel();
        setSpeaking(null);
        return;
      }
      
      setSpeaking(phraseId);
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set language for speech synthesis
      const langMap = {
        'es': 'es-ES',
        'fr': 'fr-FR',
        'de': 'de-DE',
        'it': 'it-IT',
        'pt': 'pt-PT',
        'ru': 'ru-RU',
        'zh': 'zh-CN',
        'ja': 'ja-JP',
        'ko': 'ko-KR',
        'ar': 'ar-SA',
        'hi': 'hi-IN'
      };
      
      utterance.lang = langMap[selectedLanguage] || 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onend = () => {
        setSpeaking(null);
      };
      
      utterance.onerror = () => {
        setSpeaking(null);
      };
      
      speechSynthesis.speak(utterance);
    }
  };

  const toggleFavorite = (phraseId) => {
    setFavorites(prev => 
      prev.includes(phraseId) 
        ? prev.filter(id => id !== phraseId)
        : [...prev, phraseId]
    );
  };

  const filteredPhrases = phrases.filter(phrase => {
    const matchesSearch = phrase.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (translatedPhrases[phrase.id] && 
                          translatedPhrases[phrase.id].toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || phrase.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Globe;
  };

  if (!showPhrasebook) {
    return (
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setShowPhrasebook(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50 w-full max-w-sm md:max-w-md lg:max-w-lg"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Instant Phrasebook</h3>
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <Globe className="w-4 h-4" />
                  <span>
                    {languages.find(lang => lang.code === selectedLanguage)?.flag}{' '}
                    {languages.find(lang => lang.code === selectedLanguage)?.name}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowPhrasebook(false)}
              className="text-blue-100 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Language Selection and Search */}
        <div className="p-3 border-b border-gray-200 space-y-3">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
          >
            <option value="en">🇺🇸 English</option>
            {languages.map(language => (
              <option key={language.code} value={language.code}>
                {language.flag} {language.name}
              </option>
            ))}
          </select>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search phrases..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="p-3 border-b border-gray-200">
          <div className="flex gap-1 overflow-x-auto pb-2">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all flex-shrink-0 ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="p-8 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Phrases List */}
        <div className="max-h-96 overflow-y-auto">
          <AnimatePresence>
            {filteredPhrases.map((phrase) => (
              <motion.div
                key={phrase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleFavorite(phrase.id)}
                    className={`p-1 mt-1 ${
                      favorites.includes(phrase.id)
                        ? 'text-red-500'
                        : 'text-gray-300 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(phrase.id) ? 'fill-current' : ''}`} />
                  </button>
                  
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">{phrase.english}</p>
                    {translatedPhrases[phrase.id] && translatedPhrases[phrase.id] !== phrase.english && (
                      <p className="text-gray-600 text-sm mt-1">
                        {translatedPhrases[phrase.id]}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex gap-1">
                    <button
                      onClick={() => speakText(translatedPhrases[phrase.id] || phrase.english, phrase.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        speaking === phrase.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-500 hover:text-blue-500 hover:bg-blue-50'
                      }`}
                    >
                      <Mic className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => copyToClipboard(translatedPhrases[phrase.id] || phrase.english)}
                      className="p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      {copiedPhrase === (translatedPhrases[phrase.id] || phrase.english) ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{filteredPhrases.length} phrases</span>
            <span className="flex items-center gap-1">
              <Mic className="w-3 h-3" />
              Tap mic to speak
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main App Component
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Overcome Language Barriers</h2>
              <p className="text-gray-600 mb-6">Communicate confidently anywhere with our instant phrasebook</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">Real-time Translation</h3>
                  </div>
                  <p className="text-blue-100 text-sm">Instantly translate key phrases to overcome language barriers</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Mic className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">Voice Pronunciation</h3>
                  </div>
                  <p className="text-green-100 text-sm">Hear correct pronunciation with one tap</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">How It Helps You</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Book Activities</p>
                      <p className="text-sm text-gray-600">Communicate with local providers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Utensils className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Order Food</p>
                      <p className="text-sm text-gray-600">Navigate menus with confidence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Ask for Directions</p>
                      <p className="text-sm text-gray-600">Get help finding your way</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Emergency Help</p>
                      <p className="text-sm text-gray-600">Communicate in critical situations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Travel Success Stories</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 border border-gray-200 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Booked a cooking class in Italy</p>
                    <p className="text-sm text-gray-600">"The phrasebook helped me communicate with the chef and I had an amazing experience!"</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-3 border border-gray-200 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Found the perfect restaurant in Japan</p>
                    <p className="text-sm text-gray-600">"I was able to ask about vegetarian options and got the best meal of my trip!"</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-3 border border-gray-200 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Camera className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Joined a photography tour in Greece</p>
                    <p className="text-sm text-gray-600">"The translation feature helped me book a sunset tour I'll never forget!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Start Guide</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium text-gray-800">Select Your Language</p>
                    <p className="text-sm text-gray-600">Choose from 10+ supported languages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium text-gray-800">Find Key Phrases</p>
                    <p className="text-sm text-gray-600">Browse by category or search for specific terms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium text-gray-800">Speak or Copy</p>
                    <p className="text-sm text-gray-600">Tap the mic to hear pronunciation or copy to clipboard</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Supported Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { flag: '🇪🇸', name: 'Spanish' },
                  { flag: '🇫🇷', name: 'French' },
                  { flag: '🇩🇪', name: 'German' },
                  { flag: '🇮🇹', name: 'Italian' },
                  { flag: '🇵🇹', name: 'Portuguese' },
                  { flag: '🇷🇺', name: 'Russian' },
                  { flag: '🇨🇳', name: 'Chinese' },
                  { flag: '🇯🇵', name: 'Japanese' }
                ].map((lang, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm text-gray-700">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Travel with Confidence</h3>
              <p className="text-blue-100 text-sm mb-4">Never let language barriers stop you from amazing experiences</p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Start Translating
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Instant Phrasebook Widget */}
      <InstantPhrasebook />
    </div>
  );
};

export default App;
// ```