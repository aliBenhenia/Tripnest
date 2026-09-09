'use client';

import { useState, useEffect } from 'react';
import { Tooltip, Button, Popover } from 'antd';
import { 
  Map, 
  BookOpen, 
  Bus, 
  Wallet, 
  CloudSun, 
  Mic
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function TripPlannerButton() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const options = [
    {
      key: 'planner',
      icon: <Map size={18} className="text-blue-500" />,
      title: 'Trip Planner',
      desc: 'Plan trips, stops, packing and expenses',
      path: '/planner',
      comingSoon: false
    },
    {
      key: 'guide',
      icon: <BookOpen size={18} className="text-pink-500" />,
      title: 'Travel Guide',
      desc: 'Local tips and information',
      comingSoon: true
    },
    {
      key: 'bus',
      icon: <Bus size={18} className="text-teal-500" />,
      title: 'Bus Schedules',
      desc: 'Track buses in real-time',
      comingSoon: true
    },
    {
      key: 'currency',
      icon: <Wallet size={18} className="text-orange-500" />,
      title: 'Currency Converter',
      desc: 'Convert currencies easily',
      comingSoon: true
    },
    {
      key: 'weather',
      icon: <CloudSun size={18} className="text-yellow-500" />,
      title: 'Weather Planner',
      desc: 'Plan trips with weather insights',
      comingSoon: true
    },
    {
      key: 'phrasebook',
      icon: <Mic size={18} className="text-indigo-500" />,
      title: 'Phrasebook',
      desc: 'Common phrases in local languages',
      comingSoon: true
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter(option => {
    const matchesSearch = option.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         option.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleClick = (opt) => {
    setOpen(false);
    if (opt.comingSoon) {
      toast(`${opt.title} is coming soon`);
    } else if (opt.path) {
      router.push(opt.path);
    }
  };

  const content = (
    <div className="w-80 md:w-96 max-h-[80vh] flex flex-col bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <Map className="text-blue-500" size={20} />
            Travel Toolkit
          </h3>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search travel tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
        </div>
      </div>

      {/* Options List */}
      <div className="flex-1 overflow-y-auto p-2">
        <AnimatePresence>
          {filteredOptions.length > 0 ? (
            <div className="space-y-1">
              {filteredOptions.map((opt) => (
                <motion.div
                  key={opt.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    onClick={() => handleClick(opt)}
                    className={`flex items-center gap-3 h-auto py-3 px-4 rounded-lg transition-all hover:bg-gray-50 w-full text-left ${
                      !opt.comingSoon ? 'border-l-4 border-l-blue-500 bg-blue-50 hover:bg-blue-100' : ''
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {opt.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-800 truncate">
                        {opt.title}
                        {opt.comingSoon && (
                          <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                            Coming soon
                          </span>
                        )}
                      </div>
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
              <p className="text-sm">No tools found for "{searchTerm}"</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{filteredOptions.length} tool{filteredOptions.length === 1 ? '' : 's'}</span>
          <span className="flex items-center gap-1">
            <Map size={12} />
            Trip Planner is live
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed z-50 ${isMobile ? 'bottom-16 left-1/2 transform -translate-x-1/2' : 'bottom-6 right-6'}`}
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
          title="Travel Toolkit"
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
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-20 blur-xl animate-pulse" />
            <Button
              shape="circle"
              size="large"
              icon={<Globe size={22} />}
              className="relative shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md border border-white/20"
              style={{
                background: 'linear-gradient(135deg, #1890ff 0%, #13c2c2 100%)',
                borderColor: '#1890ff',
                color: '#fff',
                width: isMobile ? '56px' : '64px',
                height: isMobile ? '56px' : '64px',
              }}
            />
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

const Globe = ({ size = 22 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
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