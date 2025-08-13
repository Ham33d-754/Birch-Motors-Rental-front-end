import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const Reviews = ({ carId }) => {
  const [reviews, setReviews] = useState(null)
  useEffect(() => {
    const getReviews = async () => {
      const reponse = await Client.get(`${BASE_URL}/reviews/${carId}`)
      setReviews(reponse.data)
    }
    getReviews()
  }, [])
  return (
    <>
      {reviews ? (
        reviews.map((review) => (
          <div className="comment" key={review._id}>
            <h2>Rating: {review.rating}</h2>
            <p>comment: {review.comment}</p>
          </div>
        ))
      ) : (
        <h2>loading..</h2>
      )}
    </>
  )
}
export default Reviews
