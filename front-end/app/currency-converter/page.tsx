// ```jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
//   SwapHoriz, 
  TrendingUp, 
  History, 
  Star, 
  Search,
  ArrowDownUp,
  Calculator,
  Globe,
  Wallet,
  BarChart3,
  RefreshCw
} from 'lucide-react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [favorites, setFavorites] = useState(['USD', 'EUR', 'GBP']);
  const [recentConversions, setRecentConversions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('converter');
  const [historicalData, setHistoricalData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Using exchangerate-api.com (free tier, no API key required for basic usage)
  const BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

  // Fetch available currencies and exchange rates
  const fetchCurrencies = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/USD`);
      const data = await response.json();
      
      if (data.rates) {
        const currencyList = Object.keys(data.rates).map(code => ({
          code,
          name: code // In a real app, you'd map to full names
        }));
        setCurrencies(currencyList);
      }
    } catch (err) {
      setError('Failed to fetch currency data');
    } finally {
      setLoading(false);
    }
  };

  // Fetch exchange rates
  const fetchExchangeRates = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${BASE_URL}/${fromCurrency}`);
      const data = await response.json();
      
      if (data.rates && data.rates[toCurrency]) {
        const rate = data.rates[toCurrency];
        const result = (parseFloat(amount) * rate).toFixed(2);
        setConvertedAmount(result);
        setExchangeRate(rate.toFixed(6));
        setLastUpdated(new Date(data.date));
        
        // Add to recent conversions
        const newConversion = {
          id: Date.now(),
          amount: parseFloat(amount),
          from: fromCurrency,
          to: toCurrency,
          result: parseFloat(result),
          rate: rate,
          timestamp: new Date().toISOString()
        };
        
        setRecentConversions(prev => [newConversion, ...prev.slice(0, 4)]);
      } else {
        throw new Error('Exchange rate not available');
      }
    } catch (err) {
      setError('Failed to fetch exchange rates');
    } finally {
      setLoading(false);
    }
  };

  // Fetch historical data (using a different free API)
  const fetchHistoricalData = async () => {
    try {
      // Using a mock approach since most historical APIs require keys
      // In a real implementation, you'd use an API like exchangeratesapi.io
      const mockData = [
        { date: '2024-01-01', rate: 0.82 },
        { date: '2024-01-08', rate: 0.83 },
        { date: '2024-01-15', rate: 0.84 },
        { date: '2024-01-22', rate: 0.85 },
        { date: '2024-01-29', rate: 0.86 },
        { date: '2024-02-05', rate: 0.87 },
        { date: '2024-02-12', rate: 0.85 }
      ];
      setHistoricalData(mockData);
    } catch (err) {
      console.log('Historical data not available');
    }
  };

  useEffect(() => {
    fetchCurrencies();
    fetchHistoricalData();
  }, []);

  useEffect(() => {
    if (amount && !isNaN(amount) && fromCurrency && toCurrency) {
      fetchExchangeRates();
    }
  }, [amount, fromCurrency, toCurrency]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const addToFavorites = (currency) => {
    if (!favorites.includes(currency)) {
      setFavorites([...favorites, currency]);
    }
  };

  const removeFromFavorites = (currency) => {
    setFavorites(favorites.filter(fav => fav !== currency));
  };

  const refreshRates = () => {
    fetchExchangeRates();
  };

  const filteredCurrencies = currencies.filter(currency =>
    currency.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    currency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount, currencyCode) => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 2
      }).format(amount);
    } catch {
      return `${amount} ${currencyCode}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/80 backdrop-blur-md shadow-lg rounded-b-2xl p-4 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-xl">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Currency Converter
              </h1>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('converter')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'converter'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                Converter
              </button>
              <button
                onClick={() => setActiveTab('rates')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'rates'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                Rates
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'history'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                History
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {error && (
        <div className="max-w-7xl mx-auto p-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
            <p className="font-semibold">Error: {error}</p>
            <button 
              onClick={refreshRates}
              className="mt-2 text-red-700 hover:text-red-900 font-medium"
            >
              Try again
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'converter' && (
            <motion.div
              key="converter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Main Converter */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Currency Converter</h2>
                  {lastUpdated && (
                    <div className="text-sm text-gray-500">
                      Updated: {lastUpdated.toLocaleTimeString()}
                    </div>
                  )}
                </div>
                
                <div className="space-y-6">
                  {/* Amount Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full p-4 text-2xl font-bold border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Enter amount"
                    />
                  </div>

                  {/* Currency Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    {/* From Currency */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        From
                      </label>
                      <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      >
                        {currencies.map(currency => (
                          <option key={currency.code} value={currency.code}>
                            {currency.code}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Swap Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={swapCurrencies}
                        className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg"
                      >
                        {/* <SwapHoriz className="w-6 h-6" /> */}
                      </button>
                    </div>

                    {/* To Currency */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        To
                      </label>
                      <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      >
                        {currencies.map(currency => (
                          <option key={currency.code} value={currency.code}>
                            {currency.code}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Result */}
                  {convertedAmount && (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 text-center"
                    >
                      <p className="text-gray-600 mb-2">Converted Amount</p>
                      <p className="text-4xl font-bold text-gray-800 mb-2">
                        {formatCurrency(convertedAmount, toCurrency)}
                      </p>
                      <p className="text-gray-600">
                        1 {fromCurrency} = {exchangeRate} {toCurrency}
                      </p>
                    </motion.div>
                  )}

                  {/* Refresh Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={refreshRates}
                      disabled={loading}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50"
                    >
                      <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                      {loading ? 'Updating...' : 'Refresh Rates'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Favorites */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-lg font-semibold text-gray-800">Favorites</h3>
                  </div>
                  <div className="space-y-2">
                    {favorites.map(currencyCode => (
                      <div key={currencyCode} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{currencyCode}</span>
                        </div>
                        <button
                          onClick={() => removeFromFavorites(currencyCode)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Star className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Conversions */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <History className="w-5 h-5 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-800">Recent</h3>
                  </div>
                  <div className="space-y-3">
                    {recentConversions.map(conversion => (
                      <div key={conversion.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            {conversion.amount} {conversion.from} → {conversion.to}
                          </span>
                          <span className="text-sm text-gray-600">
                            {conversion.result.toFixed(2)}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(conversion.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'rates' && (
            <motion.div
              key="rates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Exchange Rates</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search currencies..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCurrencies.slice(0, 15).map(currency => {
                    const baseRate = 1; // USD as base
                    let relativeRate = 1;
                    
                    // Fetch rate for this currency against USD
                    fetch(`${BASE_URL}/USD`)
                      .then(response => response.json())
                      .then(data => {
                        if (data.rates && data.rates[currency.code]) {
                          relativeRate = data.rates[currency.code];
                        }
                      })
                      .catch(() => {});
                    
                    return (
                      <motion.div
                        key={currency.code}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
                        onClick={() => {
                          setToCurrency(currency.code);
                          setActiveTab('converter');
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">{currency.code}</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              favorites.includes(currency.code) 
                                ? removeFromFavorites(currency.code)
                                : addToFavorites(currency.code);
                            }}
                            className={`p-1 rounded ${favorites.includes(currency.code) ? 'text-yellow-500' : 'text-gray-300'}`}
                          >
                            <Star className={`w-4 h-4 ${favorites.includes(currency.code) ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">1 USD =</span>
                          <span className="font-semibold">
                            {relativeRate.toFixed(4)} {currency.code}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'history' && (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Historical Data</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    {fromCurrency} to {toCurrency} Exchange Rate Trend
                  </h3>
                  <div className="h-80 bg-gray-50 rounded-xl p-4">
                    <div className="h-full flex items-end justify-between gap-1">
                      {historicalData.map((data, index) => {
                        const maxValue = Math.max(...historicalData.map(d => d.rate));
                        const height = (data.rate / maxValue) * 100;
                        return (
                          <div key={index} className="flex-1 flex flex-col items-center">
                            <div 
                              className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                              style={{ height: `${height}%` }}
                            ></div>
                            <span className="text-xs text-gray-600 mt-2">
                              {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Data Table */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Historical Rates</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-700">Rate</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-700">Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        {historicalData.map((data, index) => {
                          const prevRate = index > 0 ? historicalData[index - 1].rate : data.rate;
                          const change = ((data.rate - prevRate) / prevRate * 100).toFixed(2);
                          const isPositive = change >= 0;
                          
                          return (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-3 px-4">{new Date(data.date).toLocaleDateString()}</td>
                              <td className="py-3 px-4 text-right font-medium">
                                {data.rate.toFixed(4)}
                              </td>
                              <td className={`py-3 px-4 text-right ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                {isPositive ? '+' : ''}{change}%
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">
                    {exchangeRate || 'N/A'}
                  </p>
                  <p className="text-sm text-gray-600">Current Rate</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center">
                  <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">
                    {Math.max(...historicalData.map(d => d.rate)).toFixed(4)}
                  </p>
                  <p className="text-sm text-gray-600">Highest Rate</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 text-center">
                  <BarChart3 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">
                    {Math.min(...historicalData.map(d => d.rate)).toFixed(4)}
                  </p>
                  <p className="text-sm text-gray-600">Lowest Rate</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">
                    {historicalData.length > 1 ? 
                      ((Math.max(...historicalData.map(d => d.rate)) - Math.min(...historicalData.map(d => d.rate))) / Math.min(...historicalData.map(d => d.rate)) * 100).toFixed(1) : 
                      'N/A'
                    }%
                  </p>
                  <p className="text-sm text-gray-600">Volatility</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CurrencyConverter;
// ```