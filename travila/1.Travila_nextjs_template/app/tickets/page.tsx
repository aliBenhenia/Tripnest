'use client'
import ByAirline from '@/components/Filter/ByAirline'
import ByClass from '@/components/Filter/ByClass'
import ByLocation from '@/components/Filter/ByLocation'
import ByPagination from '@/components/Filter/ByPagination'
import ByPrice from '@/components/Filter/ByPrice'
import ByRating from '@/components/Filter/ByRating'
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'
import SortTicketsFilter from '@/components/elements/SortTicketsFilter'
import TicketCard1 from '@/components/elements/ticketcard/TicketCard1'
import Layout from "@/components/layout/Layout"
import SwiperGroupPayment10Slider from '@/components/slider/SwiperGroupPayment10Slider'
import rawticketsData from "@/util/tickets.json"
import useTicketFilter from '@/util/useTicketFilter'
import Link from "next/link"
import React from 'react'
const ticketsData = rawticketsData.map(ticket => ({
	...ticket,
	rating: parseFloat(ticket.rating as string)
}))
export default function Tickets() {
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
					<section className="section-box box-logos-2 box-logos-tickets background-body">
						<div className="container">
							<div className="box-swiper pt-0">
								<div className="swiper-container swiper-group-payment-10 wow fadeInUp">
									<SwiperGroupPayment10Slider />
								</div>
							</div>
						</div>
					</section>
					<section className="box-section block-content-tourlist background-body">
						<div className="container">
							<div className="box-content-main">
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
									<div className="box-grid-tours wow fadeIn">
										<div className="row">
											<div className="box-list-flights box-list-flights-2">
												{paginatedTickets.map((ticket) => (
													<React.Fragment key={ticket.id}>
														<TicketCard1 ticket={ticket} />
													</React.Fragment>
												))}
											</div>
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
								<div className="content-left order-lg-first">
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Filter Price </h6>
												<ByPrice filter={filter} handlePriceRangeChange={handlePriceRangeChange} />
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Airlines</h6>
												<div className="box-collapse scrollFilter">
													<ByAirline
														uniqueAirlines={uniqueAirlines}
														filter={filter}
														handleCheckboxChange={handleCheckboxChange}
													/>
													<div className="box-see-more mt-20 mb-25"> <Link className="link-see-more" href="#">See more
														<svg width={8} height={6} viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
															<path d="M7.89553 1.02367C7.75114 0.870518 7.50961 0.864815 7.35723 1.00881L3.9998 4.18946L0.642774 1.00883C0.490387 0.86444 0.249236 0.870534 0.104474 1.02369C-0.0402885 1.17645 -0.0338199 1.4176 0.118958 1.56236L3.73809 4.99102C3.81123 5.06036 3.90571 5.0954 3.9998 5.0954C4.0939 5.0954 4.18875 5.06036 4.26191 4.99102L7.88104 1.56236C8.03382 1.41758 8.04029 1.17645 7.89553 1.02367Z" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Class / Cabin</h6>
												<ByClass
													uniqueClasses={uniqueClasses}
													filter={filter}
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
										</div>
									</div>
									{/* <div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Departure Time</h6>
												<div className="box-collapse scrollFilter">
													<ul className="list-filter-checkbox">
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium">All</span><span className="checkmark" />
															</label><span className="number-item">32</span>
														</li>
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium">00:00 - 05:59</span><span className="checkmark" />
															</label><span className="number-item">13</span>
														</li>
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium">06:00 - 11:59</span><span className="checkmark" />
															</label><span className="number-item">23</span>
														</li>
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium">12:00 - 17:59</span><span className="checkmark" />
															</label><span className="number-item">23</span>
														</li>
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium">18:00 - 23:59</span><span className="checkmark" />
															</label><span className="number-item">35</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div> */}
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Review Score </h6>
												<ByRating
													uniqueRatings={uniqueRatings}
													filter={filter}
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Booking Location</h6>
												<ByLocation
													uniqueLocations={uniqueLocations}
													filter={filter}
													handleCheckboxChange={handleCheckboxChange} />
											</div>
										</div>
									</div>
									<div className="sidebar-banner"> <Link href="#"><img src="/assets/imgs/page/tickets/banner-ads.png" alt="Travila" /></Link></div>
								</div>
							</div>
						</div>
					</section>
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