'use client'
import BookingForm from '@/components/elements/BookingForm'
import Layout from "@/components/layout/Layout"
import SwiperGroup3Slider from '@/components/slider/SwiperGroup3Slider'
import { swiperGroup1 } from "@/util/swiperOption"
import Link from "next/link"
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
export default function TourDetail3() {
	const [isAccordion, setIsAccordion] = useState(null)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<main className="main">
					<section className="box-section box-breadcrumb background-body">
						<div className="container">
							<ul className="breadcrumbs">
								<li> <Link href="/">Home</Link><span className="arrow-right">
									<svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg></span></li>
								<li> <Link href="/destination">Tours</Link><span className="arrow-right">
									<svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg></span></li>
								<li> <span className="text-breadcrumb">The High Roller Experience: Tickets for The LINQ Observation Wheel, Las Vegas Strip</span></li>
							</ul>
						</div>
					</section>
					<section className="box-section box-content-tour-detail background-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-8">
									<div className="tour-header">
										<div className="tour-rate">
											<div className="rate-element"><span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span></div>
										</div>
										<div className="tour-title-main">
											<h4 className="neutral-1000">The High Roller Experience: Tickets for The LINQ Observation Wheel, Las Vegas Strip</h4>
										</div>
										<div className="tour-metas">
											<div className="tour-meta-left">
												<p className="text-md-medium neutral-500 mr-20 tour-location">
													<svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.99967 0C2.80452 0 0.205078 2.59944 0.205078 5.79456C0.205078 9.75981 5.39067 15.581 5.61145 15.8269C5.81883 16.0579 6.18089 16.0575 6.38789 15.8269C6.60867 15.581 11.7943 9.75981 11.7943 5.79456C11.7942 2.59944 9.1948 0 5.99967 0ZM5.99967 8.70997C4.39211 8.70997 3.0843 7.40212 3.0843 5.79456C3.0843 4.187 4.39214 2.87919 5.99967 2.87919C7.6072 2.87919 8.91502 4.18703 8.91502 5.79459C8.91502 7.40216 7.6072 8.70997 5.99967 8.70997Z" />
													</svg>Las Vegas, USA
												</p><Link className="text-md-medium neutral-1000 mr-30" href="#">Show on map</Link>
											</div>
											<div className="tour-meta-right"> <Link className="btn btn-share" href="#">
												<svg width={16} height={18} viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
													<path d="M13 11.5332C12.012 11.5332 11.1413 12.0193 10.5944 12.7584L5.86633 10.3374C5.94483 10.0698 6 9.79249 6 9.49989C6 9.10302 5.91863 8.72572 5.77807 8.37869L10.7262 5.40109C11.2769 6.04735 12.0863 6.46655 13 6.46655C14.6543 6.46655 16 5.12085 16 3.46655C16 1.81225 14.6543 0.466553 13 0.466553C11.3457 0.466553 10 1.81225 10 3.46655C10 3.84779 10.0785 4.20942 10.2087 4.54515L5.24583 7.53149C4.69563 6.90442 3.8979 6.49989 3 6.49989C1.3457 6.49989 0 7.84559 0 9.49989C0 11.1542 1.3457 12.4999 3 12.4999C4.00433 12.4999 4.8897 11.9996 5.4345 11.2397L10.147 13.6529C10.0602 13.9331 10 14.2249 10 14.5332C10 16.1875 11.3457 17.5332 13 17.5332C14.6543 17.5332 16 16.1875 16 14.5332C16 12.8789 14.6543 11.5332 13 11.5332Z" />
												</svg>Share</Link><Link className="btn btn-wishlish" href="#">
													<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" clipRule="evenodd" d="M2.2222 2.3638C4.34203 0.243977 7.65342 0.0419426 10.0004 1.7577C12.3473 0.0419426 15.6587 0.243977 17.7786 2.3638C20.1217 4.70695 20.1217 8.50594 17.7786 10.8491L12.1217 16.5059C10.9501 17.6775 9.05063 17.6775 7.87906 16.5059L2.2222 10.8491C-0.120943 8.50594 -0.120943 4.70695 2.2222 2.3638Z" />
													</svg>Wishlish</Link></div>
										</div>
									</div>
									<div className="box-banner-tour-detail-3">
										<div className="box-swiper">
											<div className="swiper-container swiper-group-1">
												<Swiper {...swiperGroup1}>
													<SwiperSlide><img src="/assets/imgs/page/tour-detail/banner-detail.png" alt="Travile" /></SwiperSlide>
													<SwiperSlide><img src="/assets/imgs/page/tour-detail/banner-detail.png" alt="Travile" /></SwiperSlide>
												</Swiper>
											</div>
											<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-1">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
													<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</div>
											<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-1">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
													<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</div>
										</div>
									</div>
									<div className="box-info-tour">
										<div className="tour-info-group">
											<div className="icon-item">
												<svg width={18} height={19} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
													<path d="M14.5312 1.8828H13.8595V1.20312C13.8595 0.814789 13.5448 0.5 13.1564 0.5C12.7681 0.5 12.4533 0.814789 12.4533 1.20312V1.8828H5.55469V1.20312C5.55469 0.814789 5.2399 0.5 4.85156 0.5C4.46323 0.5 4.14844 0.814789 4.14844 1.20312V1.8828H3.47678C1.55967 1.8828 0 3.44247 0 5.35954V15.0232C0 16.9403 1.55967 18.5 3.47678 18.5H14.5313C16.4483 18.5 18.008 16.9403 18.008 15.0232V5.35954C18.008 3.44247 16.4483 1.8828 14.5312 1.8828ZM3.47678 3.28905H4.14844V4.66014C4.14844 5.04848 4.46323 5.36327 4.85156 5.36327C5.2399 5.36327 5.55469 5.04848 5.55469 4.66014V3.28905H12.4533V4.66014C12.4533 5.04848 12.7681 5.36327 13.1565 5.36327C13.5448 5.36327 13.8596 5.04848 13.8596 4.66014V3.28905H14.5313C15.6729 3.28905 16.6018 4.21788 16.6018 5.35954V6.03124H1.40625V5.35954C1.40625 4.21788 2.33508 3.28905 3.47678 3.28905ZM14.5312 17.0938H3.47678C2.33508 17.0938 1.40625 16.1649 1.40625 15.0232V7.43749H16.6018V15.0232C16.6018 16.1649 15.6729 17.0938 14.5312 17.0938ZM6.24611 10.2031C6.24611 10.5915 5.93132 10.9062 5.54298 10.9062H4.16018C3.77184 10.9062 3.45705 10.5915 3.45705 10.2031C3.45705 9.81479 3.77184 9.5 4.16018 9.5H5.54298C5.93128 9.5 6.24611 9.81479 6.24611 10.2031ZM14.551 10.2031C14.551 10.5915 14.2362 10.9062 13.8479 10.9062H12.4651C12.0767 10.9062 11.7619 10.5915 11.7619 10.2031C11.7619 9.81479 12.0767 9.5 12.4651 9.5H13.8479C14.2362 9.5 14.551 9.81479 14.551 10.2031ZM10.3945 10.2031C10.3945 10.5915 10.0798 10.9062 9.69142 10.9062H8.30862C7.92028 10.9062 7.60549 10.5915 7.60549 10.2031C7.60549 9.81479 7.92028 9.5 8.30862 9.5H9.69142C10.0797 9.5 10.3945 9.81479 10.3945 10.2031ZM6.24611 14.3516C6.24611 14.7399 5.93132 15.0547 5.54298 15.0547H4.16018C3.77184 15.0547 3.45705 14.7399 3.45705 14.3516C3.45705 13.9632 3.77184 13.6484 4.16018 13.6484H5.54298C5.93128 13.6484 6.24611 13.9632 6.24611 14.3516ZM14.551 14.3516C14.551 14.7399 14.2362 15.0547 13.8479 15.0547H12.4651C12.0767 15.0547 11.7619 14.7399 11.7619 14.3516C11.7619 13.9632 12.0767 13.6484 12.4651 13.6484H13.8479C14.2362 13.6484 14.551 13.9632 14.551 14.3516ZM10.3945 14.3516C10.3945 14.7399 10.0798 15.0547 9.69142 15.0547H8.30862C7.92028 15.0547 7.60549 14.7399 7.60549 14.3516C7.60549 13.9632 7.92028 13.6484 8.30862 13.6484H9.69142C10.0797 13.6484 10.3945 13.9632 10.3945 14.3516Z" />
												</svg>
											</div>
											<div className="info-item">
												<p className="text-sm-medium neutral-600">Duration</p>
												<p className="text-lg-bold neutral-1000">5-7 days</p>
											</div>
										</div>
										<div className="tour-info-group">
											<div className="icon-item background-1">
												<svg width={24} height={25} viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
													<path d="M21.183 11.3508H18.5179V9.21402C18.5179 8.82514 18.2025 8.50986 17.8135 8.50986H14.0067C13.6537 7.43248 12.637 6.65961 11.4551 6.65961H10.2332V1.20416C10.2332 0.815281 9.91791 0.5 9.52894 0.5H4.61077C4.2218 0.5 3.90642 0.815281 3.90642 1.20416V6.65966H2.68458C1.20431 6.65966 0 7.86359 0 9.34348V21.8161C0 23.296 1.20431 24.5 2.68458 24.5H21.183C22.7363 24.5 24 23.2366 24 21.6838V14.167C24 12.6141 22.7363 11.3508 21.183 11.3508ZM22.5914 14.167V18.6203H8.66423V14.167C8.66423 13.3907 9.29602 12.759 10.0726 12.759H21.183C21.9596 12.759 22.5914 13.3906 22.5914 14.167ZM17.1092 11.3508H14.1464V9.91817H17.1092V11.3508ZM5.31506 1.90827H8.82459V6.65961H5.31506V1.90827ZM1.40864 21.8161V9.34348C1.40864 8.64012 1.98103 8.06792 2.68458 8.06792H11.4551C12.1261 8.06792 12.6855 8.59147 12.7283 9.25986C12.73 9.28592 12.7333 9.31147 12.7377 9.33659V11.3508H10.0725C8.51925 11.3508 7.25555 12.6141 7.25555 14.167V21.6838C7.25555 22.1965 7.39397 22.6772 7.63444 23.0917H2.68458C1.98103 23.0917 1.40864 22.5195 1.40864 21.8161ZM21.183 23.0917H11.4551H10.0726C9.29602 23.0917 8.66423 22.4601 8.66423 21.6838V20.0286H22.5914V21.6838C22.5914 22.4601 21.9596 23.0917 21.183 23.0917Z" />
												</svg>
											</div>
											<div className="info-item">
												<p className="text-sm-medium neutral-600">Group Size</p>
												<p className="text-lg-bold neutral-1000">06 people</p>
											</div>
										</div>
										<div className="tour-info-group">
											<div className="icon-item background-7">
												<svg width={21} height={21} viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
													<path d="M13 2.25C13.4142 2.25 13.75 1.91421 13.75 1.5C13.75 1.08579 13.4142 0.75 13 0.75H9.9548C8.1182 0.74999 6.67861 0.74999 5.53648 0.87373C4.37094 1.00001 3.42656 1.26232 2.62024 1.84815C2.13209 2.20281 1.70281 2.63209 1.34815 3.12023C0.76232 3.92656 0.50001 4.87094 0.37373 6.03648C0.24999 7.17861 0.24999 8.6182 0.25 10.4548V10.5452C0.24999 12.3818 0.24999 13.8214 0.37373 14.9635C0.50001 16.1291 0.76232 17.0734 1.34815 17.8798C1.70281 18.3679 2.13209 18.7972 2.62023 19.1518C3.42656 19.7377 4.37094 20 5.53648 20.1263C6.67859 20.25 8.1182 20.25 9.9547 20.25H10.0453C11.8818 20.25 13.3214 20.25 14.4635 20.1263C15.6291 20 16.5734 19.7377 17.3798 19.1518C17.8679 18.7972 18.2972 18.3679 18.6518 17.8798C19.2377 17.0734 19.5 16.1291 19.6263 14.9635C19.75 13.8214 19.75 12.3818 19.75 10.5453V7.5C19.75 7.08579 19.4142 6.75 19 6.75C18.5858 6.75 18.25 7.08579 18.25 7.5V10.5C18.25 12.3916 18.249 13.75 18.135 14.802C18.0225 15.8399 17.8074 16.4901 17.4383 16.9981C17.1762 17.3589 16.8589 17.6762 16.4981 17.9383C15.9901 18.3074 15.3399 18.5225 14.302 18.635C13.25 18.749 11.8916 18.75 10 18.75C8.1084 18.75 6.74999 18.749 5.69804 18.635C4.66013 18.5225 4.00992 18.3074 3.50191 17.9383C3.14111 17.6762 2.82382 17.3589 2.56168 16.9981C2.19259 16.4901 1.97745 15.8399 1.865 14.802C1.75103 13.75 1.75 12.3916 1.75 10.5C1.75 8.6084 1.75103 7.24999 1.865 6.19805C1.97745 5.16013 2.19259 4.50992 2.56168 4.00191C2.82382 3.64111 3.14111 3.32382 3.50191 3.06168C4.00992 2.69259 4.66013 2.47745 5.69805 2.365C6.74999 2.25103 8.1084 2.25 10 2.25H13Z" />
													<path d="M4.32682 13.0267C4.1444 13.3986 4.29799 13.848 4.66987 14.0304C5.04175 14.2128 5.4911 14.0592 5.67352 13.6873L7.13386 10.7103C7.58649 9.78749 8.91687 9.83259 9.30597 10.7839C10.1852 12.9329 13.1906 13.0347 14.2132 10.9501L15.6736 7.97305C15.856 7.60116 15.7024 7.15181 15.3305 6.9694C14.9586 6.78698 14.5093 6.94057 14.3268 7.31245L12.8665 10.2895C12.4139 11.2123 11.0835 11.1672 10.6944 10.2159C9.81517 8.06687 6.80972 7.96506 5.78715 10.0497L4.32682 13.0267Z" />
													<path fillRule="evenodd" clipRule="evenodd" d="M15.5 2.5C15.5 3.88071 16.6193 5 18 5C19.3807 5 20.5 3.88071 20.5 2.5C20.5 1.11929 19.3807 0 18 0C16.6193 0 15.5 1.11929 15.5 2.5ZM17 2.5C17 3.05228 17.4477 3.5 18 3.5C18.5523 3.5 19 3.05228 19 2.5C19 1.94772 18.5523 1.5 18 1.5C17.4477 1.5 17 1.94772 17 2.5Z" />
												</svg>
											</div>
											<div className="info-item">
												<p className="text-sm-medium neutral-600">Tour Type</p>
												<p className="text-lg-bold neutral-1000">Daily Tour</p>
											</div>
										</div>
										<div className="tour-info-group">
											<div className="icon-item background-3">
												<svg width={24} height={25} viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_652_10262)">
														<path d="M21.5993 9.98724C22.2546 8.57953 22.7344 7.10443 22.7344 5.80109C22.7344 2.87799 20.3571 0.5 17.4351 0.5C15.3765 0.5 13.5884 1.6803 12.7114 3.39984C12.4056 3.37347 12.0963 3.35938 11.7891 3.35938C5.9469 3.35938 1.21875 8.08698 1.21875 13.9297C1.21875 19.7719 5.94635 24.5 11.7891 24.5C17.6312 24.5 22.3594 19.7724 22.3594 13.9297C22.3594 12.6126 22.123 11.2964 21.5993 9.98724ZM17.4351 1.90625C19.5817 1.90625 21.3281 3.65344 21.3281 5.80109C21.3281 8.57275 18.605 12.5386 17.4124 14.1425C15.8795 12.0587 13.5421 8.38324 13.5421 5.80109C13.5419 3.65344 15.2884 1.90625 17.4351 1.90625ZM5.05829 7.71765L9.77563 10.0762L9.23492 12.7796L7.3678 14.0244C7.17224 14.1547 7.05469 14.3743 7.05469 14.6094V17.6237L3.9613 18.6904C3.11389 17.3019 2.625 15.6719 2.625 13.9297C2.625 11.5349 3.54895 9.35187 5.05829 7.71765ZM4.82538 19.8799L7.98706 18.7897C8.27069 18.6919 8.46094 18.4249 8.46094 18.125V14.9857L10.2572 13.7881C10.4123 13.6847 10.5201 13.5239 10.5566 13.341L11.2597 9.82538C11.322 9.51447 11.1683 9.20044 10.8847 9.05872L6.16553 6.69904C7.888 5.35632 10.0206 4.67059 12.2355 4.77679C11.7907 7.03979 13.0248 9.73877 14.1724 11.7544L12.2307 13.365C11.9421 13.6045 11.8922 14.0282 12.1172 14.3281L13.3828 16.0156H10.5703C10.1819 16.0156 9.86719 16.3304 9.86719 16.7188V20.9375C9.86719 21.3259 10.1819 21.6406 10.5703 21.6406H13.7891L14.4481 22.6999C11.0292 23.7385 7.24127 22.703 4.82538 19.8799ZM15.7798 22.1782L14.7766 20.566C14.6483 20.3598 14.4227 20.2344 14.1797 20.2344H11.2734V17.4219H14.7891C15.3671 17.4219 15.6989 16.7599 15.3516 16.2969L13.6439 14.02L14.9059 12.9731C15.8904 14.5264 16.7787 15.6379 16.8618 15.741C17.1422 16.0889 17.6722 16.0903 17.9544 15.7439C18.0595 15.615 19.4385 13.909 20.6884 11.7328C20.8641 12.4469 20.9531 13.1819 20.9531 13.9297C20.9531 17.5532 18.8392 20.692 15.7798 22.1782Z" fill="black" />
														<path d="M17.436 8.2724C18.7959 8.2724 19.9022 7.16571 19.9022 5.8056C19.9022 4.44531 18.7957 3.33862 17.436 3.33862C16.076 3.33862 14.9697 4.44531 14.9697 5.8056C14.9697 7.16571 16.076 8.2724 17.436 8.2724ZM17.436 4.74487C18.0204 4.74487 18.496 5.22076 18.496 5.8056C18.496 6.39026 18.0204 6.86615 17.436 6.86615C16.8515 6.86615 16.376 6.39026 16.376 5.8056C16.376 5.22076 16.8515 4.74487 17.436 4.74487Z" fill="black" />
													</g>
													<defs>
														<clipPath id="clip0_652_10262">
															<rect width={24} height={24} fill="white" transform="translate(0 0.5)" />
														</clipPath>
													</defs>
												</svg>
											</div>
											<div className="info-item">
												<p className="text-sm-medium neutral-600">Languages</p>
												<p className="text-lg-bold neutral-1000">English</p>
											</div>
										</div>
									</div>
									<div className="box-collapse-expand">
										<div className="group-collapse-expand">
											<button className={isAccordion == 1 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOverview" aria-expanded="false" aria-controls="collapseOverview" onClick={() => handleAccordion(1)}>
												<h6>Overview</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 1 ? "collapse" : "collapse show"} id="collapseOverview">
												<div className="card card-body">
													<p>Elevate your Las Vegas experience to new heights with a journey aboard The High Roller at The LINQ. As the tallest observation wheel in the world, standing at an impressive 550 feet tall, The High Roller offers a bird's-eye perspective of the iconic Las Vegas Strip and its surrounding desert landscape. From the moment you step into one of the spacious cabins, you'll be transported on a mesmerizing adventure, where every turn offers a new and breathtaking vista of the vibrant city below.</p>
													<p>Whether you're a first-time visitor or a seasoned Las Vegas aficionado, The High Roller promises an unparalleled experience that will leave you in awe. With its climate-controlled cabins and immersive audio commentary, this attraction provides a unique opportunity to see Las Vegas from a whole new perspective, while learning about its rich history and famous landmarks along the way.</p>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 2 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseHighlight" aria-expanded="false" aria-controls="collapseHighlight" onClick={() => handleAccordion(2)}>
												<h6>Highlight</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 2 ? "collapse" : "collapse show"} id="collapseHighlight">
												<div className="card card-body">
													<p>Ascend to the skies aboard the world's tallest observation wheel and marvel at the panoramic vistas stretching as far as the eye can see. From the iconic landmarks of the Strip to the majestic mountains in the distance, every moment aboard The High Roller promises breathtaking sights and unforgettable memories.</p>
													<p>All rooms at the resort come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a shower, free toiletries and a hairdryer. At Pickalbatros Water Valley Resort - Neverland Hurghada rooms are equipped with bed linen and towels.</p>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 3 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseIncluded" aria-expanded="false" aria-controls="collapseIncluded" onClick={() => handleAccordion(3)}>
												<h6>Included/Excluded</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 3 ? "collapse" : "collapse show"} id="collapseIncluded">
												<div className="card card-body">
													<div className="row">
														<div className="col-lg-6">
															<p className="text-md-bold">Included:</p>
															<ul>
																<li>Admission ticket to The High Roller at The LINQ.</li>
																<li>Access to climate-controlled cabins.</li>
																<li>Audio commentary offering insights into Las Vegas history and landmarks.</li>
															</ul>
														</div>
														<div className="col-lg-6">
															<p className="text-md-bold">Excluded:</p>
															<ul>
																<li>Transportation to and from the attraction.</li>
																<li>Food and beverages.</li>
																<li>Souvenirs and merchandise</li>
																<li>Additional activities or attractions</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 4 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseDuration" aria-expanded="false" aria-controls="collapseDuration" onClick={() => handleAccordion(4)}>
												<h6>Duration</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 4 ? "collapse" : "collapse show"} id="collapseDuration">
												<div className="card card-body">
													<p>Your adventure aboard The High Roller at The LINQ is divided into six distinct moments, totaling 110 minutes of unforgettable experiences:</p>
													<ul className="list-number">
														<li> <strong>Boarding: </strong><span>Spend 10 minutes getting settled.</span></li>
														<li> <strong>Ascent: </strong><span>Enjoy a gradual ascent over 15 minutes.</span></li>
														<li> <strong>Peak: </strong><span>Marvel at the view for approximately 30 minutes.</span></li>
														<li> <strong>Descent: </strong><span>Descend over 15 minutes.</span></li>
														<li> <strong>Ground Level: </strong><span>Spend 10 minutes landing.</span></li>
														<li> <strong>Post-Ride: </strong><span>Enjoy the surroundings for the remaining 30 minutes.</span></li>
													</ul>
													<p>With each moment contributing to a seamless and awe-inspiring experience, The High Roller promises to be the highlight of your Las Vegas adventure.</p>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 5 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseQuestion" aria-expanded="false" aria-controls="collapseQuestion" onClick={() => handleAccordion(5)}>
												<h6>Question  Answers</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 5 ? "collapse" : "collapse show"} id="collapseQuestion">
												<div className="card card-body">
													<div className="list-questions">
														<div className="item-question">
															<div className="head-question">
																<p className="text-md-bold neutral-1000">Is The High Roller suitable for all ages?</p>
															</div>
															<div className="content-question">
																<p className="text-sm-medium neutral-800">Absolutely! The High Roller offers a family-friendly experience suitable for visitors of all ages. Children must be accompanied by an adult.</p>
															</div>
														</div>
														<div className="item-question active">
															<div className="head-question">
																<p className="text-md-bold neutral-1000">Can I bring food or drinks aboard The High Roller?</p>
															</div>
															<div className="content-question">
																<p className="text-sm-medium neutral-800">Outside food and beverages are not permitted on The High Roller. However, there are nearby dining options at The LINQ Promenade where you can enjoy a meal before or after your ride.</p>
															</div>
														</div>
														<div className="item-question">
															<div className="head-question">
																<p className="text-md-bold neutral-1000">Is The High Roller wheelchair accessible?</p>
															</div>
															<div className="content-question">
																<p className="text-sm-medium neutral-800">es, The High Roller cabins are wheelchair accessible, making it possible for everyone to enjoy the breathtaking views of Las Vegas.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 6 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviews" aria-expanded="false" aria-controls="collapseReviews" onClick={() => handleAccordion(6)}>
												<h6>Rate  Reviews</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 6 ? "collapse" : "collapse show"} id="collapseReviews">
												<div className="card card-body">
													<div className="head-reviews">
														<div className="review-left">
															<div className="review-info-inner">
																<h6 className="neutral-1000">4.95 / 5</h6>
																<p className="text-sm-medium neutral-400">(672 reviews)</p>
																<div className="review-rate"> <img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star.svg" alt="Travila" /></div>
															</div>
														</div>
														<div className="review-right">
															<div className="review-progress">
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Price</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '90%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>4.8/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Service</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '90%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>4.2/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Safety</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '95%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>4.9/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Entertainment</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '85%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>4.7/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Accessibility</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '100%' }}> </div>
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>5/5</p>
																	</div>
																</div>
																<div className="item-review-progress">
																	<div className="text-rv-progress">
																		<p className="text-sm-bold">Support</p>
																	</div>
																	<div className="bar-rv-progress">
																		<div className="progress">
																			<div className="progress-bar" style={{ width: '100%' }} />
																		</div>
																	</div>
																	<div className="text-avarage">
																		<p>5/5</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="list-reviews">
														<div className="item-review">
															<div className="head-review">
																<div className="author-review"> <img src="/assets/imgs/page/tour-detail/avatar.png" alt="Travila" />
																	<div className="author-info">
																		<p className="text-lg-bold">Sarah Johnson</p>
																		<p className="text-sm-medium neutral-500">December 4, 2024 at 3:12 pm</p>
																	</div>
																</div>
																<div className="rate-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></div>
															</div>
															<div className="content-review">
																<p className="text-sm-medium neutral-800">The views from The High Roller were absolutely stunning! It's a fantastic way to see the Strip and the surrounding area. The cabins are spacious and comfortable, and the audio commentary adds an extra layer of enjoyment. Highly recommend!</p>
															</div>
														</div>
														<div className="item-review">
															<div className="head-review">
																<div className="author-review"> <img src="/assets/imgs/page/tour-detail/avatar.png" alt="Travila" />
																	<div className="author-info">
																		<p className="text-lg-bold">Sarah Johnson</p>
																		<p className="text-sm-medium neutral-500">December 4, 2024 at 3:12 pm</p>
																	</div>
																</div>
																<div className="rate-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></div>
															</div>
															<div className="content-review">
																<p className="text-sm-medium neutral-800">The views from The High Roller were absolutely stunning! It's a fantastic way to see the Strip and the surrounding area. The cabins are spacious and comfortable, and the audio commentary adds an extra layer of enjoyment. Highly recommend!</p>
															</div>
														</div>
														<div className="item-review">
															<div className="head-review">
																<div className="author-review"> <img src="/assets/imgs/page/tour-detail/avatar.png" alt="Travila" />
																	<div className="author-info">
																		<p className="text-lg-bold">Sarah Johnson</p>
																		<p className="text-sm-medium neutral-500">December 4, 2024 at 3:12 pm</p>
																	</div>
																</div>
																<div className="rate-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></div>
															</div>
															<div className="content-review">
																<p className="text-sm-medium neutral-800">The views from The High Roller were absolutely stunning! It's a fantastic way to see the Strip and the surrounding area. The cabins are spacious and comfortable, and the audio commentary adds an extra layer of enjoyment. Highly recommend!</p>
															</div>
														</div>
													</div>
													<nav aria-label="Page navigation example">
														<ul className="pagination">
															<li className="page-item"><Link className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">
																<svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
																	<path d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668" strokeLinecap="round" strokeLinejoin="round" />
																</svg></span></Link></li>
															<li className="page-item"><Link className="page-link" href="#">1</Link></li>
															<li className="page-item"><Link className="page-link active" href="#">2</Link></li>
															<li className="page-item"><Link className="page-link" href="#">3</Link></li>
															<li className="page-item"><Link className="page-link" href="#">4</Link></li>
															<li className="page-item"><Link className="page-link" href="#">5</Link></li>
															<li className="page-item"><Link className="page-link" href="#">...</Link></li>
															<li className="page-item"><Link className="page-link" href="#" aria-label="Next"><span aria-hidden="true">
																<svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
																	<path d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992" strokeLinecap="round" strokeLinejoin="round" />
																</svg></span></Link></li>
														</ul>
													</nav>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand">
											<button className={isAccordion == 7 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddReview" aria-expanded="false" aria-controls="collapseAddReview" onClick={() => handleAccordion(7)}>
												<h6>Add a review</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg>
											</button>
											<div className={isAccordion == 7 ? "collapse" : "collapse show"} id="collapseAddReview">
												<div className="card card-body">
													<div className="box-type-reviews">
														<div className="row">
															<div className="col-lg-4">
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Price</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Service</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
															</div>
															<div className="col-lg-4">
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Safety</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Entertainment</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
															</div>
															<div className="col-lg-4">
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Accessibility</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
																<div className="box-type-review">
																	<p className="text-sm-bold text-type-rv">Support</p>
																	<p className="rate-type-review"> <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /><img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Travila" /></p>
																</div>
															</div>
														</div>
													</div>
													<div className="box-form-reviews">
														<h6 className="text-md-bold neutral-1000 mb-15">Leave feedback</h6>
														<div className="row">
															<div className="col-md-6">
																<div className="form-group">
																	<input className="form-control" type="text" placeholder="Your name" />
																</div>
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	<input className="form-control" type="text" placeholder="Email address" />
																</div>
															</div>
															<div className="col-md-12">
																<div className="form-group">
																	<textarea className="form-control" placeholder="Your comment" defaultValue={""} />
																</div>
															</div>
															<div className="col-md-12">
																<button className="btn btn-black-lg-square">Submit review
																	<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
																		<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
																	</svg>
																</button >
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="booking-form">
										<div className="head-booking-form">
											<p className="text-xl-bold neutral-1000">Booking Form</p>
										</div>
										<BookingForm />
									</div>
									<div className="sidebar-left border-1 background-body">
										<h6 className="text-lg-bold neutral-1000">Popular Tours</h6>
										<div className="box-popular-posts box-popular-posts-md">
											<ul>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/tour/post.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-xs-bold" href="#">Singapore Skylines: Urban Exploration</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/tour/post2.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-xs-bold" href="#">Singapore Skylines: Urban Exploration</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/tour/post3.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-xs-bold" href="#">Singapore Skylines: Urban Exploration</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/tour/post4.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-xs-bold" href="#">Singapore Skylines: Urban Exploration</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
												<li>
													<div className="card-post">
														<div className="card-image"> <Link href="#"> <img src="/assets/imgs/page/tour/post5.png" alt="Travila" /></Link></div>
														<div className="card-info"> <Link className="text-xs-bold" href="#">Singapore Skylines: Urban Exploration</Link><span className="price text-sm-bold neutral-1000">$48.25</span><span className="price-through text-sm-bold neutral-500">$60.75</span></div>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="sidebar-banner"> <Link href="#"><img src="/assets/imgs/page/tour-detail/banner-ads.png" alt="Travila" /></Link></div>
									<div className="sidebar-banner"> <Link href="#"><img src="/assets/imgs/page/tour-detail/banner-ads2.png" alt="Travila" /></Link></div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-news background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-6 mb-30 wow fadeInLeft">
									<h2 className="neutral-1000">News, Tips  Guides</h2>
									<p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
								</div>
								<div className="col-md-6 mb-30 wow fadeInRight">
									<div className="d-flex justify-content-center justify-content-md-end"><Link className="btn btn-black-lg" href="#">View More
										<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										</svg></Link></div>
								</div>
							</div>
							<div className="box-list-news wow fadeInUp">
								<div className="box-swiper mt-30">
									<div className="swiper-container swiper-group-3">
										<SwiperGroup3Slider />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-media background-body">
						<div className="container-media wow fadeInUp"> <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" /></div>
					</section>
				</main>

			</Layout>
		</>
	)
}