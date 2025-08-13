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
      setBookings(res.data.bookingDetails || [])
    }

    linkBookings()
    linkReview()
  }, [user])
  return (
    <>
      {bookings.length === 0 ? (
        <p className='centers'>No Bookings yet..</p>
      ) : (
        <div className="bookings-list">
          {bookings.map((bookingDetail) => (
            <div className="booking-card" key={bookingDetail.booking._id}>
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
              />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default ViewBookings
