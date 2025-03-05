
export default function ByActivities({ uniqueActivities, filter, handleCheckboxChange }: any) {
	return (
		<>
			<div className="box-collapse scrollFilter">
				<ul className="list-filter-checkbox">
					{uniqueActivities.map((activity: any,) => (
						<li key={activity}>
							<label className="cb-container">
								<input
									type="checkbox"
									checked={filter.activities.includes(activity)}
									onChange={handleCheckboxChange("activities", activity)}
								/>

								<span className="text-sm-medium">{activity} </span>
								<span className="checkmark" />
							</label>
							<span className="number-item">{activity?.length}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
