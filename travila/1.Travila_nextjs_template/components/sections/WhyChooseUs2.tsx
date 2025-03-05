import Link from "next/link"

export default function WhyChooseUs2() {
    return (
        <>

            <section className="section-box block-why-choose-us background-body">
                <div className="container">
                    <div className="bg-why shape-1 wow fadeInUp"> <img className="light-mode" src="/assets/imgs/page/homepage9/bg-dot.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage9/bg-dot-dark.png" alt="Travila" /></div>
                    <div className="bg-why-2 shape-2 wow fadeInUp"><img className="light-mode" src="/assets/imgs/page/homepage9/bg-dot-2.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage9/bg-dot-2-dark.png" alt="Travila" /></div>
                    <div className="box-why-home9-inner background-card">
                        <div className="box-why-home9-inner-inner">
                            <h3 className="neutral-1000 mb-15 wow fadeInUp">Why Choose Us?</h3>
                            <p className="text-xl-medium neutral-500 mb-45 wow fadeInUp">The best booking platform you can trust
                            </p>
                            <div className="box-list-why wow fadeInUp">
                                <div className="card-why-travel card-love-us wow fadeInUp">
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage2/support.svg" alt="Travila" /></div>
                                    <div className="card-info"> <Link className="text-xl-bold card-title" href="/help-center">24/7
                                        Support</Link>
                                        <p className="text-sm-medium neutral-500 card-desc">We are here to help, before, during,
                                            and even after your trip.</p>
                                    </div>
                                </div>
                                <div className="card-why-travel card-love-us card-margin-left wow fadeInUp">
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage2/repu.svg" alt="Travila" />
                                    </div>
                                    <div className="card-info"> <Link className="text-xl-bold card-title" href="/help-center">Best
                                        Price</Link>
                                        <p className="text-sm-medium neutral-500 card-desc">Price match within 48 hours of order
                                            confirmation</p>
                                    </div>
                                </div>
                                <div className="card-why-travel card-love-us wow fadeInUp">
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage2/security.svg" alt="Travila" /></div>
                                    <div className="card-info"> <Link className="text-xl-bold card-title" href="/help-center">Fast
                                        Booking</Link>
                                        <p className="text-sm-medium neutral-500 card-desc">Ensure secure transactions. Save and
                                            print confirmation emails.</p>
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
