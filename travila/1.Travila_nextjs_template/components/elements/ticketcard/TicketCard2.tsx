import Link from 'next/link'

export default function TicketCard2({ticket}:any) {
	return (
		<>
<div className="card-flight background-card">
													<div className="card-image"> <Link className="wish" href="#">
														<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
															<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
														</svg></Link><img src="/assets/imgs/page/homepage1/flight.png" alt="Travila" /></div>
													<div className="card-info">
														<div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span></div>
														<div className="card-route">
															<h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
															<h6 className="route-name neutral-1000">New York</h6>
														</div>
														<div className="card-price">
															<div className="card-price-1">
																<p className="text-md-medium">Business</p>
																<h6 className="neutral-1000">$288.15</h6>
															</div>
															<div className="card-price-1">
																<p className="text-md-medium">Business</p>
																<h6 className="neutral-1000">$288.15</h6>
															</div>
														</div>
														<div className="card-meta">
															<div className="card-seats">
																<p className="text-md-medium neutral-500">18 Seats left</p>
															</div>
															<div className="card-button"> <Link className="btn btn-gray" href="#">Book Now</Link></div>
														</div>
													</div>
												</div>
		</>
	)
}
