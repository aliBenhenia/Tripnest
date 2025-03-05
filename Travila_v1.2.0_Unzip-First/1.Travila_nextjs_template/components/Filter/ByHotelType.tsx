
export default function ByHotelType({ uniqueHotelsType, filter, handleCheckboxChange }: any) {
	return (
		<>
			<div className="box-collapse scrollFilter">
				<ul className="list-filter-checkbox">
					{uniqueHotelsType.map((hotel: any,) => (
						<li key={hotel}>
							<label className="cb-container">
								<input
									type="checkbox"
									checked={filter.hotelType.includes(hotel)}
									onChange={handleCheckboxChange("hotelType", hotel)}
								/>

								<span className="text-sm-medium">{hotel} </span>
								<span className="checkmark" />
							</label>
							<span className="number-item">{hotel?.length}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
