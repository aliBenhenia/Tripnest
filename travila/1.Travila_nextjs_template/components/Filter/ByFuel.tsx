
export default function ByFuel({ uniqueFuelTypes, filter, handleCheckboxChange }: any) {
	return (
		<>
			<div className="box-collapse scrollFilter">
				<ul className="list-filter-checkbox">
					{uniqueFuelTypes.map((fuel: any,) => (
						<li key={fuel}>
							<label className="cb-container">
								<input
									type="checkbox"
									checked={filter.fuelType.includes(fuel)}
									onChange={handleCheckboxChange("fuelType", fuel)}
								/>

								<span className="text-sm-medium">{fuel} </span>
								<span className="checkmark" />
							</label>
							<span className="number-item">{fuel?.length}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
