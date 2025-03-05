import Link from 'next/link'

export default function ByAttraction({ uniqueAttractions, filter, handleCheckboxChange }: any) {
	return (
		<>
			<div className="box-collapse scrollFilter">
				<ul className="list-filter-checkbox">
					{uniqueAttractions.map((attraction: any) => (
						<li key={attraction}>
							<label className="cb-container">
								<input
									type="checkbox"
									checked={filter.attractions.includes(attraction)}
									onChange={handleCheckboxChange("attractions", attraction)}
								/>

								<span className="text-sm-medium">{attraction}</span>
								<span className="checkmark" />
							</label>
							<span className="number-item">{attraction?.length}</span>
						</li>
					))}
					
				</ul>
				<div className="box-see-more"> <Link className="link-see-more" href="#">See more
					<svg width={8} height={6} viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.89553 1.02367C7.75114 0.870518 7.50961 0.864815 7.35723 1.00881L3.9998 4.18946L0.642774 1.00883C0.490387 0.86444 0.249236 0.870534 0.104474 1.02369C-0.0402885 1.17645 -0.0338199 1.4176 0.118958 1.56236L3.73809 4.99102C3.81123 5.06036 3.90571 5.0954 3.9998 5.0954C4.0939 5.0954 4.18875 5.06036 4.26191 4.99102L7.88104 1.56236C8.03382 1.41758 8.04029 1.17645 7.89553 1.02367Z" />
					</svg></Link></div>
			</div>
		</>
	)
}
