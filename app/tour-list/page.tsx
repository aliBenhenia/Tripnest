'use client'
import ByActivities from '@/components/Filter/ByActivities'
import ByAttraction from '@/components/Filter/ByAttraction'
import ByDuration from '@/components/Filter/ByDuration'
import ByLanguage from '@/components/Filter/ByLanguage'
import ByPagination from '@/components/Filter/ByPagination'
import ByPrice from '@/components/Filter/ByPrice'
import ByRating from '@/components/Filter/ByRating'
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'
import SortToursFilter from '@/components/elements/SortToursFilter'
import TourCard3 from '@/components/elements/tourcard/TourCard3'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useContext } from 'react'
import { TourContext } from '@/context/TourContext'

export default function TourList() {
	const {
		sortCriteria,
		itemsPerPage,
		currentPage,
		paginatedTours,
		handleSortChange,
		handleItemsPerPageChange,
		handlePageChange,
		handlePreviousPage,
		handleNextPage,
		handleClearFilters,
		startItemIndex,
		endItemIndex,
		sortedTours
	} = useContext(TourContext)

	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<main className="main">
					<section className="box-section block-banner-tourlist" style={{ backgroundImage: 'url(assets/imgs/page/tour/banner3.png)' }}>
						<div className="container">
							<div className="text-center">
								<h3>Journey with Travila - Begin Your Story!</h3>
								<h6 className="heading-6-medium">Easily search for top tours offered by our professional network</h6>
							</div>
							<div className="box-search-advance box-search-advance-3 background-card wow fadeInUp">
								<SearchFilterBottom />
							</div>
						</div>
					</section>
					<div className="container">
						<div className="box-content-main">
							<div className="content-right">
								<div className="box-filters mb-25 pb-5 border-bottom border-1">
									<SortToursFilter
										sortCriteria={sortCriteria}
										handleSortChange={handleSortChange}
										itemsPerPage={itemsPerPage}
										handleItemsPerPageChange={handleItemsPerPageChange}
										handleClearFilters={handleClearFilters}
										startItemIndex={startItemIndex}
										endItemIndex={endItemIndex}
										sortedTours={sortedTours}
									/>
								</div>
								<div className="box-list-tours list-tours wow fadeIn">
									<div className="row">
										{paginatedTours.map((tour) => (
											<div className="col-xl-4 col-lg-6 col-md-6" key={tour.id}>
												<TourCard3 tour={tour} />
											</div>
										))}
									</div>
								</div>
								<ByPagination
									handlePreviousPage={handlePreviousPage}
									totalPages={totalPages}
									currentPage={currentPage}
									handleNextPage={handleNextPage}
									handlePageChange={handlePageChange}
								/>
							</div>
						</div>
					</div>
				</main>
			</Layout>
		</>
	)
} 