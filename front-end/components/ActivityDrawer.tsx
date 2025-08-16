"use client";

import React, { use, useEffect, useState } from "react";
import { Modal, Button, Skeleton, message, notification } from "antd";
import { HeartOutlined, CalendarOutlined } from "@ant-design/icons";
import axios from "axios";
import { motion } from "framer-motion";
import notify from "@/lib/notify";

interface WikiActivity {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: string;
}

interface ActivityModalProps {
  open: boolean;
  onClose: () => void;
  activity: WikiActivity;
  lat?: number;
  lon?: number;
  showWeather?: boolean;
}

const ActivityDrawer: React.FC<ActivityModalProps> = ({
  open,
  onClose,
  activity,
  lat,
  lon,
  showWeather = true,
}) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(lat, lon);
  }, [lat, lon]);

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
    if (open) {
      setLoading(true);
      if (showWeather && lat && lon) {
        fetchWeather().finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    }
  }, [open, lat, lon, showWeather]);

  const handleAddToFavorites = async () => {
    try {
      const token = localStorage.getItem("TOKEN_KEY");
      if (!token) {
        notify({ type: "error", message: "Authentication Error" });
        return;
      }
      const saveData = {
        activityId: activity.id,
        name: activity.name,
        description: activity.description,
        imageUrl: activity.imageUrl,
        type: activity.type,
        latitude: lat,
        longitude: lon,
      };
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/saves`,
        saveData,
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
      );
      notify({ type: "success", message: "Added to favorites!" });
    } catch (error) {
      notify({ type: "error", message: "Error adding to favorites" });
    }
  };

  const handlePlanVisit = () => {
    notification.open({
      message: "📅 Planning Feature",
      description: "Feature coming soon!",
      onClick: () => console.log("Notification Clicked!"),
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
          className="w-full rounded-2xl shadow-lg border border-gray-200"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      ) : (
        <div className="w-full h-56 bg-gray-100 flex items-center justify-center text-gray-400 rounded-2xl">
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
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow">
          <iframe
            className="w-full"
            height="220"
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
      {open && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition-opacity duration-300"></div>
      )}
      <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        centered
        width={700}
        bodyStyle={{ maxHeight: "80vh", overflowY: "auto", padding: "24px" }}
        className="rounded-3xl"
        title={
          <span className="text-2xl font-bold text-gray-800">{activity.name}</span>
        }
      >
        {loading ? <Skeleton active paragraph={{ rows: 5 }} /> : Content}
      </Modal>
    </>
  );
};

export default ActivityDrawer;
