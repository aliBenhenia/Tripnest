
import Link from "next/link"
import VideoPopup from '../elements/VideoPopup'

export default function BannerHome9() {
	return (
		<>

			<section className="box-section block-banner-home10">
				<div className="container">
					<p className="text-with-img mb-30"> <img src="/assets/imgs/page/homepage10/earth.png" alt="Travila" />The Best
						Booking System</p>
					<h1 className="color-white mb-20">Find The Best Flight <br className="d-none d-lg-block" />For The Amazing Places
					</h1>
					<ul className="list-ticks-green">
						<li>Intuitive User Interface</li>
						<li>Transparent Booking Process</li>
						<li>Exceptional Customer Support</li>
					</ul>
					<div className="box-buttons-banner mt-65"> <Link className="btn btn-brand-secondary" href="/contact">Contact Us
						<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 19L19 12L12 5M19 12L5 12" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
						</svg></Link>
						<VideoPopup vdocls="btn btn-how-work color-white popup-youtube" style5 />
					</div>
				</div>
			</section>
		</>
	)
}
