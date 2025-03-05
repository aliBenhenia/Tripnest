
import Link from "next/link"
import VideoPopup from '../elements/VideoPopup'

export default function VideoGallery() {
	return (
		<>

			<section className="section-box box-video-gallery">
				<div className="container">
					<div className="text-center wow fadeInUp">
						<div className="justify-content-center d-flex mb-5"> <span className="btn btn-brand-secondary">Video
							Gallery</span></div>
						<h3 className="color-white">Journey to the Most <br className="d-none d-lg-block" />Beautiful Places on Earth
						</h3>
					</div>
					<div className="row mt-65">
						<div className="col-lg-5 wow fadeInUp">
							<div className="card-video">
								<div className="card-image"><VideoPopup vdocls="btn btn-play popup-youtube" /><img src="/assets/imgs/page/homepage3/video.png" alt="Travila" /></div>
							</div>
						</div>
						<div className="col-lg-3 wow fadeInUp">
							<div className="card-video card-video-small">
								<div className="card-image"><VideoPopup vdocls="btn btn-play popup-youtube" /><img src="/assets/imgs/page/homepage3/video2.png" alt="Travila" /></div>
							</div>
							<div className="card-video card-video-small">
								<div className="card-image"><VideoPopup vdocls="btn btn-play popup-youtube" /><img src="/assets/imgs/page/homepage3/video3.png" alt="Travila" /></div>
							</div>
						</div>
						<div className="col-lg-4 wow fadeInUp">
							<div className="card-video card-video-small">
								<div className="card-image"><VideoPopup vdocls="btn btn-play popup-youtube" /><img src="/assets/imgs/page/homepage3/video4.png" alt="Travila" /></div>
							</div>
							<div className="card-video card-video-small">
								<div className="card-image"><VideoPopup vdocls="btn btn-play popup-youtube" /><img src="/assets/imgs/page/homepage3/video5.png" alt="Travila" /></div>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-center mt-35 wow fadeInUp"><Link className="btn btn-brand-secondary" href="#">
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
						</svg>Load More Tours</Link></div>
				</div>
			</section>
		</>
	)
}
