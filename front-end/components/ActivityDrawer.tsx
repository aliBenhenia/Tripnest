"use client";

import React, { useEffect, useState } from "react";
import { Drawer, Modal, Button, Skeleton, message ,notification} from "antd";
import { HeartOutlined, CalendarOutlined } from "@ant-design/icons";
import axios from "axios";
import { motion } from "framer-motion";

interface WikiActivity {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: string;
}

interface ActivityDrawerProps {
  open: boolean;
  onClose: () => void;
  activity: WikiActivity;
  lat?: number;
  lon?: number;
  showWeather?: boolean;
}

const ActivityDrawer: React.FC<ActivityDrawerProps> = ({
  open,
  onClose,
  activity,
  lat,
  lon,
  showWeather = true,
}) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const fetchWeather = async () => {
    try {
      if (!lat || !lon) return;
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      setWeather(res.data.current_weather);
    } catch (err) {
      message.error("Failed to fetch weather data.");
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (open) {
      setLoading(true);
      if (showWeather && lat && lon) {
        fetchWeather().finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    }
  }, [open, lat, lon, showWeather]);

  const handleAddToFavorites = () => {
    notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
    message.success(`✅ ${activity.name} added to favorites!`);
  };

  const handlePlanVisit = () => {
     notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
    message.info("📅 Planning feature coming soon!");
  };

  const Content = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="space-y-6"
    >
      {activity.imageUrl ? (
        <motion.img
          src={activity.imageUrl}
          alt={activity.name}
          className="w-full rounded-xl shadow"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 rounded-xl">
          No image available
        </div>
      )}

      <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-wrap">
        {activity.description}
      </p>

      {weather && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800 text-sm">
          <p>
            <strong>🌡 Temperature:</strong> {weather.temperature}°C
          </p>
          <p>
            <strong>💨 Wind Speed:</strong> {weather.windspeed} km/h
          </p>
        </div>
      )}

      {lat && lon && (
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow">
          <iframe
            className="w-full"
            height="200"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`}
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <motion.div whileTap={{ scale: 0.95 }} className="w-full">
          <Button
            block
            icon={<HeartOutlined />}
            onClick={handleAddToFavorites}
            className="hover:border-pink-500 hover:text-pink-500"
          >
            Add to Favorites
          </Button>
        </motion.div>
        <motion.div whileTap={{ scale: 0.95 }} className="w-full">
          <Button
            block
            type="primary"
            icon={<CalendarOutlined />}
            onClick={handlePlanVisit}
          >
            Plan Visit
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Desktop Drawer */}
      {!isMobile && (
        <Drawer
          title={
            <span className="text-xl font-semibold text-gray-800">
              {activity.name}
            </span>
          }
          placement="right"
          width={420}
          onClose={onClose}
          open={open}
          forceRender
          destroyOnClose={false}
          styles={{
            body: {
              background: "#fff",
              color: "#000",
              paddingBottom: 40,
              overflowY: "auto",
            },
          }}
        >
          {loading ? <Skeleton active paragraph={{ rows: 5 }} /> : Content}
        </Drawer>
      )}

      {/* Mobile Modal */}
      {isMobile && (
        <Modal
          open={open}
          onCancel={onClose}
          footer={null}
          title={
            <span className="text-lg font-semibold text-gray-800">
              {activity.name}
            </span>
          }
          centered
          width="100%"
          style={{ top: 0, paddingBottom: 0 }}
          bodyStyle={{
            maxHeight: "calc(100vh - 60px)",
            overflowY: "auto",
          }}
        >
          {loading ? <Skeleton active paragraph={{ rows: 5 }} /> : Content}
        </Modal>
      )}
    </>
  );
};

export default ActivityDrawer;
