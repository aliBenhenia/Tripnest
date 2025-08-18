'use client';

import { useState } from 'react';
import { Tooltip, Button, Popover } from 'antd';
import { Map, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function TripPlannerButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const content = (
    <div className="flex flex-col gap-2 p-2">
      <Button
        onClick={() => {
          setOpen(false);
          router.push('/planner');
        }}
        className="flex items-center gap-2 h-auto py-3 px-4 rounded-lg transition-all hover:bg-gray-50"
      >
        <Map size={18} className="text-blue-500" />
        <div className="text-left">
          <div className="font-medium text-gray-800">Normal Planner</div>
          <div className="text-xs text-gray-500">Create your custom itinerary</div>
        </div>
      </Button>
      <Button
        onClick={() => {
          setOpen(false);
          router.push('/generatour');
        }}
        className="flex items-center gap-2 h-auto py-3 px-4 rounded-lg transition-all hover:bg-gray-50"
      >
        <Sparkles size={18} className="text-purple-500" />
        <div className="text-left">
          <div className="font-medium text-gray-800">AI Generator</div>
          <div className="text-xs text-gray-500">Smart trip suggestions</div>
        </div>
      </Button>
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
        <Tooltip  placement="top" mouseEnterDelay={0.2}>
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