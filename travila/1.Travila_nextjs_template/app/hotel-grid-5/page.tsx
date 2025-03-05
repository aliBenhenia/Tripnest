'use client'
import ByAmenities from '@/components/Filter/ByAmenities'
import ByHotelType from '@/components/Filter/ByHotelType'
import ByLocation from '@/components/Filter/ByLocation'
import ByPagination from '@/components/Filter/ByPagination'
import ByPrice from '@/components/Filter/ByPrice'
import ByRating from '@/components/Filter/ByRating'
import ByRoom from '@/components/Filter/ByRoom'
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'
import SortHotelsFilter from '@/components/elements/SortHotelsFilter'
import HotelCard1 from '@/components/elements/hotelcard/HotelCard1'
import Layout from "@/components/layout/Layout"
import SwiperGroup8Slider from '@/components/slider/SwiperGroup8Slider'
import rawHotelsData from "@/util/hotels.json"
import useHotelFilter from '@/util/useHotelFilter'
import Link from "next/link"
const hotelsData = rawHotelsData.map(hotel => ({
	...hotel,
	rating: parseFloat(hotel.rating as string)
}))
export default function HotelGrid5() {
	const {
		filter,
		sortCriteria,
		itemsPerPage,
		currentPage,
		uniqueRoomStyles,
		uniqueAmenities,
		uniqueLocations,
		uniqueRatings,
		uniqueHotelsType,
		sortedHotels,
		totalPages,
		paginatedHotels,
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
	} = useHotelFilter(hotelsData)

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<main className="main">
					<section className="box-section block-banner-tourlist">
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
					<section className="section-box box-popular-destinations background-body">
						<div className="container">
							<div className="box-swiper box-swiper-pd mt-0 wow fadeInDown">
								<div className="swiper-container swiper-group-8">
									<SwiperGroup8Slider />
								</div>
								<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-8">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
										<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-8">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
										<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round"> </path>
									</svg>
								</div>
							</div>
						</div>
					</section>
					<section className="box-section block-content-tourlist background-body">
						<div className="container">
							<div className="box-content-main">
								<div className="content-right">
									<div className="box-filters mb-25 pb-5 border-bottom border-1">
										<SortHotelsFilter
											sortCriteria={sortCriteria}
											handleSortChange={handleSortChange}
											itemsPerPage={itemsPerPage}
											handleItemsPerPageChange={handleItemsPerPageChange}
											handleClearFilters={handleClearFilters}
											startItemIndex={startItemIndex}
											endItemIndex={endItemIndex}
											sortedHotels={sortedHotels}
										/>
									</div>
									<div className="box-grid-tours wow fadeIn">
										<div className="row">
											{paginatedHotels.map((hotel) => (
												<div className="col-xl-4 col-lg-6 col-md-6" key={hotel.id}>
													<HotelCard1 hotel={hotel} />
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
								<div className="content-left">
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
												<h6 className="text-lg-bold item-collapse neutral-1000">Hotel Type</h6>
												<ByHotelType
													uniqueHotelsType={uniqueHotelsType}
													filter={filter}
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Amenities</h6>
												<ByAmenities
													uniqueAmenities={uniqueAmenities}
													filter={filter}
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Room Style</h6>
												<ByRoom
													uniqueRoomStyles={uniqueRoomStyles}
													filter={filter}
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
										</div>
									</div>
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
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-install-app-2 background-body">
						<div className="container">
							<div className="block-install-app background-6">
								<div className="row align-items-center">
									<div className="col-lg-6">
										<div className="box-item-download wow fadeInUp"> <span className="btn btn-brand-secondary">Install APP   Get  discount code</span>
											<h5 className="mt-15 mb-30">Up to 55% Discount<br className="d-none d-lg-block" />and lots of special gifts</h5>
											<div className="box-button-download"> <Link href="#"><img src="/assets/imgs/page/homepage6/googleplay.png" alt="Travila" /></Link><Link href="#"><img src="/assets/imgs/page/homepage6/appstore.png" alt="Travila" /></Link></div>
										</div>
									</div>
									<div className="col-lg-6"><img className="wow fadeInUp" src="/assets/imgs/page/homepage6/img-download-app.png" alt="Travila" /></div>
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