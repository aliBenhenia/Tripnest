
export default function ByClass({ uniqueClasses, filter, handleCheckboxChange }: any) {
	return (
		<>
			<div className="box-collapse scrollFilter">
				<ul className="list-filter-checkbox">
					{uniqueClasses.map((item: any,) => (
						<li key={item}>
							<label className="cb-container">
								<input
									type="checkbox"
									checked={filter.class.includes(item)}
									onChange={handleCheckboxChange("class", item)}
								/>

								<span className="text-sm-medium">{item} </span>
								<span className="checkmark" />
							</label>
							<span className="number-item">{item?.length}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
