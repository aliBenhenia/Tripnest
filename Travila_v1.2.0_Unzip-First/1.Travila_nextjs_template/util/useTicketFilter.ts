'use client'
import { ChangeEvent, useState } from "react"

interface Ticket {
	id: number
	price: number
	airlines: string // previously propertyType
	class: string // previously amenities
	rating: number
	name: string
	location: string
	image: string
}

export interface Filter {
	names: string[]
	class: string[]
	locations: string[]
	priceRange: [number, number]
	ratings: number[]
	airlines: string[]
}

type SortCriteria = "name" | "price" | "rating"

const useTicketFilter = (ticketsData: Ticket[]) => {
	const [filter, setFilter] = useState<Filter>({
		names: [],
		class: [],
		locations: [],
		priceRange: [0, 500],
		ratings: [],
		airlines: [],
	})
	const [sortCriteria, setSortCriteria] = useState<SortCriteria>("name")
	const [itemsPerPage, setItemsPerPage] = useState<number>(10)
	const [currentPage, setCurrentPage] = useState<number>(1)

	const uniqueNames = [...new Set(ticketsData.map((ticket) => ticket.name))]
	const uniqueClasses = [...new Set(ticketsData.map((ticket) => ticket.class))]
	const uniqueLocations = [...new Set(ticketsData.map((ticket) => ticket.location))]
	const uniqueRatings = [...new Set(ticketsData.map((ticket) => ticket.rating))]
	const uniqueAirlines = [...new Set(ticketsData.map((ticket) => ticket.airlines))]

	const filteredTickets = ticketsData.filter((ticket) => {
		return (
			(filter.names.length === 0 || filter.names.includes(ticket.name)) &&
			(filter.class.length === 0 || filter.class.includes(ticket.class)) &&
			(filter.locations.length === 0 || filter.locations.includes(ticket.location)) &&
			(ticket.price >= filter.priceRange[0] && ticket.price <= filter.priceRange[1]) &&
			(filter.ratings.length === 0 || filter.ratings.includes(ticket.rating)) &&
			(filter.airlines.length === 0 || filter.airlines.includes(ticket.airlines))
		)
	})

	const sortedTickets = [...filteredTickets].sort((a, b) => {
		if (sortCriteria === "name") {
			return a.name.localeCompare(b.name)
		} else if (sortCriteria === "price") {
			return a.price - b.price
		} else if (sortCriteria === "rating") {
			return b.rating - a.rating
		}
		return 0
	})

	const totalPages = Math.ceil(sortedTickets.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const paginatedTickets = sortedTickets.slice(startIndex, endIndex)

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
			class: [],
			locations: [],
			priceRange: [0, 500],
			ratings: [],
			airlines: [],
		})
		setSortCriteria("name")
		setItemsPerPage(4)
		setCurrentPage(1)
	}

	const startItemIndex = (currentPage - 1) * itemsPerPage + 1
	const endItemIndex = Math.min(startItemIndex + itemsPerPage - 1, sortedTickets.length)

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
		uniqueClasses,
		uniqueLocations,
		uniqueRatings,
		uniqueAirlines,
		filteredTickets,
		sortedTickets,
		totalPages,
		startIndex,
		endIndex,
		paginatedTickets,
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

export default useTicketFilter
