import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const ViewBookings = ({ user }) => {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    const linkBookings = async () => {
      const res = await Client.get(`${BASE_URL}/bookings/user/${user._id}`)
      setBookings(res.data.bookings)
    }
  }, [user])
  return (
    <>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No Bookings yet</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <p>
                <strong>Car: </strong>
                {booking.car.name}
              </p>
              <p>
                <strong>Type: </strong>
                {booking.car.carType}
              </p>
              <p>
                <strong>Payment: </strong>
                {booking.payMethod}
              </p>
              <p>
                <strong>Booked Duration : </strong>
                {booking.hours} Hours
              </p>
              <img src={booking.car.image} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default ViewBookings
