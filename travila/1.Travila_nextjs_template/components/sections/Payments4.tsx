
import VideoPopup from '../elements/VideoPopup'
import SwiperGroupPaymentSlider from '../slider/SwiperGroupPaymentSlider'

export default function Payments4() {
	return (
		<>

			<section className="section-box box-payments box-payments-3 background-body">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-30 wow fadeInUp">
							<div className="row">
								<div className="col-lg-6 col-sm-6">
									<div className="card-video card-video-type-2">
										<div className="card-image">
											<VideoPopup vdocls="btn btn-play popup-youtube" />
											<img src="/assets/imgs/page/homepage6/payment.png" alt="Travila" /></div>
									</div>
									<div className="card-video card-video-type-2">
										<div className="card-image"><img src="/assets/imgs/page/homepage6/payment3.png" alt="Travila" /></div>
									</div>
								</div>
								<div className="col-lg-6 col-sm-6 box-image-payment-right">
									<div className="card-video card-video-type-2">
										<div className="card-image"><img src="/assets/imgs/page/homepage6/payment2.png" alt="Travila" /></div>
									</div>
									<div className="card-video card-video-type-2">
										<div className="card-image"><img src="/assets/imgs/page/homepage6/payment4.png" alt="Travila" /></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-30 wow fadeInUp">
							<div className="box-right-payment"><span className="btn btn-tag">Easy payment</span>
								<h2 className="title-why mb-25 mt-10 neutral-1000">We offer tours in a range of locations</h2>
								<p className="text-xl-medium mb-25 neutral-1000">Choose one style or create a package,  your
									passports with adventures together.</p>
								<ul className="list-check list-check-2-col">
									<li>Security Assurance</li>
									<li>Customer Support</li>
									<li>Transparent Policies</li>
									<li>Reputable Affiliations</li>
								</ul>
								<div className="payment-method mt-40">
									<p className="text-sm-bold neutral-1000">Payment is secure and safe</p>
									<div className="box-swiper mt-30">
										<div className="swiper-container swiper-group-payment">
											<SwiperGroupPaymentSlider />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
