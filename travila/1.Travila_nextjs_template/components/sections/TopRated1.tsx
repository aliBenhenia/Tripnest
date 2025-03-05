'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroupAnimate } from "@/util/swiperOption"
import Link from "next/link"

export default function TopRated1() {
    return (
        <>

            <section className="section-box box-top-rated background-1">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6">
                            <h2 className="neutral-1000">Top Rated Hotels</h2>
                            <p className="text-xl-medium neutral-500">Quality as judged by customers. Book at the ideal price!
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-end"><Link className="btn btn-black-lg" href="#">View More
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg></Link></div>
                        </div>
                    </div>
                </div>
                <div className="container-slider box-swiper-padding">
                    <div className="box-swiper mt-30">
                        <div className="swiper-container swiper-group-animate swiper-group-journey">
                            <Swiper {...swiperGroupAnimate}>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage1/journey2.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">California Sunset/Twilight Boat Cruise </Link>
                                            </div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                    <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage1/journey3.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">NYC: Food Tastings and Culture Tour</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                    <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage1/journey4.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">Grand Canyon Horseshoe Bend 2 days</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                    <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage1/journey2.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">California Sunset/Twilight Boat Cruise </Link>
                                            </div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                    <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage1/journey3.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">NYC: Food Tastings and Culture Tour</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                    <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage1/journey4.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail">Grand Canyon Horseshoe Bend 2 days</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                    <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /></p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
