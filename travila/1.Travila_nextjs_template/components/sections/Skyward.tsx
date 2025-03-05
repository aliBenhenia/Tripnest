import SwiperGroupPaymentSlider from '../slider/SwiperGroupPaymentSlider'

export default function Skyward() {
    return (
        <>

            <section className="section-box box-skyward background-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30 wow fadeInUp">
                            <div className="box-image-sky">
                                <div className="col-sky-1"><img className="w-100" src="/assets/imgs/page/homepage10/sky.png" alt="Travila" /><img className="w-100" src="/assets/imgs/page/homepage10/sky2.png" alt="Travila" /></div>
                                <div className="col-sky-2"><img className="w-100" src="/assets/imgs/page/homepage10/sky3.png" alt="Travila" /></div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30 wow fadeInUp">
                            <div className="box-right-skyward"><span className="btn btn-tag-white">Takes You Skyward</span>
                                <h4 className="title-why mb-25 mt-10 neutral-1000">Your Premier Destination for Unmatched Flight
                                    Experiences</h4>
                                <p className="text-lg-medium mb-25 neutral-1000">Experience stress-free travel planning with our
                                    website where you can easily book flights, check in an make changes to your itinerary
                                    with just a few clicks</p>
                                <div className="payment-method mt-60">
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
