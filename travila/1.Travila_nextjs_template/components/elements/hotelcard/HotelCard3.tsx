import Link from 'next/link'

export default function HotelCard3({ hotel }: any) {
	return (
		<>
			<div className="card-flight card-hotel background-card">
				<div className="card-image"> <Link className="wish" href="#">
					<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
					</svg></Link><Link href="/hotel-detail"><img src="/assets/imgs/page/hotel/hotelRoom.png" alt="Travila" /></Link></div>
				<div className="card-info">
					<label className="sale-lbl">-25%</label><Link className="btn btn-label-tag background-1" href="#">Luxury </Link>
					<div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">California Sunset/Twilight Boat Cruise </Link></div>
					<div className="card-program">
						<div className="card-location">
							<p className="text-location text-md-medium neutral-500">Dubai, UAE</p>
							<p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
						</div>
						<div className="endtime">
							<div className="card-price">
								<h6 className="heading-6 neutral-1000">$148.25</h6>
								<p className="text-md-medium neutral-500">/ night</p>
							</div>
							<div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
