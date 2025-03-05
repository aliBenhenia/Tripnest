import Link from "next/link"
import SearchFilterBottom from '@/components/elements/SearchFilterBottom'

export default function BannerHome8() {
	return (
		<>

			<section className="box-section block-banner-9 box-banner-home5-search background-body">
				<div className="block-banner-9-inner">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 wow fadeInUp"> <span className="btn btn-brand-secondary"> <img className="mr-10" src="/assets/imgs/page/homepage9/real.svg" alt="Travile" />Resort Real Estate</span>
								<h1 className="neutral-1000 mt-15 mb-15"> <span>Discover a </span>Place <span>You’ll </span>Love
									<span>To Live</span></h1>
								<h6 className="neutral-500">Buy and sell properties in a fastest way</h6>
								<div className="box-numbers-home9">
									<div className="list-numbers wow fadeInUp">
										<div className="item-number">
											<h3 className="neutral-1000">145k+</h3>
											<p className="text-lg-bold neutral-500">Real Estate</p>
										</div>
										<div className="item-number">
											<h3 className="neutral-1000">20+</h3>
											<p className="text-lg-bold neutral-500">Years Experience</p>
										</div>
										<div className="item-number">
											<h3 className="neutral-1000">168K</h3>
											<p className="text-lg-bold neutral-500">Happy Customers</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="image-banner-bottom"> <img src="/assets/imgs/page/homepage9/banner-sm.png" alt="Travila" />
					</div>
					<div className="image-banner-top-left"> <img src="/assets/imgs/page/homepage9/banner-sm2.png" alt="Travila" />
					</div>
					<div className="block-right-banner" style={{ backgroundImage: 'url(assets/imgs/page/homepage9/banner.png)' }}>
						<div className="item-support border-1 background-body"> <img className="light-mode" src="/assets/imgs/page/homepage9/support.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage9/support-dark.png" alt="Travila" />
							<div className="text-support">
								<p className="text-sm-bold neutral-1000">Customer Service</p>
								<h6 className="neutral-1000">+01 235 368</h6>
							</div>
						</div>
						<div className="item-people-used">
							<div className="box-authors-partner background-body wow fadeInUp">
								<div className="authors-partner-left"><img src="/assets/imgs/page/homepage5/author.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/author2.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/author3.png" alt="Travila" /><span className="item-author">
									<svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
										<rect x="0.5" y="7.448" width={17} height="2.31818" fill="black" />
										<rect x="7.84082" y="17.1072" width={17} height="2.31818" transform="rotate(-90 7.84082 17.1072)" fill="black" />
									</svg></span></div>
								<div className="authors-partner-right">
									<p className="text-sm neutral-1000">1684 people used <strong>Travila </strong>in the last
										<strong>24 hours</strong></p>
								</div>
							</div>
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
