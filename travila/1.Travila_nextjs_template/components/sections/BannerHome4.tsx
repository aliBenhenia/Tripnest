import Link from "next/link"
import VideoPopup from '../elements/VideoPopup'
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'

export default function BannerHome4() {
	return (
		<>

			<section className="section-box box-banner-home2 box-banner-home5-search background-body">
				<div className="box-banner-home5 background-3">
					<div className="container">
						<div className="block-banner-home5">
							<div className="row align-items-center">
								<div className="col-xl-6 col-lg-7 wow fadeInUp">
									<h1 className="mt-20 mb-35 neutral-1000"> <span>Begin Your </span><br className="d-none d-lg-block" />Fantastic Travel Experience <span>Here</span></h1>
									<h6 className="heading-6-medium neutral-500 mb-30">Discover handcrafted travel experiences
										that blend adventure and luxury, creating memories that last a lifetime</h6>
									<div className="box-buttons-banner"> <Link className="btn btn-brand-secondary" href="#">Discover
										Now</Link>
										<VideoPopup vdocls="btn btn-how-work popup-youtube" style3 />
									</div>
								</div>
							</div>
							<div className="box-image-banner-home5 wow fadeInUp"><img src="/assets/imgs/page/homepage5/banner.png" alt="Travila" /></div>
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
