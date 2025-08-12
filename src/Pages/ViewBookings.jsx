import CreateReview from './CreateReview'

import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const ViewBookings = ({ user }) => {
  const [bookings, setBookings] = useState([])
  //
  const [reviews, setReviews] = useState(null)
  const [selectedCarId, setSelectedCarId] = useState(null)

  const [toggle, setToggle] = useState(false)
  const linkReview = async () => {
    const res = await Client.get(`${BASE_URL}/reviews`)
    console.log(` review1 ${res.data.reviews}`)
    setReviews(` review2 ${res.data.reviews}`)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }
  useEffect(() => {
    const linkBookings = async () => {
      const res = await Client.get(`${BASE_URL}/bookings/user/${user._id}`)
      setBookings(res.data.bookings)
    }
    // linkBookings()
    // linkReview()
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

      <h2>create review</h2>
      <button
        onClick={() => {
          setToggle(true)
          setSelectedCarId(booking.car._id) // needs booking to work 
        }}
      >
        Add Review
      </button>
      <CreateReview
        toggle={toggle}
        handleToggle={handleToggle}
        linkReview={linkReview}
        carId={selectedCarId}
      />
      {/* {reviews ? (
        <div className="reviews">
          {reviews.map((review) => (
            <ReviewCard review={review} key={review._id} />
          ))}
        </div>
      ) : (
        <h2>loading...</h2>
      )} */}
    </>
  )
}
export default ViewBookings
