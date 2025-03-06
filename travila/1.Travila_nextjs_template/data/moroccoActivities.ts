export interface Activity {
    id: string;
    title: string;
    description: string;
    image: string;
    rating: number;
    reviews: number;
    duration: {
        days: number;
        text: string;
    };
    maxGroupSize: number;
    type: string;
    price: number;
    featured: boolean;
    location: string;
    highlights: string[];
}

export const moroccoActivities: Activity[] = [
    {
        id: "marrakech",
        title: "Marrakech Medina & Souks Adventure",
        description: "Explore the vibrant souks and historic medina of Marrakech, including the famous Jamaa el-Fna square",
        image: "/assets/imgs/page/homepage1/journey1.png",
        rating: 4.98,
        reviews: 428,
        duration: {
            days: 5,
            text: "5 days"
        },
        maxGroupSize: 8,
        type: "Cultural Tour",
        price: 899,
        featured: true,
        location: "Marrakech, Morocco",
        highlights: [
            "Visit the iconic Koutoubia Mosque",
            "Explore the maze-like souks",
            "Experience Jamaa el-Fna at sunset",
            "Traditional Moroccan cooking class"
        ]
    },
    {
        id: "sahara",
        title: "Sahara Desert Adventure & Camel Trek",
        description: "Experience the magic of the Sahara Desert with camel trekking and luxury desert camping",
        image: "/assets/imgs/page/homepage1/journey2.png",
        rating: 4.95,
        reviews: 356,
        duration: {
            days: 3,
            text: "3 days"
        },
        maxGroupSize: 12,
        type: "Desert Adventure",
        price: 599,
        featured: false,
        location: "Merzouga, Morocco",
        highlights: [
            "Camel trek through sand dunes",
            "Overnight in luxury desert camp",
            "Traditional Berber music",
            "Stunning sunrise views"
        ]
    },
    {
        id: "fes",
        title: "Fes Cultural Heritage Tour",
        description: "Discover the ancient medina of Fes, a UNESCO World Heritage site and cultural treasure",
        image: "/assets/imgs/page/homepage1/journey3.png",
        rating: 4.92,
        reviews: 289,
        duration: {
            days: 4,
            text: "4 days"
        },
        maxGroupSize: 10,
        type: "Cultural Heritage",
        price: 749,
        featured: false,
        location: "Fes, Morocco",
        highlights: [
            "Visit ancient leather tanneries",
            "Explore medieval Madrasas",
            "Traditional craft workshops",
            "Local food tasting tour"
        ]
    },
    {
        id: "chefchaouen",
        title: "Chefchaouen Blue City Experience",
        description: "Explore the stunning blue streets of Chefchaouen and capture amazing photos",
        image: "/assets/imgs/page/homepage1/journey4.png",
        rating: 4.94,
        reviews: 356,
        duration: {
            days: 2,
            text: "2 days"
        },
        maxGroupSize: 8,
        type: "Photography Tour",
        price: 399,
        featured: false,
        location: "Chefchaouen, Morocco",
        highlights: [
            "Photography walking tour",
            "Local market visit",
            "Sunset viewpoint hike",
            "Traditional Riad stay"
        ]
    }
]; 