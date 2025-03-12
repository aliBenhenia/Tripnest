// Moroccan Cities Data
export const moroccanCities = [
  {
    id: 1,
    name: "Marrakech",
    slug: "marrakech",
    properties: 783,
    imageUrl: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageUrl2: "https://plus.unsplash.com/premium_photo-1673415819362-c2ca640bfafe?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Known for its vibrant souks, historic palaces, and the famous Jemaa el-Fnaa square.",
  },
  {
    id: 2,
    name: "Casablanca",
    slug: "casablanca",
    properties: 593,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/4d/c3/07/ii.jpg?w=900&h=500&s=1",
    imageUrl2: "/placeholder.svg?height=400&width=300&text=Casablanca+2",
    description: "Morocco's largest city with modern architecture and the stunning Hassan II Mosque.",
  },
  {
    id: 3,
    name: "Fes",
    slug: "fes",
    properties: 425,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/8a/0f/b3/photo0jpg.jpg?w=1400&h=500&s=1",
    imageUrl2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/46/b3/chefchaouen.jpg?w=1400&h=500&s=1",
    description: "Home to the oldest university in the world and the largest car-free urban area.",
  },
  {
    id: 4,
    name: "Chefchaouen",
    slug: "chefchaouen",
    properties: 312,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/46/b3/chefchaouen.jpg?w=1400&h=500&s=1",
    imageUrl2: "/placeholder.svg?height=400&width=300&text=Chefchaouen+2",
    description: "The famous blue city nestled in the Rif Mountains with its distinctive blue-washed buildings.",
  },
  {
    id: 5,
    name: "Essaouira",
    slug: "essaouira",
    properties: 287,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/81/aa/d8/essaouira-harbour.jpg?w=1400&h=500&s=1",
    imageUrl2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/81/aa/d8/essaouira-harbour.jpg?w=1400&h=500&s=1",
    description: "A charming coastal town known for its windy beaches, historic medina, and vibrant art scene.",
  },
  {
    id: 6,
    name: "Tangier",
    slug: "tangier",
    properties: 356,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/65/tangier.jpg?w=1400&h=500&s=1",
    imageUrl2: "/placeholder.svg?height=400&width=300&text=Tangier+2",
    description: "A port city where the Mediterranean meets the Atlantic, with a rich international history.",
  },
]

// Popular Experiences
export const popularExperiences = [
  {
    id: 1,
    title: "Traditional Moroccan Cooking Class",
    category: "Food & Cooking",
    price: 45,
    rating: 4.9,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/65/tangier.jpg?w=1400&h=500&s=1",
  },
  {
    id: 2,
    title: "Desert Camel Trek & Overnight Camp",
    category: "Adventure",
    price: 89,
    rating: 5.0,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/81/aa/d8/essaouira-harbour.jpg?w=1400&h=500&s=1",
  },
  {
    id: 3,
    title: "Medina Walking Tour with Local Guide",
    category: "Cultural Tour",
    price: 31,
    rating: 4.8,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/81/aa/d8/essaouira-harbour.jpg?w=1400&h=500&s=1",
  },
  {
    id: 4,
    title: "Atlas Mountains Day Trip",
    category: "Nature & Outdoors",
    price: 65,
    rating: 4.7,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/65/tangier.jpg?w=1400&h=500&s=1",
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
}

