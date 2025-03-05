import Link from 'next/link'
import React from 'react'

export default function HotelCard2({ hotel }: any) {
	return (
		<>
			<div className="card-flight card-hotel background-card">
				<div className="card-image"> <Link className="wish" href="#">
					<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
					</svg></Link><Link href="/hotel-detail"><img src={`/assets/imgs/page/homepage1/${hotel?.image}`} /></Link></div>
				<div className="card-info">
					<label className="sale-lbl">-25%</label>
					<div className="tour-rate">
						<div className="rate-element"><span className="rating">{hotel.rating} <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
					</div>
					<div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">{hotel.name}</Link></div>
					<div className="card-program">
						<div className="card-location mb-25">
							<p className="text-location text-md-medium neutral-500">Suite 756 031 Ines Riverway, Rhiannonchester</p>
						</div>
						<div className="card-tags"> <Link className="btn btn-tag-border" href="#">City Centre</Link><Link className="btn btn-tag-border" href="#">Air conditioning</Link><Link className="btn btn-tag-border" href="#">Heater</Link><Link className="btn btn-tag-border" href="#">Pool</Link><Link className="btn btn-tag-border" href="#">Restaurant</Link></div>
						<div className="card-facilities">
							<ul className="list-tick-green">
								<li>Free Breakfast</li>
								<li>Airport Transfer</li>
								<li>Luxury Rooms</li>
								<li>Free Wifi</li>
								<li>Free Cancellation</li>
								<li>Business Rooms</li>
							</ul>
						</div>
						<div className="endtime">
							<div className="card-price">
								<p className="text-md-medium neutral-500 mr-5">From </p>
								<h6 className="heading-6 neutral-1000">${hotel.price}</h6>
								<p className="text-md-medium neutral-500">/ night</p>
							</div>
							<div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">See Availability</Link></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
