import SearchFilterBottom from '@/components/elements/SearchFilterBottom'
import Link from "next/link"

export default function BannerHome3() {
	return (
		<>

			<section className="section-box box-banner-home4 background-body">
				<div className="banner-marker wow fadeInUp"> <img className="mr-10 light-mode" src="/assets/imgs/page/homepage4/marker.svg" alt="Travile" /><img className="mr-10 dark-mode" src="/assets/imgs/page/homepage4/marker.svg" alt="Travile" /></div>
				<div className="banner-plus wow fadeInUp"> <img className="mr-10 light-mode" src="/assets/imgs/page/homepage4/plus.svg" alt="Travile" /><img className="mr-10 dark-mode" src="/assets/imgs/page/homepage4/plus-dark.svg" alt="Travile" /></div>
				<div className="banner-fly wow fadeInUp"><img className="mr-10 light-mode" src="/assets/imgs/page/homepage4/fly.svg" alt="Travile" /><img className="mr-10 dark-mode" src="/assets/imgs/page/homepage4/fly-dark.svg" alt="Travile" /></div>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-8 wow fadeInUp"><span className="btn btn-brand-secondary"> <img className="mr-10" src="/assets/imgs/page/homepage4/earth.svg" alt="Travile" />Explore the World</span>
							<h2 className="mt-20 mb-15 neutral-1000">Unveil the Beauty<br className="d-none d-lg-block" />of the World
								Every Day</h2>
							<h6 className="heading-6-medium neutral-500 mb-30">Travel Without Limits Browse, Book, Explore</h6>
							<div className="box-search-advance box-search-advance-3-col background-card">
								<div className="box-top-search">
									<div className="left-top-search"><Link className="category-link btn-click active" href="#">Tours</Link><Link className="category-link btn-click" href="#">Hotels</Link><Link className="category-link btn-click" href="#">Tickets</Link><Link className="category-link btn-click" href="#">Rental</Link><Link className="category-link btn-click" href="#">Activities</Link></div>
									<div className="right-top-search"><Link className="text-sm-medium need-some-help" href="/help-center">Need some help?</Link></div>
								</div>
								<SearchFilterBottom miniField/>
							</div>
						</div>
					</div>
					<div className="box-image-banner-home4"><img src="/assets/imgs/page/homepage4/banner.png" alt="Travila" />
						<div className="shape-rate"> <img className="light-mode" src="/assets/imgs/page/homepage4/review.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage4/review-dark.png" alt="Travila" /></div>
						<div className="shape-phone"><img className="light-mode" src="/assets/imgs/page/homepage4/hotline.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage4/hotline-dark.png" alt="Travila" /></div>
					</div>
				</div>
			</section>
		</>
	)
}
