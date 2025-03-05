'use client'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import MyDatePicker from './MyDatePicker'
export default function SearchFilterBottom({ miniField }: any) {
	return (
		<>
			<div className="box-bottom-search background-card">
				{!miniField &&
					<div className="item-search">
						<label className="text-sm-bold neutral-500">Location</label>
						<Dropdown className="dropdown">
							<Dropdown.Toggle className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search" type="button" data-bs-toggle="dropdown" aria-expanded="false">New York, USA</Dropdown.Toggle>
							<Dropdown.Menu as="ul" className="dropdown-menu">
								<li><Link className="dropdown-item" href="#">Sydney, Australia</Link></li>
								<li><Link className="dropdown-item" href="#">London, England</Link></li>
								<li><Link className="dropdown-item" href="#">New York City, USA</Link></li>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				}
				<div className="item-search item-search-2">
					<label className="text-sm-bold neutral-500">Check In</label>
					<div className="box-calendar-date">
						<MyDatePicker />
					</div>
				</div>
				<div className="item-search item-search-3">
					<label className="text-sm-bold neutral-500">Check Out</label>
					<div className="box-calendar-date">
						<MyDatePicker />
					</div>
				</div>
				{!miniField &&
					<div className="item-search bd-none">
						<label className="text-sm-bold neutral-500">Guest</label>
						<Dropdown className="dropdown">
							<Dropdown.Toggle className="btn btn-secondary dropdown-toggle btn-dropdown-search passenger-search" type="button" data-bs-toggle="dropdown" aria-expanded="false">2 adults, 2 children</Dropdown.Toggle>
							<Dropdown.Menu as="ul" className="dropdown-menu">
								<li><Link className="dropdown-item" href="#">2 adults, 1 children</Link></li>
								<li><Link className="dropdown-item" href="#">2 adults, 2 children</Link></li>
								<li><Link className="dropdown-item" href="#">2 adults, 3 children</Link></li>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				}
				<div className="item-search bd-none d-flex justify-content-end">
					<button className="btn btn-black-lg">
						<svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
						</svg>Search
					</button>
				</div>
			</div>
		</>
	)
} 
