
'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroupAnimate } from "@/util/swiperOption"
export default function Testimonials3() {
    return (
        <>

            <section className="section-box box-testimonials-2 box-testimonials-3 background-9">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-9 col-sm-9 wow fadeInUp">
                            <h2 className="mt-8 mb-15 neutral-1000">They Love Travila</h2>
                            <p className="text-xl-medium neutral-500">What our clients are saying about us?</p>
                        </div>
                        <div className="col-md-3 col-sm-3 wow fadeInUp">
                            <div className="box-button-slider box-button-slider-team text-end">
                                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                        <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                        <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-testimonials wow fadeIn">
                    <div className="container-testimonials">
                        <div className="container-slider">
                            <div className="box-swiper mt-30">
                                <div className="swiper-container swiper-group-animate swiper-group-journey">
                                    <Swiper {...swiperGroupAnimate}>
                                        <SwiperSlide>
                                            <div className="card-testimonial background-card">
                                                <div className="card-info">
                                                    <p className="text-xl-bold card-title neutral-1000">The best booking system
                                                    </p>
                                                    <p className="neutral-500">I've been using the hotel booking system for
                                                        several years now, and it's become my go-to platform for planning my
                                                        trips. The interface is user-friendly, and I appreciate the detailed
                                                        information and real-time availability of hotels.</p>
                                                </div>
                                                <div className="card-top">
                                                    <div className="card-author">
                                                        <div className="card-image"> <img src="/assets/imgs/page/homepage1/author.png" alt="Travila" />
                                                        </div>
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
                                                    <p className="text-xl-bold card-title neutral-1000">The best booking system
                                                    </p>
                                                    <p className="neutral-500">I've been using the hotel booking system for
                                                        several years now, and it's become my go-to platform for planning my
                                                        trips. The interface is user-friendly, and I appreciate the detailed
                                                        information and real-time availability of hotels.</p>
                                                </div>
                                                <div className="card-top">
                                                    <div className="card-author">
                                                        <div className="card-image"> <img src="/assets/imgs/page/homepage1/author2.png" alt="Travila" />
                                                        </div>
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
                                                    <p className="text-xl-bold card-title neutral-1000">The best booking system
                                                    </p>
                                                    <p className="neutral-500">I've been using the hotel booking system for
                                                        several years now, and it's become my go-to platform for planning my
                                                        trips. The interface is user-friendly, and I appreciate the detailed
                                                        information and real-time availability of hotels.</p>
                                                </div>
                                                <div className="card-top">
                                                    <div className="card-author">
                                                        <div className="card-image"> <img src="/assets/imgs/page/homepage1/author.png" alt="Travila" />
                                                        </div>
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
                                                    <p className="text-xl-bold card-title neutral-1000">The best booking system
                                                    </p>
                                                    <p className="neutral-500">I've been using the hotel booking system for
                                                        several years now, and it's become my go-to platform for planning my
                                                        trips. The interface is user-friendly, and I appreciate the detailed
                                                        information and real-time availability of hotels.</p>
                                                </div>
                                                <div className="card-top">
                                                    <div className="card-author">
                                                        <div className="card-image"> <img src="/assets/imgs/page/homepage1/author2.png" alt="Travila" />
                                                        </div>
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
        </>
    )
}
