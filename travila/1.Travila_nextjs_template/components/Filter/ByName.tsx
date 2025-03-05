
export default function ByName({ uniqueNames, filter, handleCheckboxChange }: any) {
	return (
		<>
			<div>
				<h6>Filter by Name:</h6>
				{uniqueNames.map((name: any) => (
					<label key={name}>
						<input
							type="checkbox"
							checked={filter.names.includes(name)}
							onChange={handleCheckboxChange("names", name)}
						/>
						{name}
					</label>
				))}
			</div>
		</>
	)
}
