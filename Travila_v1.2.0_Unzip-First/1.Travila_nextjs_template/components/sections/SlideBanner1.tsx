'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	slidesPerView: 3,
	slidesPerGroup: 1,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next-3",
		prevEl: ".swiper-button-prev-3"
	},
	autoplay: {
		delay: 10000
	},
	breakpoints: {
		1199: {
			slidesPerView: 3
		},
		800: {
			slidesPerView: 2
		},
		400: {
			slidesPerView: 1
		},
		250: {
			slidesPerView: 1
		}
	}
}


export default function SlideBanner1() {
	return (
		<>

			<section className="section-box box-slide-banner background-body">
				<div className="container">
					<div className="box-swiper mt-30">
						<div className="swiper-container swiper-group-3 swiper-group-journey">
							<Swiper {...swiperOptions} className="swiper-wrapper">
								<SwiperSlide>
									<div className="card-banner-slide wow fadeInUp">
										<div className="card-image"> </div>
										<div className="card-info">
											<h6>We Make Every<br />Trips Special</h6>
											<div className="box-button"><a className="btn btn-brand-secondary" href="#">View More
												<svg width="10" height="11" viewBox="0 0 10 11" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M5 9.875L9.375 5.5L5 1.125M9.375 5.5L0.625 5.5" stroke=""
														strokeWidth="0.9375" strokeLinecap="round"
														strokeLinejoin="round"></path>
												</svg></a></div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-banner-slide card-banner-slide-2 wow fadeInUp">
										<div className="card-image" style={{ backgroundImage: 'url(assets/imgs/page/homepage4/bg-slider2.png)' }} />
										<div className="card-info">
											<p className="text-md-bold">Limited Offers</p>
											<h6>Buy 1, Get 1 Free<br />Attractions</h6>
											<div className="box-button"><a className="btn btn-brand-secondary" href="#">View More
												<svg width="10" height="11" viewBox="0 0 10 11" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M5 9.875L9.375 5.5L5 1.125M9.375 5.5L0.625 5.5" stroke=""
														strokeWidth="0.9375" strokeLinecap="round"
														strokeLinejoin="round"></path>
												</svg></a></div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-banner-slide card-banner-slide-3 wow fadeInUp">
										<div className="card-image" style={{ backgroundImage: 'url(assets/imgs/page/homepage4/bg-slider3.png)' }} />
										<div className="card-info">
											<div className="box-title-top">
												<p className="text-md-bold">Limited Offers</p>
											</div>
											<div className="box-title-middle">
												<h6>Buy 1, Get 1 Free</h6>
												<h6>Attractions</h6>
											</div>
											<div className="box-button"><a className="btn btn-brand-secondary" href="#">View More
												<svg width="10" height="11" viewBox="0 0 10 11" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M5 9.875L9.375 5.5L5 1.125M9.375 5.5L0.625 5.5" stroke=""
														strokeWidth="0.9375" strokeLinecap="round"
														strokeLinejoin="round"></path>
												</svg></a></div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-banner-slide wow fadeInUp">
										<div className="card-image"> </div>
										<div className="card-info">
											<h6>We Make Every<br />Trips Special</h6>
											<div className="box-button"><a className="btn btn-brand-secondary" href="#">View More
												<svg width="10" height="11" viewBox="0 0 10 11" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M5 9.875L9.375 5.5L5 1.125M9.375 5.5L0.625 5.5" stroke=""
														strokeWidth="0.9375" strokeLinecap="round"
														strokeLinejoin="round"></path>
												</svg></a></div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-banner-slide card-banner-slide-2 wow fadeInUp">
										<div className="card-image" style={{ backgroundImage: 'url(assets/imgs/page/homepage4/bg-slider2.png)' }} />
										<div className="card-info">
											<p className="text-md-bold">Limited Offers</p>
											<h6>Buy 1, Get 1 Free<br />Attractions</h6>
											<div className="box-button"><a className="btn btn-brand-secondary" href="#">View More
												<svg width="10" height="11" viewBox="0 0 10 11" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M5 9.875L9.375 5.5L5 1.125M9.375 5.5L0.625 5.5" stroke=""
														strokeWidth="0.9375" strokeLinecap="round"
														strokeLinejoin="round"></path>
												</svg></a></div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-banner-slide card-banner-slide-3 wow fadeInUp">
										<div className="card-image" style={{ backgroundImage: 'url(assets/imgs/page/homepage4/bg-slider3.png)' }} />
										<div className="card-info">
											<div className="box-title-top">
												<p className="text-md-bold">Limited Offers</p>
											</div>
											<div className="box-title-middle">
												<h6>Buy 1, Get 1 Free</h6>
												<h6>Attractions</h6>
											</div>
											<div className="box-button"><a className="btn btn-brand-secondary" href="#">View More
												<svg width="10" height="11" viewBox="0 0 10 11" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M5 9.875L9.375 5.5L5 1.125M9.375 5.5L0.625 5.5" stroke=""
														strokeWidth="0.9375" strokeLinecap="round"
														strokeLinejoin="round"></path>
												</svg></a></div>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>

						</div>
						<div className="box-button-slider box-button-slider-team">
							<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-3">
								<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
									<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-3">
								<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
									<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
