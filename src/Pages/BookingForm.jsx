import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const BookingForm = ({ car, user, setCars }) => {
  const [form, setForm] = useState({
    payMethod: car.carType,
    hours: 1
  })

  const handleChange = async (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    const bookingData = {
      car: car._id,
      user: user._id,
      payMethod: form.payMethod,
      hours: form.hours
    }
    const res = await Client.get(`${BASE_URL}/cars`)
    setCars(res.data.cars)
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
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </select>
      </label>
      <button type="submit">Confirm Booking</button>
    </form>
  )
}
export default BookingForm
