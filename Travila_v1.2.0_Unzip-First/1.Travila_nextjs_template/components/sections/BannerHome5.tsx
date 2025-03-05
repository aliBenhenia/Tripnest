import Link from "next/link"
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'

export default function BannerHome5() {
	return (
		<>

			<section className="section-box box-banner-home6 box-banner-home5-search background-body">
				<div className="block-banner-home6">
					<div className="container">
						<div className="text-center wow fadeInUp">
							<div className="d-flex justify-content-center"><span className="btn btn-brand-secondary"> <img className="mr-10" src="/assets/imgs/page/homepage4/earth.svg" alt="Travile" />Explore the
								World</span></div>
							<h2 className="mt-20 mb-20 color-white">Your Gateway to Extraordinary Adventures</h2>
							<h6 className="heading-6-medium color-white mb-30">Pack your bags and let Travila redefine your
								travel experience. Where<br className="d-none d-md-block" />every journey is a story waiting to be
								told</h6>
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
