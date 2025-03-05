'use client'
import ByPagination from '@/components/Filter/ByPagination'
import CagegoryFilter2 from '@/components/elements/CagegoryFilter2'
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'
import SortTicketsFilter from '@/components/elements/SortTicketsFilter'
import TicketCard2 from '@/components/elements/ticketcard/TicketCard2'
import Layout from "@/components/layout/Layout"
import SwiperGroupPayment10Slider from '@/components/slider/SwiperGroupPayment10Slider'
import rawticketsData from "@/util/tickets.json"
import useTicketFilter from '@/util/useTicketFilter'
const ticketsData = rawticketsData.map(ticket => ({
	...ticket,
	rating: parseFloat(ticket.rating as string)
}))
export default function Tickets2() {
	const {
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
	} = useTicketFilter(ticketsData)

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<main className="main">
					<section className="box-section block-banner-tickets">
						<div className="container">
							<div className="text-center">
								<h3>A World Of Luxury Awaits You</h3>
								<h6 className="heading-6-medium">We Provide Our Best Facilities For You</h6>
							</div>
							<div className="box-search-advance box-search-advance-3 background-card wow fadeInUp">
								<SearchFilterBottom />
							</div>
						</div>
					</section>
					<section className="box-section box-buttons-hotels background-body">
						<div className="container">
							<CagegoryFilter2 />
						</div>
					</section>
					<section className="box-section block-content-tourlist background-body">
						<div className="container">
							<div className="box-content-main pt-20 pb-0">
								<div className="content-right">
									<div className="box-filters mb-25 pb-5 border-bottom border-1">
										<SortTicketsFilter
											sortCriteria={sortCriteria}
											handleSortChange={handleSortChange}
											itemsPerPage={itemsPerPage}
											handleItemsPerPageChange={handleItemsPerPageChange}
											handleClearFilters={handleClearFilters}
											startItemIndex={startItemIndex}
											endItemIndex={endItemIndex}
											sortedTickets={sortedTickets} />
									</div>
									<div className="box-list-tickets wow fadeIn">
										<div className="row">
											{paginatedTickets.map((ticket) => (
												<div className="col-lg-6" key={ticket.id}>
													<TicketCard2 ticket={ticket} />
												</div>
											))}
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
						</div>
					</section>
					<section className="section-box box-logos-2 box-logos-tickets background-body">
						<div className="container">
							<div className="box-swiper pt-0">
								<div className="swiper-container swiper-group-payment-10 wow fadeInUp">
									<SwiperGroupPayment10Slider />
								</div>
							</div>
						</div>
					</section>
					<div className="pb-90 background-body" />
					<section className="section-box box-how-it-work-3 background-body">
						<div className="container">
							<div className="box-how-it-work-inner background-3">
								<h3 className="neutral-1000 wow fadeInUp">How It Work ?</h3>
								<p className="text-xl-medium neutral-500 mb-30 wow fadeInUp">Just 4 easy and quick steps</p>
								<div className="row">
									<div className="col-lg-10">
										<ul className="list-steps list-steps-2-col wow fadeInUp">
											<li>
												<div className="step-no">   <span>1</span></div>
												<div className="step-info">
													<p className="text-xl-bold neutral-1000">Search for Flights</p>
													<p className="text-sm-medium neutral-500">Begin your journey by entering your departure city, destination, travel dates, and the number of passengers</p>
												</div>
											</li>
											<li>
												<div className="step-no">   <span>2</span></div>
												<div className="step-info">
													<p className="text-xl-bold neutral-1000">Select Your Flight</p>
													<p className="text-sm-medium neutral-500">Review the search results and compare the details of each flight, including departure and arrival times, durations, and prices.</p>
												</div>
											</li>
											<li>
												<div className="step-no">   <span>3</span></div>
												<div className="step-info">
													<p className="text-xl-bold neutral-1000">Provide Passenger Information</p>
													<p className="text-sm-medium neutral-500">Enter the required passenger information for all individuals traveling, including names, contact details, and any special requests</p>
												</div>
											</li>
											<li>
												<div className="step-no">   <span>4</span></div>
												<div className="step-info">
													<p className="text-xl-bold neutral-1000">Payment and Confirmation</p>
													<p className="text-sm-medium neutral-500">Review the booking summary, including the total cost, flight details, and passenger information</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="pb-90 background-body" />
					<section className="section-box box-media background-body">
						<div className="container-media wow fadeInUp"> <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" /></div>
					</section>
				</main>

			</Layout>
		</>
	)
}