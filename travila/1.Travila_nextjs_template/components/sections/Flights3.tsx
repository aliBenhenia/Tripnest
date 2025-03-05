'use client'
import { swiperGroup1 } from "@/util/swiperOption"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

export default function Flights3() {
    return (
        <>

            <section className="section-box box-flights background-body">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-9 mb-30 wow fadeInUp">
                            <h2 className="neutral-1000 mb-15">Recent Launched Cars</h2>
                            <p className="text-xl-medium neutral-500">The world's leading car brands</p>
                        </div>
                        <div className="col-md-3 position-relative mb-30 wow fadeInUp">
                            <div className="box-button-slider box-button-slider-team justify-content-end">
                                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                        <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                        <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-swiper mt-25">
                        <div className="swiper-container swiper-group-1 swiper-group-journey pb-0">
                            <Swiper {...swiperGroup1}>
                                <SwiperSlide>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car1.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">California Sunset/Twilight Boat Cruise
                                                    </Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium neutral-1000">25,100 miles
                                                                </p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium neutral-1000">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium neutral-1000">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium neutral-1000">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car2.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">NYC: Food Tastings and Culture
                                                        Tour</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium neutral-1000">25,100 miles
                                                                </p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium neutral-1000">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium neutral-1000">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium neutral-1000">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car3.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Grand Canyon Horseshoe Bend 2 days</Link>
                                                    </div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium neutral-1000">25,100 miles
                                                                </p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium neutral-1000">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium neutral-1000">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium neutral-1000">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car4.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">California Sunset/Twilight Boat Cruise
                                                    </Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium neutral-1000">25,100 miles
                                                                </p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium neutral-1000">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium neutral-1000">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium neutral-1000">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car5.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">NYC: Food Tastings and Culture
                                                        Tour</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium neutral-1000">25,100 miles
                                                                </p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium neutral-1000">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium neutral-1000">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium neutral-1000">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car6.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Grand Canyon Horseshoe Bend 2 days</Link>
                                                    </div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium neutral-1000">25,100 miles
                                                                </p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium neutral-1000">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium neutral-1000">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium neutral-1000">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car1.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">California Sunset/Twilight Boat Cruise
                                                    </Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium">25,100 miles</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car2.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">NYC: Food Tastings and Culture
                                                        Tour</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium">25,100 miles</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car3.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Grand Canyon Horseshoe Bend 2 days</Link>
                                                    </div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium">25,100 miles</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car4.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">California Sunset/Twilight Boat Cruise
                                                    </Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium">25,100 miles</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car5.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">NYC: Food Tastings and Culture
                                                        Tour</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium">25,100 miles</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-car background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage8/car6.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Grand Canyon Horseshoe Bend 2 days</Link>
                                                    </div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">Manchester,
                                                                England</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="speed text-md-medium">25,100 miles</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="gear text-md-medium">Automatic</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="fuel text-md-medium">Diesel</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="seats text-md-medium">7 seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
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
