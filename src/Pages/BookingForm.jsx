import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const BookingForm = ({ car, user, setCars }) => {
  const [form, setForm] = useState({
    payMethod: 'Cash',
    hours: 1
  })

  const handleChange = async (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    console.log(car._id)
    console.log(user.id)
    const bookingData = {
      car: car._id,
      user: user.id,
      payMethod: form.payMethod,
      hours: form.hours
    }
    const res = await Client.post(`${BASE_URL}/bookings`, bookingData)
    console.log(res)
    // setCars(res.data.cars)
  }

  return (
    <form onSubmit={handelSubmit}>
      <h2>Booking Form for {car.name}</h2>

      <p>
        <strong>Car: </strong>
        {car.name}
      </p>
      <p>
        <strong>Type: </strong>
        {car.carType}
      </p>
      <p>
        <strong>Price Per Hour: </strong>
        {car.pricePerHour}
      </p>
      <img src={car.image} />

      <label>
        Hours Needed:
        <input
          type="numbers"
          name="hours"
          min="1"
          value={form.hours}
          onChange={handleChange}
        />
      </label>

      <label>
        Payment Method :
        <select name="payMethod" value={form.payMethod} onChange={handleChange}>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
        </select>
      </label>
      <button type="submit">Confirm Booking</button>
    </form>
  )
}
export default BookingForm
