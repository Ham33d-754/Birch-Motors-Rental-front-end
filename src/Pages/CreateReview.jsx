// import axios from 'axios'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const CreateReview = ({ toggle, handleToggle, linkReview, userId, carId }) => {
  if (!toggle) return null

  const [review, setReview] = useState({ rating: '', comment: '' })
  const [msg, setMsg] = useState('')

  // const navigate = useNavigate()

  const handleChange = (e) => {
    setReview({ ...review, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.post(`${BASE_URL}/reviews`, {
        ...review,
        user: userId,
        car: carId
      })

      setReview({ rating: '', comment: '' })

      setMsg(res.data.msg)
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {msg}
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

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  }
}

export default CreateReview
