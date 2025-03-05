'use client'
import ByPagination from '@/components/Filter/ByPagination'
import SortToursFilter from '@/components/elements/SortToursFilter'
import TourCard3 from '@/components/elements/tourcard/TourCard3'
import Layout from "@/components/layout/Layout"
import SwiperGroup3Slider from '@/components/slider/SwiperGroup3Slider'
import rawToursData from "@/util/tours.json"
import useTourFilter from '@/util/useTourFilter'
import Link from "next/link"
const toursData = rawToursData.map(tour => ({
	...tour,
	duration: parseFloat(tour.duration as string),
	groupSize: parseInt(tour.groupSize as unknown as string),
	rating: parseFloat(tour.rating as string)
}))
export default function Activities2() {
	const {
		sortCriteria,
		itemsPerPage,
		currentPage,
		sortedTours,
		totalPages,
		paginatedTours,
		handleSortChange,
		handleItemsPerPageChange,
		handlePageChange,
		handlePreviousPage,
		handleNextPage,
		handleClearFilters,
		startItemIndex,
		endItemIndex,
	} = useTourFilter(toursData)


	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="box-section block-banner-tourlist block-banner-activities-2">
						<div className="container">
							<div className="text-start">
								<h3>Adventure Activities</h3>
								<h6 className="heading-6-medium">Easily search for top tours offered by our professional network</h6>
							</div>
							<div className="box-list-populars">
								<div className="row">
									<div className="col-lg-3 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="#">Venice</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-tour" href="#">356 Tours</Link></div>
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination2.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="#">Amsterdam</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-tour" href="#">356 Tours</Link></div>
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination3.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="#">Budapest</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-tour" href="#">356 Tours</Link></div>
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination4.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="#">Lisbon</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-tour" href="#">356 Tours</Link></div>
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination5.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="#">London</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-tour" href="#">356 Tours</Link></div>
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination6.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="#">Ottawa</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-tour" href="#">356 Tours</Link></div>
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination7.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="#">Paris</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-tour" href="#">356 Tours</Link></div>
													<div className="card-button"> <Link href="#">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination8.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="#">Paris</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-tour" href="#">356 Tours</Link></div>
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
					<section className="box-section block-content-tourlist box-border-bottom background-body">
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
									<div className="box-grid-tours wow fadeIn">
										<div className="row">
											{paginatedTours.map((tour) => (
												<div className="col-xl-3 col-lg-4 col-md-6" key={tour.id}>
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
					</section>
					<section className="section-box box-news background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-6 mb-30 wow fadeInLeft">
									<h2 className="neutral-1000">News, Tips  Guides</h2>
									<p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
								</div>
								<div className="col-md-6 mb-30 wow fadeInRight">
									<div className="d-flex justify-content-center justify-content-md-end"><Link className="btn btn-black-lg" href="#">View More
										<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										</svg></Link></div>
								</div>
							</div>
							<div className="box-list-news wow fadeInUp">
								<div className="box-swiper mt-30">
									<div className="swiper-container swiper-group-3">
										<SwiperGroup3Slider />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-media background-body">
						<div className="container-media wow fadeInUp"> <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" /></div>
					</section>
				</div>

			</Layout>
		</>
	)
}