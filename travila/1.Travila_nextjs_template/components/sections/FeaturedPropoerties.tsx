'use client'
import { swiperGroup1 } from "@/util/swiperOption"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import CategoryFilter from '../elements/CategoryFilter'

export default function FeaturedPropoerties() {
    return (
        <>

            <section className="section-box box-featured-propoerties background-body">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 mb-30 wow fadeInUp">
                            <h2 className="neutral-1000 mb-0">Featured Properties</h2>
                            <p className="text-xl-medium neutral-500">Hand-Picked selection of quality places</p>
                        </div>
                        <div className="col-lg-6 mb-30 wow fadeInUp">
						<CategoryFilter />
                        </div>
                    </div>
                    <div className="box-swiper mt-25">
                        <div className="swiper-container swiper-group-1 swiper-group-journey pb-0">
                            <Swiper {...swiperGroup1}>
                                <SwiperSlide>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real1.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Regal North Hills</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                                <p className="text-md-medium neutral-500">/ night</p>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real2.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Majestic Ridge Estates</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                                <p className="text-md-medium neutral-500">/ night</p>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real3.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Crownstone Meadows</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                                <p className="text-md-medium neutral-500">/ night</p>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real4.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Sovereign Residences</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                                <p className="text-md-medium neutral-500">/ night</p>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real5.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Noble Crest Gardens</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                                <p className="text-md-medium neutral-500">/ night</p>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real6.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Grandview Highlands</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                                <p className="text-md-medium neutral-500">/ night</p>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
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
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real1.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Regal North Hills</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real2.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Majestic Ridge Estates</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real3.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Crownstone Meadows</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real4.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">California Sunset/Twilight Boat
                                                        Cruise </Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$48.25</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real5.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">NYC: Food Tastings and Culture
                                                        Tour</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$17.32</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-journey-small card-grid-real background-card">
                                                <div className="card-image"> <Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/homepage9/real6.png" alt="Travila" /></div>
                                                <div className="card-info">
                                                    <div className="card-rating">
                                                        <div className="card-left"> </div>
                                                        <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672
                                                            reviews)</span></span></div>
                                                    </div>
                                                    <div className="card-title"> <Link className="heading-6 neutral-1000" href="/property-detail">Grand Canyon Horseshoe Bend 2
                                                        days</Link></div>
                                                    <div className="card-program">
                                                        <div className="card-location">
                                                            <p className="text-location text-md-medium neutral-500">New South
                                                                Wales, Australia</p>
                                                        </div>
                                                        <div className="card-facilities">
                                                            <div className="item-facilities">
                                                                <p className="room text-md-medium neutral-1000">4 rooms</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="size text-md-medium neutral-1000">168 m2</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bed text-md-medium neutral-1000">5 Beds</p>
                                                            </div>
                                                            <div className="item-facilities">
                                                                <p className="bathroom text-md-medium neutral-1000">2 Bathrooms
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="endtime">
                                                            <div className="card-price">
                                                                <p className="text-md-medium neutral-500 mr-10">from </p>
                                                                <h6 className="heading-6 neutral-1000">$15.63</h6>
                                                            </div>
                                                            <div className="card-button"> <Link className="btn btn-gray" href="/property-detail">Book Now</Link></div>
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
                    <div className="d-flex justify-content-center"><Link className="btn btn-black-lg" href="/rental-property">
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
                        </svg>Load More Real Estate</Link></div>
                </div>
            </section>
        </>
    )
}
