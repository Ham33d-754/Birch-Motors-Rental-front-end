import CreateReview from './CreateReview'
import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const ViewBookings = ({ user }) => {
  const [bookings, setBookings] = useState([])
  const [reviews, setReviews] = useState(null)
  const [selectedCarId, setSelectedCarId] = useState(null)

  const [toggle, setToggle] = useState(false)
  const linkReview = async () => {
    const res = await Client.get(`${BASE_URL}/reviews`)
    setReviews(` review2 ${res.data.reviews}`)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }
  useEffect(() => {
    const linkBookings = async () => {
      const res = await Client.get(`${BASE_URL}/bookings`)
      setBookings(res.data.bookingDetails)
      console.log(res.data.bookingDetails)
    }

    linkBookings()
    linkReview()
  }, [user])
  return (
    <>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No Bookings yet</p>
      ) : (
        <ul>
          {bookings.map((bookingDetail) => (
            <li key={bookingDetail.booking._id}>
              <p>
                <strong>Car: </strong>
                {bookingDetail.car.name}
              </p>
              <p>
                <strong>Type: </strong>
                {bookingDetail.car.carType}
              </p>
              <p>
                <strong>Payment: </strong>
                {bookingDetail.booking.payMethod}
              </p>
              <p>
                <strong>Booked Duration : </strong>
                {bookingDetail.booking.hours} Hours
              </p>
              <img src={bookingDetail.car.image} />
              <h2>create review</h2>
              <button
                onClick={() => {
                  setToggle(true)
                  console.log(bookingDetail.car._id)
                  setSelectedCarId(bookingDetail.car._id)
                }}
              >
                Add Review
              </button>
              <CreateReview
                toggle={toggle}
                handleToggle={handleToggle}
                linkReview={linkReview}
                carId={selectedCarId}
              />{' '}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default ViewBookings
