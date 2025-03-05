'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroup2 } from "@/util/swiperOption"
import Link from "next/link"

export default function FlightsType2() {
    return (
        <>

            <section className="section-box box-flights-type-2 background-body">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                        <h2 className="neutral-1000 mb-15">Flight Offer Deals</h2>
                        <p className="text-xl-medium neutral-500">Competitive fares for your route-specific searches.</p>
                    </div>
                    <div className="block-flights wow fadeInDown">
                        <div className="container-slider">
                            <div className="box-swiper mt-30">
                                <div className="swiper-container swiper-group-2 swiper-group-journey">
                                    <Swiper {...swiperGroup2}>
                                        <SwiperSlide>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight4.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight2.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight5.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight3.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight6.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight4.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight2.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight5.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight3.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-flight background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage1/flight6.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-date"><span className="date-1">09 Jun 2024</span><span className="line" /><span className="date-1">16 Jun 2024</span>
                                                    </div>
                                                    <div className="card-route">
                                                        <h6 className="route-name neutral-1000">Denmark</h6><span className="icon-route" />
                                                        <h6 className="route-name neutral-1000">New York</h6>
                                                    </div>
                                                    <div className="card-price">
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                        <div className="card-price-1">
                                                            <p className="text-md-medium">Business</p>
                                                            <h6 className="neutral-1000">$288.15</h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-meta">
                                                        <div className="card-seats">
                                                            <p className="text-md-medium neutral-500">18 Seats left</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/book-ticket">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="box-button-slider box-button-slider-team text-center">
                                    <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                            <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                            <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
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
