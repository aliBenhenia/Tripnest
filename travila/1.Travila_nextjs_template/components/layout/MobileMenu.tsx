'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [activeTab, setActiveTab] = useState('home')

	return (
		<div className="d-md-none fixed-bottom bg-white border-top p-10 shadow-lg">
			<div className="d-flex align-items-center justify-content-around py-2">
				<Link 
					href="/" 
					className={`d-flex flex-column align-items-center text-decoration-none ${
						activeTab === 'home' 
						? 'text-primary' 
						: 'text-secondary'
					}`}
					onClick={() => setActiveTab('home')}
				>
					<svg className="mb-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
					{/* <span className="small fw-medium">Home</span> */}
				</Link>

				<Link 
					href="/404" 
					className={`d-flex flex-column align-items-center text-decoration-none ${
						activeTab === '404' 
						? 'text-primary' 
						: 'text-secondary'
					}`}
					onClick={() => setActiveTab('404')}
				>
					<svg className="mb-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					{/* <span className="small fw-medium">Search</span> */}
				</Link>

				<Link 
					href="/blog" 
					className={`d-flex flex-column align-items-center text-decoration-none ${
						activeTab === 'blog' 
						? 'text-primary' 
						: 'text-secondary'
					}`}
					onClick={() => setActiveTab('blog')}
				>
					<svg className="mb-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					{/* <span className="small fw-medium">Bookings</span> */}
				</Link>

				<Link 
					href="/faq" 
					className={`d-flex flex-column align-items-center text-decoration-none ${
						activeTab === 'faq' 
						? 'text-primary' 
						: 'text-secondary'
					}`}
					onClick={() => setActiveTab('faq')}
				>
					<svg className="mb-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
					</svg>
					{/* <span className="small fw-medium">Profile</span> */}
				</Link>
			</div>

			<style jsx>{`
				.fixed-bottom {
					padding-bottom: env(safe-area-inset-bottom);
				}
			`}</style>
		</div>
	)
}
