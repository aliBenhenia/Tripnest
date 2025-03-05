
import Link from "next/link"
import SwiperGroup8Slider from '../slider/SwiperGroup8Slider'

export default function PopularDestinations2() {
    return (
        <>

            <section className="section-box box-popular-destinations background-body">
                <div className="container">
                    <div className="text-center">
                        <h4 className="neutral-1000 wow fadeInUp">Popular Destinations</h4>
                        <p className="text-xl-medium neutral-500 wow fadeInUp">Navigate the Globe with Confidence</p>
                    </div>
                    <div className="box-swiper box-swiper-pd mt-30 wow fadeInDown">
                        <div className="swiper-container swiper-group-8">
						<SwiperGroup8Slider />
                        </div>
                        <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round"> </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
