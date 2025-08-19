'use client';

import { useState, useEffect } from 'react';
import { Tooltip, Button, Popover, ConfigProvider } from 'antd';
import { 
  Map, 
  Sparkles, 
  Route, 
  CloudSun, 
  Phone, 
  BookOpen, 
  Bus, 
  Wallet, 
  Heart, 
  Mic,
  Settings,
  Zap,
  Wifi
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function TripPlannerButton() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dataSaverMode, setDataSaverMode] = useState(false);
  const router = useRouter();

  // Check if we're on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Check for data saver mode
    const savedDataSaver = localStorage.getItem('dataSaverMode');
    if (savedDataSaver) {
      setDataSaverMode(savedDataSaver === 'true');
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const options = [
    {
      key: 'planner',
      icon: <Map size={18} className="text-blue-500" />,
      title: 'Normal Planner',
      desc: 'Create your custom itinerary',
      path: '/planner',
      category: 'planning'
    },
    {
      key: 'ai-generator',
      icon: <Sparkles size={18} className="text-purple-500" />,
      title: 'AI Generator',
      desc: 'Smart trip suggestions',
      path: '/generatour',
      category: 'planning'
    },
    {
      key: 'route-planner',
      icon: <Route size={18} className="text-green-500" />,
      title: 'Route Planner',
      desc: 'Route planning made easy',
      path: '/route-planner',
      category: 'navigation'
    },
    {
      key: 'weather-planner',
      icon: <CloudSun size={18} className="text-yellow-500" />,
      title: 'Weather Planner',
      desc: 'Plan trips with weather insights',
      path: '/weather-planner',
      category: 'planning'
    },
    {
      key: 'currency-converter',
      icon: <Wallet size={18} className="text-orange-500" />,
      title: 'Currency Converter',
      desc: 'Convert currencies easily',
      path: '/currency-converter',
      category: 'utilities'
    },
    {
      key: "emergency",
      icon: <Phone size={18} className="text-red-500" />,
      title: "Emergency Contacts",
      desc: "Access emergency numbers and health info",
      path: "/emergency",
      category: 'safety'
    },
    {
      key: "phrasebook",
      icon: <Mic size={18} className="text-indigo-500" />,
      title: "Phrasebook",
      desc: "Communicate in any language",
      path: "/phrasebook",
      category: 'communication'
    },
    {
      key: "medication-checker",
      icon: <Heart size={18} className="text-pink-500" />,
      title: "Medication Checker",
      desc: "Check your medications",
      path: "/medication-checker",
      category: 'health'
    },
    {
      key: "bus-tracker",
      icon: <Bus size={18} className="text-teal-500" />,
      title: "Bus Tracker",
      desc: "Track your bus in real-time",
      path: "/bus",
      category: 'navigation'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', icon: Settings },
    { id: 'planning', name: 'Planning', icon: Map },
    { id: 'navigation', name: 'Navigation', icon: Route },
    { id: 'utilities', name: 'Utilities', icon: Wallet },
    { id: 'safety', name: 'Safety', icon: Phone },
    { id: 'communication', name: 'Communication', icon: Mic },
    { id: 'health', name: 'Health', icon: Heart }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter(option => {
    const matchesCategory = activeCategory === 'all' || option.category === activeCategory;
    const matchesSearch = option.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         option.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const content = (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#1890ff',
            algorithm: true,
          },
        },
      }}
    >
      <div className="w-80 md:w-96 max-h-[80vh] flex flex-col bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Map className="text-blue-500" size={20} />
              Trip Tools
            </h3>
            <div className="flex items-center gap-2">
              {dataSaverMode && (
                <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                  <Zap size={12} />
                  <span>Data Saver</span>
                </div>
              )}
              <button
                onClick={() => setDataSaverMode(!dataSaverMode)}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Wifi size={16} className={dataSaverMode ? 'text-blue-500' : 'text-gray-400'} />
              </button>
            </div>
          </div>
          
          {/* Search */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
          </div>
          
          {/* Categories */}
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
                  <Icon size={12} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Options List */}
        <div className="flex-1 overflow-y-auto p-2">
          <AnimatePresence>
            {filteredOptions.length > 0 ? (
              <div className="grid grid-cols-1 gap-2">
                {filteredOptions.map((opt) => (
                  <motion.div
                    key={opt.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      onClick={() => {
                        setOpen(false);
                        router.push(opt.path);
                      }}
                      className="flex items-center gap-3 h-auto py-3 px-4 rounded-lg transition-all hover:bg-gray-50 w-full text-left"
                    >
                      <div className="flex-shrink-0">
                        {opt.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-800 truncate">{opt.title}</div>
                        <div className="text-xs text-gray-500 truncate">{opt.desc}</div>
                      </div>
                      <div className="flex-shrink-0 text-gray-300">
                        <ChevronRight size={16} />
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Map size={32} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">No tools found</p>
              </div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Footer */}
        <div className="p-3 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{filteredOptions.length} tools available</span>
            <span className="flex items-center gap-1">
              <Settings size={12} />
              All-in-one travel toolkit
            </span>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed z-50 ${isMobile ? 'bottom-4 left-1/2 transform -translate-x-1/2' : 'bottom-6 right-6'}`}
    >
      <Popover
        content={content}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        placement={isMobile ? "top" : "topLeft"}
        overlayInnerStyle={{
          borderRadius: '12px',
          padding: 0,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
      >
        <Tooltip 
          title="Trip Planner Tools" 
          placement={isMobile ? "top" : "left"} 
          mouseEnterDelay={0.2}
        >
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.05, 1],
              borderRadius: ['50%', '40%', '50%'],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="absolute -inset-1 rounded-full bg-blue-500 opacity-20 blur-xl animate-pulse" />
            <Button
              shape="circle"
              size="large"
              icon={<Map size={22} />}
              className="relative shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md border border-white/20"
              style={{
                backgroundColor: '#1890ff',
                borderColor: '#1890ff',
                color: '#fff',
                width: isMobile ? '56px' : '64px',
                height: isMobile ? '56px' : '64px',
              }}
            />
            {filteredOptions.length > 0 && (
              <motion.div
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                {filteredOptions.length}
              </motion.div>
            )}
          </motion.div>
        </Tooltip>
      </Popover>
    </motion.div>
  );
}

// Helper Icons
const SearchIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ChevronRight = ({ size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <polyline points="9 18 15 12 9 6"></polyline> 
  </svg>
);