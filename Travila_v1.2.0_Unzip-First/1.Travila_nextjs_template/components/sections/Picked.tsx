
import Link from "next/link"
import VideoPopup from '../elements/VideoPopup'

export default function Picked() {
	return (
		<>

			<section className="section-box box-picked background-body">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-md-9 mb-30 wow fadeInUp">
							<h2 className="neutral-1000">Picked by Travila</h2>
							<p className="text-xl-medium neutral-500">Quality as judged by customers. Book at the ideal price!
							</p>
						</div>
						<div className="col-md-3 mb-30 wow fadeInUp">
							<div className="d-flex justify-content-center justify-content-md-end"><Link className="btn btn-black-lg" href="/activities">View More
								<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
								</svg></Link></div>
						</div>
					</div>
					<div className="box-videos-small wow fadeInUp">
						<div className="bg-video background-2" />
						<div className="row">
							<div className="col-lg-7">
								<div className="card-grid-video">
									<div className="card-image">
										<VideoPopup vdocls="btn btn-play popup-youtube" />
										<img className="mr-10" src="/assets/imgs/page/homepage7/img-video.png" alt="Travile" /></div>
									<div className="card-info">
										<h4>The Venetian and The Palazzo - Las Vegas, USA</h4>
										<p className="text-md-medium">8 Resort. 24 rooms</p>
									</div>
								</div>
							</div>
							<div className="col-lg-5">
								<div className="list-videos-small">
									<div className="item-video-small">
										<div className="item-image">
											<VideoPopup vdocls="btn btn-play-sm popup-youtube" />

											<img className="mr-10" src="/assets/imgs/page/homepage7/img-video.png" alt="Travile" /></div>
										<div className="item-info"> <Link className="heading-6" href="/activities">The Burj Al Arab
											Dubai, UAE</Link>
											<p className="text-md-medium neutral-500">8 Resort. 24 rooms</p>
										</div>
									</div>
									<div className="item-video-small">
										<div className="item-image"><VideoPopup vdocls="btn btn-play-sm popup-youtube" /><img className="mr-10" src="/assets/imgs/page/homepage7/img-video2.png" alt="Travile" /></div>
										<div className="item-info"> <Link className="heading-6" href="/activities">Wynn Las Vegas
											Las Vegas, USA</Link>
											<p className="text-md-medium neutral-500">8 Resort. 24 rooms</p>
										</div>
									</div>
									<div className="item-video-small">
										<div className="item-image"><VideoPopup vdocls="btn btn-play-sm popup-youtube" /><img className="mr-10" src="/assets/imgs/page/homepage7/img-video3.png" alt="Travile" /></div>
										<div className="item-info"> <Link className="heading-6" href="/activities">MGM Grand Las
											Vegas, USA</Link>
											<p className="text-md-medium neutral-500">8 Resort. 24 rooms</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
