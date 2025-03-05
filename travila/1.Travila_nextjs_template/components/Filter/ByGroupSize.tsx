
export default function ByGroupSize({ uniqueGroupSizes, handleCheckboxChange, filter }: any) {
	return (
		<>
			<div>
				<h6>Filter by Group Size:</h6>
				{uniqueGroupSizes.map((groupSize: any) => (
					<label key={groupSize}>
						<input
							type="checkbox"
							checked={filter.groupSize.includes(groupSize)}
							onChange={handleCheckboxChange("groupSize", groupSize)}
						/>
						{groupSize}
					</label>
				))}
			</div>
		</>
	)
}
