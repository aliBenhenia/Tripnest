
'use client'
import ByPagination from '@/components/Filter/ByPagination'
import CagegoryFilter2 from '@/components/elements/CagegoryFilter2'
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'
import SortCarsFilter from '@/components/elements/SortCarsFilter'
import CarCard1 from '@/components/elements/carcard/CarCard1'
import CarCard2 from '@/components/elements/carcard/CarCard2'
import Layout from "@/components/layout/Layout"
import SwiperGroupPayment9Slider from '@/components/slider/SwiperGroupPayment9Slider'
import rawCarsData from "@/util/cars.json"
import useCarFilter from '@/util/useCarFilter'
import Link from "next/link"
const carsData = rawCarsData.map(car => ({
	...car,
	rating: parseFloat(car.rating as string)
}))
export default function RentalCar3() {
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
					<section className="box-section box-buttons-hotels background-body">
						<div className="container">
							<CagegoryFilter2 />
						</div>
					</section>
					<section className="box-section block-content-tourlist background-body">
						<div className="container">
							<div className="box-content-main pt-40">
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
									<div className="box-grid-tours wow fadeIn">
										<div className="row">
										{paginatedCars.map((car) => (
												<div className="col-lg-4 col-md-6 wow fadeInUp" key={car.id}>
													<CarCard2 car={car} />
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
					</section>
					<section className="section-box box-logos-2 box-logos-car-2">
						<div className="container">
							<div className="box-swiper pt-0">
								<div className="swiper-container swiper-group-payment-9 wow fadeInUp">
									<SwiperGroupPayment9Slider />
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