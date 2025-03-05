import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
export default function CurrencyDropdown() {
	return (
		<>
			<Dropdown className="d-none d-xxl-inline-block box-dropdown-cart align-middle mr-15">
				<Dropdown.Toggle as="span" className="text-14-medium icon-list icon-cart">
					<span className="text-14-medium arrow-down">USD</span>
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdown-cart" style={{visibility: 'visible'}}>
					<ul>
						<li><Link className="text-sm-medium" href="#">USD</Link></li>
						<li><Link className="text-sm-medium" href="#">EUR</Link></li>
						<li><Link className="text-sm-medium" href="#">SGP</Link></li>
					</ul>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}
