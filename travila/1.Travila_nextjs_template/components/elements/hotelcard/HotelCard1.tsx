import Link from 'next/link'

export default function HotelCard1({ hotel }: any) {
	return (
		<>
			<div className="card-journey-small background-card">
				<div className="card-image"> <Link className="label" href="#">Top Rated</Link><Link className="wish" href="#">
					<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
					</svg></Link><Link href="/hotel-detail">
						<img src={`/assets/imgs/page/homepage1/${hotel?.image}`} alt="Travila" />
					</Link>
				</div>
				<div className="card-info">
					<div className="card-rating">
						<div className="card-left"> </div>
						<div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
					</div>
					<div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/hotel-detail">{hotel.name} </Link></div>
					<div className="card-program">
						<div className="card-location">
							<p className="text-location text-sm-medium neutral-500">Manchester, England</p>
							<p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
						</div>
						<div className="endtime">
							<div className="card-price">
								<h6 className="heading-6 neutral-1000">$48.25</h6>
								<p className="text-md-medium neutral-500">/ night</p>
							</div>
							<div className="card-button"> <Link className="btn btn-gray" href="#">Book Now</Link></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
