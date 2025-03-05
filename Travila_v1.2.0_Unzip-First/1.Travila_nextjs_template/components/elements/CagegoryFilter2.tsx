'use client'
import Link from 'next/link'
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default function CagegoryFilter2() {
	return (
		<>
			<div className="d-flex align-items-center justify-content-center popular-categories">
				<Dropdown className="dropdown dropdown-filter">
					<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownCategory" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <span>Price range</span></Dropdown.Toggle>
					<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownCategory" style={{ margin: 0 }}>
						<li><Link className="dropdown-item active" href="#">$10 - $100</Link></li>
						<li><Link className="dropdown-item" href="#">$100 - $1.000</Link></li>
						<li><Link className="dropdown-item" href="#">$1.000 - $10.000</Link></li>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="dropdown dropdown-filter">
					<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownHotelType" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <span>Hotel Type</span></Dropdown.Toggle>
					<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownHotelType" style={{ margin: 0 }}>
						<li><Link className="dropdown-item active" href="#">Hotel Type</Link></li>
						<li><Link className="dropdown-item" href="#">Hotel Type</Link></li>
						<li><Link className="dropdown-item" href="#">Hotel Type</Link></li>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="dropdown dropdown-filter">
					<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownCategory" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <span>Categories</span></Dropdown.Toggle>
					<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownCategory" style={{ margin: 0 }}>
						<li><Link className="dropdown-item active" href="#">Attractives</Link></li>
						<li><Link className="dropdown-item" href="#">Active</Link></li>
						<li><Link className="dropdown-item" href="#">Nature</Link></li>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="dropdown dropdown-filter">
					<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownAmenities" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <span>Amenities</span></Dropdown.Toggle>
					<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownAmenities" style={{ margin: 0 }}>
						<li><Link className="dropdown-item active" href="#">Amenities</Link></li>
						<li><Link className="dropdown-item" href="#">Active</Link></li>
						<li><Link className="dropdown-item" href="#">Nature</Link></li>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="dropdown dropdown-filter">
					<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownRoom" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <span>Room Style</span></Dropdown.Toggle>
					<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownRoom" style={{ margin: 0 }}>
						<li><Link className="dropdown-item active" href="#">Standard</Link></li>
						<li><Link className="dropdown-item" href="#">Deluxe</Link></li>
						<li><Link className="dropdown-item" href="#">Luxury</Link></li>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="dropdown dropdown-filter">
					<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownReview" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <span>Review Score</span></Dropdown.Toggle>
					<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownReview" style={{ margin: 0 }}>
						<li><Link className="dropdown-item active" href="#">5 stars</Link></li>
						<li><Link className="dropdown-item" href="#">4 stars</Link></li>
						<li><Link className="dropdown-item" href="#">3 stars</Link></li>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="dropdown dropdown-filter">
					<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownLocation" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <span>Booking Location</span></Dropdown.Toggle>
					<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-lablledby="dropdownLocation" style={{ margin: 0 }}>
						<li><Link className="dropdown-item active" href="#">Vietnam</Link></li>
						<li><Link className="dropdown-item" href="#">English</Link></li>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</>
	)
}
