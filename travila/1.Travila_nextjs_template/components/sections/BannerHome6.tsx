'use client'
import { swiperGroup1 } from "@/util/swiperOption"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'

export default function BannerHome6() {
	return (
		<>

			<section className="section-box box-banner-home7 background-body">
				<div className="container" />
				<div className="container-banner-home7">
					<div className="box-swiper">
						<div className="swiper-container swiper-group-1">
							<Swiper {...swiperGroup1}>
								<SwiperSlide>
									<div className="item-banner-slide" style={{ backgroundImage: 'url(assets/imgs/page/homepage7/banner.png)' }}>
										<div className="container"> <span className="btn btn-brand-secondary wow fadeInUp"> <img className="mr-10" src="/assets/imgs/page/homepage7/hotel.svg" alt="Travile" />Great Hotel System</span>
											<h1 className="mt-20 mb-20 color-white">Find Your Next Stay</h1>
											<h5 className="color-white">Search deals on hotels, homes, and much more...</h5>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="item-banner-slide" style={{ backgroundImage: 'url(assets/imgs/page/homepage7/banner-2.png)' }}>
										<div className="container"> <span className="btn btn-brand-secondary wow fadeInUp"> <img className="mr-10" src="/assets/imgs/page/homepage7/hotel.svg" alt="Travile" />Your Best Stay </span>
											<h1 className="mt-20 mb-20 color-white">Holiday Special Price</h1>
											<h5 className="color-white">Book now your next stay and get special price</h5>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
							<div className="swiper-pagination swiper-pagination-group-1 swiper-pagination-style-2" />
						</div>
					</div>
				</div>
				<div className="container-search-advance">
					<div className="container">
						<div className="box-search-advance background-card wow fadeInUp">
							<div className="box-top-search">
								<div className="left-top-search"><Link className="category-link btn-click active" href="#">Tours</Link><Link className="category-link btn-click" href="#">Hotels</Link><Link className="category-link btn-click" href="#">Tickets</Link><Link className="category-link btn-click" href="#">Rental</Link><Link className="category-link btn-click" href="#">Activities</Link></div>
								<div className="right-top-search"><Link className="text-sm-medium need-some-help" href="/help-center">Need some help?</Link></div>
							</div>
							<SearchFilterBottom />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
