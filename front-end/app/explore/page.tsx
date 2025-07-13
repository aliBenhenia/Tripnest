"use client";

import React, { useState, useMemo } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { StarOutlined, StarFilled, PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

type City = {
  id: number;
  title: string;
  description: string;
  lat: number;
  lon: number;
  rating: number;
  image: string;
};

const DEFAULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/320px-No_image_available.svg.png";

const moroccoCities: City[] = [
  // Morocco Cities
  {
    id: 1,
    title: "Casablanca",
    description: "Economic capital and largest city of Morocco.",
    lat: 33.5731,
    lon: -7.5898,
    rating: 4.6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Casablanca_Cityscape_2.jpg",
  },
  {
    id: 2,
    title: "Marrakech",
    description: "Famous for its medina and vibrant souks.",
    lat: 31.6295,
    lon: -7.9811,
    rating: 4.8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Marrakech_Medina_Gate_2013.jpg",
  },
  {
    id: 3,
    title: "Fes",
    description: "Ancient city known for its walled medina.",
    lat: 34.0331,
    lon: -5.0003,
    rating: 4.7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Fes_Medina_Morocco_2007_1.jpg",
  },
  {
    id: 4,
    title: "Rabat",
    description: "Capital city of Morocco with historic landmarks.",
    lat: 34.0209,
    lon: -6.8416,
    rating: 4.5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Rabat_Mohammed_V_Mosque.jpg",
  },
  {
    id: 5,
    title: "Tangier",
    description: "Port city on the Strait of Gibraltar.",
    lat: 35.7595,
    lon: -5.8339,
    rating: 4.4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Tangier_2008.JPG",
  },
  {
    id: 6,
    title: "Agadir",
    description: "Popular seaside resort with beaches.",
    lat: 30.4278,
    lon: -9.5981,
    rating: 4.3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Agadir_croissant_de_l%27oc%C3%A9an_2010.jpg",
  },

  // Asia Cities
  {
    id: 7,
    title: "Tokyo",
    description: "Capital of Japan, famous for its modernity and tradition.",
    lat: 35.6762,
    lon: 139.6503,
    rating: 4.9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Tokyo_Tower_and_surrounding_buildings_2020.jpg",
  },
  {
    id: 8,
    title: "Bangkok",
    description: "Capital of Thailand, known for vibrant street life and temples.",
    lat: 13.7563,
    lon: 100.5018,
    rating: 4.7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Bangkok_Skyline_at_Dusk_-_2017.jpg",
  },
  {
    id: 9,
    title: "Seoul",
    description: "Capital of South Korea, blend of technology and tradition.",
    lat: 37.5665,
    lon: 126.978,
    rating: 4.8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Seoul_skyline_from_Namsan_Tower_2016.jpg",
  },

  // Europe Cities
  {
    id: 10,
    title: "Paris",
    description: "Capital of France, known as the city of light and love.",
    lat: 48.8566,
    lon: 2.3522,
    rating: 4.9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
  },
  {
    id: 11,
    title: "London",
    description: "Capital of UK, famous for history, culture and landmarks.",
    lat: 51.5074,
    lon: -0.1278,
    rating: 4.8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg",
  },
  {
    id: 12,
    title: "Rome",
    description: "Capital of Italy, rich in ancient history and art.",
    lat: 41.9028,
    lon: 12.4964,
    rating: 4.7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
  },
];

export default function MoroccoCitiesMap() {
  const [activeCityId, setActiveCityId] = useState<number>(moroccoCities[0].id);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cities by search term
  const filteredCities = useMemo(() => {
    return moroccoCities.filter((city) =>
      city.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Find selected city details
  const activeCity = useMemo(() => {
    return moroccoCities.find((city) => city.id === activeCityId) || moroccoCities[0];
  }, [activeCityId]);

  // Fallback image handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMAGE;
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
      {/* Left: Search + List */}
      <section className="md:w-1/3 flex flex-col gap-4">
        <Search
          placeholder="Search cities"
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={setSearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-2"
          value={searchTerm}
        />
        <div className="overflow-y-auto max-h-[75vh] space-y-4">
          {filteredCities.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400">No cities found.</p>
          )}
          {filteredCities.map((city) => (
      <div
  key={city.id}
  onClick={() => setActiveCityId(city.id)}
  className={`flex gap-4 p-3 rounded-lg border transition-shadow w-full text-left
    ${
      activeCityId === city.id
        ? "border-indigo-600 shadow-lg bg-indigo-50 dark:bg-indigo-900"
        : "border-gray-300 dark:border-gray-700 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800"
    }
    focus:outline-none focus:ring-2 focus:ring-indigo-500
  `}
>
  <img
    src={city.image}
    alt={city.title}
    onError={handleImageError}
    className="w-20 h-14 rounded-md object-cover flex-shrink-0"
    loading="lazy"
  />
  <div className="flex flex-col justify-center flex-grow min-w-0">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{city.title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{city.description}</p>
    <p className="text-xs text-gray-500 dark:text-gray-400">Rating: {city.rating} ⭐</p>
  </div>

  {/* Buttons container */}
  <div className="flex flex-col items-center justify-center space-y-2 ml-4 flex-shrink-0">
    <Tooltip title="Add to Trip">
      <Button
        type="primary"
        shape="circle"
        size="small"
        icon={<PlusOutlined />}
        onClick={(e) => e.stopPropagation()} // no-op to prevent propagation only
      />
    </Tooltip>

    <Tooltip title="Save">
      <Button
        type="text"
        shape="circle"
        size="small"
        icon={<StarOutlined />}
        onClick={(e) => e.stopPropagation()} // no-op to prevent propagation only
      />
    </Tooltip>
  </div>
</div>

          ))}
        </div>
      </section>

      {/* Right: Map */}
      <section className="md:w-2/3 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 shadow-md">
        <iframe
          className="w-full h-[400px] md:h-[600px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${activeCity.lat},${activeCity.lon}&z=6&hl=en&output=embed`}
          title={`Map of ${activeCity.title}`}
        />
      </section>
    </main>
  );
}
