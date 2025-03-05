import Link from "next/link"
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'

export default function BannerHome7() {
	return (
		<>

			<section className="section-box box-banner-home2 box-banner-home5-search box-banner-home8-search background-body">
				<div className="box-banner-home8">
					<div className="container">
						<div className="block-banner-home8">
							<div className="row align-items-center">
								<div className="col-xl-6 col-lg-7 wow fadeInUp"><span className="btn btn-brand-secondary"> <img className="mr-10" src="/assets/imgs/page/homepage4/earth.svg" alt="Travile" />Explore
									the World</span>
									<h2 className="mt-20 mb-15 neutral-1000">Unveil the Beauty<br className="d-none d-lg-block" />of
										the World Every Day</h2>
									<h6 className="heading-6-medium neutral-500 mb-30">Travel Without Limits Browse, Book,
										Explore</h6>
									<div className="download-apps"> <Link href="#"><img src="/assets/imgs/template/googleplay.png" alt="Travila" /></Link><Link href="#"><img src="/assets/imgs/template/appstore.png" alt="Travila" /></Link></div>
								</div>
							</div>
							<div className="box-image-banner-home8"><img src="/assets/imgs/page/homepage8/car.png" alt="Travila" /><span className="dot-banner"><img src="/assets/imgs/page/homepage8/dot.png" alt="Travila" /></span></div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="box-search-advance background-card wow fadeInUp">
						<div className="box-top-search">
							<div className="left-top-search"><Link className="category-link btn-click active" href="#">Tours</Link><Link className="category-link btn-click" href="#">Hotels</Link><Link className="category-link btn-click" href="#">Tickets</Link><Link className="category-link btn-click" href="#">Rental</Link><Link className="category-link btn-click" href="#">Activities</Link></div>
							<div className="right-top-search"><Link className="text-sm-medium need-some-help" href="/help-center">Need some help?</Link></div>
						</div>
						<SearchFilterBottom />
					</div>
				</div>
			</section>
		</>
	)
}
