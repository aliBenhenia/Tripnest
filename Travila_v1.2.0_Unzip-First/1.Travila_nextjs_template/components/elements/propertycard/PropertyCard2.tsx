import Link from 'next/link'

export default function PropertyCard2({ property }: any) {
	return (
		<>
			<div className="card-journey-small card-grid-real background-card">
				<div className="card-image"> <Link className="wish" href="#">
					<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
					</svg></Link><img src={`/assets/imgs/page/homepage9/${property.image}`} alt="Travila" /></div>
				<div className="card-info">
					<div className="card-rating">
						<div className="card-left"> </div>
						<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
					</div>
					<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/property-detail">{property.name}</Link></div>
					<div className="card-program">
						<div className="card-location">
							<p className="text-location text-sm-medium neutral-500">New South Wales, Australia</p>
						</div>
						<div className="card-facilities">
							<div className="item-facilities">
								<p className="room text-md-medium neutral-1000">4 rooms</p>
							</div>
							<div className="item-facilities">
								<p className="size text-md-medium neutral-1000">168 m2</p>
							</div>
							<div className="item-facilities">
								<p className="bed text-md-medium neutral-1000">5 Beds</p>
							</div>
							<div className="item-facilities">
								<p className="bathroom text-md-medium neutral-1000">2 Bathrooms</p>
							</div>
						</div>
						<div className="endtime">
							<div className="card-price">
								<h6 className="heading-6 neutral-1000">${property.price}</h6>
								<p className="text-md-medium neutral-500">/ night</p>
							</div>
							<div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
