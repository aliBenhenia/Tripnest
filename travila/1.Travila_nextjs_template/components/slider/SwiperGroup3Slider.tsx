'use client'
import { swiperGroup3 } from "@/util/swiperOption"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"

export default function SwiperGroup3Slider() {
	return (
		<>
			<Swiper {...swiperGroup3}>
				<SwiperSlide>
					<div className="card-news background-card hover-up">
						<div className="card-image">
							<label className="label">Cultural</label><Link className="wish" href="#">
								<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
								</svg></Link><img src="/assets/imgs/page/homepage1/news.png" alt="Travila" />
						</div>
						<div className="card-info">
							<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
							<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</Link></div>
							<div className="card-program">
								<div className="endtime">
									<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
										<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
									</div>
									<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-news background-card hover-up">
						<div className="card-image">
							<label className="label">Travel</label><Link className="wish" href="#">
								<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
								</svg></Link><img src="/assets/imgs/page/homepage1/news2.png" alt="Travila" />
						</div>
						<div className="card-info">
							<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
							<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Top 10 Travel Hacks for Budget-Conscious Adventurers</Link></div>
							<div className="card-program">
								<div className="endtime">
									<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
										<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
									</div>
									<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-news background-card hover-up">
						<div className="card-image">
							<label className="label">Discovery</label><Link className="wish" href="#">
								<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
								</svg></Link><img src="/assets/imgs/page/homepage1/news3.png" alt="Travila" />
						</div>
						<div className="card-info">
							<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
							<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips</Link></div>
							<div className="card-program">
								<div className="endtime">
									<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
										<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
									</div>
									<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-news background-card hover-up">
						<div className="card-image">
							<label className="label">Travel</label><Link className="wish" href="#">
								<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
								</svg></Link><img src="/assets/imgs/page/homepage1/news2.png" alt="Travila" />
						</div>
						<div className="card-info">
							<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
							<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Top 10 Travel Hacks for Budget-Conscious Adventurers</Link></div>
							<div className="card-program">
								<div className="endtime">
									<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
										<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
									</div>
									<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-news background-card hover-up">
						<div className="card-image">
							<label className="label">Discovery</label><Link className="wish" href="#">
								<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
								</svg></Link><img src="/assets/imgs/page/homepage1/news3.png" alt="Travila" />
						</div>
						<div className="card-info">
							<div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
							<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips</Link></div>
							<div className="card-program">
								<div className="endtime">
									<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
										<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
									</div>
									<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
