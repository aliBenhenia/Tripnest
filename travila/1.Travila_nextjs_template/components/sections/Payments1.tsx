import SwiperGroupPaymentSlider from '../slider/SwiperGroupPaymentSlider'

export default function Payments1() {
    return (
        <>

            <section className="section-box box-payments background-body">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="row">
                                <div className="col-md-7 mb-30"><img className="bdrd8 w-100" src="/assets/imgs/page/homepage1/pay1.png" alt="Travila" /></div>
                                <div className="col-md-5 mb-30"><img className="bdrd8 w-100 mb-15" src="/assets/imgs/page/homepage1/pay2.png" alt="Travila" /><img className="bdrd8 w-100" src="/assets/imgs/page/homepage1/pay3.png" alt="Travila" /></div>
                            </div>
                        </div>
                        <div className="col-lg-7 mb-30">
                            <div className="box-left-payment"><span className="btn btn-tag">Easy payment</span>
                                <h2 className="title-why mb-25 mt-10 neutral-1000">Discover Dream Destinations with Ease</h2>
                                <p className="text-xl-medium neutral-500 mb-35">Discover how you can offset your adventure's
                                    carbon emissions and support the sustainable initiatives practiced by our operators
                                    worldwide.</p>
                                <div className="payment-method">
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
