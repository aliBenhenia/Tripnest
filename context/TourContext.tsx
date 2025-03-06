'use client'
import { createContext, ReactNode, useContext } from 'react'
import useTourFilter from '@/util/useTourFilter'
import rawToursData from "@/util/tours.json"
import { Tour } from '@/types'

// Parse and validate tour data
const toursData = rawToursData.map(tour => ({
	...tour,
	duration: parseFloat(tour.duration as string),
	groupSize: parseInt(tour.groupSize as unknown as string),
	rating: parseFloat(tour.rating as string)
})) as Tour[]

// Create context with proper type
export const TourContext = createContext<ReturnType<typeof useTourFilter>>(null!)

// Custom hook for using tour context
export const useTourContext = () => {
	const context = useContext(TourContext)
	if (!context) {
		throw new Error('useTourContext must be used within a TourProvider')
	}
	return context
}

interface TourProviderProps {
	children: ReactNode
}

export function TourProvider({ children }: TourProviderProps) {
	const tourFilter = useTourFilter(toursData)

	return (
		<TourContext.Provider value={tourFilter}>
			{children}
		</TourContext.Provider>
	)
} 