// Moroccan Cities Data
export const moroccanCities = [
  {
    id: 1,
    name: "Marrakech",
    slug: "marrakech",
    properties: 783,
    imageUrl: "/images/marrakech.jpg",
    imageUrl2: "/images/marrakech.jpg",
    description: "Known for its vibrant souks, historic palaces, and the famous Jemaa el-Fnaa square.",
  },
  {
    id: 2,
    name: "Casablanca",
    slug: "casablanca",
    properties: 593,
    imageUrl: "/images/casablanca.jpg",
    imageUrl2: "/images/casablanca.jpg",
    description: "Morocco's largest city with modern architecture and the stunning Hassan II Mosque.",
  },
  {
    id: 3,
    name: "Chefchaouen",
    slug: "chefchaouen",
    properties: 312,
    imageUrl: "/images/chefchaouen.jpg",
    imageUrl2: "/images/chefchaouen.jpg",
    description: "The famous blue city nestled in the Rif Mountains with its distinctive blue-washed buildings.",
  },
  {
    id: 4,
    name: "Fes",
    slug: "fes",
    properties: 425,
    imageUrl: "/images/fes.jpg",
    imageUrl2: "/images/fes.jpg",
    description: "Home to the oldest university in the world and the largest car-free urban area.",
  },
  {
    id: 5,
    name: "Essaouira",
    slug: "essaouira",
    properties: 287,
    imageUrl: "/images/essaouira.jpg",
    imageUrl2: "/images/essaouira.jpg",
    description: "A charming coastal town known for its windy beaches, historic medina, and vibrant art scene.",
  },
  {
    id: 6,
    name: "Tangier",
    slug: "tangier",
    properties: 356,
    imageUrl: "/images/tangier.jpg",
    imageUrl2: "/images/tangier.jpg",
    description: "A port city where the Mediterranean meets the Atlantic, with a rich international history.",
  },
];

// Popular Experiences
export const popularExperiences = [
  {
    id: 1,
    title: "Traditional Moroccan Cooking Class",
    category: "Food & Cooking",
    price: 45,
    rating: 4.9,
    imageUrl: "/images/marrakech.jpg",
  },
  {
    id: 2,
    title: "Desert Camel Trek & Overnight Camp",
    category: "Adventure",
    price: 89,
    rating: 5.0,
    imageUrl: "/images/casablanca.jpg",
  },
  {
    id: 3,
    title: "Medina Walking Tour with Local Guide",
    category: "Cultural Tour",
    price: 31,
    rating: 4.8,
    imageUrl: "/images/fes.jpg",
  },
  {
    id: 4,
    title: "Atlas Mountains Day Trip",
    category: "Nature & Outdoors",
    price: 65,
    rating: 4.7,
    imageUrl: "/images/chefchaouen.jpg",
  },
]

// Categories
export const categories = [
  {
    id: 1,
    name: "Beach",
    icon: "/beach.png",
  },
  {
    id: 2,
    name: "Photography",
    icon: "/camera.png",
  },
  {
    id: 3,
    name: "Tour",
    icon: "/earth.png",
  },
  {
    id: 4,
    name: "Travel",
    icon: "/travel-bag.png",
  },
]

