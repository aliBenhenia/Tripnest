import VideoPopup from '../elements/VideoPopup'
import SwiperGroupPaymentSlider from '../slider/SwiperGroupPaymentSlider'

export default function Payments3() {
	return (
		<>

			<section className="section-box box-payments box-payments-2 background-body">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7 mb-30 wow fadeInUp">
							<div className="box-left-payment"><span className="btn btn-tag">Easy payment</span>
								<h2 className="title-why mb-25 mt-10 neutral-1000">Discover Dream Destinations with Ease</h2>
								<ul className="list-check">
									<li>Security Assurance</li>
									<li>Customer Support</li>
									<li>Transparent Policies</li>
									<li>Reputable Affiliations</li>
								</ul>
								<div className="payment-method">
									<div className="box-swiper mt-30">
										<div className="swiper-container swiper-group-payment">
											<SwiperGroupPaymentSlider />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5 mb-30 text-center text-lg-end wow fadeInUp">
							<div className="box-video-payment">
								<div className="dot-payment"> <img src="/assets/imgs/page/homepage4/dot-payment.png" alt="Travila" /></div>
								<div className="img-sm-payment"> <img src="/assets/imgs/page/homepage4/img-payment-sm.png" alt="Travila" /></div>
								<div className="review-payment"> <img className="light-mode" src="/assets/imgs/page/homepage4/img-review.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage4/img-review-dark.png" alt="Travila" /></div>
								<div className="card-video">
									<div className="card-image">
										<VideoPopup vdocls="btn btn-play popup-youtube" />
										<img src="/assets/imgs/page/homepage4/img-payment.png" alt="Travila" /></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
