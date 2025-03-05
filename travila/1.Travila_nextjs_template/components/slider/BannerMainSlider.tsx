'use client'
import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
	<button
		{...props}
		className={
			"slick-prev slick-arrow" +
			(currentSlide === 0 ? " slick-disabled" : "")
		}
		type="button"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="" strokeLinecap="round" strokeLinejoin="round"></path></svg>
	</button>
)
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
	<button
		{...props}
		className={
			"slick-next slick-arrow" +
			(currentSlide === slideCount - 1 ? " slick-disabled" : "")
		}
		type="button"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="" strokeLinecap="round" strokeLinejoin="round"> </path></svg>
	</button>
)


export default function BannerMainSlider() {
	const slider1 = useRef<Slider | null>(null)
	const slider2 = useRef<Slider | null>(null)
	const [nav1, setNav1] = useState<Slider | undefined>(undefined)
	const [nav2, setNav2] = useState<Slider | undefined>(undefined)

	useEffect(() => {
		setNav1(slider1.current ?? undefined)
		setNav2(slider2.current ?? undefined)
	}, [])

	const settingsMain = {
		asNavFor: nav2,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
	}

	const settingsThumbs = {
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: true,
		vertical: true,
		asNavFor: nav1,
	}

	return (
		<>

			<Slider {...settingsMain} ref={slider1} className="banner-main">
				<div className="banner-slide">
					<div className="banner-image">
						<div className="container"><span className="btn btn-brand-secondary">Discovery the World</span>
							<h1 className="mt-20 mb-20">Unleash Your Wanderlust<br className="d-none d-lg-block" />Book Your
								Next Journey</h1>
							<h6 className="heading-6-medium">Crafting Exceptional Journeys: Your Global Escape Planner.
								Unleash Your Wanderlust: Seamless Travel, Extraordinary Adventures</h6>
						</div>
					</div>
				</div>
				<div className="banner-slide">
					<div className="banner-image">
						<div className="container"><span className="btn btn-brand-secondary">Discovery the World</span>
							<h1 className="mt-20 mb-20">Unleash Your Wanderlust<br className="d-none d-lg-block" />Book Your
								Next Journey</h1>
							<h6 className="heading-6-medium">Crafting Exceptional Journeys: Your Global Escape Planner.
								Unleash Your Wanderlust: Seamless Travel, Extraordinary Adventures</h6>
						</div>
					</div>
				</div>
				<div className="banner-slide">
					<div className="banner-image">
						<div className="container"><span className="btn btn-brand-secondary">Discovery the World</span>
							<h1 className="mt-20 mb-20">Unleash Your Wanderlust<br className="d-none d-lg-block" />Book Your
								Next Journey</h1>
							<h6 className="heading-6-medium">Crafting Exceptional Journeys: Your Global Escape Planner.
								Unleash Your Wanderlust: Seamless Travel, Extraordinary Adventures</h6>
						</div>
					</div>
				</div>
				<div className="banner-slide">
					<div className="banner-image">
						<div className="container"><span className="btn btn-brand-secondary">Discovery the World</span>
							<h1 className="mt-20 mb-20">Unleash Your Wanderlust<br className="d-none d-lg-block" />Book Your
								Next Journey</h1>
							<h6 className="heading-6-medium">Crafting Exceptional Journeys: Your Global Escape Planner.
								Unleash Your Wanderlust: Seamless Travel, Extraordinary Adventures</h6>
						</div>
					</div>
				</div>
			</Slider>
			<div className="slider-thumnail">
				<Slider {...settingsThumbs} ref={slider2} className="slider-nav-thumbnails">
					<div className="banner-slide"><img src="/assets/imgs/page/homepage2/thumb.png" alt="Travila" /></div>
					<div className="banner-slide"><img src="/assets/imgs/page/homepage2/thumb2.png" alt="Travila" /></div>
					<div className="banner-slide"><img src="/assets/imgs/page/homepage2/thumb3.png" alt="Travila" /></div>
					<div className="banner-slide"><img src="/assets/imgs/page/homepage2/thumb.png" alt="Travila" /></div>
				</Slider>
			</div>
		</>
	)
}
