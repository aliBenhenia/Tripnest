import Link from 'next/link'

export default function TicketCard1({ ticket }: any) {
	return (
		<>
			<div className="item-flight background-card border-1">
				<div className="flight-route flight-route-type-2">
					<div className="flight-route-1">
						<div className="flight-name"> <img src="/assets/imgs/page/homepage10/logo1.png" alt="Travila" />
							<div className="flight-info">
								<p className="text-md-bold neutral-1000">New York (JFK)</p>
								<p className="text-sm-medium time-flight"> <span className="neutral-1000">20:00 </span>- 05 Jan 2024</p>
							</div>
						</div>
						<div className="flight-route-icon" />
						<div className="flight-name">
							<div className="flight-info">
								<p className="text-md-bold neutral-1000">New York (JFK)</p>
								<p className="text-sm-medium time-flight"><span className="neutral-1000">20:00 </span>- 05 Jan 2024</p>
							</div>
						</div>
					</div>
					<div className="flight-route-2">
						<div className="flight-name"> <img src="/assets/imgs/page/tickets/logo2.png" alt="Travila" />
							<div className="flight-info">
								<p className="text-md-bold neutral-1000">New York (JFK)</p>
								<p className="text-sm-medium time-flight"> <span className="neutral-1000">20:00 </span>- 05 Jan 2024</p>
							</div>
						</div>
						<div className="flight-route-icon" />
						<div className="flight-name">
							<div className="flight-info">
								<p className="text-md-bold neutral-1000">New York (JFK)</p>
								<p className="text-sm-medium time-flight"><span className="neutral-1000">20:00 </span>- 05 Jan 2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flight-price">
					<div className="flight-price-1 border-1">
						<p className="text-sm-medium neutral-500">Business</p>
						<p className="heading-5 neutral-1000">$189.56</p>
						<p className="text-sm-medium neutral-500 mb-15">8 Seat(s) left</p><Link className="btn btn-gray" href="#">Book Now</Link>
					</div>
					<div className="flight-price-2 border-1">
						<p className="text-sm-medium neutral-500">Economy</p>
						<p className="heading-5 neutral-1000">$189.56</p>
						<p className="text-sm-medium neutral-500 mb-15">4 Seat(s) left</p><Link className="btn btn-gray" href="#">Book Now</Link>
					</div>
				</div>
			</div>
		</>
	)
}
