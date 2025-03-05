'use client'
import { ChangeEvent, useState } from "react"

interface Property { // Updated from Car to Property
	id: number
	price: number
	propertyType: string
	amenities: string
	rating: number
	name: string
	location: string
	image: string
}

export interface Filter {
	names: string[]
	amenities: string[]
	locations: string[]
	priceRange: [number, number]
	ratings: number[]
	propertyType: string[]
}

type SortCriteria = "name" | "price" | "rating"

const usePropertyFilter = (propertiesData: Property[]) => { // Updated from useCarFilter to usePropertyFilter
	const [filter, setFilter] = useState<Filter>({
		names: [],
		amenities: [],
		locations: [],
		priceRange: [0, 500],
		ratings: [],
		propertyType: [],
	})
	const [sortCriteria, setSortCriteria] = useState<SortCriteria>("name")
	const [itemsPerPage, setItemsPerPage] = useState<number>(10)
	const [currentPage, setCurrentPage] = useState<number>(1)

	const uniqueNames = [...new Set(propertiesData.map((property) => property.name))]
	const uniqueAmenities = [...new Set(propertiesData.map((property) => property.amenities))]
	const uniqueLocations = [...new Set(propertiesData.map((property) => property.location))]
	const uniqueRatings = [...new Set(propertiesData.map((property) => property.rating))]
	const uniquePropertyTypes = [...new Set(propertiesData.map((property) => property.propertyType))]

	const filteredProperties = propertiesData.filter((property) => {
		return (
			(filter.names.length === 0 || filter.names.includes(property.name)) &&
			(filter.amenities.length === 0 || filter.amenities.includes(property.amenities)) &&
			(filter.locations.length === 0 || filter.locations.includes(property.location)) &&
			(property.price >= filter.priceRange[0] && property.price <= filter.priceRange[1]) &&
			(filter.ratings.length === 0 || filter.ratings.includes(property.rating)) &&
			(filter.propertyType.length === 0 || filter.propertyType.includes(property.propertyType))
		)
	})

	const sortedProperties = [...filteredProperties].sort((a, b) => {
		if (sortCriteria === "name") {
			return a.name.localeCompare(b.name)
		} else if (sortCriteria === "price") {
			return a.price - b.price
		} else if (sortCriteria === "rating") {
			return b.rating - a.rating
		}
		return 0
	})

	const totalPages = Math.ceil(sortedProperties.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const paginatedProperties = sortedProperties.slice(startIndex, endIndex)

	const handleCheckboxChange = (field: keyof Filter, value: string | number) => (e: ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked
		setFilter((prevFilter) => {
			const values = prevFilter[field] as (string | number)[]
			if (checked) {
				return { ...prevFilter, [field]: [...values, value] }
			} else {
				return {
					...prevFilter,
					[field]: values.filter((item) => item !== value),
				}
			}
		})
	}

	const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortCriteria(e.target.value as SortCriteria)
	}

	const handlePriceRangeChange = (values: [number, number]) => {
		setFilter((prevFilter) => ({
			...prevFilter,
			priceRange: values,
		}))
	}

	const handleItemsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setItemsPerPage(Number(e.target.value))
		setCurrentPage(1)
	}

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage)
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handleClearFilters = () => {
		setFilter({
			names: [],
			amenities: [],
			locations: [],
			priceRange: [0, 500],
			ratings: [],
			propertyType: [],
		})
		setSortCriteria("name")
		setItemsPerPage(4)
		setCurrentPage(1)
	}

	const startItemIndex = (currentPage - 1) * itemsPerPage + 1
	const endItemIndex = Math.min(startItemIndex + itemsPerPage - 1, sortedProperties.length)

	return {
		filter,
		setFilter,
		sortCriteria,
		setSortCriteria,
		itemsPerPage,
		setItemsPerPage,
		currentPage,
		setCurrentPage,
		uniqueNames,
		uniqueAmenities,
		uniqueLocations,
		uniqueRatings,
		uniquePropertyTypes,
		filteredProperties,
		sortedProperties,
		totalPages,
		startIndex,
		endIndex,
		paginatedProperties,
		handleCheckboxChange,
		handleSortChange,
		handlePriceRangeChange,
		handleItemsPerPageChange,
		handlePageChange,
		handlePreviousPage,
		handleNextPage,
		handleClearFilters,
		startItemIndex,
		endItemIndex,
	}
}

export default usePropertyFilter // Updated from useCarFilter to usePropertyFilter
