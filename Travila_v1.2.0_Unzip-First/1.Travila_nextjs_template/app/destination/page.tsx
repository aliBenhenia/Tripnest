'use client'
import CategoryFilter from '@/components/elements/CategoryFilter'
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'
import Layout from "@/components/layout/Layout"
import SwiperGroupPaymentSlider from '@/components/slider/SwiperGroupPaymentSlider'
import { swiperGroupAnimate } from "@/util/swiperOption"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Destination() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<main className="main">
					<section className="box-section box-breadcrumb background-body">
						<div className="container">
							<ul className="breadcrumbs">
								<li> <Link href="/">Home</Link><span className="arrow-right">
									<svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg></span></li>
								<li> <Link href="/destination">Destinations</Link><span className="arrow-right">
									<svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg></span></li>
								<li> <span className="text-breadcrumb">Europe</span></li>
							</ul>
						</div>
					</section>
					<section className="box-section block-banner-tourlist" style={{ backgroundImage: 'url(assets/imgs/page/destination/banner.png)' }}>
						<div className="container">
							<div className="text-center">
								<h3>Explore the beauty of Europe with Travila</h3>
								<h6 className="heading-6-medium">Explore Beyond: Your Passport to Adventure</h6>
							</div>
							<div className="box-search-advance box-search-advance-3 background-card wow fadeInUp">
								<SearchFilterBottom />
							</div>
						</div>
					</section>
					<section className="box-section box-best-places background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-7 mb-30 wow fadeInLeft">
									<h2 className="neutral-1000">Best Places in Europe</h2>
									<p className="text-xl-medium neutral-500">Find awesome hotel, tour, car and activities in Europe</p>
								</div>
								<div className="col-md-5 mb-30 wow fadeInRight">
									<div className="d-flex justify-content-center justify-content-md-end"><Link className="btn btn-black-lg" href="#">View More
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg></Link></div>
								</div>
							</div>
							<div className="box-list-featured">
								<div className="row">
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="/destination-4"><img src="/assets/imgs/page/homepage4/spot.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination-4">Venice</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="/destination-4">356 Tours,</Link><Link className="text-sm neutral-500" href="/destination-4">248 Activities</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="/destination-4">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="/destination-4"><img src="/assets/imgs/page/homepage4/spot2.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination-4">New York</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="/destination-4">356 Tours,</Link><Link className="text-sm neutral-500" href="/destination-4">248 Activities</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="/destination-4">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="/destination-4"><img src="/assets/imgs/page/homepage4/spot3.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination-4">Amsterdam</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="/destination-4">356 Tours,</Link><Link className="text-sm neutral-500" href="/destination-4">248 Activities</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="/destination-4">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="/destination-4"><img src="/assets/imgs/page/homepage4/spot4.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination-4">Budapest</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="/destination-4">356 Tours,</Link><Link className="text-sm neutral-500" href="/destination-4">248 Activities</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="/destination-4">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="/destination-4"><img src="/assets/imgs/page/homepage4/spot5.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination-4">Lisbon</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="/destination-4">356 Tours,</Link><Link className="text-sm neutral-500" href="/destination-4">248 Activities</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="/destination-4">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="/destination-4"><img src="/assets/imgs/page/homepage4/spot6.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination-4">London</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="/destination-4">356 Tours,</Link><Link className="text-sm neutral-500" href="/destination-4">248 Activities</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="/destination-4">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="/destination-4"><img src="/assets/imgs/page/homepage4/spot7.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination-4">Ottawa</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="/destination-4">356 Tours,</Link><Link className="text-sm neutral-500" href="/destination-4">248 Activities</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="/destination-4">
														<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
										<div className="card-spot background-card">
											<div className="card-image"> <Link href="/destination-4"><img src="/assets/imgs/page/homepage4/spot8.png" alt="Travila" /></Link></div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination-4">Paris</Link></div>
													<div className="card-desc"> <Link className="text-sm neutral-500" href="/destination-4">356 Tours,</Link><Link className="text-sm neutral-500" href="/destination-4">248 Activities</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button"> <Link href="/destination-4">
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
					<section className="section-box box-top-rated background-3">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-9">
									<h2 className="neutral-1000">Top Rated Hotels</h2>
									<p className="text-xl-medium neutral-500">Quality as judged by customers. Book at the ideal price!</p>
								</div>
								<div className="col-md-3 position-relative mb-30">
									<div className="box-button-slider box-button-slider-team justify-content-end">
										<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
												<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
												<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container-slider box-swiper-padding">
							<div className="box-swiper mt-30">
								<div className="swiper-container swiper-group-animate swiper-group-journey">
									<Swiper {...swiperGroupAnimate}>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/homepage1/journey2.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">California Sunset/Twilight Boat Cruise </Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">Manchester, England</p>
															<p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$48.25</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/homepage1/journey3.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">NYC: Food Tastings and Culture Tour</Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">Manchester, England</p>
															<p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$17.32</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/homepage1/journey4.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">Grand Canyon Horseshoe Bend  2 days</Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">Manchester, England</p>
															<p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$15.63</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/homepage1/journey2.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">California Sunset/Twilight Boat Cruise </Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">Manchester, England</p>
															<p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$48.25</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/homepage1/journey3.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">NYC: Food Tastings and Culture Tour</Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">Manchester, England</p>
															<p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$17.32</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/homepage1/journey4.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">Grand Canyon Horseshoe Bend  2 days</Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">Manchester, England</p>
															<p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$15.63</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-our-featured background-body pt-80">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-lg-6 mb-30 text-center text-lg-start wow fadeInUp">
									<h2 className="neutral-1000">Featured Europe Tours</h2>
									<p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
								</div>
								<div className="col-lg-6 mb-30 wow fadeInUp">
									<CategoryFilter />
								</div>
							</div>
							<div className="box-list-featured">
								<div className="row">
									<div className="col-lg-4 col-md-6 wow fadeIn">
										<div className="card-journey-small background-card">
											<div className="card-image"> <Link className="label" href="#">Top Rated</Link><Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><img src="/assets/imgs/page/homepage1/journey2.png" alt="Travila" />
											</div>
											<div className="card-info background-card">
												<div className="card-rating">
													<div className="card-left"> </div>
													<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
												</div>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">California Sunset/Twilight Boat Cruise </Link></div>
												<div className="card-program">
													<div className="card-duration-tour">
														<p className="icon-duration text-md-medium neutral-500">2 days 3 nights</p>
														<p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
													</div>
													<div className="endtime">
														<div className="card-price">
															<h6 className="heading-6 neutral-1000">$48.25</h6>
															<p className="text-md-medium neutral-500">/ person</p>
														</div>
														<div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 wow fadeIn">
										<div className="card-journey-small background-card">
											<div className="card-image"> <Link className="label bestsale" href="#">Best Sale</Link><Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><img src="/assets/imgs/page/homepage1/journey3.png" alt="Travila" />
											</div>
											<div className="card-info background-card">
												<div className="card-rating">
													<div className="card-left"> </div>
													<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
												</div>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">NYC: Food Tastings and Culture Tour</Link></div>
												<div className="card-program">
													<div className="card-duration-tour">
														<p className="icon-duration text-md-medium neutral-500">3 days 3 nights</p>
														<p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
													</div>
													<div className="endtime">
														<div className="card-price">
															<h6 className="heading-6 neutral-1000">$17.32</h6>
															<p className="text-md-medium neutral-500">/ person</p>
														</div>
														<div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 wow fadeIn">
										<div className="card-journey-small background-card">
											<div className="card-image"> <Link className="label saleoff" href="#">25% Off</Link><Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><img src="/assets/imgs/page/homepage1/journey4.png" alt="Travila" />
											</div>
											<div className="card-info background-card">
												<div className="card-rating">
													<div className="card-left"> </div>
													<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
												</div>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">Grand Canyon Horseshoe Bend  2 days</Link></div>
												<div className="card-program">
													<div className="card-duration-tour">
														<p className="icon-duration text-md-medium neutral-500">7 days 6 nights</p>
														<p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
													</div>
													<div className="endtime">
														<div className="card-price">
															<h6 className="heading-6 neutral-1000">$15.63</h6>
															<p className="text-md-medium neutral-500">/ person</p>
														</div>
														<div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 wow fadeIn">
										<div className="card-journey-small background-card">
											<div className="card-image"> <Link className="label" href="#">Top Rated</Link><Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><img src="/assets/imgs/page/homepage1/journey2.png" alt="Travila" />
											</div>
											<div className="card-info background-card">
												<div className="card-rating">
													<div className="card-left"> </div>
													<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
												</div>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">California Sunset/Twilight Boat Cruise </Link></div>
												<div className="card-program">
													<div className="card-duration-tour">
														<p className="icon-duration text-md-medium neutral-500">2 days 3 nights</p>
														<p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
													</div>
													<div className="endtime">
														<div className="card-price">
															<h6 className="heading-6 neutral-1000">$48.25</h6>
															<p className="text-md-medium neutral-500">/ person</p>
														</div>
														<div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 wow fadeIn">
										<div className="card-journey-small background-card">
											<div className="card-image"> <Link className="label bestsale" href="#">Best Sale</Link><Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><img src="/assets/imgs/page/homepage1/journey3.png" alt="Travila" />
											</div>
											<div className="card-info background-card">
												<div className="card-rating">
													<div className="card-left"> </div>
													<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
												</div>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">NYC: Food Tastings and Culture Tour</Link></div>
												<div className="card-program">
													<div className="card-duration-tour">
														<p className="icon-duration text-md-medium neutral-500">3 days 3 nights</p>
														<p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
													</div>
													<div className="endtime">
														<div className="card-price">
															<h6 className="heading-6 neutral-1000">$17.32</h6>
															<p className="text-md-medium neutral-500">/ person</p>
														</div>
														<div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 wow fadeIn">
										<div className="card-journey-small background-card">
											<div className="card-image"> <Link className="label saleoff" href="#">25% Off</Link><Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><img src="/assets/imgs/page/homepage1/journey4.png" alt="Travila" />
											</div>
											<div className="card-info background-card">
												<div className="card-rating">
													<div className="card-left"> </div>
													<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
												</div>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">Grand Canyon Horseshoe Bend  2 days</Link></div>
												<div className="card-program">
													<div className="card-duration-tour">
														<p className="icon-duration text-md-medium neutral-500">7 days 6 nights</p>
														<p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
													</div>
													<div className="endtime">
														<div className="card-price">
															<h6 className="heading-6 neutral-1000">$15.63</h6>
															<p className="text-md-medium neutral-500">/ person</p>
														</div>
														<div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-center"><Link className="btn btn-black-lg" href="#">
									<svg className="first" width={25} height={24} viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.5 4H6.5V6H4.5V4Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										<path d="M4.5 18H6.5V20H4.5V18Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										<path d="M18.5 4H20.5V6H18.5V4Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										<path d="M18.5 11H20.5V13H18.5V11Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										<path d="M11.5 11H13.5V13H11.5V11Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										<path d="M4.5 11H6.5V13H4.5V11Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										<path d="M11.5 4H13.5V6H11.5V4Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										<path d="M11.5 18H13.5V20H11.5V18Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										<path d="M18.5 18H20.5V20H18.5V18Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg>Load More Tours</Link></div>
							</div>
						</div>
					</section>
					<section className="section-box box-recent-lauched-car background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-9">
									<h2 className="neutral-1000">Cars Rental in Europe</h2>
									<p className="text-xl-medium neutral-500">The world's leading car brands</p>
								</div>
								<div className="col-md-3 position-relative mb-30">
									<div className="box-button-slider box-button-slider-team justify-content-end">
										<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
												<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
												<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container-slider box-swiper-padding">
							<div className="box-swiper mt-30">
								<div className="swiper-container swiper-group-animate swiper-group-journey">
									<Swiper {...swiperGroupAnimate}>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/destination/car.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">Manchester, England</p>
														</div>
														<div className="card-facitlities">
															<p className="card-miles text-md-medium">25,100 miles</p>
															<p className="card-gear text-md-medium">Automatic</p>
															<p className="card-fuel text-md-medium">Diesel</p>
															<p className="card-seat text-md-medium">7 seats</p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$498.25</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/destination/car2.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">Manchester, England</p>
														</div>
														<div className="card-facitlities">
															<p className="card-miles text-md-medium">25,100 miles</p>
															<p className="card-gear text-md-medium">Automatic</p>
															<p className="card-fuel text-md-medium">Diesel</p>
															<p className="card-seat text-md-medium">7 seats</p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$498.25</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/destination/car3.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">Manchester, England</p>
														</div>
														<div className="card-facitlities">
															<p className="card-miles text-md-medium">25,100 miles</p>
															<p className="card-gear text-md-medium">Automatic</p>
															<p className="card-fuel text-md-medium">Diesel</p>
															<p className="card-seat text-md-medium">7 seats</p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$498.25</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-journey-small background-card">
												<div className="card-image"> <Link className="wish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
													</svg></Link><img src="/assets/imgs/page/destination/car4.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-rating">
														<div className="card-left"> </div>
														<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
													</div>
													<div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
													<div className="card-program">
														<div className="card-location">
															<p className="text-location text-md-medium neutral-500">New South Wales, Australia</p>
														</div>
														<div className="card-facitlities">
															<p className="card-miles text-md-medium">25,100 miles</p>
															<p className="card-gear text-md-medium">Automatic</p>
															<p className="card-fuel text-md-medium">Diesel</p>
															<p className="card-seat text-md-medium">7 seats</p>
														</div>
														<div className="endtime">
															<div className="card-price">
																<h6 className="heading-6 neutral-1000">$498.25</h6>
																<p className="text-md-medium neutral-500">/ person</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-skyward background-3">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 mb-30 wow fadeInUp">
									<div className="box-image-sky">
										<div className="col-sky-1"><img className="w-100" src="/assets/imgs/page/homepage10/sky.png" alt="Travila" /><img className="w-100" src="/assets/imgs/page/homepage10/sky2.png" alt="Travila" /></div>
										<div className="col-sky-2"><img className="w-100" src="/assets/imgs/page/homepage10/sky3.png" alt="Travila" /></div>
									</div>
								</div>
								<div className="col-lg-6 mb-30 wow fadeInUp">
									<div className="box-right-skyward"><span className="btn btn-tag-white">Takes You Skyward</span>
										<h4 className="title-why mb-25 mt-10 neutral-1000">Your Premier Destination for Unmatched Flight Experiences</h4>
										<p className="text-lg-medium mb-25 neutral-1000">Experience stress-free travel planning with our website where you can easily book flights, check in an make changes to your itinerary with just a few clicks</p>
										<div className="payment-method mt-60">
											<div className="box-swiper mt-30">
												<div className="swiper-container swiper-group-payment">
													<SwiperGroupPaymentSlider />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-subscriber box-subscriber-destination background-body">
						<div className="container">
							<div className="block-subscriber">
								<div className="subscriber-left"><span className="btn btn-brand-secondary">Join our newsletter</span>
									<h5 className="mt-15 mb-30 neutral-1000">Subscribe to see secret deals prices drop the moment you sign up!</h5>
									<form className="form-subscriber" action="#">
										<input className="form-control" type="text" placeholder="Your Email" />
										<input className="btn btn-submit" type="submit" defaultValue="Subscribe" />
									</form>
									<p className="text-sm-medium neutral-500 mt-15">No ads. No trails. No commitments</p>
								</div>
								<div className="subscriber-right" />
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