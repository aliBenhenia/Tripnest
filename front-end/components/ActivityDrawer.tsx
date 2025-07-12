"use client";

import React, { useEffect, useState } from "react";
import { Drawer, Button, Skeleton, message } from "antd";
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

  const fetchWeather = async () => {
    try {
      if (!lat || !lon) return;
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      setWeather(res.data.current_weather);
    } catch (err) {
      message.error("Failed to fetch weather data.");
      console.error("Weather fetch error", err);
    }
  };

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
    message.success(`✅ ${activity.name} added to favorites!`);
  };

  const handlePlanVisit = () => {
    message.info("📅 Planning feature coming soon!");
  };

  return (
    <Drawer
      title={
        <span className="text-gray-800 text-xl font-semibold">
          {activity.name}
        </span>
      }
      placement="right"
      width={420}
      onClose={onClose}
      open={open}
      className="custom-scrollbar"
      styles={{
        body: { background: "#ffffff", color: "#000", paddingBottom: 40 },
      }}
    >
      {loading ? (
        <Skeleton active paragraph={{ rows: 6 }} />
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="space-y-5"
        >
          {activity.imageUrl && (
            <motion.img
              src={activity.imageUrl}
              alt={activity.name}
              className="rounded-2xl w-full shadow-md"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          )}

          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
            {activity.description}
          </p>

          {weather && (
            <div className="bg-gray-100 p-4 rounded-xl text-gray-800 border border-gray-200">
              <p className="text-sm">
                <strong>Temperature:</strong> {weather.temperature}°C
              </p>
              <p className="text-sm">
                <strong>Wind Speed:</strong> {weather.windspeed} km/h
              </p>
            </div>
          )}

          {lat && lon && (
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
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

          <div className="flex gap-3 justify-between pt-4">
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
      )}
    </Drawer>
  );
};

export default ActivityDrawer;
