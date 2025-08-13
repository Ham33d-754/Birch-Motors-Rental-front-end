import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const CreateReview = ({ toggle, handleToggle, linkReview, carId }) => {
  if (!toggle) return null

  const [review, setReview] = useState({ rating: '', comment: '' })
  const [msg, setMsg] = useState('')
  const handleChange = (e) => {
    setReview({ ...review, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.post(`${BASE_URL}/reviews`, {
        ...review,
        car: carId
      })

      setReview({ rating: '', comment: '' })

      setMsg(res.data.msg)
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div className="overlay">
      <div className="modal">
        {msg ? <div className="message">{msg}</div> : null}
        <form onSubmit={handleSubmit}>
          <label htmlFor="rating">Rating: </label>
          <input
            type="text"
            id="rating"
            value={review.rating}
            onChange={handleChange}
          />

          <label htmlFor="comment">Comment: </label>
          <input
            type="text"
            id="comment"
            value={review.comment}
            onChange={handleChange}
          />

          <button type="submit">Add Review</button>
        </form>
        <button
          onClick={() => {
            linkReview()
            handleToggle()
          }}
        >
          close
        </button>
      </div>
    </div>
  )
}

export default CreateReview
