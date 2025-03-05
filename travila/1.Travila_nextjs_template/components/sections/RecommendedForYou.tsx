
import Link from "next/link"

export default function RecommendedForYou() {
    return (
        <>

            <section className="section-box box-recommended-for-you background-body">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                        <h2 className="neutral-1000">Recommended For You</h2>
                        <p className="text-xl-medium neutral-500 mb-60">The best booking platform you can trust</p>
                    </div>
                    <div className="box-list-featured wow fadeIn">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card">
                                    <div className="card-image"> <Link className="label" href="#">Top Rated</Link><Link className="wish" href="#">
                                        <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg></Link><img src="/assets/imgs/page/homepage1/journey2.png" alt="Travila" />
                                    </div>
                                    <div className="card-info background-card">
                                        <div className="card-rating">
                                            <div className="card-left"> </div>
                                            <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                        </div>
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail-3">California Sunset/Twilight Boat Cruise </Link></div>
                                        <div className="card-program">
                                            <div className="card-duration-tour">
                                                <p className="icon-duration text-md-medium neutral-500">2 days 3 nights</p>
                                                <p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
                                            </div>
                                            <div className="endtime">
                                                <div className="card-price">
                                                    <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                    <p className="text-md-medium neutral-500">/ person</p>
                                                </div>
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail-3">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card">
                                    <div className="card-image"> <Link className="label bestsale" href="#">Best Sale</Link><Link className="wish" href="#">
                                        <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg></Link><img src="/assets/imgs/page/homepage1/journey3.png" alt="Travila" />
                                    </div>
                                    <div className="card-info background-card">
                                        <div className="card-rating">
                                            <div className="card-left"> </div>
                                            <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                        </div>
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail-3">NYC: Food Tastings and Culture Tour</Link></div>
                                        <div className="card-program">
                                            <div className="card-duration-tour">
                                                <p className="icon-duration text-md-medium neutral-500">3 days 3 nights</p>
                                                <p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
                                            </div>
                                            <div className="endtime">
                                                <div className="card-price">
                                                    <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                    <p className="text-md-medium neutral-500">/ person</p>
                                                </div>
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail-3">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card">
                                    <div className="card-image"> <Link className="label saleoff" href="#">25% Off</Link><Link className="wish" href="#">
                                        <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg></Link><img src="/assets/imgs/page/homepage1/journey4.png" alt="Travila" />
                                    </div>
                                    <div className="card-info background-card">
                                        <div className="card-rating">
                                            <div className="card-left"> </div>
                                            <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                        </div>
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail-3">Grand Canyon Horseshoe Bend 2 days</Link></div>
                                        <div className="card-program">
                                            <div className="card-duration-tour">
                                                <p className="icon-duration text-md-medium neutral-500">7 days 6 nights</p>
                                                <p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
                                            </div>
                                            <div className="endtime">
                                                <div className="card-price">
                                                    <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                    <p className="text-md-medium neutral-500">/ person</p>
                                                </div>
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail-3">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card">
                                    <div className="card-image"> <Link className="label" href="#">Top Rated</Link><Link className="wish" href="#">
                                        <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg></Link><img src="/assets/imgs/page/homepage1/journey2.png" alt="Travila" />
                                    </div>
                                    <div className="card-info background-card">
                                        <div className="card-rating">
                                            <div className="card-left"> </div>
                                            <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                        </div>
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail-3">California Sunset/Twilight Boat Cruise </Link></div>
                                        <div className="card-program">
                                            <div className="card-duration-tour">
                                                <p className="icon-duration text-md-medium neutral-500">2 days 3 nights</p>
                                                <p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
                                            </div>
                                            <div className="endtime">
                                                <div className="card-price">
                                                    <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                    <p className="text-md-medium neutral-500">/ person</p>
                                                </div>
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail-3">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card">
                                    <div className="card-image"> <Link className="label bestsale" href="#">Best Sale</Link><Link className="wish" href="#">
                                        <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg></Link><img src="/assets/imgs/page/homepage1/journey3.png" alt="Travila" />
                                    </div>
                                    <div className="card-info background-card">
                                        <div className="card-rating">
                                            <div className="card-left"> </div>
                                            <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                        </div>
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail-3">NYC: Food Tastings and Culture Tour</Link></div>
                                        <div className="card-program">
                                            <div className="card-duration-tour">
                                                <p className="icon-duration text-md-medium neutral-500">3 days 3 nights</p>
                                                <p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
                                            </div>
                                            <div className="endtime">
                                                <div className="card-price">
                                                    <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                    <p className="text-md-medium neutral-500">/ person</p>
                                                </div>
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail-3">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card">
                                    <div className="card-image"> <Link className="label saleoff" href="#">25% Off</Link><Link className="wish" href="#">
                                        <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg></Link><img src="/assets/imgs/page/homepage1/journey4.png" alt="Travila" />
                                    </div>
                                    <div className="card-info background-card">
                                        <div className="card-rating">
                                            <div className="card-left"> </div>
                                            <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                        </div>
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail-3">Grand Canyon Horseshoe Bend 2 days</Link></div>
                                        <div className="card-program">
                                            <div className="card-duration-tour">
                                                <p className="icon-duration text-md-medium neutral-500">7 days 6 nights</p>
                                                <p className="icon-guest text-md-medium neutral-500">4-6 guest</p>
                                            </div>
                                            <div className="endtime">
                                                <div className="card-price">
                                                    <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                    <p className="text-md-medium neutral-500">/ person</p>
                                                </div>
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail-3">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center"><Link className="btn btn-black-lg" href="/tour-grid-2">
                                <svg className="first" width={25} height={24} viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 4H6.5V6H4.5V4Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <path d="M4.5 18H6.5V20H4.5V18Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <path d="M18.5 4H20.5V6H18.5V4Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <path d="M18.5 11H20.5V13H18.5V11Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <path d="M11.5 11H13.5V13H11.5V11Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <path d="M4.5 11H6.5V13H4.5V11Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <path d="M11.5 4H13.5V6H11.5V4Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <path d="M11.5 18H13.5V20H11.5V18Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <path d="M18.5 18H20.5V20H18.5V18Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>Load More Tours</Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
