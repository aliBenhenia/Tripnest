
import Link from "next/link"
import SwiperGroup3Slider from '../slider/SwiperGroup3Slider'

export default function SlideBanner2() {
    return (
        <>

            <section className="section-box box-slide-banner background-body">
                <div className="container">
                    <div className="box-swiper mt-30">
                        <div className="swiper-container swiper-group-3 swiper-group-journey">
						<SwiperGroup3Slider />
                        </div>
                        <div className="box-button-slider box-button-slider-team">
                            <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                    <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                    <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
