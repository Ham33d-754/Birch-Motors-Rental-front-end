import { useState } from 'react'
import Payment from './Payment'

const BookingForm = ({ car, user, handelClick }) => {
  const [form, setForm] = useState({
    payMethod: 'Card',
    hours: 0
  })
  const [amount, setAmount] = useState(0)
  const [confirm, setConfirm] = useState(false)
  const [bookingData, setBookingData] = useState(null)

  const [msg, setMsg] = useState(`Your total Amount ${amount} BHD`)

  const handleChange = async (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    const hours = parseInt(value) || 0
    const calculatedAmount = car.pricePerHour * hours
    setAmount(calculatedAmount * 1000)

    setMsg(`Your total Amount ${calculatedAmount} BHD`)
  }
  const handleConfrim = () => {
    setConfirm(!confirm)
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    const bookingData = {
      car: car._id,
      user: user.id,
      payMethod: form.payMethod,
      hours: form.hours,
      amount: amount
    }
    setBookingData(bookingData)
    handleConfrim()

  }
  const bookingForm = (
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
      <img src={car.image} alt={`An image of ${car.name}`} />

      <label>
        Hours Needed:
        <input
          type="number"
          name="hours"
          min="1"
          value={form.hours}
          onChange={handleChange}
        />
      </label>

      <label>
        Payment Method:
        <select name="payMethod" value={form.payMethod} onChange={handleChange}>
          <option value="Card">Card</option>
        </select>
      </label>
      <br />
      <h2>{msg}</h2>
      <button type="submit">Confirm Booking</button>
      <button type="button" onClick={handelClick}>
        Cancel
      </button>
    </form>
  )
  return confirm ? <Payment bookingData={bookingData} /> : bookingForm
}
export default BookingForm
