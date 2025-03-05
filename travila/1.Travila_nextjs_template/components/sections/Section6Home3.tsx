
import Link from "next/link"

export default function Section6Home3() {
    return (
        <>

            <section className="section-box box-section6-home3 background-body">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                            <div className="card-support">
                                <div className="card-info">
                                    <h6>24/7 Support</h6>
                                    <p className="text-sm-medium">We are here to help, before, during, and even after your trip.
                                    </p>
                                </div>
                                <div className="card-image"> <img src="/assets/imgs/page/homepage3/support.png" alt="Travila" /><img src="/assets/imgs/page/homepage3/support2.png" alt="Travila" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="card-bestprice wow fadeInUp">
                                <div className="card-info">
                                    <h6>Best Price</h6>
                                    <p className="text-sm-medium">Price match within 48 hours of order confirmation</p><Link className="btn btn-brand-secondary" href="#">View More
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg></Link>
                                </div>
                            </div>
                            <div className="card-explore wow fadeInUp">
                                <div className="card-info">
                                    <p className="text-md-bold">Save your time!</p>
                                    <h6>Explore, Book, Soar: Your Journey Awaits!</h6><Link className="btn btn-brand-secondary" href="#">View More
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 wow fadeInUp">
                            <div className="card-image-promotion">
                                <div className="card-image"> <img src="/assets/imgs/page/homepage3/img-travel.png" alt="Travila" />
                                </div>
                                <div className="card-info">
                                    <div className="box-price">
                                        <div className="box-price-inner"><span className="text-price-1">SAVE 39%</span><span className="text-price-2">$899</span><Link className="text-price-3" href="#">BOOK
                                            NOW</Link></div>
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
