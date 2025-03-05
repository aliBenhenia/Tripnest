'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroup2 } from "@/util/swiperOption"
import Link from "next/link"

export default function Flights2() {
    return (
        <>

            <section className="section-box box-flights background-body">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-9 mb-30 wow fadeInUp">
                            <h2 className="title-svg neutral-1000 mb-15">
                                <svg width={27} height={39} viewBox="0 0 27 39" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9721 38.9991C8.7171 38.9991 4.81518 36.9218 2.26676 33.3001C-2.75855 26.158 2.51539 14.3625 2.74208 13.8636C2.9258 13.4594 3.52612 13.5316 3.60747 13.9699C3.76126 14.8015 4.29256 16.7779 5.15293 17.7806C5.10151 14.7925 5.50964 5.77322 11.837 0.116751C12.0555 -0.0784021 12.5434 -0.0722321 12.6046 0.489233C12.7694 2.00841 13.5182 7.07279 16.2396 8.45395C16.5072 8.59014 19.041 11.7859 19.4825 14.7516C19.9265 14.1746 20.5412 12.9299 20.8221 10.3182C20.8639 9.92925 21.3458 9.7702 21.6118 10.0561C21.708 10.1596 31.1506 20.547 24.5663 32.0572C22.0801 36.4045 17.7458 38.9991 12.9718 38.9991H12.9721Z" fill="#FFA725" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.6808 35.7816C16.2031 35.7816 18.5162 34.5504 20.0269 32.4035C23.0058 28.1695 19.8795 21.1774 19.7451 20.8817C19.6361 20.642 19.2803 20.6849 19.2321 20.9448C19.1409 21.4377 18.826 22.6093 18.316 23.2036C18.3464 21.4322 18.1046 16.0858 14.3538 12.7326C14.2242 12.6169 13.9351 12.6206 13.8988 12.9533C13.801 13.8539 13.3572 16.8559 11.7439 17.6747C11.5853 17.7554 10.0832 19.65 9.82136 21.408C9.5581 21.0659 9.19362 20.328 9.02726 18.7798C9.00235 18.5492 8.71671 18.4548 8.55926 18.6244C8.50213 18.6859 2.90484 24.8435 6.80791 31.6665C8.28184 34.2435 10.8511 35.7816 13.6812 35.7816H13.6808Z" fill="#FF871E" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.85986 33.1274C9.45699 33.1274 9.24767 32.6357 9.53674 32.3471L16.8513 25.0323C17.2775 24.6061 17.9233 25.2537 17.498 25.6787L10.1832 32.9935C10.0939 33.0829 9.97709 33.1274 9.85986 33.1274Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.1965 28.6139C8.66976 28.6139 8.66816 24.77 11.196 24.77C13.7241 24.77 13.7229 28.6139 11.1965 28.6139ZM11.1965 25.6834C10.3041 25.6834 9.84959 26.7698 10.4835 27.4041C11.4056 28.3264 12.8596 26.93 11.9092 25.9789C11.7189 25.7881 11.4659 25.6834 11.1965 25.6834Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.839 33.2555C13.3121 33.2555 13.3109 29.4119 15.839 29.4119C18.3668 29.4119 18.3666 33.2555 15.839 33.2555ZM15.839 30.3252C14.9464 30.3252 14.4923 31.4116 15.1262 32.046C16.0481 32.9685 17.5021 31.5713 16.552 30.6207C16.3616 30.4299 16.1082 30.3252 15.839 30.3252Z" fill="white" />
                                </svg>Best Deal Hotels
                            </h2>
                            <p className="text-xl-medium neutral-500">Quality as judged by customers. Book at the ideal price!
                            </p>
                        </div>
                        <div className="col-md-3 position-relative mb-30 wow fadeInUp">
                            <div className="box-button-slider box-button-slider-team justify-content-end">
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
                    <div className="block-flights wow fadeInUp">
                        <div className="box-swiper mt-30">
                            <div className="swiper-container swiper-group-2 swiper-group-journey">
                                <Swiper {...swiperGroup2}>
                                    <SwiperSlide>
                                        <div className="card-flight card-hotel background-card">
                                            <div className="card-image"> <Link className="wish" href="#">
                                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                </svg></Link><img src="/assets/imgs/page/homepage7/img-hotel.png" alt="Travila" /></div>
                                            <div className="card-info">
                                                <label className="sale-lbl">-25%</label><Link className="btn btn-label-tag background-1" href="#">Luxury </Link>
                                                <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail-2">Fairmont Resort, Dubai, United Arab
                                                    Emirates </Link></div>
                                                <div className="card-program">
                                                    <div className="card-location">
                                                        <p className="text-location text-md-medium neutral-500">Dubai, UAE</p>
                                                        <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" />
                                                        </p>
                                                    </div>
                                                    <div className="endtime">
                                                        <div className="card-price">
                                                            <h6 className="heading-6 neutral-1000">$148.25</h6>
                                                            <p className="text-md-medium neutral-500">/ night</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail-2">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-flight card-hotel background-card">
                                            <div className="card-image"> <Link className="wish" href="#">
                                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                </svg></Link><img src="/assets/imgs/page/homepage7/img-hotel3.png" alt="Travila" /></div>
                                            <div className="card-info">
                                                <label className="sale-lbl">-27%</label><Link className="btn btn-label-tag background-3" href="#">Business </Link>
                                                <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail-2">Fairmont Resort, Dubai, United Arab
                                                    Emirates </Link></div>
                                                <div className="card-program">
                                                    <div className="card-location">
                                                        <p className="text-location text-md-medium neutral-500">Dubai, UAE</p>
                                                        <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" />
                                                        </p>
                                                    </div>
                                                    <div className="endtime">
                                                        <div className="card-price">
                                                            <h6 className="heading-6 neutral-1000">$148.25</h6>
                                                            <p className="text-md-medium neutral-500">/ night</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail-2">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-flight card-hotel background-card">
                                            <div className="card-image"> <Link className="wish" href="#">
                                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                </svg></Link><img src="/assets/imgs/page/homepage7/img-hotel2.png" alt="Travila" /></div>
                                            <div className="card-info">
                                                <label className="sale-lbl">-28%</label><Link className="btn btn-label-tag background-2" href="#">Family </Link>
                                                <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail-2">Fairmont Resort, Dubai, United Arab
                                                    Emirates </Link></div>
                                                <div className="card-program">
                                                    <div className="card-location">
                                                        <p className="text-location text-md-medium neutral-500">Dubai, UAE</p>
                                                        <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" />
                                                        </p>
                                                    </div>
                                                    <div className="endtime">
                                                        <div className="card-price">
                                                            <h6 className="heading-6 neutral-1000">$148.25</h6>
                                                            <p className="text-md-medium neutral-500">/ night</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail-2">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-flight card-hotel background-card">
                                            <div className="card-image"> <Link className="wish" href="#">
                                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                </svg></Link><img src="/assets/imgs/page/homepage7/img-hotel4.png" alt="Travila" /></div>
                                            <div className="card-info">
                                                <label className="sale-lbl">-35%</label><Link className="btn btn-label-tag background-9" href="#">Standard </Link>
                                                <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail-2">Fairmont Resort, Dubai, United Arab
                                                    Emirates </Link></div>
                                                <div className="card-program">
                                                    <div className="card-location">
                                                        <p className="text-location text-md-medium neutral-500">Dubai, UAE</p>
                                                        <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" />
                                                        </p>
                                                    </div>
                                                    <div className="endtime">
                                                        <div className="card-price">
                                                            <h6 className="heading-6 neutral-1000">$148.25</h6>
                                                            <p className="text-md-medium neutral-500">/ night</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail-2">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-flight card-hotel background-card">
                                            <div className="card-image"> <Link className="wish" href="#">
                                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                </svg></Link><img src="/assets/imgs/page/homepage7/img-hotel.png" alt="Travila" /></div>
                                            <div className="card-info">
                                                <label className="sale-lbl">-25%</label><Link className="btn btn-label-tag background-1" href="#">Luxury </Link>
                                                <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail-2">Fairmont Resort, Dubai, United Arab
                                                    Emirates </Link></div>
                                                <div className="card-program">
                                                    <div className="card-location">
                                                        <p className="text-location text-md-medium neutral-500">Dubai, UAE</p>
                                                        <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" />
                                                        </p>
                                                    </div>
                                                    <div className="endtime">
                                                        <div className="card-price">
                                                            <h6 className="heading-6 neutral-1000">$148.25</h6>
                                                            <p className="text-md-medium neutral-500">/ night</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail-2">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-flight card-hotel background-card">
                                            <div className="card-image"> <Link className="wish" href="#">
                                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                </svg></Link><img src="/assets/imgs/page/homepage7/img-hotel3.png" alt="Travila" /></div>
                                            <div className="card-info">
                                                <label className="sale-lbl">-27%</label><Link className="btn btn-label-tag background-3" href="#">Business </Link>
                                                <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail-2">Fairmont Resort, Dubai, United Arab
                                                    Emirates </Link></div>
                                                <div className="card-program">
                                                    <div className="card-location">
                                                        <p className="text-location text-md-medium neutral-500">Dubai, UAE</p>
                                                        <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" />
                                                        </p>
                                                    </div>
                                                    <div className="endtime">
                                                        <div className="card-price">
                                                            <h6 className="heading-6 neutral-1000">$148.25</h6>
                                                            <p className="text-md-medium neutral-500">/ night</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail-2">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-flight card-hotel background-card">
                                            <div className="card-image"> <Link className="wish" href="#">
                                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                </svg></Link><img src="/assets/imgs/page/homepage7/img-hotel2.png" alt="Travila" /></div>
                                            <div className="card-info">
                                                <label className="sale-lbl">-28%</label><Link className="btn btn-label-tag background-2" href="#">Family </Link>
                                                <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail-2">Fairmont Resort, Dubai, United Arab
                                                    Emirates </Link></div>
                                                <div className="card-program">
                                                    <div className="card-location">
                                                        <p className="text-location text-md-medium neutral-500">Dubai, UAE</p>
                                                        <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" />
                                                        </p>
                                                    </div>
                                                    <div className="endtime">
                                                        <div className="card-price">
                                                            <h6 className="heading-6 neutral-1000">$148.25</h6>
                                                            <p className="text-md-medium neutral-500">/ night</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail-2">Book Now</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-flight card-hotel background-card">
                                            <div className="card-image"> <Link className="wish" href="#">
                                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                </svg></Link><img src="/assets/imgs/page/homepage7/img-hotel4.png" alt="Travila" /></div>
                                            <div className="card-info">
                                                <label className="sale-lbl">-35%</label><Link className="btn btn-label-tag background-9" href="#">Standard </Link>
                                                <div className="card-title"> <Link className="heading-6 neutral-1000" href="/hotel-detail-2">Fairmont Resort, Dubai, United Arab
                                                    Emirates </Link></div>
                                                <div className="card-program">
                                                    <div className="card-location">
                                                        <p className="text-location text-md-medium neutral-500">Dubai, UAE</p>
                                                        <p className="text-star"> <img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="light-mode" src="/assets/imgs/template/icons/star-black.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" /><img className="dark-mode" src="/assets/imgs/template/icons/star-w.svg" alt="Travila" />
                                                        </p>
                                                    </div>
                                                    <div className="endtime">
                                                        <div className="card-price">
                                                            <h6 className="heading-6 neutral-1000">$148.25</h6>
                                                            <p className="text-md-medium neutral-500">/ night</p>
                                                        </div>
                                                        <div className="card-button"> <Link className="btn btn-gray" href="/hotel-detail-2">Book Now</Link></div>
                                                    </div>
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
