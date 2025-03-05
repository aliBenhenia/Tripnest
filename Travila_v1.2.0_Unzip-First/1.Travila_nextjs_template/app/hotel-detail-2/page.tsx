'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroupAnimate } from "@/util/swiperOption"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function HotelDetail2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <main className="main">
                    <section className="box-section box-breadcrumb background-body">
                        <div className="container">
                            <ul className="breadcrumbs">
                                <li> <Link href="/">Home</Link><span className="arrow-right">
                                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    </svg></span></li>
                                <li> <Link href="/destination">Hotels</Link><span className="arrow-right">
                                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    </svg></span></li>
                                <li> <Link href="/destination">Hotel Le Meurice</Link><span className="arrow-right">
                                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    </svg></span></li>
                                <li> <span className="text-breadcrumb">All Rooms</span></li>
                            </ul>
                        </div>
                    </section>
                    <section className="section-box box-banner-hotel-detai-2">
                        <div className="box-banner-hotel-detai-2-inner">
                            <div className="container">
                                <div className="d-flex justify-content-center mb-20"> <Link className="btn btn-brand-secondary" href="#">Luxury Hotel Experience</Link></div>
                                <h2 className="color-white mb-20">Our Rooms  Suites</h2>
                                <h6 className="color-white">Experience the Epitome of Parisian Luxury at Le Meurice Hotel: Where Timeless Elegance and Unmatched Sophistication Await Your Arrival.</h6>
                            </div>
                        </div>
                    </section>
                    <section className="box-section block-content-tourlist background-body">
                        <div className="container">
                            <div className="box-content-main-detail">
                                <div className="box-grid-hotels box-list-hotels-detail wow fadeIn">
                                    <div className="card-flight card-hotel background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><Link href="/room-detail"><img src="/assets/imgs/page/hotel/hotelRoom.png" alt="Travila" /></Link></div>
                                        <div className="card-info">
                                            <label className="sale-lbl">-25%</label>
                                            <div className="tour-rate">
                                                <div className="rate-element"><span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/room-detail">Deluxe Room - Ocean View</Link></div>
                                            <div className="card-hotel-2-col">
                                                <div className="card-program">
                                                    <div className="card-tags"> <Link className="btn btn-tag-border" href="#">Air Dryer</Link><Link className="btn btn-tag-border" href="#">Air conditioning</Link><Link className="btn btn-tag-border" href="#">See view</Link><Link className="btn btn-tag-border" href="#">Pool</Link></div>
                                                    <div className="card-facilities">
                                                        <ul className="list-tick-green">
                                                            <li>King Size Bed</li>
                                                            <li>Safety Box</li>
                                                            <li>Balcony</li>
                                                            <li>48 Inch TV</li>
                                                            <li>Disable Access</li>
                                                            <li>Pet Allowed</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-hotel-desc">
                                                        <p className="text-md-medium neutral-500">The dark wood paneling and furnishings, deluxe red-draped four-poster bed, and magnificent black stone bathroom. The intimate scale and finish give the room a distinctly personal feel.</p>
                                                    </div>
                                                </div>
                                                <div className="card-hotel-price">
                                                    <div className="box-hotel-price">
                                                        <p className="price-throught text-20-medium neutral-500">$250</p>
                                                        <h4 className="price-main neutral-1000">$195</h4>
                                                        <p className="text-md-medium neutral-500">Per Night</p>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="#">Book Now
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                            </svg></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-flight card-hotel background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><Link href="/room-detail-2"><img src="/assets/imgs/page/hotel/hotelRoom2.png" alt="Travila" /></Link></div>
                                        <div className="card-info">
                                            <label className="sale-lbl">-25%</label>
                                            <div className="tour-rate">
                                                <div className="rate-element"><span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/room-detail-2">Luxury Double Room</Link></div>
                                            <div className="card-hotel-2-col">
                                                <div className="card-program">
                                                    <div className="card-tags"> <Link className="btn btn-tag-border" href="#">Air Dryer</Link><Link className="btn btn-tag-border" href="#">Air conditioning</Link><Link className="btn btn-tag-border" href="#">See view</Link><Link className="btn btn-tag-border" href="#">Pool</Link></div>
                                                    <div className="card-facilities">
                                                        <ul className="list-tick-green">
                                                            <li>King Size Bed</li>
                                                            <li>Safety Box</li>
                                                            <li>Balcony</li>
                                                            <li>48 Inch TV</li>
                                                            <li>Disable Access</li>
                                                            <li>Pet Allowed</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-hotel-desc">
                                                        <p className="text-md-medium neutral-500">The dark wood paneling and furnishings, deluxe red-draped four-poster bed, and magnificent black stone bathroom. The intimate scale and finish give the room a distinctly personal feel.</p>
                                                    </div>
                                                </div>
                                                <div className="card-hotel-price">
                                                    <div className="box-hotel-price">
                                                        <p className="price-throught text-20-medium neutral-500">$250</p>
                                                        <h4 className="price-main neutral-1000">$195</h4>
                                                        <p className="text-md-medium neutral-500">Per Night</p>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="#">Book Now
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                            </svg></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-flight card-hotel background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><Link href="/room-detail"><img src="/assets/imgs/page/hotel/hotelRoom3.png" alt="Travila" /></Link></div>
                                        <div className="card-info">
                                            <label className="sale-lbl">-25%</label>
                                            <div className="tour-rate">
                                                <div className="rate-element"><span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/room-detail">Luxury Single Room </Link></div>
                                            <div className="card-hotel-2-col">
                                                <div className="card-program">
                                                    <div className="card-tags"> <Link className="btn btn-tag-border" href="#">Air Dryer</Link><Link className="btn btn-tag-border" href="#">Air conditioning</Link><Link className="btn btn-tag-border" href="#">See view</Link><Link className="btn btn-tag-border" href="#">Pool</Link></div>
                                                    <div className="card-facilities">
                                                        <ul className="list-tick-green">
                                                            <li>King Size Bed</li>
                                                            <li>Safety Box</li>
                                                            <li>Balcony</li>
                                                            <li>48 Inch TV</li>
                                                            <li>Disable Access</li>
                                                            <li>Pet Allowed</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-hotel-desc">
                                                        <p className="text-md-medium neutral-500">The dark wood paneling and furnishings, deluxe red-draped four-poster bed, and magnificent black stone bathroom. The intimate scale and finish give the room a distinctly personal feel.</p>
                                                    </div>
                                                </div>
                                                <div className="card-hotel-price">
                                                    <div className="box-hotel-price">
                                                        <p className="price-throught text-20-medium neutral-500">$250</p>
                                                        <h4 className="price-main neutral-1000">$195</h4>
                                                        <p className="text-md-medium neutral-500">Per Night</p>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="#">Book Now
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                            </svg></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-flight card-hotel background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><Link href="/room-detail-2"><img src="/assets/imgs/page/hotel/hotelRoom4.png" alt="Travila" /></Link></div>
                                        <div className="card-info">
                                            <label className="sale-lbl">-25%</label>
                                            <div className="tour-rate">
                                                <div className="rate-element"><span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/room-detail-2">Luxury Honeymoon Room</Link></div>
                                            <div className="card-hotel-2-col">
                                                <div className="card-program">
                                                    <div className="card-tags"> <Link className="btn btn-tag-border" href="#">Air Dryer</Link><Link className="btn btn-tag-border" href="#">Air conditioning</Link><Link className="btn btn-tag-border" href="#">See view</Link><Link className="btn btn-tag-border" href="#">Pool</Link></div>
                                                    <div className="card-facilities">
                                                        <ul className="list-tick-green">
                                                            <li>King Size Bed</li>
                                                            <li>Safety Box</li>
                                                            <li>Balcony</li>
                                                            <li>48 Inch TV</li>
                                                            <li>Disable Access</li>
                                                            <li>Pet Allowed</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-hotel-desc">
                                                        <p className="text-md-medium neutral-500">The dark wood paneling and furnishings, deluxe red-draped four-poster bed, and magnificent black stone bathroom. The intimate scale and finish give the room a distinctly personal feel.</p>
                                                    </div>
                                                </div>
                                                <div className="card-hotel-price">
                                                    <div className="box-hotel-price">
                                                        <p className="price-throught text-20-medium neutral-500">$250</p>
                                                        <h4 className="price-main neutral-1000">$195</h4>
                                                        <p className="text-md-medium neutral-500">Per Night</p>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="#">Book Now
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                            </svg></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-flight card-hotel background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><Link href="/room-detail"><img src="/assets/imgs/page/hotel/hotelRoom5.png" alt="Travila" /></Link></div>
                                        <div className="card-info">
                                            <label className="sale-lbl">-25%</label>
                                            <div className="tour-rate">
                                                <div className="rate-element"><span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/room-detail">Luxury Family Room </Link></div>
                                            <div className="card-hotel-2-col">
                                                <div className="card-program">
                                                    <div className="card-tags"> <Link className="btn btn-tag-border" href="#">Air Dryer</Link><Link className="btn btn-tag-border" href="#">Air conditioning</Link><Link className="btn btn-tag-border" href="#">See view</Link><Link className="btn btn-tag-border" href="#">Pool</Link></div>
                                                    <div className="card-facilities">
                                                        <ul className="list-tick-green">
                                                            <li>King Size Bed</li>
                                                            <li>Safety Box</li>
                                                            <li>Balcony</li>
                                                            <li>48 Inch TV</li>
                                                            <li>Disable Access</li>
                                                            <li>Pet Allowed</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-hotel-desc">
                                                        <p className="text-md-medium neutral-500">The dark wood paneling and furnishings, deluxe red-draped four-poster bed, and magnificent black stone bathroom. The intimate scale and finish give the room a distinctly personal feel.</p>
                                                    </div>
                                                </div>
                                                <div className="card-hotel-price">
                                                    <div className="box-hotel-price">
                                                        <p className="price-throught text-20-medium neutral-500">$250</p>
                                                        <h4 className="price-main neutral-1000">$195</h4>
                                                        <p className="text-md-medium neutral-500">Per Night</p>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="#">Book Now
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                            </svg></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-70" />
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><Link className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">
                                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></span></Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">...</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#" aria-label="Next"><span aria-hidden="true">
                                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></span></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-payments box-payments-hotel background-body">
                        <div className="container">
                            <div className="box-payment-style-2 background-4">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 mb-30">
                                        <div className="box-left-payment"><span className="btn btn-tag-white">Easy payment</span>
                                            <h4 className="mb-25 mt-20 neutral-1000">Luxury Travel Redefined: Your Passport to Global Glamour</h4>
                                            <p className="text-xl-medium neutral-500 mb-35">Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practiced by our operators worldwide.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="box-image-payment-2">
                                            <div className="row align-items-center">
                                                <div className="col-sm-4 mb-30"><img className="bdrd8 w-100" src="/assets/imgs/page/homepage2/payment.png" alt="Travila" /></div>
                                                <div className="col-sm-4 mb-30"><img className="bdrd8 w-100 mb-15" src="/assets/imgs/page/homepage2/payment2.png" alt="Travila" /><img className="bdrd8 w-100 mb-15" src="/assets/imgs/page/homepage2/payment3.png" alt="Travila" /></div>
                                                <div className="col-sm-4 mb-30"><img className="bdrd8 w-100" src="/assets/imgs/page/homepage2/payment4.png" alt="Travila" /><img className="bdrd8 w-100" src="/assets/imgs/page/homepage2/payment5.png" alt="Travila" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-testimonials-2 box-testimonials-5 box-testimonials-hotel-detail background-body">
                        <div className="container">
                            <div className="box-author-testimonials button-bg-2 wow fadeInUp"> <img src="/assets/imgs/page/homepage1/testimonial.png" alt="Travila" /><img src="/assets/imgs/page/homepage1/testimonial2.png" alt="Travila" /><img src="/assets/imgs/page/homepage1/testimonial3.png" alt="Travila" />Testimonials</div>
                            <h2 className="mt-8 mb-25 neutral-1000">What they say about us?</h2>
                        </div>
                        <div className="block-testimonials">
                            <div className="container-testimonials wow fadeInUp">
                                <div className="container-slider">
                                    <div className="box-swiper mt-0">
                                        <div className="swiper-container swiper-group-animate swiper-group-journey">
                                            <Swiper {...swiperGroupAnimate}>
                                                <SwiperSlide>
                                                    <div className="card-testimonial background-card">
                                                        <div className="card-info">
                                                            <p className="text-xl-bold card-title neutral-1000">The best booking system</p>
                                                            <p className="neutral-500">I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.</p>
                                                        </div>
                                                        <div className="card-top">
                                                            <div className="card-author">
                                                                <div className="card-image"> <img src="/assets/imgs/page/homepage1/author.png" alt="Travila" /></div>
                                                                <div className="card-info">
                                                                    <p className="text-lg-bold neutral-1000">Sara Mohamed</p>
                                                                    <p className="text-sm neutral-1000">Jakatar</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-rate"> <img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /></div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="card-testimonial background-card">
                                                        <div className="card-info">
                                                            <p className="text-xl-bold card-title neutral-1000">The best booking system</p>
                                                            <p className="neutral-500">I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.</p>
                                                        </div>
                                                        <div className="card-top">
                                                            <div className="card-author">
                                                                <div className="card-image"> <img src="/assets/imgs/page/homepage1/author2.png" alt="Travila" /></div>
                                                                <div className="card-info">
                                                                    <p className="text-lg-bold neutral-1000">Atend John</p>
                                                                    <p className="text-sm neutral-1000">Califonia</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-rate"> <img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /></div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="card-testimonial background-card">
                                                        <div className="card-info">
                                                            <p className="text-xl-bold card-title neutral-1000">The best booking system</p>
                                                            <p className="neutral-500">I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.</p>
                                                        </div>
                                                        <div className="card-top">
                                                            <div className="card-author">
                                                                <div className="card-image"> <img src="/assets/imgs/page/homepage1/author.png" alt="Travila" /></div>
                                                                <div className="card-info">
                                                                    <p className="text-lg-bold neutral-1000">Sara Mohamed</p>
                                                                    <p className="text-sm neutral-1000">Jakatar</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-rate"> <img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /></div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="card-testimonial background-card">
                                                        <div className="card-info">
                                                            <p className="text-xl-bold card-title neutral-1000">The best booking system</p>
                                                            <p className="neutral-500">I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.</p>
                                                        </div>
                                                        <div className="card-top">
                                                            <div className="card-author">
                                                                <div className="card-image"> <img src="/assets/imgs/page/homepage1/author2.png" alt="Travila" /></div>
                                                                <div className="card-info">
                                                                    <p className="text-lg-bold neutral-1000">Sara Mohamed</p>
                                                                    <p className="text-sm neutral-1000">Jakatar</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-rate"> <img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /><img src="/assets/imgs/template/icons/star.svg" alt="Travila" /></div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-media background-body">
                        <div className="container-media wow fadeInUp"> <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" /></div>
                    </section>
                </main>

            </Layout>
        </>
    )
}