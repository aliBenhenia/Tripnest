'use client';

import { Tooltip, Button } from 'antd';
import { Map } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function TripPlannerButton() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-16 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <Tooltip title="Plan a Trip" placement="top" mouseEnterDelay={0.2}>
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
            onClick={() => router.push('/planner')}
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
    </motion.div>
  );
}
