import Link from "next/link"
import BannerMainSlider from '../slider/BannerMainSlider'

import SearchFilterBottom from '@/components/elements/SearchFilterBottom'

export default function BannerHome1() {
	return (
		<>

			<section className="section-box box-banner-home2 background-body">
				<div className="container-top">
					<div className="container" />
				</div>
				<div className="container-banner">
					<BannerMainSlider />
				</div>
				<div className="container">
					<div className="box-search-advance background-card">
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
