'use client'
import ByAmenities from '@/components/Filter/ByAmenities'
import ByLocation from '@/components/Filter/ByLocation'
import ByPagination from '@/components/Filter/ByPagination'
import ByPrice from '@/components/Filter/ByPrice'
import ByRating from '@/components/Filter/ByRating'
import ByCarType from '@/components/Filter/ByCarType'
import ByFuel from '@/components/Filter/ByFuel'
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'
import SortCarsFilter from '@/components/elements/SortCarsFilter'
import CarCard1 from '@/components/elements/carcard/CarCard1'
import Layout from "@/components/layout/Layout"
import SwiperGroupPayment9Slider from '@/components/slider/SwiperGroupPayment9Slider'
import rawCarsData from "@/util/cars.json"
import useCarFilter from '@/util/useCarFilter'
import Link from "next/link"
import CarCard3 from '@/components/elements/carcard/CarCard3'
const carsData = rawCarsData.map(car => ({
	...car,
	rating: parseFloat(car.rating as string)
}))
export default function RentalCar4() {
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
		uniqueFuelTypes,
		uniqueAmenities,
		uniqueLocations,
		uniqueRatings,
		uniqueCarTypes,
		filteredCars,
		sortedCars,
		totalPages,
		startIndex,
		endIndex,
		paginatedCars,
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
	} = useCarFilter(carsData)

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<main className="main">
					<section className="box-section block-banner-tourlist block-banner-car">
						<div className="container">
							<div className="text-center">
								<h3 className="mb-15">Rent Your Perfect Ride Anytime, Anywhere</h3>
								<h6 className="heading-6-medium">Search and find your best car rental with easy way</h6>
							</div>
							<div className="box-search-advance box-search-advance-3 background-card wow fadeInUp">
								<SearchFilterBottom />
							</div>
						</div>
					</section>
					<section className="section-box box-logos-2 box-logos-car background-body">
						<div className="container">
							<div className="box-swiper pt-0">
								<div className="swiper-container swiper-group-payment-9 wow fadeInUp">
									<SwiperGroupPayment9Slider />
								</div>
							</div>
						</div>
					</section>
					<section className="box-section block-content-tourlist background-body">
						<div className="container">
							<div className="box-content-main pt-20">
								<div className="content-right">
									<div className="box-filters mb-25 pb-5 border-bottom border-1">
									<SortCarsFilter
											sortCriteria={sortCriteria}
											handleSortChange={handleSortChange}
											itemsPerPage={itemsPerPage}
											handleItemsPerPageChange={handleItemsPerPageChange}
											handleClearFilters={handleClearFilters}
											startItemIndex={startItemIndex}
											endItemIndex={endItemIndex}
											sortedCars={sortedCars}
										/>
									</div>
									<div className="box-grid-hotels wow fadeIn">
										<div className="row">
										{paginatedCars.map((car) => (
												<div className="col-xl-12 col-lg-12" key={car.id}>
													<CarCard3 car={car} />
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
								<div className="content-left order-lg-first">
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Show on map</h6>
												<div className="box-collapse scrollFilter mb-15">
													<div className="pt-0">
														<div className="box-map-small">
															<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.611419370571!2d2.3406913487788334!3d48.86191519358772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e18a5f84801%3A0x6eb5daa624bdebd2!2sLes%20Halles%2C%2075001%20Pa%20ri%2C%20Ph%C3%A1p!5e0!3m2!1svi!2s!4v1711728202093!5m2!1svi!2s" width="100%" height={160} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
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
												<h6 className="text-lg-bold item-collapse neutral-1000">Car type</h6>
												<ByCarType
													uniqueCarTypes={uniqueCarTypes}
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
												<h6 className="text-lg-bold item-collapse neutral-1000">Fuel Type</h6>
												<ByFuel
													uniqueFuelTypes={uniqueFuelTypes}
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
					<section className="section-box box-our-services-car background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-lg-8 col-md-8 mb-30 text-center text-lg-start wow fadeInUp">
									<h2 className="neutral-1000">Our Services</h2>
									<p className="text-xl-medium neutral-500">Just 4 easy and quick steps</p>
								</div>
								<div className="col-lg-4 col-md-4 mb-30 wow fadeInUp">
									<div className="d-flex justify-content-center justify-content-md-end"><Link className="btn btn-black-lg" href="#">View More
										<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										</svg></Link></div>
								</div>
							</div>
							<div className="box-list-featured">
								<div className="row">
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage8/service.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Chauffeur Hailing</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="#">17 services</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage8/service2.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Airport Transfer</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="#">17 services</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage8/service3.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Corporate Fleet</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="#">17 services</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage8/service4.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">One-Way Rentals</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="#">17 services</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-media background-body">
						<div className="container-media wow fadeInUp"> <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" /></div>
					</section>
				</main>

			</Layout>
		</>
	)
}