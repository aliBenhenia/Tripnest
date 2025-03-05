'use client'
import ByPagination from '@/components/Filter/ByPagination'
import CagegoryFilter2 from '@/components/elements/CagegoryFilter2'
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'
import SortPropertiesFilter from '@/components/elements/SortPropertiesFilter'
import PropertyCard2 from '@/components/elements/propertycard/PropertyCard2'
import Layout from "@/components/layout/Layout"
import rawPropertiesData from "@/util/properties.json"
import usePropertyFilter from '@/util/usePropertyFilter'
import Link from 'next/link'
const propertiesData = rawPropertiesData.map(property => ({
	...property,
	rating: parseFloat(property.rating as string)
}))
export default function RentalProperty2() {
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
	} = usePropertyFilter(propertiesData)


	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<main className="main">
					<section className="box-section block-banner-property">
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
										<SortPropertiesFilter
											sortCriteria={sortCriteria}
											handleSortChange={handleSortChange}
											itemsPerPage={itemsPerPage}
											handleItemsPerPageChange={handleItemsPerPageChange}
											handleClearFilters={handleClearFilters}
											startItemIndex={startItemIndex}
											endItemIndex={endItemIndex}
											sortedProperties={sortedProperties} />
									</div>
									<div className="box-grid-property wow fadeIn">
										<div className="row">
											{paginatedProperties.map((property) => (
												<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" key={property.id}>
													<PropertyCard2 property={property} />
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
					<section className="section-box box-explore background-body">
						<div className="container">
							<div className="text-center wow fadeInUp">
								<h2 className="neutral-1000 mb-15">Explore by Property Type</h2>
								<p className="text-xl-medium neutral-500">Hand-Picked selection of quality places</p>
							</div>
							<div className="box-list-populars">
								<div className="row">
									<div className="col-xl-3 col-lg-4 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="/rental-property">Apartment</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-property" href="/rental-property">35 Properties</Link></div>
													<div className="card-button"> <Link href="/rental-property">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination2.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="/rental-property">Condominiums</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-property" href="/rental-property">35 Properties</Link></div>
													<div className="card-button"> <Link href="/rental-property">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination3.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="/rental-property">Townhouses</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-property" href="/rental-property">35 Properties</Link></div>
													<div className="card-button"> <Link href="/rental-property">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination4.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="/rental-property">Office Spaces</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-property" href="/rental-property">35 Properties</Link></div>
													<div className="card-button"> <Link href="/rental-property">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination5.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="/rental-property">Campers</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-property" href="/rental-property">35 Properties</Link></div>
													<div className="card-button"> <Link href="/rental-property">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination6.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="/rental-property">A-Frames</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-property" href="/rental-property">35 Properties</Link></div>
													<div className="card-button"> <Link href="/rental-property">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination7.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="/rental-property">Treehouses</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-property" href="/rental-property">35 Properties</Link></div>
													<div className="card-button"> <Link href="/rental-property">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-sm-6">
										<div className="card-popular card-top-destination background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/homepage6/destination8.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="card-title" href="/rental-property">Land/Plots</Link>
												<div className="card-meta">
													<div className="meta-links"> <Link className="text-property" href="/rental-property">35 Properties</Link></div>
													<div className="card-button"> <Link href="/rental-property">
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