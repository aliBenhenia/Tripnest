'use client'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

interface BookingFormProps {
	tour: {
		title: string
		price: number
		duration: string
	}
}

export default function BookingForm({ tour }: BookingFormProps) {
	const [startDate, setStartDate] = useState<Date | null>(null)
	const [guests, setGuests] = useState(1)
	const [totalPrice, setTotalPrice] = useState(tour.price)

	const handleGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = parseInt(e.target.value)
		setGuests(value)
		setTotalPrice(tour.price * value)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Here you would typically handle the booking submission
		console.log({
			tourTitle: tour.title,
			startDate,
			guests,
			totalPrice
		})
		alert('Booking submitted! Check console for details.')
	}

	return (
		<div className="box-booking">
			<div className="box-booking-content">
				<h4 className="neutral-1000 mb-20">Book This Tour</h4>
				<form onSubmit={handleSubmit}>
					<div className="form-group mb-20">
						<label className="text-sm-bold neutral-700 mb-10">Select Date</label>
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							minDate={new Date()}
							placeholderText="Choose your date"
							className="form-control"
							dateFormat="MMMM d, yyyy"
							required
						/>
					</div>
					<div className="form-group mb-20">
						<label className="text-sm-bold neutral-700 mb-10">Number of Guests</label>
						<select
							className="form-control"
							value={guests}
							onChange={handleGuestsChange}
							required
						>
							{[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
								<option key={num} value={num}>
									{num} {num === 1 ? 'Guest' : 'Guests'}
								</option>
							))}
						</select>
					</div>
					<div className="form-group mb-20">
						<label className="text-sm-bold neutral-700 mb-10">Duration</label>
						<input
							type="text"
							className="form-control"
							value={tour.duration}
							disabled
						/>
					</div>
					<div className="price-info mb-20">
						<div className="d-flex justify-content-between align-items-center">
							<span className="text-lg-medium neutral-700">Price per person:</span>
							<span className="text-lg-bold neutral-1000">${tour.price}</span>
						</div>
						<div className="d-flex justify-content-between align-items-center mt-10">
							<span className="text-lg-medium neutral-700">Total price:</span>
							<span className="text-lg-bold neutral-1000">${totalPrice}</span>
						</div>
					</div>
					<button type="submit" className="btn btn-primary w-100">
						Book Now
					</button>
				</form>
			</div>
		</div>
	)
}
