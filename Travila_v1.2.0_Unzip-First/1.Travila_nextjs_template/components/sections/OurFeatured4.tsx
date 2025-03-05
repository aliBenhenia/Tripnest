
import Link from "next/link"
import CategoryFilter from '../elements/CategoryFilter'

export default function OurFeatured4() {
    return (
        <>

            <section className="section-box box-our-featured box-our-featured-2 background-100">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 mb-30 text-center text-lg-start wow fadeInUp">
                            <h2 className="neutral-1000">Our Featured Tours</h2>
                            <p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
                        </div>
                        <div className="col-lg-6 mb-30 wow fadeInUp">
						<CategoryFilter />
                        </div>
                    </div>
                    <div className="box-list-featured">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card wow fadeInUp">
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
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">California Sunset/Twilight Boat Cruise </Link></div>
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
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card wow fadeInUp">
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
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">NYC: Food Tastings and Culture Tour</Link></div>
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
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card wow fadeInUp">
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
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">Grand Canyon Horseshoe Bend 2 days</Link></div>
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
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card wow fadeInUp">
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
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">California Sunset/Twilight Boat Cruise </Link></div>
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
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card wow fadeInUp">
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
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">NYC: Food Tastings and Culture Tour</Link></div>
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
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-journey-small background-card wow fadeInUp">
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
                                        <div className="card-title"> <Link className="heading-6 neutral-1000" href="/tour-detail">Grand Canyon Horseshoe Bend 2 days</Link></div>
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
                                                <div className="card-button"> <Link className="btn btn-gray" href="/tour-detail">Book Now</Link></div>
                                            </div>
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
