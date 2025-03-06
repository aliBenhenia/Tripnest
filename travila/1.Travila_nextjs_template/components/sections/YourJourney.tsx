'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroupAnimate } from "@/util/swiperOption"
import Link from "next/link"
import Countdown from '../elements/Countdown'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Activity, moroccoActivities } from '@/data/moroccoActivities'

export default function YourJourney() {
	const [activities, setActivities] = useState<Activity[]>([])
	const [loading, setLoading] = useState(true)
	const currentTime = new Date()

	useEffect(() => {
		// Simulate API fetch - replace with actual API call if available
		const fetchActivities = async () => {
			try {
				// In a real app, this would be an API call
				// const response = await fetch('/api/morocco-activities')
				// const data = await response.json()
				setActivities(moroccoActivities)
			} catch (error) {
				console.error('Error fetching activities:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchActivities()
	}, [])

	const renderStars = (rating: number) => {
		const stars = []
		const fullStars = Math.floor(rating)
		const hasHalfStar = rating % 1 >= 0.5

		for (let i = 0; i < 5; i++) {
			if (i < fullStars) {
				stars.push(
					<svg key={i} className="star-icon" width="16" height="16" viewBox="0 0 16 16" fill="#FFB800">
						<path d="M8 0L10.2571 5.08359L16 5.90983L12 9.89453L12.9443 16L8 13.0836L3.05573 16L4 9.89453L0 5.90983L5.74291 5.08359L8 0Z"/>
					</svg>
				)
			} else if (i === fullStars && hasHalfStar) {
				stars.push(
					<svg key={i} className="star-icon" width="16" height="16" viewBox="0 0 16 16">
						<defs>
							<linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
								<stop offset="50%" stopColor="#FFB800"/>
								<stop offset="50%" stopColor="#D9D9D9"/>
							</linearGradient>
						</defs>
						<path fill="url(#half-star)" d="M8 0L10.2571 5.08359L16 5.90983L12 9.89453L12.9443 16L8 13.0836L3.05573 16L4 9.89453L0 5.90983L5.74291 5.08359L8 0Z"/>
					</svg>
				)
			} else {
				stars.push(
					<svg key={i} className="star-icon" width="16" height="16" viewBox="0 0 16 16" fill="#D9D9D9">
						<path d="M8 0L10.2571 5.08359L16 5.90983L12 9.89453L12.9443 16L8 13.0836L3.05573 16L4 9.89453L0 5.90983L5.74291 5.08359L8 0Z"/>
					</svg>
				)
			}
		}
		return stars
	}

	if (loading) {
		return (
			<div className="loading-container">
				<div className="loading-spinner"></div>
				<p>Loading amazing Moroccan experiences...</p>
			</div>
		)
	}

	return (
		<>
			<section className="section-box box-your-journey background-body">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-md-9 mb-30">
							<h1 className="neutral-1000 mb-15">Discover Magical Morocco</h1>
							<h6 className="heading-6-medium neutral-400">Experience the Rich Culture, Ancient History, and Stunning Landscapes of Morocco</h6>
						</div>
						<div className="col-md-3 position-relative mb-30">
							<div className="box-button-slider box-button-slider-team justify-content-end">
								<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
										<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
										<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-slider">
					<div className="box-swiper mt-30">
						<div className="swiper-container swiper-group-animate swiper-group-journey">
							<Swiper {...swiperGroupAnimate} breakpoints={{
								320: { slidesPerView: 1, spaceBetween: 15 },
								640: { slidesPerView: 2, spaceBetween: 20 },
								1024: { slidesPerView: 3, spaceBetween: 25 },
								1200: { slidesPerView: 4, spaceBetween: 30 },
							}}>
								{activities.map((activity) => (
									<SwiperSlide key={activity.id}>
										<Link href={`/tour-detail/${activity.id}`} className="card-journey hover-up">
											<div className="card-image">
												<div className="image-wrapper">
													<img 
														src={activity.image}
														alt={activity.title}
														className="journey-img"
													/>
													<div className="image-overlay"></div>
												</div>
												<div className="tour-highlights">
													{activity.featured && (
														<span className="badge-primary">Featured</span>
													)}
													{activity.id === 'marrakech' && (
														<div className="box-countdown">
															<div className="box-count box-count-date">
																<Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
															</div>
														</div>
													)}
												</div>
											</div>
											<div className="card-info">
												<div className="card-title">
													<h6 className="heading-6-medium neutral-1000">{activity.title}</h6>
													<div className="rating">
														<div className="stars-container">
															{renderStars(activity.rating)}
														</div>
														<span className="text-sm-medium neutral-700">
															{activity.rating.toFixed(2)} ({activity.reviews})
														</span>
													</div>
												</div>
												<p className="tour-description text-sm-regular neutral-600">
													{activity.description}
												</p>
												<div className="tour-meta">
													<div className="meta-item">
														<svg width={16} height={16} viewBox="0 0 16 16" fill="none">
															<path d="M8.00004 0.5C3.85804 0.5 0.5 3.858 0.5 8C0.5 12.142 3.85804 15.5 8.00004 15.5C12.142 15.5 15.5 12.142 15.5 8C15.5 3.858 12.142 0.5 8.00004 0.5Z" fill="#425066" />
														</svg>
														<span>{activity.duration.text}</span>
													</div>
													<div className="meta-item">
														<svg width={16} height={16} viewBox="0 0 16 16" fill="none">
															<path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0Z" fill="#425066" />
														</svg>
														<span>{activity.maxGroupSize} people max</span>
													</div>
													<div className="meta-item">
														<svg width={16} height={16} viewBox="0 0 16 16" fill="none">
															<path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0Z" fill="#425066" />
														</svg>
														<span>{activity.type}</span>
													</div>
												</div>
												<div className="card-footer">
													<div className="price">
														<span className="text-sm-regular neutral-700">From</span>
														<span className="text-lg-bold neutral-1000">${activity.price}</span>
													</div>
													<button className="btn-view-details">View Details</button>
												</div>
											</div>
										</Link>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				.card-journey {
					display: block;
					background: #fff;
					border-radius: 16px;
					overflow: hidden;
					box-shadow: 0 4px 12px rgba(0,0,0,0.08);
					transition: all 0.3s ease;
				}

				.hover-up:hover {
					transform: translateY(-5px);
					box-shadow: 0 8px 24px rgba(0,0,0,0.12);
				}

				.image-wrapper {
					position: relative;
					padding-top: 75%; /* 4:3 aspect ratio */
					overflow: hidden;
				}

				.journey-img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: transform 0.3s ease;
				}

				.image-overlay {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					height: 50%;
					background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.5));
				}

				.tour-highlights {
					position: absolute;
					top: 15px;
					left: 15px;
					right: 15px;
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
				}

				.badge-primary {
					background: var(--primary-color);
					color: white;
					padding: 4px 12px;
					border-radius: 20px;
					font-size: 12px;
					font-weight: 600;
				}

				.card-info {
					padding: 20px;
				}

				.rating {
					display: flex;
					align-items: center;
					gap: 8px;
				}

				.stars-container {
					display: flex;
					gap: 2px;
				}

				.star-icon {
					width: 16px;
					height: 16px;
				}

				.tour-description {
					margin: 10px 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				.tour-meta {
					display: flex;
					flex-wrap: wrap;
					gap: 12px;
					margin: 15px 0;
				}

				.meta-item {
					display: flex;
					align-items: center;
					gap: 6px;
					font-size: 12px;
					color: var(--neutral-600);
				}

				.card-footer {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 15px;
					padding-top: 15px;
					border-top: 1px solid var(--neutral-200);
				}

				.btn-view-details {
					background: var(--primary-color);
					color: white;
					padding: 8px 16px;
					border-radius: 8px;
					font-size: 14px;
					font-weight: 600;
					border: none;
					cursor: pointer;
					transition: background 0.3s ease;
				}

				.btn-view-details:hover {
					background: var(--primary-600);
				}

				.loading-container {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					min-height: 300px;
				}

				.loading-spinner {
					width: 40px;
					height: 40px;
					border: 3px solid #f3f3f3;
					border-top: 3px solid var(--primary-color);
					border-radius: 50%;
					animation: spin 1s linear infinite;
					margin-bottom: 16px;
				}

				@keyframes spin {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}

				@media (max-width: 768px) {
					.card-journey {
						margin: 0 auto;
						max-width: 400px;
					}

					.tour-meta {
						gap: 8px;
					}

					.card-info {
						padding: 15px;
					}
				}
			`}</style>
		</>
	)
}


