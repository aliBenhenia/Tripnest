'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroup4 } from "@/util/swiperOption"
import Link from "next/link"

export default function PropertiesArea() {
    return (
        <>

            <section className="section-box box-properties-area background-3">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-9 col-md-9 mb-30 text-center text-lg-start wow fadeInUp">
                            <h2 className="neutral-1000">Properties by Area</h2>
                            <p className="text-xl-medium neutral-500">Quality as judged by customers. Book at the ideal price!
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-3 position-relative mb-30 wow fadeInUp">
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
                    <div className="box-list-featured">
                        <div className="box-swiper mt-0">
                            <div className="swiper-container swiper-group-4 swiper-group-journey">
                                <Swiper {...swiperGroup4}>
                                    <SwiperSlide>
                                        <div className="card-spot background-card wow fadeInDown">
                                            <div className="card-image"> <Link href="/rental-property-2"><img src="/assets/imgs/page/homepage9/area.png" alt="Travila" /></Link></div>
                                            <div className="card-info background-card">
                                                <div className="card-left">
                                                    <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/rental-property-2">Venice</Link></div>
                                                    <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356
                                                        Properties</Link></div>
                                                </div>
                                                <div className="card-right">
                                                    <div className="card-button"> <Link href="/rental-property-2">
                                                        <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-spot background-card wow fadeInDown">
                                            <div className="card-image"> <Link href="/rental-property-2"><img src="/assets/imgs/page/homepage9/area2.png" alt="Travila" /></Link></div>
                                            <div className="card-info background-card">
                                                <div className="card-left">
                                                    <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/rental-property-2">New York</Link></div>
                                                    <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356
                                                        Properties</Link></div>
                                                </div>
                                                <div className="card-right">
                                                    <div className="card-button"> <Link href="/rental-property-2">
                                                        <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-spot background-card wow fadeInDown">
                                            <div className="card-image"> <Link href="/rental-property-2"><img src="/assets/imgs/page/homepage9/area3.png" alt="Travila" /></Link></div>
                                            <div className="card-info background-card">
                                                <div className="card-left">
                                                    <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/rental-property-2">Amsterdam</Link></div>
                                                    <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356
                                                        Properties</Link></div>
                                                </div>
                                                <div className="card-right">
                                                    <div className="card-button"> <Link href="/rental-property-2">
                                                        <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-spot background-card wow fadeInDown">
                                            <div className="card-image"> <Link href="/rental-property-2"><img src="/assets/imgs/page/homepage9/area4.png" alt="Travila" /></Link></div>
                                            <div className="card-info background-card">
                                                <div className="card-left">
                                                    <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/rental-property-2">Budapest</Link></div>
                                                    <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356
                                                        Properties</Link></div>
                                                </div>
                                                <div className="card-right">
                                                    <div className="card-button"> <Link href="/rental-property-2">
                                                        <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
