'use client'
import Layout from "@/components/layout/Layout"
import SwiperGroup3Slider from '@/components/slider/SwiperGroup3Slider'
import { swiperGroup5, swiperGroupCenter4 } from "@/util/swiperOption"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Home() {

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
								<li> <Link href="/blog-grid">Blog</Link></li>
							</ul>
						</div>
					</section>
					<section className="section-box box-next-trips background-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 mb-30">
									<h1 className="text-86-bold neutral-1000">Inspiration </h1>
									<h2 className="text-64-medium neutral-1000">for Your Next Trips</h2>
									<h6 className="neutral-500">Discover the World's Treasures with Travila </h6>
								</div>
								<div className="col-lg-6 mb-30">
									<div className="box-swiper mt-30 wow fadeInUp">
										<div className="swiper-container swiper-group-5">
											<Swiper {...swiperGroup5}>
												<SwiperSlide>
													<div className="card-popular-destination card-popular-destination-type-2">
														<div className="card-image"> <img src="/assets/imgs/page/homepage5/activity.png" alt="Travila" /></div>
														<div className="card-info"> <Link className="text-sm-bold" href="#">Wanderlust</Link>
															<p className="text-xs neutral-500">25 posts</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-popular-destination card-popular-destination-type-2">
														<div className="card-image"> <img src="/assets/imgs/page/homepage5/activity2.png" alt="Travila" /></div>
														<div className="card-info"> <Link className="text-sm-bold" href="#">Cuisine</Link>
															<p className="text-xs neutral-500">34 posts</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-popular-destination card-popular-destination-type-2">
														<div className="card-image"> <img src="/assets/imgs/page/homepage5/activity3.png" alt="Travila" /></div>
														<div className="card-info"> <Link className="text-sm-bold" href="#">Food Tours</Link>
															<p className="text-xs neutral-500">56 posts</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-popular-destination card-popular-destination-type-2">
														<div className="card-image"> <img src="/assets/imgs/page/homepage5/activity4.png" alt="Travila" /></div>
														<div className="card-info"> <Link className="text-sm-bold" href="#">Heritage</Link>
															<p className="text-xs neutral-500">17 posts</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-popular-destination card-popular-destination-type-2">
														<div className="card-image"> <img src="/assets/imgs/page/homepage5/activity5.png" alt="Travila" /></div>
														<div className="card-info"> <Link className="text-sm-bold" href="#">Lifestyle</Link>
															<p className="text-xs neutral-500">17 posts</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-popular-destination card-popular-destination-type-2">
														<div className="card-image"> <img src="/assets/imgs/page/homepage5/activity6.png" alt="Travila" /></div>
														<div className="card-info"> <Link className="text-sm-bold" href="#">River Cruise</Link>
															<p className="text-xs neutral-500">18 posts</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-popular-destination card-popular-destination-type-2">
														<div className="card-image"> <img src="/assets/imgs/page/homepage5/activity7.png" alt="Travila" /></div>
														<div className="card-info"> <Link className="text-sm-bold" href="#">Spa Retreat</Link>
															<p className="text-xs neutral-500">18 posts</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-popular-destination card-popular-destination-type-2">
														<div className="card-image"> <img src="/assets/imgs/page/homepage5/activity8.png" alt="Travila" /></div>
														<div className="card-info"> <Link className="text-sm-bold" href="#">Road Trip</Link>
															<p className="text-xs neutral-500">19 posts</p>
														</div>
													</div>
												</SwiperSlide>
											</Swiper>
										</div>
									</div>
								</div>
							</div>
							<div className="box-button-slider-nexttrip">
								<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-5">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
										<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-5">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
										<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round"> </path>
									</svg>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-blog-slide background-body">
						<div className="box-slide-blogs">
							<div className="box-swiper">
								<div className="swiper-container swiper-group-center-4">
									<Swiper {...swiperGroupCenter4}>
										<SwiperSlide>
											<div className="card-blog">
												<div className="card-image"><img src="/assets/imgs/page/blog/blog.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-info-blog"><Link className="btn btn-label-tag" href="/blog-grid-2">Cultural</Link><Link className="card-title heading-5" href="/blog-detail">Savoring Life’s Palette: Art, Food, and Beyond</Link>
														<div className="card-meta-user">
															<div className="box-author-small"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travilla" />
																<p className="text-sm-bold">By Jimmy Dave</p>
															</div>
															<div className="date-post">
																<p className="text-sm-medium">12 January 2024</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-blog">
												<div className="card-image"><img src="/assets/imgs/page/blog/blog2.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-info-blog"><Link className="btn btn-label-tag" href="/blog-grid-2">Wanderlust</Link><Link className="card-title heading-5" href="#">Savoring Life’s Palette: Art, Food, and Beyond</Link>
														<div className="card-meta-user">
															<div className="box-author-small"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travilla" />
																<p className="text-sm-bold">By Jimmy Dave</p>
															</div>
															<div className="date-post">
																<p className="text-sm-medium">12 January 2024</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-blog">
												<div className="card-image"><img src="/assets/imgs/page/blog/blog3.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-info-blog"><Link className="btn btn-label-tag" href="/blog-grid-2">Adventure</Link><Link className="card-title heading-5" href="/blog-detail">Canvas and Keyboard: An Art-Tech Affair</Link>
														<div className="card-meta-user">
															<div className="box-author-small"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travilla" />
																<p className="text-sm-bold">By Jimmy Dave</p>
															</div>
															<div className="date-post">
																<p className="text-sm-medium">12 January 2024</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-blog">
												<div className="card-image"><img src="/assets/imgs/page/blog/blog4.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-info-blog"><Link className="btn btn-label-tag" href="#">Cultural</Link><Link className="card-title heading-5" href="/blog-detail">Wanderlust Whispers: My Global Gastronomic Odyssey</Link>
														<div className="card-meta-user">
															<div className="box-author-small"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travilla" />
																<p className="text-sm-bold">By Jimmy Dave</p>
															</div>
															<div className="date-post">
																<p className="text-sm-medium">12 January 2024</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-blog">
												<div className="card-image"><img src="/assets/imgs/page/blog/blog.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-info-blog"><Link className="btn btn-label-tag" href="/blog-grid-2">Cultural</Link><Link className="card-title heading-5" href="/blog-detail">Fashion Forward, Tech Savvy: My Lifestyle Fusion</Link>
														<div className="card-meta-user">
															<div className="box-author-small"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travilla" />
																<p className="text-sm-bold">By Jimmy Dave</p>
															</div>
															<div className="date-post">
																<p className="text-sm-medium">12 January 2024</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-blog">
												<div className="card-image"><img src="/assets/imgs/page/blog/blog2.png" alt="Travila" /></div>
												<div className="card-info">
													<div className="card-info-blog"><Link className="btn btn-label-tag" href="/blog-grid-2">Wanderlust</Link><Link className="card-title heading-5" href="#">Savoring Life’s Palette: Art, Food, and Beyond</Link>
														<div className="card-meta-user">
															<div className="box-author-small"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travilla" />
																<p className="text-sm-bold">By Jimmy Dave</p>
															</div>
															<div className="date-post">
																<p className="text-sm-medium">12 January 2024</p>
															</div>
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
					<section className="box-section box-buttons-destination box-buttons-blog background-body">
						<div className="container">
							<div className="box-button-faq wow fadeInRight"> <Link className="btn btn-border-1" href="#">
								<svg width={25} height={24} viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M21.683 10.8508H19.0179V8.71402C19.0179 8.32514 18.7025 8.00986 18.3135 8.00986H14.5067C14.1537 6.93248 13.137 6.15961 11.9551 6.15961H10.7332V0.704156C10.7332 0.315281 10.4179 0 10.0289 0H5.11077C4.7218 0 4.40642 0.315281 4.40642 0.704156V6.15966H3.18458C1.70431 6.15966 0.5 7.36359 0.5 8.84348V21.3161C0.5 22.796 1.70431 24 3.18458 24H21.683C23.2363 24 24.5 22.7366 24.5 21.1838V13.667C24.5 12.1141 23.2363 10.8508 21.683 10.8508ZM23.0914 13.667V18.1203H9.16423V13.667C9.16423 12.8907 9.79602 12.259 10.5726 12.259H21.683C22.4596 12.259 23.0914 12.8906 23.0914 13.667ZM17.6092 10.8508H14.6464V9.41817H17.6092V10.8508ZM5.81506 1.40827H9.32459V6.15961H5.81506V1.40827ZM1.90864 21.3161V8.84348C1.90864 8.14012 2.48103 7.56792 3.18458 7.56792H11.9551C12.6261 7.56792 13.1855 8.09147 13.2283 8.75986C13.23 8.78592 13.2333 8.81147 13.2377 8.83659V10.8508H10.5725C9.01925 10.8508 7.75555 12.1141 7.75555 13.667V21.1838C7.75555 21.6965 7.89397 22.1772 8.13444 22.5917H3.18458C2.48103 22.5917 1.90864 22.0195 1.90864 21.3161ZM21.683 22.5917H11.9551H10.5726C9.79602 22.5917 9.16423 21.9601 9.16423 21.1838V19.5286H23.0914V21.1838C23.0914 21.9601 22.4596 22.5917 21.683 22.5917Z" />
								</svg>Tours Booking</Link><Link className="btn btn-border-1" href="#">
									<svg width={25} height={24} viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M24.1573 20.3428L21.8371 18.0226C21.692 17.8775 21.4907 17.803 21.286 17.8187L19.454 17.9597L17.7082 16.2138C21.0447 12.695 22.7359 8.98045 23.4604 7.02717C24.3769 4.55606 24.9922 1.55147 23.9705 0.529641C22.9486 -0.492188 19.944 0.123141 17.4729 1.03969C15.5196 1.76419 11.8051 3.45539 8.28622 6.79191L6.54041 5.04609L6.68131 3.21408C6.69706 3.00942 6.62258 2.80809 6.47745 2.66297L4.15723 0.342703C3.7003 -0.114234 2.95686 -0.114234 2.49997 0.342703L0.842703 1.99997C0.385766 2.45691 0.385766 3.20034 0.842703 3.65723L3.16287 5.97741C3.308 6.12253 3.50933 6.19702 3.71398 6.18127L5.546 6.04036L7.29181 7.78617C3.95534 11.305 2.26414 15.0195 1.53964 16.9728C0.623047 19.444 0.00776565 22.4486 1.02959 23.4704C2.05142 24.4922 5.05602 23.8769 7.52717 22.9604C9.4805 22.2358 13.195 20.5447 16.7138 17.2082L18.4596 18.954L18.3187 20.786C18.303 20.9907 18.3775 21.192 18.5226 21.3371L20.8428 23.6573C21.2997 24.1143 22.0431 24.1143 22.5 23.6573L24.1573 22.0001C24.6142 21.5431 24.6142 20.7997 24.1573 20.3428ZM15.4831 13.9887L16.3118 13.1601C17.5123 11.9595 17.6613 10.0997 16.7589 8.73544L18.8576 6.63675C19.6426 7.28344 20.5476 7.75266 21.5305 8.02191C20.6665 9.93492 19.1584 12.631 16.7128 15.2184L15.4831 13.9887ZM9.68262 14.8174C8.8602 13.995 8.86016 12.6567 9.68262 11.8343L10.5113 11.0056L13.4944 13.9887L12.6658 14.8174C11.8433 15.6398 10.5051 15.6398 9.68262 14.8174ZM11.5056 10.0113L12.3343 9.18262C13.1568 8.36016 14.495 8.3602 15.3174 9.18262C16.1399 10.0051 16.1399 11.3433 15.3174 12.1658L14.4888 12.9944L11.5056 10.0113ZM21.3924 1.46011C22.4186 1.33397 22.8726 1.45927 22.9751 1.52489C23.0407 1.62736 23.166 2.08144 23.0399 3.10767C22.9135 4.13639 22.5839 5.37333 22.0869 6.68484C22.0838 6.69286 22.0805 6.70153 22.0774 6.70959C21.0341 6.45741 20.0924 5.93236 19.33 5.16998C18.5676 4.40761 18.0421 3.46608 17.7899 2.42283C17.7982 2.41969 17.807 2.41622 17.8152 2.41313C19.1267 1.91611 20.3637 1.58653 21.3924 1.46011ZM16.4785 2.96934C16.7477 3.95227 17.2164 4.85756 17.8631 5.64253L15.7646 7.74108C14.4003 6.83873 12.5405 6.9877 11.3399 8.18827L10.5113 9.01692L9.28161 7.7872C11.8692 5.34141 14.5654 3.8333 16.4785 2.96934ZM2.00281 2.82863L3.32863 1.50281L5.25444 3.42862L5.1597 4.65975L3.92858 4.75448L2.00281 2.82863ZM9.51692 10.0113L8.68827 10.8399C7.48775 12.0404 7.33878 13.9003 8.24113 15.2645L6.14234 17.3633C5.35733 16.7166 4.45203 16.248 3.46916 15.9788C4.33306 14.0658 5.84122 11.3693 8.2872 8.78156L9.51692 10.0113ZM3.60767 22.5399C2.58144 22.666 2.12741 22.5407 2.02489 22.4751C1.95927 22.3726 1.83397 21.9186 1.96011 20.8924C2.08658 19.8637 2.41611 18.6267 2.91313 17.3152C2.91627 17.3069 2.91978 17.298 2.92292 17.2897C3.96608 17.542 4.90756 18.0676 5.66994 18.8301C6.43231 19.5925 6.95797 20.534 7.21034 21.5771C7.202 21.5803 7.19309 21.5838 7.1848 21.5869C5.87333 22.0839 4.63639 22.4135 3.60767 22.5399ZM8.52228 21.0303C8.25303 20.0474 7.78428 19.1418 7.13755 18.3569L9.23548 16.2589C10.5998 17.1613 12.4596 17.0123 13.6601 15.8118L14.4888 14.9831L15.7184 16.2128C13.1312 18.6583 10.4353 20.1663 8.52228 21.0303ZM21.6714 22.4972L19.7456 20.5715L19.8403 19.3403L21.0714 19.2457L22.9972 21.1714L21.6714 22.4972Z" fill="#737373" />
									</svg>Activities</Link><Link className="btn btn-border-1" href="#">
									<svg width={25} height={24} viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_14_5659)">
											<path d="M22.0993 9.48724C22.7546 8.07953 23.2344 6.60443 23.2344 5.30109C23.2344 2.37799 20.8571 0 17.9351 0C15.8765 0 14.0884 1.1803 13.2114 2.89984C12.9056 2.87347 12.5963 2.85938 12.2891 2.85938C6.4469 2.85938 1.71875 7.58698 1.71875 13.4297C1.71875 19.2719 6.44635 24 12.2891 24C18.1312 24 22.8594 19.2724 22.8594 13.4297C22.8594 12.1126 22.623 10.7964 22.0993 9.48724ZM17.9351 1.40625C20.0817 1.40625 21.8281 3.15344 21.8281 5.30109C21.8281 8.07275 19.105 12.0386 17.9124 13.6425C16.3795 11.5587 14.0421 7.88324 14.0421 5.30109C14.0419 3.15344 15.7884 1.40625 17.9351 1.40625ZM5.55829 7.21765L10.2756 9.57623L9.73492 12.2796L7.8678 13.5244C7.67224 13.6547 7.55469 13.8743 7.55469 14.1094V17.1237L4.4613 18.1904C3.61389 16.8019 3.125 15.1719 3.125 13.4297C3.125 11.0349 4.04895 8.85187 5.55829 7.21765ZM5.32538 19.3799L8.48706 18.2897C8.77069 18.1919 8.96094 17.9249 8.96094 17.625V14.4857L10.7572 13.2881C10.9123 13.1847 11.0201 13.0239 11.0566 12.841L11.7597 9.32538C11.822 9.01447 11.6683 8.70044 11.3847 8.55872L6.66553 6.19904C8.388 4.85632 10.5206 4.17059 12.7355 4.27679C12.2907 6.53979 13.5248 9.23877 14.6724 11.2544L12.7307 12.865C12.4421 13.1045 12.3922 13.5282 12.6172 13.8281L13.8828 15.5156H11.0703C10.6819 15.5156 10.3672 15.8304 10.3672 16.2188V20.4375C10.3672 20.8259 10.6819 21.1406 11.0703 21.1406H14.2891L14.9481 22.1999C11.5292 23.2385 7.74127 22.203 5.32538 19.3799ZM16.2798 21.6782L15.2766 20.066C15.1483 19.8598 14.9227 19.7344 14.6797 19.7344H11.7734V16.9219H15.2891C15.8671 16.9219 16.1989 16.2599 15.8516 15.7969L14.1439 13.52L15.4059 12.4731C16.3904 14.0264 17.2787 15.1379 17.3618 15.241C17.6422 15.5889 18.1722 15.5903 18.4544 15.2439C18.5595 15.115 19.9385 13.409 21.1884 11.2328C21.3641 11.9469 21.4531 12.6819 21.4531 13.4297C21.4531 17.0532 19.3392 20.192 16.2798 21.6782Z" fill="#737373" />
											<path d="M17.9362 7.77264C19.2961 7.77264 20.4025 6.66595 20.4025 5.30585C20.4025 3.94556 19.296 2.83887 17.9362 2.83887C16.5763 2.83887 15.47 3.94556 15.47 5.30585C15.47 6.66595 16.5763 7.77264 17.9362 7.77264ZM17.9362 4.24512C18.5207 4.24512 18.9962 4.72101 18.9962 5.30585C18.9962 5.8905 18.5207 6.36639 17.9362 6.36639C17.3517 6.36639 16.8762 5.8905 16.8762 5.30585C16.8762 4.72101 17.3517 4.24512 17.9362 4.24512Z" fill="#737373" />
										</g>
										<defs>
											<clipPath id="clip0_14_5659">
												<rect width={24} height={24} fill="white" transform="translate(0.5)" />
											</clipPath>
										</defs>
									</svg>Destinations</Link><Link className="btn btn-border-1" href="#">
									<svg width={23} height={24} viewBox="0 0 23 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M21.3584 8.29719H18.2269V5.1146C18.2269 4.72631 17.9121 4.41151 17.5238 4.41151H16.8207V2.78464C16.8207 1.24917 15.5715 0 14.036 0H8.96399C7.42848 0 6.17931 1.24917 6.17931 2.78464V4.41146H5.47621C5.08792 4.41146 4.77312 4.72626 4.77312 5.11456V8.29714H1.64157C1.25328 8.29714 0.938477 8.61194 0.938477 9.00024V23.2969C0.938477 23.6852 1.25328 24 1.64157 24H21.3584C21.7467 24 22.0615 23.6852 22.0615 23.2969V9.00029C22.0615 8.61199 21.7467 8.29719 21.3584 8.29719ZM7.5855 2.78464C7.5855 2.02454 8.2039 1.40619 8.96399 1.40619H14.036C14.7961 1.40619 15.4145 2.02454 15.4145 2.78464V4.41146H7.5855V2.78464ZM16.8207 5.81765V22.5938H15.3091V19.1664C15.3091 18.7781 14.9943 18.4633 14.606 18.4633H8.39397C8.00567 18.4633 7.69087 18.7781 7.69087 19.1664V22.5938H6.17931V5.81765H16.8207ZM12.2031 19.8695H13.9029V22.5938H12.2031V19.8695ZM10.7969 22.5938H9.09702V19.8695H10.7969V22.5938ZM2.34467 9.70338H4.77312V22.5938H2.34467V9.70338ZM20.6553 22.5938H18.2269V9.70338H20.6553V22.5938Z" fill="#737373" />
										<path d="M13.9167 16.5074C14.0066 16.9919 14.59 17.2332 14.9962 16.9545C15.487 16.6313 15.374 15.8643 14.8101 15.6974C14.31 15.5393 13.8084 15.9944 13.9167 16.5074Z" fill="#737373" />
										<path d="M11.0542 16.9132C11.5094 17.2882 12.2037 16.9594 12.2031 16.3699C12.2071 15.845 11.6297 15.4981 11.1686 15.7498C10.731 15.9757 10.6687 16.6065 11.0542 16.9132Z" fill="#737373" />
										<path d="M7.7047 16.5073C7.80257 17.0229 8.43733 17.2493 8.83997 16.9131C9.37207 16.4677 9.0163 15.6088 8.32483 15.6701C7.92313 15.7008 7.61597 16.1139 7.7047 16.5073Z" fill="#737373" />
										<path d="M15.2953 13.4197C15.1967 12.9041 14.5631 12.6777 14.16 13.0138C13.7038 13.3866 13.8899 14.1328 14.4684 14.2465C14.9499 14.3507 15.3988 13.9011 15.2953 13.4197Z" fill="#737373" />
										<path d="M10.8104 13.6949C10.9015 14.1797 11.4833 14.4207 11.8904 14.1421C12.381 13.8156 12.2691 13.0545 11.7042 12.8849C11.2039 12.7269 10.7026 13.1814 10.8104 13.6949Z" fill="#737373" />
										<path d="M7.70473 13.6949C7.79459 14.1794 8.37792 14.4207 8.78417 14.142C9.27531 13.8161 9.16309 13.0539 8.59809 12.8849C8.0979 12.7268 7.59631 13.1817 7.70473 13.6949Z" fill="#737373" />
										<path d="M15.3055 10.6759C15.2578 10.1532 14.6502 9.86548 14.2157 10.1603C13.7251 10.4833 13.8378 11.251 14.4019 11.4174C14.8712 11.5682 15.3607 11.165 15.3055 10.6759Z" fill="#737373" />
										<path d="M10.8105 10.8828C10.9014 11.3678 11.4834 11.6086 11.8905 11.33C12.3812 11.0037 12.269 10.2419 11.7039 10.0729C11.2037 9.91483 10.7028 10.3699 10.8105 10.8828Z" fill="#737373" />
										<path d="M7.70474 10.8829C7.79459 11.3675 8.37793 11.6088 8.78418 11.33C9.27513 11.0043 9.16291 10.242 8.59809 10.0729C8.09805 9.91476 7.59627 10.3699 7.70474 10.8829Z" fill="#737373" />
										<path d="M13.9167 8.07034C14.0065 8.55496 14.5901 8.79594 14.9962 8.51751C15.4868 8.19418 15.374 7.42724 14.8101 7.26037C14.31 7.10236 13.8084 7.55727 13.9167 8.07034Z" fill="#737373" />
										<path d="M10.8105 8.07036C10.9012 8.5547 11.4835 8.79623 11.8899 8.51753C12.3814 8.19213 12.2691 7.42993 11.7043 7.26039C11.2038 7.10238 10.703 7.55691 10.8105 8.07036Z" fill="#737373" />
										<path d="M7.70475 8.07034C7.79461 8.555 8.37794 8.79593 8.78419 8.51751C9.27505 8.19446 9.16213 7.42714 8.59811 7.26037C8.09764 7.10241 7.5968 7.55703 7.70475 8.07034Z" fill="#737373" />
									</svg>Hotels Booking</Link><Link className="btn btn-border-1" href="#">
									<svg width={24} height={18} viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
										<path d="M21.854 9.15913L19.1831 8.70509C19.1166 8.66834 19.0433 8.64256 18.9658 8.62897L16.929 5.96159C16.3602 5.21675 15.5476 4.78517 14.625 4.73258V2.63281C14.625 2.2445 14.3102 1.92969 13.9219 1.92969H11.3907V1.08594C11.3907 0.697625 11.0759 0.382812 10.6875 0.382812H5.10938C4.72106 0.382812 4.40625 0.697625 4.40625 1.08594V4.727H3.72656C2.84536 4.727 2.09475 5.23536 1.7678 6.05366L0.0502031 10.352C0.0170156 10.4349 0 10.5235 0 10.6129V14.852C0 15.2404 0.314812 15.5552 0.703125 15.5552H2.87381C3.13209 16.7331 4.18313 17.6176 5.4375 17.6176C6.69187 17.6176 7.74291 16.7331 8.00119 15.5552H15.9989C16.2571 16.7331 17.3082 17.6176 18.5625 17.6176C19.8169 17.6176 20.868 16.7331 21.1262 15.5552H23.2969C23.6852 15.5552 24 15.2404 24 14.852V11.7008C24 10.4395 23.0975 9.37053 21.854 9.15913ZM15.8113 6.81505L17.1878 8.61767H11.3341V6.14839L14.4329 6.13325C15.0021 6.13325 15.4658 6.36261 15.8113 6.81505ZM6.03614 6.14844H9.92784V8.61767H5.18198L6.03614 6.14844ZM13.2188 3.33594V4.727H11.3906V3.33594H13.2188ZM5.8125 1.78906H9.98438V4.727H5.8125V1.78906ZM5.4375 16.2114C4.76545 16.2114 4.21875 15.6647 4.21875 14.9927C4.21875 14.3206 4.76545 13.7739 5.4375 13.7739C6.10955 13.7739 6.65625 14.3206 6.65625 14.9927C6.65625 15.6647 6.10955 16.2114 5.4375 16.2114ZM18.5625 16.2114C17.8905 16.2114 17.3438 15.6647 17.3438 14.9927C17.3438 14.3206 17.8905 13.7739 18.5625 13.7739C19.2345 13.7739 19.7812 14.3206 19.7812 14.9927C19.7812 15.6647 19.2345 16.2114 18.5625 16.2114ZM21.0476 14.1489C20.6953 13.1143 19.7148 12.3676 18.5625 12.3676C17.4102 12.3676 16.4297 13.1143 16.0774 14.1489H7.92258C7.57031 13.1143 6.58978 12.3676 5.4375 12.3676C4.28522 12.3676 3.30469 13.1143 2.95242 14.1489H1.40625V12.0864H1.45308C1.84139 12.0864 2.1562 11.7716 2.1562 11.3833C2.1562 10.995 1.84139 10.6802 1.45308 10.6802H1.43339L3.07359 6.57552C3.18427 6.29862 3.42834 6.13325 3.72656 6.13325H4.55339L3.5303 9.09097C3.45595 9.30589 3.49017 9.54345 3.62208 9.7287C3.75398 9.91391 3.96736 10.0239 4.1948 10.0239H18.5503L21.6183 10.5455C22.0667 10.6217 22.4085 10.9285 22.5373 11.3364H22.5234C22.1351 11.3364 21.8203 11.6512 21.8203 12.0395C21.8203 12.4278 22.1351 12.7426 22.5234 12.7426H22.5938V14.1489H21.0476Z" fill="#737373" />
									</svg>Rental Car</Link><Link className="btn btn-border-1" href="#">
									<svg width={18} height={24} viewBox="0 0 18 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M17.6719 11.0625V0.703125C17.6719 0.314812 17.3571 0 16.9688 0H1.03125C0.642937 0 0.328125 0.314812 0.328125 0.703125V11.0625C0.328125 11.249 0.402234 11.4278 0.534094 11.5597L0.974391 12L0.534094 12.4403C0.402234 12.5722 0.328125 12.751 0.328125 12.9375V23.2969C0.328125 23.6852 0.642937 24 1.03125 24H16.9688C17.3571 24 17.6719 23.6852 17.6719 23.2969V12.9375C17.6719 12.751 17.5978 12.5722 17.4659 12.4403L17.0256 12L17.466 11.5597C17.5978 11.4278 17.6719 11.249 17.6719 11.0625ZM16.2656 10.7713L15.5341 11.5028C15.2595 11.7774 15.2595 12.2226 15.5341 12.4972L16.2656 13.2287V22.5938H1.73438V13.2287L2.46591 12.4972C2.7405 12.2226 2.7405 11.7774 2.46591 11.5028L1.73438 10.7713V1.40625H16.2656V10.7713Z" fill="#737373" />
										<path d="M4.32536 7.58274L5.43443 8.56618C5.66088 8.76699 5.99041 8.80032 6.25249 8.64901L9.58015 6.72779L9.44716 8.78991C9.42218 9.17743 9.71608 9.51183 10.1036 9.53687C10.4911 9.5619 10.8255 9.26794 10.8506 8.88043L11.0439 5.88277L13.5596 4.4303C13.8959 4.23615 14.0111 3.80612 13.8169 3.46983C13.6227 3.13351 13.1928 3.01833 12.8565 3.21249L10.3407 4.66496L7.64801 3.33357C7.29986 3.16149 6.87822 3.30413 6.70605 3.65222C6.53393 4.00032 6.67661 4.42205 7.02471 4.59418L8.87702 5.51007L5.98825 7.17788L5.25836 6.53063C4.96783 6.27305 4.52346 6.29968 4.26579 6.59021C4.00816 6.88069 4.03483 7.32507 4.32536 7.58274Z" fill="#737373" />
										<path d="M3.84375 15.5625H14.1562C14.5446 15.5625 14.8594 15.2477 14.8594 14.8594C14.8594 14.4711 14.5446 14.1562 14.1562 14.1562H3.84375C3.45544 14.1562 3.14062 14.4711 3.14062 14.8594C3.14062 15.2477 3.45544 15.5625 3.84375 15.5625Z" fill="#737373" />
										<path d="M3.84375 18.375H9C9.38831 18.375 9.70312 18.0602 9.70312 17.6719C9.70312 17.2836 9.38831 16.9688 9 16.9688H3.84375C3.45544 16.9688 3.14062 17.2836 3.14062 17.6719C3.14062 18.0602 3.45544 18.375 3.84375 18.375Z" fill="#737373" />
										<path d="M3.84375 21.1875H9C9.38831 21.1875 9.70312 20.8727 9.70312 20.4844C9.70312 20.0961 9.38831 19.7812 9 19.7812H3.84375C3.45544 19.7812 3.14062 20.0961 3.14062 20.4844C3.14062 20.8727 3.45544 21.1875 3.84375 21.1875Z" fill="#737373" />
										<path d="M4.78125 12.7031H5.71875C6.10706 12.7031 6.42188 12.3883 6.42188 12C6.42188 11.6117 6.10706 11.2969 5.71875 11.2969H4.78125C4.39294 11.2969 4.07812 11.6117 4.07812 12C4.07812 12.3883 4.39294 12.7031 4.78125 12.7031Z" fill="#737373" />
										<path d="M9.46875 11.2969H8.53125C8.14294 11.2969 7.82812 11.6117 7.82812 12C7.82812 12.3883 8.14294 12.7031 8.53125 12.7031H9.46875C9.85706 12.7031 10.1719 12.3883 10.1719 12C10.1719 11.6117 9.85706 11.2969 9.46875 11.2969Z" fill="#737373" />
										<path d="M13.2188 11.2969H12.2812C11.8929 11.2969 11.5781 11.6117 11.5781 12C11.5781 12.3883 11.8929 12.7031 12.2812 12.7031H13.2188C13.6071 12.7031 13.9219 12.3883 13.9219 12C13.9219 11.6117 13.6071 11.2969 13.2188 11.2969Z" fill="#737373" />
										<path d="M12.75 16.9688C11.5869 16.9688 10.6406 17.915 10.6406 19.0781C10.6406 20.2412 11.5869 21.1875 12.75 21.1875C13.9131 21.1875 14.8594 20.2412 14.8594 19.0781C14.8594 17.915 13.9131 16.9688 12.75 16.9688ZM12.75 19.7812C12.3623 19.7812 12.0469 19.4658 12.0469 19.0781C12.0469 18.6904 12.3623 18.375 12.75 18.375C13.1377 18.375 13.4531 18.6904 13.4531 19.0781C13.4531 19.4658 13.1377 19.7812 12.75 19.7812Z" fill="#737373" />
									</svg>Tickets Booking</Link></div>
						</div>
					</section>
					<section className="section-box box-news box-news-blog background-1">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-6 mb-30 wow fadeInLeft">
									<h2 className="neutral-1000">Picked by Editors</h2>
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
					<section className="section-box box-recent-posts background-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-8">
									<h2 className="neutral-1000">Recent Posts</h2>
									<p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
									<div className="box-grid-hotels box-grid-news mt-60 mb-50 wow fadeIn">
										<div className="card-flight card-news background-card">
											<div className="card-image"> <Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><Link href="/blog-detail"><img src="/assets/imgs/page/blog/news.png" alt="Travila" /></Link></div>
											<div className="card-info"> <Link className="btn btn-label-tag background-1" href="#">Adventure</Link>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/blog-detail">The Art of Living: A Stylish Tech Odyssey</Link></div>
												<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
												<div className="card-desc">
													<p className="text-md-medium neutral-500">The dark wood paneling and furnishings, deluxe red-draped four-poster bed, and magnificent black</p>
												</div>
												<div className="card-program">
													<div className="endtime">
														<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
													</div>
												</div>
											</div>
										</div>
										<div className="card-flight card-news background-card">
											<div className="card-image"> <Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><Link href="/blog-detail"><img src="/assets/imgs/page/blog/news2.png" alt="Travila" /></Link></div>
											<div className="card-info"> <Link className="btn btn-label-tag background-1" href="#">Luxury</Link>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/blog-detail">Brushstrokes of Life: A Creative Journey Unveiled</Link></div>
												<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
												<div className="card-desc">
													<p className="text-md-medium neutral-500">The dark wood paneling and furnishings, deluxe red-draped four-poster bed, and magnificent black</p>
												</div>
												<div className="card-program">
													<div className="endtime">
														<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
													</div>
												</div>
											</div>
										</div>
										<div className="card-flight card-news background-card">
											<div className="card-image"> <Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><Link href="/blog-detail"><img src="/assets/imgs/page/blog/news3.png" alt="Travila" /></Link></div>
											<div className="card-info"> <Link className="btn btn-label-tag background-1" href="#">Wanderlust</Link>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/blog-detail">Globetrotting in Style: A Journey Through My Lens</Link></div>
												<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
												<div className="card-desc">
													<p className="text-md-medium neutral-500">The dark wood paneling and furnishings, deluxe red-draped four-poster bed, and magnificent black</p>
												</div>
												<div className="card-program">
													<div className="endtime">
														<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
													</div>
												</div>
											</div>
										</div>
										<div className="card-flight card-news background-card">
											<div className="card-image"> <Link className="wish" href="#">
												<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link><Link href="/blog-detail"><img src="/assets/imgs/page/blog/news4.png" alt="Travila" /></Link></div>
											<div className="card-info"> <Link className="btn btn-label-tag background-1" href="#">Heritage</Link>
												<div className="card-title"> <Link className="heading-6 neutral-1000" href="/blog-detail">Tech Threads and Culinary Canvas: My Lifestyle Palette</Link></div>
												<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
												<div className="card-desc">
													<p className="text-md-medium neutral-500">The dark wood paneling and furnishings, deluxe red-draped four-poster bed, and magnificent black</p>
												</div>
												<div className="card-program">
													<div className="endtime">
														<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
													</div>
												</div>
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
								<div className="col-lg-4">
									<div className="box-search-style-2">
										<form action="#">
											<input type="text" placeholder="Search" />
											<input className="btn-search-submit" type="submit" />
										</form>
									</div>
									<div className="box-sidebar-border">
										<div className="box-head-sidebar">
											<p className="text-xl-bold neutral-1000">Trending Now</p>
										</div>
										<div className="box-content-sidebar">
											<ul className="list-posts">
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="/blog-detail"><img src="/assets/imgs/page/blog/trending.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="/blog-detail"><img src="/assets/imgs/page/blog/trending2.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="/blog-detail"><img src="/assets/imgs/page/blog/trending3.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="/blog-detail"><img src="/assets/imgs/page/blog/trending4.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="/blog-detail"><img src="/assets/imgs/page/blog/trending5.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="box-sidebar-border">
										<div className="box-head-sidebar">
											<p className="text-xl-bold neutral-1000">Gallery</p>
										</div>
										<div className="box-content-sidebar">
											<ul className="list-photo-col-3">
												<li> <Link href="#"><img src="/assets/imgs/page/blog/cat.png" alt="Travila" /></Link></li>
												<li> <Link href="#"><img src="/assets/imgs/page/blog/cat2.png" alt="Travila" /></Link></li>
												<li> <Link href="#"><img src="/assets/imgs/page/blog/cat3.png" alt="Travila" /></Link></li>
												<li> <Link href="#"><img src="/assets/imgs/page/blog/cat4.png" alt="Travila" /></Link></li>
												<li> <Link href="#"><img src="/assets/imgs/page/blog/cat5.png" alt="Travila" /></Link></li>
												<li> <Link href="#"><img src="/assets/imgs/page/blog/cat6.png" alt="Travila" /></Link></li>
												<li> <Link href="#"><img src="/assets/imgs/page/blog/cat7.png" alt="Travila" /></Link></li>
												<li> <Link href="#"><img src="/assets/imgs/page/blog/cat8.png" alt="Travila" /></Link></li>
												<li> <Link href="#"><img src="/assets/imgs/page/blog/cat.png" alt="Travila" /></Link></li>
											</ul>
										</div>
									</div>
									<div className="box-sidebar-none-border box-banner-ads-recent">
										<p className="text-md-bold mb-5">Save your time!</p>
										<h6>Explore, Book, Soar: Your Journey Awaits!</h6><Link className="btn btn-brand-secondary" href="#">View More
											<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
												<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> </path>
											</svg></Link>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-subscriber background-body">
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