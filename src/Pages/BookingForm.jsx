import { useState } from 'react'

const BookingForm = ({ car }) => {
  const [form, setForm] = useState({
    payMethod: car.carType,
    hours: 1
  })

  const handleChange = async (e) => {
    const { name, value } = e.target
    setForm((fullfilled) => ({ ...fullfilled, [name]: value }))
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
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

      <lable>
        Hours Needed:
        <input
          type="numbers"
          name="hours"
          min="1"
          value={form.hours}
          onChange={handleChange}
        />
      </lable>

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
