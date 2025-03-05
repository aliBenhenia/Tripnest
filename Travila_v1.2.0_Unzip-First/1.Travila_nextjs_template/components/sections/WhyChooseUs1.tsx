import Link from "next/link"

export default function WhyChooseUs1() {
    return (
        <>

            <section className="section-box box-why-choose-us background-body">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-40"><span className="btn btn-tag">Why Choose Us</span>
                            <h2 className="title-why neutral-1000">Dare to live the lift you’ve always wanted</h2>
                            <p className="text-xl-medium neutral-500">Discover how you can offset your adventure's carbon
                                emissions and support the sustainable initiatives practiced by our operators worldwide.</p>
                            <div className="download-apps"> <Link href="#"><img src="/assets/imgs/template/googleplay.png" alt="Travila" /></Link><Link href="#"><img src="/assets/imgs/template/appstore.png" alt="Travila" /></Link></div>
                        </div>
                        <div className="col-lg-6 mb-40">
                            <div className="row">
                                <div className="col-sm-6 mt-35">
                                    <div className="card-why-choose-us">
                                        <div className="card-image"> <img src="/assets/imgs/page/homepage1/destination.png" alt="Travila" /></div>
                                        <div className="card-info">
                                            <h6 className="text-xl-bold">4500+ Destination</h6>
                                            <p className="text-sm-medium neutral-400">Our expert team handpicked all
                                                destinations in this site.</p>
                                        </div>
                                    </div>
                                    <div className="card-why-choose-us card-why-choose-us-type-2">
                                        <div className="card-info">
                                            <h6 className="text-xl-bold">Fast Booking</h6>
                                            <p className="text-sm-medium neutral-400">Secure payment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card-why-choose-us background-body">
                                        <div className="card-image"> <img src="/assets/imgs/page/homepage1/support.png" alt="Travila" /></div>
                                        <div className="card-info">
                                            <h6 className="text-xl-bold neutral-1000">Great 24/7 Support</h6>
                                            <p className="text-sm-medium neutral-400">We are here to help, before, during, and
                                                even after your trip.</p>
                                        </div>
                                    </div>
                                    <div className="card-why-choose-us card-why-choose-us-type-3">
                                        <div className="card-info">
                                            <h6 className="text-xl-bold">Best Price</h6>
                                            <p className="text-sm-medium neutral-400">Price match within 48 hours of order
                                                confirmation</p>
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
