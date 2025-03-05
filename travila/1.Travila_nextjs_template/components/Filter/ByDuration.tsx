
export default function ByDuration({ filter, handleDurationRangeChange }: any) {
	return (
		<>

			<label>
				Min Duration (days):
				<input
					type="number"
					name="minDuration"
					min="0"
					max="30"
					value={filter.durationRange[0]}
					onChange={handleDurationRangeChange}
				/>
			</label>
			<label>
				Max Duration (days):
				<input
					type="number"
					name="maxDuration"
					min="0"
					max="30"
					value={filter.durationRange[1]}
					onChange={handleDurationRangeChange}
				/>
			</label>
		</>
	)
}
