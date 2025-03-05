'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? "sidebar-visible" : ""}`}>
				<PerfectScrollbar className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo"> <Link className="d-flex" href="/"><img className="light-mode" alt="Travila" src="/assets/imgs/template/logo.svg" /><img className="dark-mode" alt="Travila" src="/assets/imgs/template/logo-w.svg" /></Link>
						<div className="burger-icon burger-icon-white" onClick={handleMobileMenu} />
					</div>
					<div className="mobile-header-top">
						<div className="box-author-profile">
							<div className="card-author">
								<div className="card-image"> <img src="/assets/imgs/page/homepage1/author2.png" alt="Travila" /></div>
								<div className="card-info">
									<p className="text-md-bold neutral-1000">Alice Roses</p>
									<p className="text-xs neutral-1000">London, England</p>
								</div>
							</div><Link className="btn btn-black" href="#">Logout</Link>
						</div>
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading">
										<li className={`has-children ${isAccordion === 1 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(1)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link className="active" href="/">Home Pages</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
												<li><Link href="/">Home 1 - All services</Link></li>
												<li><Link href="/index-2">Home 2 - All services</Link></li>
												<li><Link href="/index-3">Home 3 - All services</Link></li>
												<li><Link href="/index-4">Home 4 - All services</Link></li>
												<li><Link href="/index-5">Home 5 - Tours</Link></li>
												<li><Link href="/index-6">Home 6 - Activities</Link></li>
												<li><Link href="/index-7">Home 7 - Destinations</Link></li>
												<li><Link href="/index-8">Home 8 - Hotels</Link></li>
												<li><Link href="/index-9">Home 9 - Rental Car</Link></li>
												<li><Link href="/index-10">Home 10 - Rental Property</Link></li>
												<li><Link href="/index-11">Home 11 - Tickets</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 2 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(2)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="/tour-grid">Tours</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
												<li><Link href="/tour-grid-3">Tours List - Top Fillter</Link></li>
												<li><Link href="/tour-grid">Tours List - Sidebar Left Fillter</Link></li>
												<li><Link href="/tour-grid-2">Tours List - Sidebar Right Fillter</Link></li>
												<li><Link href="/tour-list">Tours List 1</Link></li>
												<li><Link href="/tour-list-2">Tours List 2</Link></li>
												<li><Link href="/tour-detail">Tour Single 01 - Gallery</Link></li>
												<li><Link href="/tour-detail-2">Tour Single 02 - Slideshow</Link></li>
												<li><Link href="/tour-detail-3">Tour Single 03 - Video</Link></li>
												<li><Link href="/tour-detail-4">Tour Single 04 - Image</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 3 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(3)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="/destination">Destinations</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
												<li><Link href="/destination">Destinations list 1</Link></li>
												<li><Link href="/destination-2">Destinations list 2</Link></li>
												<li><Link href="/destination-3">Destinations list 3</Link></li>
												<li><Link href="/destination-4">Destinations Details 01</Link></li>
												<li><Link href="/destination-5">Destinations Details 02</Link></li>
												<li><Link href="/destination-6">Destinations Details 03</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 4 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(4)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="/activities">Activities</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
												<li><Link href="/activities">Activities List - Top Fillter</Link></li>
												<li><Link href="/activities-2">Activities List - Sidebar Left Fillter</Link></li>
												<li><Link href="/activities-3">Activities List - Sidebar Right Fillter</Link></li>
												<li><Link href="/activities-4">Activities List - Grid</Link></li>
												<li><Link href="/activities-5">Activities List - List</Link></li>
												<li><Link href="/activities-detail">Activities Single 01 - Gallery</Link></li>
												<li><Link href="/activities-detail-2">Activities Single 02 - Slideshow</Link></li>
												<li><Link href="/activities-detail-3">Activities Single 03</Link></li>
												<li><Link href="/activities-detail-4">Activities Single 04</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 5 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(5)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="/hotel-grid">Hotels</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
												<li><Link href="/hotel-grid">Hotel List 01</Link></li>
												<li><Link href="/hotel-grid-2">Hotel List 02</Link></li>
												<li><Link href="/hotel-grid-3">Hotel List 03</Link></li>
												<li><Link href="/hotel-grid-4">Hotel List 04</Link></li>
												<li><Link href="/hotel-grid-5">Hotel List 05</Link></li>
												<li><Link href="/hotel-grid-6">Hotel List 06</Link></li>
												<li><Link href="/hotel-detail">Hotel Details 01</Link></li>
												<li><Link href="/hotel-detail-2">Hotel Details 02</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 6 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(6)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="/rental-car">Rental</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
												<li><Link href="/rental-car">Car Grid</Link></li>
												<li><Link href="/rental-car-2">Car list</Link></li>
												<li><Link href="/rental-car-3">Car Details</Link></li>
												<li><Link href="/rental-proprty">Property Grid</Link></li>
												<li><Link href="/rental-proprty-2">Property Grid</Link></li>
												<li><Link href="/rental-proprty-3">Property List</Link></li>
												<li><Link href="/rental-detail">Property Details</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 7 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(7)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="/tickets">Tickets</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 7 ? "block" : "none"}` }}>
												<li><Link href="/tickets">Flight tickets</Link></li>
												<li><Link href="/tickets-2">Train tickets</Link></li>
												<li><Link href="/book-ticket">Ticket details</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 8 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(8)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="/javascript:void(0)">Pages</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 8 ? "block" : "none"}` }}>
												<li><Link href="/about">About</Link></li>
												<li><Link href="/contact">Contact</Link></li>
												<li><Link href="/faq">FAQs</Link></li>
												<li><Link href="/help-center">Help center</Link></li>
												<li><Link href="/become-expert">Become Expert</Link></li>
												<li><Link href="/comming-soon">Coming soon</Link></li>
												<li><Link href="/term">Term</Link></li>
												<li><Link href="/privacy">Invoice</Link></li>
												<li><Link href="/404">404</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 9 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(9)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="/blog-grid">Blog</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 9 ? "block" : "none"}` }}>
												<li><Link href="/blog-grid">Grid Full</Link></li>
												<li><Link href="/blog-grid-2">Grid Sidebar</Link></li>
												<li><Link href="/blog-grid-3">List</Link></li>
												<li><Link href="/blog-detail">Blog Details</Link></li>
												<li><Link href="/blog-detail-2">Blog Details 2</Link></li>
											</ul>
										</li>
										<li><Link href="/contact">Contact</Link></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</PerfectScrollbar>
			</div>

		</>
	)
}
