import Link from "next/link"
import SwiperGroupPayment7Slider from '../slider/SwiperGroupPayment7Slider'

export default function WhyTravelUs() {
	return (
		<>

			<section className="section-box box-why-travel-us background-body">
				<div className="container">
					<div className="text-center">
						<h2 className="neutral-1000">Why Travel With Us?</h2>
						<p className="text-xl-medium neutral-500">The best booking platform you can trust</p>
					</div>
					<div className="row mt-55">
						<div className="col-lg-3 col-md-6">
							<div className="card-why-travel background-2 hover-up">
								<div className="card-image"> <img src="/assets/imgs/page/homepage2/security.svg" alt="Travila" />
								</div>
								<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Security Assurance</Link>
									<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data
										security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
										<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
										</svg></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="card-why-travel background-7 hover-up">
								<div className="card-image"> <img src="/assets/imgs/page/homepage2/support.svg" alt="Travila" />
								</div>
								<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Security Assurance</Link>
									<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data
										security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
										<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
										</svg></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="card-why-travel background-3 hover-up">
								<div className="card-image"> <img src="/assets/imgs/page/homepage2/policy.svg" alt="Travila" />
								</div>
								<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Security Assurance</Link>
									<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data
										security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
										<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
										</svg></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="card-why-travel background-8 hover-up">
								<div className="card-image"> <img src="/assets/imgs/page/homepage2/repu.svg" alt="Travila" /></div>
								<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Security Assurance</Link>
									<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data
										security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
										<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
										</svg></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="box-swiper mt-30">
						<div className="swiper-container swiper-group-payment-7">
							<SwiperGroupPayment7Slider />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
