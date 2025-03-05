'use client'
import { useState } from 'react'
import BookingForm from '@/components/elements/BookingForm'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PropertyDetail() {
	const [isAccordion, setIsAccordion] = useState(null)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
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
								<li> <Link href="/destination">Hotel</Link><span className="arrow-right">
									<svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg></span></li>
								<li> <span className="text-breadcrumb">Hotel Le Meurice</span></li>
							</ul>
						</div>
					</section>
					<section className="box-section box-banner-property-detail background-body">
						<div className="container">
							<div className="block-banner-property-detail container-banner-activities">
								<div className="row">
									<div className="col-xl-6 col-lg-6">
										<div className="banner-property-detail-1"> <img src="/assets/imgs/page/property/banner2.png" alt="Travile" />
											<div className="box-button-abs"> <Link className="btn btn-brand-secondary" href="#">
												<svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
													<path d="M20 8V2.75C20 2.3375 19.6625 2 19.25 2H14C13.5875 2 13.25 2.3375 13.25 2.75V8C13.25 8.4125 13.5875 8.75 14 8.75H19.25C19.6625 8.75 20 8.4125 20 8ZM19.25 0.5C20.495 0.5 21.5 1.505 21.5 2.75V8C21.5 9.245 20.495 10.25 19.25 10.25H14C12.755 10.25 11.75 9.245 11.75 8V2.75C11.75 1.505 12.755 0.5 14 0.5H19.25Z" />
													<path d="M20 19.25V14C20 13.5875 19.6625 13.25 19.25 13.25H14C13.5875 13.25 13.25 13.5875 13.25 14V19.25C13.25 19.6625 13.5875 20 14 20H19.25C19.6625 20 20 19.6625 20 19.25ZM19.25 11.75C20.495 11.75 21.5 12.755 21.5 14V19.25C21.5 20.495 20.495 21.5 19.25 21.5H14C12.755 21.5 11.75 20.495 11.75 19.25V14C11.75 12.755 12.755 11.75 14 11.75H19.25Z" />
													<path d="M8 8.75C8.4125 8.75 8.75 8.4125 8.75 8V2.75C8.75 2.3375 8.4125 2 8 2H2.75C2.3375 2 2 2.3375 2 2.75V8C2 8.4125 2.3375 8.75 2.75 8.75H8ZM8 0.5C9.245 0.5 10.25 1.505 10.25 2.75V8C10.25 9.245 9.245 10.25 8 10.25H2.75C1.505 10.25 0.5 9.245 0.5 8V2.75C0.5 1.505 1.505 0.5 2.75 0.5H8Z" />
													<path d="M8 20C8.4125 20 8.75 19.6625 8.75 19.25V14C8.75 13.5875 8.4125 13.25 8 13.25H2.75C2.3375 13.25 2 13.5875 2 14V19.25C2 19.6625 2.3375 20 2.75 20H8ZM8 11.75C9.245 11.75 10.25 12.755 10.25 14V19.25C10.25 20.495 9.245 21.5 8 21.5H2.75C1.505 21.5 0.5 20.495 0.5 19.25V14C0.5 12.755 1.505 11.75 2.75 11.75H8Z" />
												</svg>See All Photos</Link>
												<VideoPopup vdocls="btn btn-white-md popup-youtube" style2 /></div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-sm-6">
										<div className="banner-property-detail-2"> <img src="/assets/imgs/page/property/banner3.png" alt="Travile" /></div>
										<div className="banner-property-detail-3"> <img src="/assets/imgs/page/property/banner4.png" alt="Travile" /></div>
									</div>
									<div className="col-xl-3 col-lg-3 col-sm-6">
										<div className="banner-property-detail-4"> <img src="/assets/imgs/page/property/banner5.png" alt="Travile" /></div>
										<div className="banner-property-detail-5"> <img src="/assets/imgs/page/property/banner6.png" alt="Travile" /></div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="box-section box-buttons-destination box-buttons-property-detail background-card pt-40">
						<div className="container-fluid">
							<div className="box-button-faq wow fadeInRight"> <Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/airport.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/airport-w.svg" alt="Travile" />Airport Transfer</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/safety-box.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/safety-box-w.svg" alt="Travile" />Safety Box</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/coffee-shop.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/coffee-shop-w.svg" alt="Travile" />Balcony</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/massage.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/massage-w.svg" alt="Travile" />Spa Sauna</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/animal.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/animal-w.svg" alt="Travile" />Pet Allowed</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/wifi.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/wifi-w.svg" alt="Travile" />Free Wifi</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/hairdryer.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/hairdryer-w.svg" alt="Travile" />Air Dryer</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/air-conditioner.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/air-conditioner-w.svg" alt="Travile" />Air Condition</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/loundry.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/loundry-w.svg" alt="Travile" />Loundry Service</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/bed.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/bed-w.svg" alt="Travile" />King Size Bed</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/food.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/food-w.svg" alt="Travile" />Front desk</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/living.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/living-w.svg" alt="Travile" />Living Area</Link><Link className="btn btn-border-1" href="#"> <img className="light-mode" src="/assets/imgs/page/room/living.svg" alt="Travile" /><img className="dark-mode" src="/assets/imgs/page/room/living-w.svg" alt="Travile" />Living Area</Link></div>
						</div>
					</section>
					<section className="box-section box-content-tour-detail box-content-room-detail background-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-8">
									<div className="tour-header">
										<div className="tour-rate">
											<div className="rate-element"><span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
										</div>
										<div className="tour-title-main">
											<h4 className="neutral-1000">Tuscany | Farmhouse with pool and restaurant</h4>
										</div>
										<div className="tour-metas">
											<div className="tour-meta-left">
												<p className="text-md-medium neutral-500 mr-20 tour-location">
													<svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.99967 0C2.80452 0 0.205078 2.59944 0.205078 5.79456C0.205078 9.75981 5.39067 15.581 5.61145 15.8269C5.81883 16.0579 6.18089 16.0575 6.38789 15.8269C6.60867 15.581 11.7943 9.75981 11.7943 5.79456C11.7942 2.59944 9.1948 0 5.99967 0ZM5.99967 8.70997C4.39211 8.70997 3.0843 7.40212 3.0843 5.79456C3.0843 4.187 4.39214 2.87919 5.99967 2.87919C7.6072 2.87919 8.91502 4.18703 8.91502 5.79459C8.91502 7.40216 7.6072 8.70997 5.99967 8.70997Z" />
													</svg>Las Vegas, USA
												</p><Link className="text-md-medium neutral-1000 mr-30" href="#">Show on map</Link>
											</div>
											<div className="tour-meta-right"> <Link className="btn btn-share" href="#">
												<svg width={16} height={18} viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M13 11.5332C12.012 11.5332 11.1413 12.0193 10.5944 12.7584L5.86633 10.3374C5.94483 10.0698 6 9.79249 6 9.49989C6 9.10302 5.91863 8.72572 5.77807 8.37869L10.7262 5.40109C11.2769 6.04735 12.0863 6.46655 13 6.46655C14.6543 6.46655 16 5.12085 16 3.46655C16 1.81225 14.6543 0.466553 13 0.466553C11.3457 0.466553 10 1.81225 10 3.46655C10 3.84779 10.0785 4.20942 10.2087 4.54515L5.24583 7.53149C4.69563 6.90442 3.8979 6.49989 3 6.49989C1.3457 6.49989 0 7.84559 0 9.49989C0 11.1542 1.3457 12.4999 3 12.4999C4.00433 12.4999 4.8897 11.9996 5.4345 11.2397L10.147 13.6529C10.0602 13.9331 10 14.2249 10 14.5332C10 16.1875 11.3457 17.5332 13 17.5332C14.6543 17.5332 16 16.1875 16 14.5332C16 12.8789 14.6543 11.5332 13 11.5332Z" />
												</svg>Share</Link><Link className="btn btn-wishlish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" clipRule="evenodd" d="M2.2222 2.3638C4.34203 0.243977 7.65342 0.0419426 10.0004 1.7577C12.3473 0.0419426 15.6587 0.243977 17.7786 2.3638C20.1217 4.70695 20.1217 8.50594 17.7786 10.8491L12.1217 16.5059C10.9501 17.6775 9.05063 17.6775 7.87906 16.5059L2.2222 10.8491C-0.120943 8.50594 -0.120943 4.70695 2.2222 2.3638Z" />
													</svg>Wishlish</Link></div>
										</div>
									</div>
									<div className="box-collapse-expand">
										<div className="group-collapse-expand">
											<button className={isAccordion == 1 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOverview" aria-expanded="false" aria-controls="collapseOverview" onClick={() => handleAccordion(1)}>
												<h6>Overview</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 1 ? "collapse" : "collapse show"} id="collapseOverview">
												<div className="card card-body">
													<p>Elevate your Las Vegas experience to new heights with a journey aboard The High Roller at The LINQ. As the tallest observation wheel in the world, standing at an impressive 550 feet tall, The High Roller offers a bird's-eye perspective of the iconic Las Vegas Strip and its surrounding desert landscape. From the moment you step into one of the spacious cabins, you'll be transported on a mesmerizing adventure, where every turn offers a new and breathtaking vista of the vibrant city below.</p>
													<p>Whether you're a first-time visitor or a seasoned Las Vegas aficionado, The High Roller promises an unparalleled experience that will leave you in awe. With its climate-controlled cabins and immersive audio commentary, this attraction provides a unique opportunity to see Las Vegas from a whole new perspective, while learning about its rich history and famous landmarks along the way.</p>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 2 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseHighlight" aria-expanded="false" aria-controls="collapseHighlight" onClick={() => handleAccordion(2)}>
												<h6>What this place offers</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 1 ? "collapse" : "collapse show"} id="collapseHighlight">
												<div className="card card-body">
													<div className="row">
														<div className="col-lg-6">
															<p className="text-md-bold">Included:</p>
															<ul>
																<li>Terrace/ Balcony with lounge chairs</li>
																<li>Air conditioner</li>
																<li>Rain shower</li>
																<li>Hand-carved granite bathtub</li>
																<li>Coffee and Tea making facilities</li>
																<li>Complimentary WiFi connection</li>
																<li>Safety box</li>
																<li>Minibar</li>
															</ul>
														</div>
														<div className="col-lg-6">
															<p className="text-md-bold">Excluded:</p>
															<ul>
																<li>Work desk</li>
																<li>Flat screen TV with international channel selection</li>
																<li>Deluxe custom-made bathroom amenities</li>
																<li>Non-smoking</li>
																<li>Seating area</li>
																<li>24-hour security</li>
																<li>Wood or granite flooring</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 3 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseMap" aria-expanded="false" aria-controls="collapseMap" onClick={() => handleAccordion(3)}>
												<h6>Tour Map</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 1 ? "collapse" : "collapse show"} id="collapseMap">
												<div className="card card-body">
													<div className="pb-35">
														<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85639.97343647551!2d1.8298143252444794!3d47.873502871808036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4e4d49df386e3%3A0x9eb97de479c38029!2zT3Jsw6lhbnMsIFBow6Fw!5e0!3m2!1svi!2s!4v1711200672635!5m2!1svi!2s" width="100%" height={290} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
													</div>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 4 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseQuestion" aria-expanded="false" aria-controls="collapseQuestion" onClick={() => handleAccordion(4)}>
												<h6>Question  Answers</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 1 ? "collapse" : "collapse show"} id="collapseQuestion">
												<div className="card card-body">
													<div className="list-questions">
														<div className="item-question">
															<div className="head-question">
																<p className="text-md-bold neutral-1000">Is The High Roller suitable for all ages?</p>
															</div>
															<div className="content-question">
																<p className="text-sm-medium neutral-800">Absolutely! The High Roller offers a family-friendly experience suitable for visitors of all ages. Children must be accompanied by an adult.</p>
															</div>
														</div>
														<div className="item-question active">
															<div className="head-question">
																<p className="text-md-bold neutral-1000">Can I bring food or drinks aboard The High Roller?</p>
															</div>
															<div className="content-question">
																<p className="text-sm-medium neutral-800">Outside food and beverages are not permitted on The High Roller. However, there are nearby dining options at The LINQ Promenade where you can enjoy a meal before or after your ride.</p>
															</div>
														</div>
														<div className="item-question">
															<div className="head-question">
																<p className="text-md-bold neutral-1000">Is The High Roller wheelchair accessible?</p>
															</div>
															<div className="content-question">
																<p className="text-sm-medium neutral-800">es, The High Roller cabins are wheelchair accessible, making it possible for everyone to enjoy the breathtaking views of Las Vegas.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 5 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviews" aria-expanded="false" aria-controls="collapseReviews" onClick={() => handleAccordion(5)}>
												<h6>Rate  Reviews</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 1 ? "collapse" : "collapse show"} id="collapseReviews">
												<div className="card card-body">
													<div className="head-reviews">
														<div className="review-left">
															<div className="review-info-inner">
																<h6 className="neutral-1000">4.95 / 5</h6>
																<p className="text-sm-medium neutral-400">(672 reviews)</p>
																<div className="review-rate"> <img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /></div>
															</div>
														</div>
														<div className="review-right">
															<div className="review-progress">
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Price</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '90%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>4.8/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Service</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '90%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>4.2/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Safety</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '95%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>4.9/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Entertainment</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '85%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>4.7/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Accessibility</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '100%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>5/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Support</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '100%' }} />
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>5/5</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="list-reviews">
														<div className="item-review">
															<div className="head-review">
																<div className="author-review"> <img src="/assets/imgs/page/tour-detail/avatar.png" alt="Travila" />
																	<div className="author-info">
																		<p className="text-lg-bold">Sarah Johnson</p>
																		<p className="text-sm-medium neutral-500">December 4, 2024 at 3:12 pm</p>
																	</div>
																</div>
																<div className="rate-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></div>
															</div>
															<div className="content-review">
																<p className="text-sm-medium neutral-800">The views from The High Roller were absolutely stunning! It's a fantastic way to see the Strip and the surrounding area. The cabins are spacious and comfortable, and the audio commentary adds an extra layer of enjoyment. Highly recommend!</p>
															</div>
														</div>
														<div className="item-review">
															<div className="head-review">
																<div className="author-review"> <img src="/assets/imgs/page/tour-detail/avatar.png" alt="Travila" />
																	<div className="author-info">
																		<p className="text-lg-bold">Sarah Johnson</p>
																		<p className="text-sm-medium neutral-500">December 4, 2024 at 3:12 pm</p>
																	</div>
																</div>
																<div className="rate-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></div>
															</div>
															<div className="content-review">
																<p className="text-sm-medium neutral-800">The views from The High Roller were absolutely stunning! It's a fantastic way to see the Strip and the surrounding area. The cabins are spacious and comfortable, and the audio commentary adds an extra layer of enjoyment. Highly recommend!</p>
															</div>
														</div>
														<div className="item-review">
															<div className="head-review">
																<div className="author-review"> <img src="/assets/imgs/page/tour-detail/avatar.png" alt="Travila" />
																	<div className="author-info">
																		<p className="text-lg-bold">Sarah Johnson</p>
																		<p className="text-sm-medium neutral-500">December 4, 2024 at 3:12 pm</p>
																	</div>
																</div>
																<div className="rate-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></div>
															</div>
															<div className="content-review">
																<p className="text-sm-medium neutral-800">The views from The High Roller were absolutely stunning! It's a fantastic way to see the Strip and the surrounding area. The cabins are spacious and comfortable, and the audio commentary adds an extra layer of enjoyment. Highly recommend!</p>
															</div>
														</div>
													</div>
													<nav aria-label="Page navigation example">
														<ul className="pagination">
															<li className="page-item"><Link className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">
																<svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
																	<path d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668" strokeLinecap="round" strokeLinejoin="round" />
																</svg></span></Link></li>
															<li className="page-item"><Link className="page-link" href="#">1</Link></li>
															<li className="page-item"><Link className="page-link active" href="#">2</Link></li>
															<li className="page-item"><Link className="page-link" href="#">3</Link></li>
															<li className="page-item"><Link className="page-link" href="#">4</Link></li>
															<li className="page-item"><Link className="page-link" href="#">5</Link></li>
															<li className="page-item"><Link className="page-link" href="#">...</Link></li>
															<li className="page-item"><Link className="page-link" href="#" aria-label="Next"><span aria-hidden="true">
																<svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
																	<path d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992" strokeLinecap="round" strokeLinejoin="round" />
																</svg></span></Link></li>
														</ul>
													</nav>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 6 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddReview" aria-expanded="false" aria-controls="collapseAddReview" onClick={() => handleAccordion(6)}>
												<h6>Add a review</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 1 ? "collapse" : "collapse show"} id="collapseAddReview">
												<div className="card card-body">
													<div className="box-type-reviews">
														<div className="row">
															<div className="col-lg-4">
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Price</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Service</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
															</div>
															<div className="col-lg-4">
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Safety</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Entertainment</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
															</div>
															<div className="col-lg-4">
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Accessibility</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Support</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
															</div>
														</div>
													</div>
													<div className="box-form-reviews">
														<h6 className="text-md-bold neutral-1000 mb-15">Leave feedback</h6>
														<div className="row">
															<div className="col-md-6">
																<div className="form-group">
																	<input className="form-control" type="text" placeholder="Your name" />
																</div>
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	<input className="form-control" type="text" placeholder="Email address" />
																</div>
															</div>
															<div className="col-md-12">
																<div className="form-group">
																	<textarea className="form-control" placeholder="Your comment" defaultValue={""} />
																</div>
															</div>
															<div className="col-md-12">
																<button className="btn btn-black-lg-square">Submit review
																	<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
																		<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
																	</svg>
																</button >
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="booking-form">
										<div className="head-booking-form">
											<p className="text-xl-bold neutral-1000">Booking Form</p>
										</div>
										<BookingForm />
									</div>
									<div className="sidebar-left border-1 background-3">
										<h6 className="text-xl-bold neutral-1000">Agent Information</h6>
										<div className="box-sidebar-content">
											<div className="box-agent-support">
												<div className="card-author">
													<div className="card-author-image"> <img src="/assets/imgs/page/property/author.png" alt="Travila" /></div>
													<div className="card-author-info">
														<p className="text-lg-bold neutral-1000">Emily Rose</p>
														<p className="text-sm-medium neutral-500">Las Vegas, USA </p>
													</div>
												</div>
											</div>
											<div className="box-info-contact">
												<p className="text-md-medium mobile-phone neutral-1000">Mobile: 1-222-333-4444</p>
												<p className="text-md-medium email neutral-1000">Email: emily-rose@gmail.com</p>
												<p className="text-md-medium whatsapp neutral-1000">WhatsApp: 1-222-333-4444</p>
												<p className="text-md-medium fax neutral-1000">Fax: 1-222-333-4444</p>
											</div>
											<div className="box-link-bottom"> <Link className="link-black" href="#">View My Listings
												<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
													<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link></div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<h6 className="text-lg-bold neutral-1000">Featured</h6>
										<div className="box-popular-posts box-popular-posts-md">
											<ul>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/property/feature.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold" href="#">Himalayan Cedar Nest in Sainj Valley</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/property/feature2.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold" href="#">Hansel Creek Gust Tree House</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/property/feature3.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold" href="#">Farmhouse with pool and restaurant</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/property/feature4.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold" href="#">Mountainside luxury cabin with Batulao view</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/property/feature5.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold" href="#">Exclusive cottage surrounded by silence</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="box-section box-content-property-also-like background-body">
						<div className="container">
							<div className="text-center">
								<h2 className="neutral-1000">You might be interested in</h2>
								<p className="text-xl-medium neutral-500">Navigate the Globe with Confidence</p>
							</div>
							<div className="row mt-90">
								<div className="col-lg-4 col-md-6 wow fadeInUp">
									<div className="card-journey-small card-journey-small-type-3 card-journey-small-type-4 background-card">
										<div className="card-image"> <Link className="wish" href="#">
											<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
												<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
											</svg></Link><img src="/assets/imgs/page/property/like.png" alt="Travila" /></div>
										<div className="card-info">
											<div className="card-rating">
												<div className="card-left"> </div>
												<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
											</div>
											<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Deluxe Queen Room</Link></div>
											<div className="card-program">
												<div className="card-facilities border-none">
													<div className="item-facilities">
														<p className="room text-md-medium neutral-1000">4 rooms</p>
													</div>
													<div className="item-facilities">
														<p className="size text-md-medium neutral-1000">168 m2</p>
													</div>
													<div className="item-facilities">
														<p className="bed text-md-medium neutral-1000">5 Beds</p>
													</div>
													<div className="item-facilities">
														<p className="bathroom text-md-medium neutral-1000">2 Bathrooms</p>
													</div>
												</div>
												<div className="endtime">
													<div className="card-price">
														<h6 className="heading-6 neutral-1000">$48.25</h6>
														<p className="text-md-medium neutral-500">/ night</p>
													</div>
													<div className="card-button"> <Link className="btn btn-gray" href="#">Book Now</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 wow fadeInUp">
									<div className="card-journey-small card-journey-small-type-3 card-journey-small-type-4 background-card">
										<div className="card-image"> <Link className="wish" href="#">
											<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
												<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
											</svg></Link><img src="/assets/imgs/page/property/like2.png" alt="Travila" /></div>
										<div className="card-info">
											<div className="card-rating">
												<div className="card-left"> </div>
												<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
											</div>
											<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">King Ensuite Room</Link></div>
											<div className="card-program">
												<div className="card-facilities border-none">
													<div className="item-facilities">
														<p className="room text-md-medium neutral-1000">4 rooms</p>
													</div>
													<div className="item-facilities">
														<p className="size text-md-medium neutral-1000">168 m2</p>
													</div>
													<div className="item-facilities">
														<p className="bed text-md-medium neutral-1000">5 Beds</p>
													</div>
													<div className="item-facilities">
														<p className="bathroom text-md-medium neutral-1000">2 Bathrooms</p>
													</div>
												</div>
												<div className="endtime">
													<div className="card-price">
														<h6 className="heading-6 neutral-1000">$17.32</h6>
														<p className="text-md-medium neutral-500">/ night</p>
													</div>
													<div className="card-button"> <Link className="btn btn-gray" href="#">Book Now</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 wow fadeInUp">
									<div className="card-journey-small card-journey-small-type-3 card-journey-small-type-4 background-card">
										<div className="card-image"> <Link className="wish" href="#">
											<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
												<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
											</svg></Link><img src="/assets/imgs/page/property/like3.png" alt="Travila" /></div>
										<div className="card-info">
											<div className="card-rating">
												<div className="card-left"> </div>
												<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
											</div>
											<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Deluxe Ensuite Room</Link></div>
											<div className="card-program">
												<div className="card-facilities border-none">
													<div className="item-facilities">
														<p className="room text-md-medium neutral-1000">4 rooms</p>
													</div>
													<div className="item-facilities">
														<p className="size text-md-medium neutral-1000">168 m2</p>
													</div>
													<div className="item-facilities">
														<p className="bed text-md-medium neutral-1000">5 Beds</p>
													</div>
													<div className="item-facilities">
														<p className="bathroom text-md-medium neutral-1000">2 Bathrooms</p>
													</div>
												</div>
												<div className="endtime">
													<div className="card-price">
														<h6 className="heading-6 neutral-1000">$15.63</h6>
														<p className="text-md-medium neutral-500">/ night</p>
													</div>
													<div className="card-button"> <Link className="btn btn-gray" href="#">Book Now</Link></div>
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