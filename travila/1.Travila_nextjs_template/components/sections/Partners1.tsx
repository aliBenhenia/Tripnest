import SwiperGroupPaymentSlider from '../slider/SwiperGroupPaymentSlider'

export default function Partners1() {
    return (
        <>

            <section className="section-box box-partners background-body">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-20">
                            <div className="box-authors-partner wow fadeInUp">
                                <div className="authors-partner-left"><img src="/assets/imgs/page/homepage5/author.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/author2.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/author3.png" alt="Travila" /><span className="item-author">
                                    <svg width={18} height={18} viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="7.448" width={17} height="2.31818" fill="black" />
                                        <rect x="7.84082" y="17.1072" width={17} height="2.31818" transform="rotate(-90 7.84082 17.1072)" fill="black" />
                                    </svg></span></div>
                                <div className="authors-partner-right">
                                    <p className="text-sm neutral-1000">1684 people used <strong>Travila </strong>in the last
                                        <strong>24 hours</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-20 wow fadeInUp">
                            <h6 className="neutral-1000">Partner with</h6>
                            <p className="text-xs-medium neutral-500">We are a trusted partner of airlines, payment gateways,
                                and travel services around the world.</p>
                        </div>
                        <div className="col-lg-5 mb-20">
                            <div className="payment-method wow fadeInUp">
                                <div className="box-swiper mt-30">
                                    <div className="swiper-container swiper-group-payment">
									<SwiperGroupPaymentSlider />
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
