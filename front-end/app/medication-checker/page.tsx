"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  WifiOff, 
  Battery, 
  Zap, 
  Image, 
  Video, 
  Download, 
  Settings,
  Check,
  X,
  AlertTriangle
} from 'lucide-react';

// Create context for data saver mode
const DataSaverContext = createContext();

// Data Saver Provider Component
const DataSaverProvider = ({ children }) => {
  const [dataSaverMode, setDataSaverMode] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('unknown');
  const [networkInfo, setNetworkInfo] = useState(null);
  const [showDataSaverBanner, setShowDataSaverBanner] = useState(false);

  // Check connection status using navigator.connection API
  const checkConnectionStatus = () => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      setNetworkInfo({
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      });

      // Set connection status based on network type
      const effectiveType = connection.effectiveType;
      setConnectionStatus(effectiveType);

      // Auto-enable data saver for slow connections
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        setDataSaverMode(true);
        setShowDataSaverBanner(true);
      }
    } else {
      // Fallback for browsers that don't support navigator.connection
      setConnectionStatus('unknown');
    }
  };

  // Toggle data saver mode
  const toggleDataSaver = () => {
    const newState = !dataSaverMode;
    setDataSaverMode(newState);
    localStorage.setItem('dataSaverMode', newState.toString());
  };

  // Initialize data saver mode
  useEffect(() => {
    // Check localStorage for saved preference
    const savedDataSaverMode = localStorage.getItem('dataSaverMode');
    if (savedDataSaverMode !== null) {
      setDataSaverMode(savedDataSaverMode === 'true');
    }

    checkConnectionStatus();

    // Listen for connection changes
    if ('connection' in navigator) {
      navigator.connection.addEventListener('change', checkConnectionStatus);
    }

    // Check connection periodically
    const interval = setInterval(checkConnectionStatus, 30000);

    return () => {
      if ('connection' in navigator) {
        navigator.connection.removeEventListener('change', checkConnectionStatus);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <DataSaverContext.Provider value={{
      dataSaverMode,
      connectionStatus,
      networkInfo,
      toggleDataSaver,
      setDataSaverMode
    }}>
      {children}
      <DataSaverBanner 
        show={showDataSaverBanner} 
        onClose={() => setShowDataSaverBanner(false)}
        onEnable={() => {
          setDataSaverMode(true);
          setShowDataSaverBanner(false);
        }}
        networkInfo={networkInfo}
      />
    </DataSaverContext.Provider>
  );
};

// Hook to use data saver context
const useDataSaver = () => {
  const context = useContext(DataSaverContext);
  if (!context) {
    throw new Error('useDataSaver must be used within a DataSaverProvider');
  }
  return context;
};

// Data Saver Banner Component
const DataSaverBanner = ({ show, onClose, onEnable, networkInfo }) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
    >
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-yellow-800 mb-1">Slow Network Detected</h3>
            <p className="text-sm text-yellow-700 mb-3">
              {networkInfo?.effectiveType?.toUpperCase()} connection detected. 
              Enable Data Saver to reduce data usage.
            </p>
            <div className="flex gap-2">
              <button
                onClick={onEnable}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
              >
                Enable Data Saver
              </button>
              <button
                onClick={onClose}
                className="px-3 py-2 text-yellow-700 hover:text-yellow-800 rounded-lg text-sm font-medium transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Data Saver Indicator Component
const DataSaverIndicator = () => {
  const { dataSaverMode, connectionStatus, networkInfo, toggleDataSaver } = useDataSaver();
  const [showSettings, setShowSettings] = useState(false);

  const getConnectionIcon = () => {
    switch (connectionStatus) {
      case '4g':
        return <Wifi className="w-4 h-4 text-green-500" />;
      case '3g':
        return <Wifi className="w-4 h-4 text-yellow-500" />;
      case '2g':
      case 'slow-2g':
        return <WifiOff className="w-4 h-4 text-red-500" />;
      default:
        return <Wifi className="w-4 h-4 text-gray-500" />;
    }
  };

  const getConnectionColor = () => {
    switch (connectionStatus) {
      case '4g':
        return 'text-green-500';
      case '3g':
        return 'text-yellow-500';
      case '2g':
      case 'slow-2g':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed top-20 right-6 z-40"
      >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-3">
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1 ${getConnectionColor()}`}>
              {getConnectionIcon()}
              <span className="text-xs font-medium uppercase">
                {connectionStatus}
              </span>
            </div>
            
            {dataSaverMode && (
              <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                <Zap className="w-3 h-3" />
                <span className="text-xs font-medium">Data Saver</span>
              </div>
            )}
            
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-1 text-gray-500 hover:text-gray-700"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Data Saver Settings Panel */}
      {showSettings && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="fixed top-32 right-6 z-40 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Data Settings</h3>
            <button
              onClick={() => setShowSettings(false)}
              className="p-1 text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Data Saver Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Data Saver Mode</p>
                <p className="text-sm text-gray-600">
                  {dataSaverMode 
                    ? 'Reducing data usage' 
                    : 'Standard data usage'
                  }
                </p>
              </div>
              <button
                onClick={toggleDataSaver}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  dataSaverMode ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    dataSaverMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            {/* Network Info */}
            {networkInfo && (
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-medium text-gray-800 mb-2">Network Info</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speed</span>
                    <span className="font-medium">
                      {networkInfo.downlink ? `${networkInfo.downlink} Mbps` : 'Unknown'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Latency</span>
                    <span className="font-medium">
                      {networkInfo.rtt ? `${networkInfo.rtt} ms` : 'Unknown'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type</span>
                    <span className="font-medium uppercase">{networkInfo.effectiveType}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Data Savings Tips */}
            <div className="bg-blue-50 rounded-lg p-3">
              <h4 className="font-medium text-blue-800 mb-2">Data Saving Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li className="flex items-center gap-2">
                  <Zap className="w-3 h-3" />
                  <span>Disable auto-play videos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image className="w-3 h-3" />
                  <span>Load low-quality images</span>
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-3 h-3" />
                  <span>Cache content locally</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

// Optimized Image Component for Data Saver Mode
const OptimizedImage = ({ src, lowQualitySrc, alt, className, ...props }) => {
  const { dataSaverMode } = useDataSaver();
  const [imageSrc, setImageSrc] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use low-quality image in data saver mode or when main image fails
    const finalSrc = dataSaverMode && lowQualitySrc ? lowQualitySrc : src;
    setImageSrc(finalSrc);
  }, [dataSaverMode, src, lowQualitySrc]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    if (!dataSaverMode && lowQualitySrc) {
      setImageSrc(lowQualitySrc);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className={`relative ${className || ''}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity ${className || ''}`}
        {...props}
      />
    </div>
  );
};

// Optimized Video Component for Data Saver Mode
const OptimizedVideo = ({ src, poster, lowQualitySrc, className, autoPlay, ...props }) => {
  const { dataSaverMode } = useDataSaver();
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    // Disable auto-play and use low-quality video in data saver mode
    const finalSrc = dataSaverMode && lowQualitySrc ? lowQualitySrc : src;
    setVideoSrc(finalSrc);
  }, [dataSaverMode, src, lowQualitySrc]);

  if (dataSaverMode) {
    return (
      <div className={`bg-gray-100 rounded-lg flex items-center justify-center ${className || ''}`}>
        <div className="text-center p-4">
          <Video className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 text-sm">Video disabled in Data Saver mode</p>
          <button className="text-blue-500 text-sm mt-1 hover:text-blue-600">
            Enable to view video
          </button>
        </div>
      </div>
    );
  }

  return (
    <video
      src={videoSrc}
      poster={poster}
      autoPlay={autoPlay && !dataSaverMode}
      controls
      className={className}
      {...props}
    />
  );
};

// Data Usage Stats Component
const DataUsageStats = () => {
  const { dataSaverMode, networkInfo } = useDataSaver();
  const [dataSaved, setDataSaved] = useState(0);

  useEffect(() => {
    // Simulate data savings calculation
    const calculateDataSavings = () => {
      if (dataSaverMode) {
        // Estimate data savings based on network type
        const savingsMap = {
          '4g': 0.3, // 30% savings
          '3g': 0.5, // 50% savings
          '2g': 0.7, // 70% savings
          'slow-2g': 0.8 // 80% savings
        };
        const savings = savingsMap[networkInfo?.effectiveType] || 0.3;
        setDataSaved(Math.round(savings * 100));
      } else {
        setDataSaved(0);
      }
    };

    calculateDataSavings();
  }, [dataSaverMode, networkInfo]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Usage</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-blue-500" />
            <span className="font-medium text-gray-800">Data Saver</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">
            {dataSaverMode ? 'ON' : 'OFF'}
          </p>
        </div>
        
        <div className="bg-green-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Download className="w-5 h-5 text-green-500" />
            <span className="font-medium text-gray-800">Savings</span>
          </div>
          <p className="text-2xl font-bold text-green-600">
            {dataSaved}%
          </p>
        </div>
      </div>
      
      {dataSaverMode && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-yellow-800 mb-1">Data Saver Active</h4>
              <p className="text-sm text-yellow-700">
                You're saving up to {dataSaved}% of your data by loading optimized content.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <DataSaverProvider>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Smart Data Management</h2>
                <p className="text-gray-600 mb-6">
                  Automatically optimize your experience based on network conditions to save data and improve performance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        <Wifi className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold">Network Detection</h3>
                    </div>
                    <p className="text-blue-100 text-sm">
                      Automatically detects your network type and adjusts settings accordingly
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold">Data Savings</h3>
                    </div>
                    <p className="text-green-100 text-sm">
                      Reduce data usage by up to 80% with intelligent optimization
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">How It Works</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Wifi className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Detects Network</p>
                        <p className="text-sm text-gray-600">Real-time monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Optimizes Content</p>
                        <p className="text-sm text-gray-600">Loads efficiently</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Settings className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Saves Data</p>
                        <p className="text-sm text-gray-600">Reduces usage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Travel Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Optimized Image Example */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Destination Photo</h4>
                    <OptimizedImage
                      src="https://placehold.co/400x300/4F46E5/FFFFFF?text=High+Quality"
                      lowQualitySrc="https://placehold.co/200x150/4F46E5/FFFFFF?text=Low+Quality"
                      alt="Travel destination"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Image automatically optimized based on your data settings
                    </p>
                  </div>
                  
                  {/* Optimized Video Example */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Travel Video</h4>
                    <OptimizedVideo
                      src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                      poster="https://placehold.co/400x225/059669/FFFFFF?text=Video+Poster"
                      lowQualitySrc="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                      className="w-full h-48 rounded-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Video playback adapts to your network conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <DataUsageStats />
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Reduced Data Usage</p>
                      <p className="text-sm text-gray-600">Save up to 80% on roaming charges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Faster Loading</p>
                      <p className="text-sm text-gray-600">Optimized content loads quicker</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Better Performance</p>
                      <p className="text-sm text-gray-600">Smaller files mean less battery drain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Automatic Adaptation</p>
                      <p className="text-sm text-gray-600">Works without manual configuration</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Travel Smart</h3>
                <p className="text-purple-100 text-sm mb-4">
                  Data Saver Mode ensures you stay connected without breaking the bank on roaming charges.
                </p>
                <DataSaverToggle />
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Saver Components */}
        <DataSaverIndicator />
      </div>
    </DataSaverProvider>
  );
};

// Data Saver Toggle Component
const DataSaverToggle = () => {
  const { dataSaverMode, toggleDataSaver } = useDataSaver();

  return (
    <button
      onClick={toggleDataSaver}
      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
        dataSaverMode 
          ? 'bg-white/20 hover:bg-white/30' 
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5" />
        <span className="font-medium">Data Saver Mode</span>
      </div>
      <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        dataSaverMode ? 'bg-white' : 'bg-white/30'
      }`}>
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-purple-500 transition-transform ${
            dataSaverMode ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </div>
    </button>
  );
};

export default App;