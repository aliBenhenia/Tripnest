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
    imageUrl: "/placeholder.svg?height=300&width=400&text=Cooking+Class",
  },
  {
    id: 2,
    title: "Desert Camel Trek & Overnight Camp",
    category: "Adventure",
    price: 89,
    rating: 5.0,
    imageUrl: "/placeholder.svg?height=300&width=400&text=Desert+Trek",
  },
  {
    id: 3,
    title: "Medina Walking Tour with Local Guide",
    category: "Cultural Tour",
    price: 31,
    rating: 4.8,
    imageUrl: "/placeholder.svg?height=300&width=400&text=Medina+Tour",
  },
  {
    id: 4,
    title: "Atlas Mountains Day Trip",
    category: "Nature & Outdoors",
    price: 65,
    rating: 4.7,
    imageUrl: "/placeholder.svg?height=300&width=400&text=Atlas+Mountains",
  },
]

// Categories
export const categories = [
  {
    id: 1,
    name: "Beach",
    icon: "/placeholder.svg?height=40&width=40&text=🏖️",
  },
  {
    id: 2,
    name: "Photography",
    icon: "/placeholder.svg?height=40&width=40&text=📷",
  },
  {
    id: 3,
    name: "Tour",
    icon: "/placeholder.svg?height=40&width=40&text=🌍",
  },
  {
    id: 4,
    name: "Travel",
    icon: "/placeholder.svg?height=40&width=40&text=🧳",
  },
]

// City Activities
export const cityActivities: Record<number, Array<{ id: number; name: string; type: string; imageUrl: string }>> = {
  // Marrakech Activities
  1: [
    {
      id: 101,
      name: "Jardin Majorelle",
      type: "Sightseeing",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Jardin+Majorelle",
    },
    {
      id: 102,
      name: "Bahia Palace",
      type: "Historical",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Bahia+Palace",
    },
    {
      id: 103,
      name: "Medina Souks",
      type: "Shopping",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Medina+Souks",
    },
    {
      id: 104,
      name: "Hammam Experience",
      type: "Wellness",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Hammam",
    },
    {
      id: 105,
      name: "Tagine Cooking Class",
      type: "Food & Drink",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Cooking+Class",
    },
    {
      id: 106,
      name: "Camel Riding",
      type: "Adventure",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Camel+Riding",
    },
  ],

  // Casablanca Activities
  2: [
    {
      id: 201,
      name: "Hassan II Mosque",
      type: "Religious Site",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Hassan+II+Mosque",
    },
    {
      id: 202,
      name: "Corniche Beach",
      type: "Beach",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Corniche+Beach",
    },
    {
      id: 203,
      name: "Morocco Mall",
      type: "Shopping",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Morocco+Mall",
    },
    {
      id: 204,
      name: "Old Medina",
      type: "Historical",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Old+Medina",
    },
  ],

  // Fes Activities
  3: [
    {
      id: 301,
      name: "Bou Inania Madrasa",
      type: "Historical",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Bou+Inania",
    },
    {
      id: 302,
      name: "Chouara Tannery",
      type: "Cultural",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Tannery",
    },
    {
      id: 303,
      name: "Pottery Workshop",
      type: "Crafts",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Pottery",
    },
    {
      id: 304,
      name: "Fes Food Tour",
      type: "Food & Drink",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Food+Tour",
    },
  ],

  // Add activities for other cities...
  4: [
    {
      id: 401,
      name: "Blue City Walking Tour",
      type: "Sightseeing",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Blue+City",
    },
    {
      id: 402,
      name: "Kasbah Museum",
      type: "Cultural",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Kasbah",
    },
    {
      id: 403,
      name: "Hiking in Rif Mountains",
      type: "Adventure",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Hiking",
    },
    {
      id: 404,
      name: "Local Cheese Tasting",
      type: "Food & Drink",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Cheese",
    },
  ],
}

