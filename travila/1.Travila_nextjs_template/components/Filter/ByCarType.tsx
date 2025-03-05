
export default function ByCarType({ uniqueCarTypes, filter, handleCheckboxChange }: any) {
	return (
		<>
			<div className="box-collapse scrollFilter">
				<ul className="list-filter-checkbox">
					{uniqueCarTypes.map((car: any,) => (
						<li key={car}>
							<label className="cb-container">
								<input
									type="checkbox"
									checked={filter.carType.includes(car)}
									onChange={handleCheckboxChange("carType", car)}
								/>

								<span className="text-sm-medium">{car} </span>
								<span className="checkmark" />
							</label>
							<span className="number-item">{car?.length}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
