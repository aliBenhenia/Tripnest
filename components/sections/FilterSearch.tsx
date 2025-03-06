'use client'
import Link from "next/link"
import Dropdown from 'react-bootstrap/Dropdown'
import { useTourContext } from "@/context/TourContext"

export default function FilterSearch() {
	const { handleSearchChange, filter } = useTourContext()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// The search is already real-time, so we don't need additional submit handling
	}

	return (
		<>
			<section className="section-box box-filter-search background-body">
				<div className="container">
					<div className="block-filter-search">
						<div className="filter-left border border-light" style={{ width: '100%' }}>
							<form className="form-search-filter" onSubmit={handleSubmit}>
								<input 
									className="form-control" 
									type="text" 
									name="key" 
									placeholder="What are you looking for?" 
									value={filter.searchQuery}
									onChange={(e) => handleSearchChange(e.target.value)}
								/>
							</form>
						</div>
					</div>
					<div className="left-dropdown-filter">
						<Dropdown className="dropdown dropdown-filter">
							<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownCategory" type="button" data-bs-toggle="dropdown" aria-expanded={false}><span>Categories</span></Dropdown.Toggle>
							<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownCategory" style={{ margin: 0 }}>
								<li><Link className="dropdown-item active" href="#">Attractives</Link></li>
								<li><Link className="dropdown-item" href="#">Active</Link></li>
								<li><Link className="dropdown-item" href="#">Nature</Link></li>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className="dropdown dropdown-filter">
							<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownCategory" type="button" data-bs-toggle="dropdown" aria-expanded={false}><span>Duration</span></Dropdown.Toggle>
							<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownCategory" style={{ margin: 0 }}>
								<li><Link className="dropdown-item active" href="#">4 Hours</Link></li>
								<li><Link className="dropdown-item" href="#">8 Hours</Link></li>
								<li><Link className="dropdown-item" href="#">2 Days</Link></li>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className="dropdown dropdown-filter">
							<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownCategory" type="button" data-bs-toggle="dropdown" aria-expanded={false}><span>Review / Rating</span></Dropdown.Toggle>
							<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownCategory" style={{ margin: 0 }}>
								<li><Link className="dropdown-item active" href="#">Newest</Link></li>
								<li><Link className="dropdown-item" href="#">Oldest</Link></li>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className="dropdown dropdown-filter">
							<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownCategory" type="button" data-bs-toggle="dropdown" aria-expanded={false}><span>Price range</span></Dropdown.Toggle>
							<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownCategory" style={{ margin: 0 }}>
								<li><Link className="dropdown-item active" href="#">$10 - $100</Link></li>
								<li><Link className="dropdown-item" href="#">$100 - $1.000</Link></li>
								<li><Link className="dropdown-item" href="#">$1.000 - $10.000</Link></li>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className="dropdown dropdown-filter">
							<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownCategory" type="button" data-bs-toggle="dropdown" aria-expanded={false}><span>Language</span></Dropdown.Toggle>
							<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownCategory" style={{ margin: 0 }}>
								<li><Link className="dropdown-item active" href="#">English</Link></li>
								<li><Link className="dropdown-item" href="#">Japanese</Link></li>
								<li><Link className="dropdown-item" href="#">Chinese</Link></li>
								<li><Link className="dropdown-item" href="#">Vietnamese</Link></li>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="right-dropdown-filter">
						<Dropdown className="dropdown dropdown-filter">
							<Dropdown.Toggle className="btn btn-dropdown dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded={false}><span>Sort from High to Low</span></Dropdown.Toggle>
							<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort" style={{ margin: 0 }}>
								<li><Link className="dropdown-item active" href="#">Default Sorting</Link></li>
								<li><Link className="dropdown-item" href="#">Sort from High to Low</Link></li>
								<li><Link className="dropdown-item" href="#">Comments products </Link></li>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</section>
		</>
	)
} 