// City Activities
export const cityActivities: Record<number, Array<{ id: number; name: string; type: string; imageUrl: string }>> = {
  // Marrakech Activities
  1: [
    // Beach Activities
    {
      id: 101,
      name: "Ouzoud Waterfalls",
      type: "beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 102,
      name: "Ourika Valley River",
      type: "beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    // Photography Activities
    {
      id: 103,
      name: "Majorelle Garden",
      type: "photography",
      imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    {
      id: 104,
      name: "Medina Street Photography",
      type: "photography",
      imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    // Tour Activities
    {
      id: 105,
      name: "Atlas Mountains Tour",
      type: "tour",
      imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0",
    },
    {
      id: 106,
      name: "Desert Safari Tour",
      type: "tour",
      imageUrl: "https://images.unsplash.com/photo-1548234979-f5f8e1f5c221",
    },
    // Travel Activities
    {
      id: 107,
      name: "Camel Trekking",
      type: "travel",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
      id: 108,
      name: "Hot Air Balloon",
      type: "travel",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
  ],

  // Casablanca Activities
  2: [
    // Beach Activities
    {
      id: 201,
      name: "Ain Diab Beach",
      type: "beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 202,
      name: "Bouznika Beach",
      type: "beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    // Photography Activities
    {
      id: 203,
      name: "Hassan II Mosque",
      type: "photography",
      imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    {
      id: 204,
      name: "Art Deco District",
      type: "photography",
      imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    // Tour Activities
    {
      id: 205,
      name: "City Center Tour",
      type: "tour",
      imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0",
    },
    {
      id: 206,
      name: "Historical Tour",
      type: "tour",
      imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0",
    },
    // Travel Activities
    {
      id: 207,
      name: "Day Trip to Rabat",
      type: "travel",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
      id: 208,
      name: "El Jadida Visit",
      type: "travel",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
  ],

  // Fes Activities
  3: [
    // Beach Activities
    {
      id: 301,
      name: "Sidi Harazem Hot Springs",
      type: "beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 302,
      name: "Meknes Water Park",
      type: "beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    // Photography Activities
    {
      id: 303,
      name: "Blue Gate Photography",
      type: "photography",
      imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    {
      id: 304,
      name: "Medina Architecture",
      type: "photography",
      imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    // Tour Activities
    {
      id: 305,
      name: "Medina Guided Tour",
      type: "tour",
      imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0",
    },
    {
      id: 306,
      name: "Tanneries Tour",
      type: "tour",
      imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0",
    },
    // Travel Activities
    {
      id: 307,
      name: "Day Trip to Volubilis",
      type: "travel",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
      id: 308,
      name: "Meknes Excursion",
      type: "travel",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
  ],

  // Chefchaouen Activities
  4: [
    // Beach Activities
    {
      id: 401,
      name: "Ras El Maa Waterfall",
      type: "beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 402,
      name: "Akchour Waterfalls",
      type: "beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    // Photography Activities
    {
      id: 403,
      name: "Blue City Photography",
      type: "photography",
      imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    {
      id: 404,
      name: "Sunset Photography",
      type: "photography",
      imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    // Tour Activities
    {
      id: 405,
      name: "Blue City Walking Tour",
      type: "tour",
      imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0",
    },
    {
      id: 406,
      name: "Kasbah Tour",
      type: "tour",
      imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0",
    },
    // Travel Activities
    {
      id: 407,
      name: "Rif Mountains Trek",
      type: "travel",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
      id: 408,
      name: "Talassemtane National Park",
      type: "travel",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
  ],

  // Tangier Activities
  6: [
    // Beach Activities
    {
      id: 601,
      name: "Achakkar Beach",
      type: "beach",
      imageUrl: "/images/tangier.jpg",
    },
    {
      id: 602,
      name: "Tangier Bay",
      type: "beach",
      imageUrl: "/images/tangier.jpg",
    },
    // Photography Activities
    {
      id: 603,
      name: "Kasbah Photography",
      type: "photography",
      imageUrl: "/images/tangier.jpg",
    },
    {
      id: 604,
      name: "Cape Spartel Lighthouse",
      type: "photography",
      imageUrl: "/images/tangier.jpg",
    },
    // Tour Activities
    {
      id: 605,
      name: "Hercules Cave Tour",
      type: "tour",
      imageUrl: "/images/tangier.jpg",
    },
    {
      id: 606,
      name: "Old Medina Tour",
      type: "tour",
      imageUrl: "/images/tangier.jpg",
    },
    // Travel Activities
    {
      id: 607,
      name: "Day Trip to Asilah",
      type: "travel",
      imageUrl: "/images/tangier.jpg",
    },
    {
      id: 608,
      name: "Strait of Gibraltar Boat Tour",
      type: "travel",
      imageUrl: "/images/tangier.jpg",
    },
  ],

  // Essaouira Activities
  5: [
    // Beach Activities
    {
      id: 501,
      name: "Essaouira Beach",
      type: "beach",
      imageUrl: "/images/essaouira.jpg",
    },
    {
      id: 502,
      name: "Sidi Kaouki Beach",
      type: "beach",
      imageUrl: "/images/essaouira.jpg",
    },
    // Photography Activities
    {
      id: 503,
      name: "Ramparts Photography",
      type: "photography",
      imageUrl: "/images/essaouira.jpg",
    },
    {
      id: 504,
      name: "Harbor Sunset Photography",
      type: "photography",
      imageUrl: "/images/essaouira.jpg",
    },
    // Tour Activities
    {
      id: 505,
      name: "Medina Walking Tour",
      type: "tour",
      imageUrl: "/images/essaouira.jpg",
    },
    {
      id: 506,
      name: "Fishing Harbor Tour",
      type: "tour",
      imageUrl: "/images/essaouira.jpg",
    },
    // Travel Activities
    {
      id: 507,
      name: "Windsurfing Adventure",
      type: "travel",
      imageUrl: "/images/essaouira.jpg",
    },
    {
      id: 508,
      name: "Quad Biking",
      type: "travel",
      imageUrl: "/images/essaouira.jpg",
    },
  ],
}

interface City {
  name: string;
  region: string;
  image: string;
}

interface Activity {
  title: string;
  location: string;
  image: string;
  duration: string;
  groupSize: string;
  price: number;
  rating: number;
  reviews: number;
}

export const cities: City[] = [
  {
    name: "Marrakech",
    region: "Marrakech-Safi",
    image: "/images/marrakech.jpg",
  },
  {
    name: "Fes",
    region: "Fès-Meknès",
    image: "/images/fes.jpg",
  },
  {
    name: "Chefchaouen",
    region: "Tanger-Tétouan-Al Hoceïma",
    image: "/images/chefchaouen.jpg",
  },
  {
    name: "Casablanca",
    region: "Casablanca-Settat",
    image: "/images/casablanca.jpg",
  },
  {
    name: "Tangier",
    region: "Tanger-Tétouan-Al Hoceïma",
    image: "/images/tangier.jpg",
  },
  {
    name: "Essaouira",
    region: "Marrakech-Safi",
    image: "/images/essaouira.jpg",
  }
]

export const activities: Activity[] = [
  {
    title: "Desert Safari Adventure",
    location: "Merzouga Desert",
    image: "/images/marrakech.jpg",
    duration: "2 days",
    groupSize: "2-8 people",
    price: 149,
    rating: 4.9,
    reviews: 128
  },
  {
    title: "Traditional Cooking Class",
    location: "Marrakech Medina",
    image: "/images/casablanca.jpg",
    duration: "4 hours",
    groupSize: "4-10 people",
    price: 65,
    rating: 4.8,
    reviews: 96
  },
  {
    title: "Atlas Mountains Trek",
    location: "High Atlas",
    image: "/images/chefchaouen.jpg",
    duration: "1 day",
    groupSize: "2-6 people",
    price: 89,
    rating: 4.9,
    reviews: 156
  },
  {
    title: "Medina Photography Tour",
    location: "Fes Medina",
    image: "/images/fes.jpg",
    duration: "3 hours",
    groupSize: "1-4 people",
    price: 45,
    rating: 4.7,
    reviews: 82
  },
  {
    title: "Coastal Exploration",
    location: "Tangier",
    image: "/images/tangier.jpg",
    duration: "5 hours",
    groupSize: "2-6 people",
    price: 55,
    rating: 4.6,
    reviews: 74
  }
]

