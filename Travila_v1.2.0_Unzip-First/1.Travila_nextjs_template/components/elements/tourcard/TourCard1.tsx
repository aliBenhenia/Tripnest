import Link from 'next/link'

export default function TourCard1({ tour }: any) {
	return (
		<>
			<div className="card-journey-small background-card">
				<div className="card-image"> <Link className="label" href="#">Top Rated</Link>
				<img src={`/assets/imgs/page/tour/${tour?.image}`} alt="Travila" />
				</div>
				<div className="card-info background-card">
					<div className="card-rating">
						<div className="card-left"> </div>
						<div className="card-right"> <span className="rating">{tour.rating} <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
					</div>
					<div className="card-title">
						<Link className="text-lg-bold neutral-1000" href="/tour-detail">{tour.name} </Link></div>
					<div className="card-program">
						<div className="card-duration-tour">
							<p className="icon-duration text-sm-medium neutral-500">{tour.duration} days, {tour.duration - 1} nights</p>
							<p className="icon-guest text-sm-medium neutral-500">{tour.groupSize} guest</p>
						</div>
						<div className="endtime">
							<div className="card-price">
								<h6 className="heading-6 neutral-1000">${tour.price}</h6>
							</div>
							<div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
