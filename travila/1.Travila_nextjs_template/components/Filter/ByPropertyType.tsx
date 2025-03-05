
export default function ByPropertyType({ uniquePropertyTypes, filter, handleCheckboxChange }: any) {
	return (
		<>
			<div className="box-collapse scrollFilter">
				<ul className="list-filter-checkbox">
					{uniquePropertyTypes.map((property: any,) => (
						<li key={property}>
							<label className="cb-container">
								<input
									type="checkbox"
									checked={filter.propertyType.includes(property)}
									onChange={handleCheckboxChange("propertyType", property)}
								/>

								<span className="text-sm-medium">{property} </span>
								<span className="checkmark" />
							</label>
							<span className="number-item">{property?.length}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
