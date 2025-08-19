'use client';

import { useState } from 'react';
import { Tooltip, Button, Popover } from 'antd';
import { Map, Sparkles, Route, CloudSun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function TripPlannerButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
    },
    {
      key: 'ai-generator',
      icon: <Sparkles size={18} className="text-purple-500" />,
      title: 'AI Generator',
      desc: 'Smart trip suggestions',
      path: '/generatour',
    },
    {
      key: 'route-planner',
      icon: <Route size={18} className="text-green-500" />,
      title: 'Route Planner',
      desc: 'Route planning made easy',
      path: '/route-planner',
    },
    {
      key: 'weather-planner',
      icon: <CloudSun size={18} className="text-yellow-500" />,
      title: 'Weather Planner',
      desc: 'Plan trips with weather insights',
      path: '/weather-planner',
    },
    {
      key: 'currency-converter',
      icon: <Sparkles size={18} className="text-orange-500" />,
      title: 'Currency Converter',
      desc: 'Convert currencies easily',
      path: '/currency-converter',
    }
  ];

  const content = (
    <div className="flex flex-col gap-2 p-2">
      {options.map((opt) => (
        <Button
          key={opt.key}
          onClick={() => {
            setOpen(false);
            router.push(opt.path);
          }}
          className="flex items-center gap-2 h-auto py-3 px-4 rounded-lg transition-all hover:bg-gray-50"
        >
          {opt.icon}
          <div className="text-left">
            <div className="font-medium text-gray-800">{opt.title}</div>
            <div className="text-xs text-gray-500">{opt.desc}</div>
          </div>
        </Button>
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-16 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <Popover
        content={content}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        placement="top"
        overlayInnerStyle={{
          borderRadius: '12px',
          padding: 0,
        }}
      >
        <Tooltip title="Trip Planner" placement="top" mouseEnterDelay={0.2}>
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
              }}
            />
          </motion.div>
        </Tooltip>
      </Popover>
    </motion.div>
  );
}
