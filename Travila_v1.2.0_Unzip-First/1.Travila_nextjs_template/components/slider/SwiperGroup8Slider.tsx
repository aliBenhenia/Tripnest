'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroup8 } from "@/util/swiperOption"
import Link from 'next/link'

export default function SwiperGroup8Slider() {
	return (
		<>
			<Swiper {...swiperGroup8}>
				<SwiperSlide>
					<div className="card-popular-destination">
						<div className="card-image"> <img src="/assets/imgs/page/homepage3/eiffel-tower.png" alt="Travila" /></div>
						<div className="card-info"> <Link className="text-sm-bold" href="#">Eiffel Tower</Link>
							<p className="text-xs neutral-500">356 Tours</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-popular-destination">
						<div className="card-image"> <img src="/assets/imgs/page/homepage3/MachuPicchu.png" alt="Travila" /></div>
						<div className="card-info"> <Link className="text-sm-bold" href="#">Machu Picchu</Link>
							<p className="text-xs neutral-500">356 Tours</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-popular-destination">
						<div className="card-image"> <img src="/assets/imgs/page/homepage3/GreatWall.png" alt="Travila" /></div>
						<div className="card-info"> <Link className="text-sm-bold" href="#">Great Wall</Link>
							<p className="text-xs neutral-500">356 Tours</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-popular-destination">
						<div className="card-image"> <img src="/assets/imgs/page/homepage3/StatueofLiberty.png" alt="Travila" /></div>
						<div className="card-info"> <Link className="text-sm-bold" href="#">Statue of Liberty</Link>
							<p className="text-xs neutral-500">356 Tours</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-popular-destination">
						<div className="card-image"> <img src="/assets/imgs/page/homepage3/TajMahal.png" alt="Travila" /></div>
						<div className="card-info"> <Link className="text-sm-bold" href="#">Taj Mahal</Link>
							<p className="text-xs neutral-500">356 Tours</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-popular-destination">
						<div className="card-image"> <img src="/assets/imgs/page/homepage3/OperaHouse.png" alt="Travila" /></div>
						<div className="card-info"> <Link className="text-sm-bold" href="#">Opera House</Link>
							<p className="text-xs neutral-500">356 Tours</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-popular-destination">
						<div className="card-image"> <img src="/assets/imgs/page/homepage3/Colosseum.png" alt="Travila" /></div>
						<div className="card-info"> <Link className="text-sm-bold" href="#">Colosseum</Link>
							<p className="text-xs neutral-500">356 Tours</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-popular-destination">
						<div className="card-image"> <img src="/assets/imgs/page/homepage3/GrandCanyon.png" alt="Travila" /></div>
						<div className="card-info"> <Link className="text-sm-bold" href="#">Grand Canyon</Link>
							<p className="text-xs neutral-500">356 Tours</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card-popular-destination">
						<div className="card-image"> <img src="/assets/imgs/page/homepage3/StatueofLiberty.png" alt="Travila" /></div>
						<div className="card-info"> <Link className="text-sm-bold" href="#">Statue of Liberty</Link>
							<p className="text-xs neutral-500">356 Tours</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
