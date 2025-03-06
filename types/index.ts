export interface Tour {
	id: number
	price: number
	duration: number
	groupSize: number
	tourType: string
	language: string
	rating: number
	name: string
	activities: string
	attraction: string
	image: string
}

export interface Filter {
	names: string[]
	activities: string[]
	languages: string[]
	attractions: string[]
	priceRange: [number, number]
	durationRange: [number, number]
	ratings: number[]
	groupSize: number[]
	searchQuery: string
}

export type SortCriteria = "name" | "price" | "rating" 