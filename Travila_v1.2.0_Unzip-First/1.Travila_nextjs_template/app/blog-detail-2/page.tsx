'use client'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import { swiperGroup1, swiperGroupAnimate } from "@/util/swiperOption"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function BlogDetail2() {

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
								<li> <Link href="/destination">Blog</Link><span className="arrow-right">
									<svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg></span></li>
								<li> <span className="text-breadcrumb">Globetrotting in Style: A Journey Through My Lens</span></li>
							</ul>
						</div>
					</section>
					<section className="section-box box-banner-blog-detail-2 background-body">
						<div className="container">
							<div className="box-banner-single-blog">
								<div className="box-button-top-right"> <Link className="btn btn-label-tag-lg background-2" href="#">Wanderlust</Link><Link className="btn btn-label-tag-lg background-7" href="#">Adventure</Link></div>
								<div className="box-swiper">
									<div className="swiper-container swiper-group-1">
										<Swiper {...swiperGroup1}>
											<SwiperSlide><img src="/assets/imgs/page/blog/banner-detail2.png" alt="Travile" /></SwiperSlide>
											<SwiperSlide><img src="/assets/imgs/page/blog/banner-detail2.png" alt="Travile" /></SwiperSlide>
										</Swiper>
									</div>
									<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-1">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
											<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-1">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
											<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="box-section box-content-blog-detail-2 background-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mb-35">
									<div className="box-content-detail-blog">
										<div className="box-content-info-detail mt-0 pt-0">
											<div className="head-blog-detail">
												<h4 className="neutral-1000 mb-25">Wanderlust Chronicles: Unveiling Hidden Havens and Forgotten Pathways</h4>
												<div className="meta-post">
													<div className="meta-user justify-content-start">
														<div className="box-author-small"><img src="/assets/imgs/page/homepage1/avatar.png" alt="Travilla" />
															<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
														</div>
														<div className="post-meta-date">
															<div className="post-date neutral-1000">18 Sep 2024</div>
															<div className="post-time neutral-1000">6 mins</div>
															<div className="post-comment neutral-1000">38 comments</div>
														</div>
													</div>
												</div>
											</div>
											<div className="content-detail-post">
												<p className="neutral-1000">In a world filled with wonders waiting to be discovered, the allure of  the road less traveled beckons to the adventurous soul. Join me on a  journey beyond the beaten path, where each destination promises unique  experiences and unforgettable memories. From hidden paradises to  cultural gems, let's embark on an odyssey of exploration and discovery.</p>
											</div>
											<div className="box-image-video"> <img className="bdrd8" src="/assets/imgs/page/blog/banner-detail3.png" alt="Travilla" />
												<VideoPopup vdocls="btn-play-video popup-youtube" />
											</div>
											<div className="content-detail-post">
												<p>In a world filled with wonders waiting to be discovered, the allure of  the road less traveled beckons to the adventurous soul. Join me on a  journey beyond the beaten path, where each destination promises unique  experiences and unforgettable memories. From hidden paradises to  cultural gems, let's embark on an odyssey of exploration and discovery.</p>
												<h6>1. Embracing Serenity in the Scottish Highlands:</h6>
												<p>Our adventure begins amidst the rugged beauty of the Scottish Highlands,  where mist-covered mountains and shimmering lochs create a landscape  straight out of a fairytale. Far from the hustle and bustle of city  life, we'll wander along winding trails, breathing in the crisp Highland  air and immersing ourselves in the tranquility of nature. From the  ancient ruins of castles to the timeless charm of quaint villages, every  corner of this enchanting region holds the promise of adventure.</p>
												<h6>2. Chasing Waterfalls in the Heart of Costa Rica:</h6>
												<p>Next, we'll journey to the lush rainforests of Costa Rica, a land of  unparalleled biodiversity and natural splendor. Here, hidden within the  emerald green canopy, lie some of the world's most breathtaking  waterfalls. We'll trek through dense jungle trails, listening to the  symphony of exotic birdsong and the gentle rush of cascading water as we  discover hidden oases tucked away from the beaten path. With each  plunge into crystal-clear pools beneath thundering falls, we'll find  renewal and connection with the raw power of nature.</p>
												<h6>3. Uncovering Ancient Mysteries in the Temples of Myanmar:</h6>
												<p>Our quest for adventure takes us to the enchanting land of Myanmar,  where ancient temples and pagodas whisper tales of bygone eras. From the  sprawling plains of Bagan to the serene shores of Inle Lake, we'll  journey through a landscape steeped in spirituality and tradition.  Amidst the golden spires and intricate carvings of centuries-old  monuments, we'll uncover the timeless beauty of Burmese culture and the  enduring legacy of a land shrouded in mystery.</p>
												<h6>4. Sailing into the Unknown in the Galápagos Islands:</h6>
												<p>Our voyage of discovery leads us to the remote shores of the Galápagos  Islands, a haven of biodiversity teeming with life found nowhere else on  Earth. Setting sail on azure waters, we'll explore pristine beaches,  volcanic landscapes, and bustling seabird colonies. Snorkeling alongside  graceful sea turtles and playful sea lions, we'll witness the delicate  balance of life in one of the world's most pristine marine ecosystems,  leaving us humbled by the wonders of the natural world.</p>
												<h6>5. Lost in Time: Exploring the Medieval Villages of Transylvania, Romania:</h6>
												<p>Our final destination transports us to the storied land of Transylvania,  where medieval castles and fortified churches dot the landscape like  something out of a Gothic fairy tale. Venturing off the beaten path,  we'll wander through cobblestone streets and labyrinthine alleyways,  immersing ourselves in the rich history and folklore of this captivating  region. From the haunting beauty of Bran Castle to the picturesque  charm of Sighisoara, every corner of Transylvania holds a story waiting  to be discovered.</p>
												<div className="footer-post-tags">
													<div className="box-tags">  <Link className="btn btn-tag" href="#">Travel</Link><Link className="btn btn-tag" href="#">Temple tours</Link><Link className="btn btn-tag" href="#">Ancient</Link></div>
													<div className="box-share">
														<div className="d-flex align-items-center justify-content-center justify-content-md-end box-socials-footer-cover">
															<p className="text-lg-bold neutral-1000 d-inline-block mr-10 mb-0">Share this:</p>
															<div className="box-socials-footer d-inline-block"><Link className="icon-socials icon-instagram" href="#">
																<svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																	<path d="M13.4915 1.6665H6.50817C3.47484 1.6665 1.6665 3.47484 1.6665 6.50817V13.4832C1.6665 16.5248 3.47484 18.3332 6.50817 18.3332H13.4832C16.5165 18.3332 18.3248 16.5248 18.3248 13.4915V6.50817C18.3332 3.47484 16.5248 1.6665 13.4915 1.6665ZM9.99984 13.2332C8.2165 13.2332 6.7665 11.7832 6.7665 9.99984C6.7665 8.2165 8.2165 6.7665 9.99984 6.7665C11.7832 6.7665 13.2332 8.2165 13.2332 9.99984C13.2332 11.7832 11.7832 13.2332 9.99984 13.2332ZM14.9332 5.73317C14.8915 5.83317 14.8332 5.92484 14.7582 6.00817C14.6748 6.08317 14.5832 6.1415 14.4832 6.18317C14.3832 6.22484 14.2748 6.24984 14.1665 6.24984C13.9415 6.24984 13.7332 6.1665 13.5748 6.00817C13.4998 5.92484 13.4415 5.83317 13.3998 5.73317C13.3582 5.63317 13.3332 5.52484 13.3332 5.4165C13.3332 5.30817 13.3582 5.19984 13.3998 5.09984C13.4415 4.9915 13.4998 4.90817 13.5748 4.82484C13.7665 4.63317 14.0582 4.5415 14.3248 4.59984C14.3832 4.60817 14.4332 4.62484 14.4832 4.64984C14.5332 4.6665 14.5832 4.6915 14.6332 4.72484C14.6748 4.74984 14.7165 4.7915 14.7582 4.82484C14.8332 4.90817 14.8915 4.9915 14.9332 5.09984C14.9748 5.19984 14.9998 5.30817 14.9998 5.4165C14.9998 5.52484 14.9748 5.63317 14.9332 5.73317Z" />
																</svg></Link><Link className="icon-socials icon-facebook" href="#">
																	<svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																		<path d="M18.3334 13.4915C18.3334 16.5248 16.5251 18.3332 13.4917 18.3332H12.5001C12.0417 18.3332 11.6667 17.9582 11.6667 17.4998V12.6915C11.6667 12.4665 11.8501 12.2748 12.0751 12.2748L13.5417 12.2498C13.6584 12.2415 13.7584 12.1582 13.7834 12.0415L14.0751 10.4498C14.1001 10.2998 13.9834 10.1582 13.8251 10.1582L12.0501 10.1832C11.8167 10.1832 11.6334 9.99985 11.6251 9.77485L11.5918 7.73317C11.5918 7.59984 11.7001 7.48318 11.8417 7.48318L13.8417 7.44984C13.9834 7.44984 14.0918 7.34152 14.0918 7.19985L14.0584 5.19983C14.0584 5.05816 13.9501 4.94984 13.8084 4.94984L11.5584 4.98318C10.1751 5.00818 9.07509 6.1415 9.10009 7.52484L9.14175 9.8165C9.15008 10.0498 8.96676 10.2332 8.73342 10.2415L7.73341 10.2582C7.59175 10.2582 7.48342 10.3665 7.48342 10.5082L7.50842 12.0915C7.50842 12.2332 7.61675 12.3415 7.75841 12.3415L8.75842 12.3248C8.99176 12.3248 9.17507 12.5082 9.18341 12.7332L9.2584 17.4832C9.26674 17.9498 8.89174 18.3332 8.42507 18.3332H6.50841C3.47508 18.3332 1.66675 16.5248 1.66675 13.4832V6.50817C1.66675 3.47484 3.47508 1.6665 6.50841 1.6665H13.4917C16.5251 1.6665 18.3334 3.47484 18.3334 6.50817V13.4915V13.4915Z" />
																	</svg></Link><Link className="icon-socials icon-twitter" href="#">
																	<svg width={21} height={20} viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.2845 8.46864L19.5698 0H17.8434L11.5176 7.3532L6.4651 0H0.637695L8.278 11.1193L0.637695 20H2.36419L9.04447 12.2348L14.3802 20H20.2076L12.284 8.46864H12.2845ZM9.9198 11.2173L9.14568 10.1101L2.98627 1.29967H5.63806L10.6088 8.40994L11.3829 9.51718L17.8442 18.7594H15.1925L9.9198 11.2177V11.2173Z" />
																	</svg></Link><Link className="icon-socials icon-be" href="#">
																	<svg width={21} height={15} viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg">
																		<path d="M8.82393 10.736L13.9225 7.78881L8.82393 4.84165V10.736ZM20.1803 3.04389C20.308 3.50561 20.3964 4.12451 20.4554 4.91042C20.5242 5.69633 20.5536 6.37418 20.5536 6.96361L20.6126 7.78881C20.6126 9.94024 20.4554 11.5219 20.1803 12.5337C19.9347 13.4179 19.3649 13.9877 18.4808 14.2333C18.0191 14.361 17.1742 14.4494 15.8775 14.5083C14.6004 14.5771 13.4313 14.6066 12.3507 14.6066L10.7887 14.6655C6.67251 14.6655 4.10848 14.5083 3.09662 14.2333C2.21247 13.9877 1.64269 13.4179 1.39709 12.5337C1.26938 12.072 1.18097 11.4531 1.12203 10.6672C1.05326 9.8813 1.02379 9.20345 1.02379 8.61402L0.964844 7.78881C0.964844 5.63739 1.12203 4.05575 1.39709 3.04389C1.64269 2.15974 2.21247 1.58996 3.09662 1.34436C3.55834 1.21665 4.4032 1.12823 5.69995 1.06929C6.97705 1.00052 8.14609 0.971052 9.22671 0.971052L10.7887 0.912109C14.9049 0.912109 17.4689 1.06929 18.4808 1.34436C19.3649 1.58996 19.9347 2.15974 20.1803 3.04389Z" />
																	</svg></Link></div>
														</div>
													</div>
												</div>
												<div className="box-leave-comment background-100">
													<div className="box-form-reviews">
														<h5 className="neutral-1000 mb-25">Leave a Comment</h5>
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
																<button className="btn btn-black-lg-square">Submit Comment
																	<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
																		<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
																	</svg>
																</button >
															</div>
														</div>
													</div>
												</div>
												<div className="box-list-comment background-card">
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
																<div className="author-review"> <img src="/assets/imgs/page/blog/avatar.png" alt="Travila" />
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
																<div className="author-review"> <img src="/assets/imgs/page/blog/avatar2.png" alt="Travila" />
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
									</div>
								</div>
								<div className="col-lg-4 mb-35">
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
														<div className="card-image"> <Link href="/blog-detail-2"><img src="/assets/imgs/page/blog/trending.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail-2">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="/blog-detail-2"><img src="/assets/imgs/page/blog/trending2.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail-2">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="/blog-detail-2"><img src="/assets/imgs/page/blog/trending3.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail-2">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="/blog-detail-2"><img src="/assets/imgs/page/blog/trending4.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail-2">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="/blog-detail-2"><img src="/assets/imgs/page/blog/trending5.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-md-bold neutral-1000" href="/blog-detail-2">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
															<p className="text-sm-medium date-post neutral-500">18 Sep 2024</p>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="box-subscriber-blog-3 mb-35">
										<p className="text-md-bold neutral-1000">Subscribe to see secret deals prices drop the moment you sign up!</p>
										<div className="footer-type-3">
											<div className="d-flex align-items-center">
												<form className="form-newsletter" action="#">
													<input className="form-control" type="text" placeholder="Enter your email" />
													<input className="btn btn-brand-secondary" type="submit" defaultValue="Subscribe" />
												</form>
											</div>
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
					<section className="section-box box-news box-news-blog-single background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-9 mb-30 wow fadeInUp">
									<h2 className="neutral-1000">You might be interested</h2>
									<p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
								</div>
								<div className="col-md-3 mb-30 wow fadeInUp">
									<div className="box-button-slider box-button-slider-team text-end">
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
							<div className="box-list-news">
								<div className="box-swiper mt-30">
									<div className="swiper-container swiper-group-animate swiper-group-journey">
										<Swiper {...swiperGroupAnimate}>
											<SwiperSlide>
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<label className="label">Cultural</label><Link className="wish" href="#">
															<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
																<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
															</svg></Link><img src="/assets/imgs/page/homepage1/news.png" alt="Travila" />
													</div>
													<div className="card-info">
														<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail-2">Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
																	<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
																</div>
																<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail-2">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<label className="label">Travel</label><Link className="wish" href="#">
															<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
																<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
															</svg></Link><img src="/assets/imgs/page/homepage1/news2.png" alt="Travila" />
													</div>
													<div className="card-info">
														<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail-2">Top 10 Travel Hacks for Budget-Conscious Adventurers</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
																	<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
																</div>
																<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail-2">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<label className="label">Discovery</label><Link className="wish" href="#">
															<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
																<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
															</svg></Link><img src="/assets/imgs/page/homepage1/news3.png" alt="Travila" />
													</div>
													<div className="card-info">
														<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail-2">Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
																	<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
																</div>
																<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail-2">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</Swiper>
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