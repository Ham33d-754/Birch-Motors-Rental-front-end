import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const CreateGarage = ({ toggle, handleToggle, linkGarage }) => {
  if (!toggle) return null
  const [garage, setGarage] = useState({
    name: '',
    location: ''
  })
  const [msg, setMsg] = useState('')

  const handleChange = (e) => {
    setGarage({ ...garage, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.post(`${BASE_URL}/garages`, garage)

      setGarage({ name: '', location: '' })
      setMsg(res.data.msg)
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div className="overlay">
      <div className="modal">
        {msg}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Garage Name: </label>
          <input
            type="text"
            id="name"
            value={garage.name}
            onChange={handleChange}
          />

          <label htmlFor="location">Garage Location: </label>
          <input
            type="text"
            id="location"
            value={garage.location}
            onChange={handleChange}
          />

          <button type="submit">Add Garage</button>
        </form>
        <button
          onClick={() => {
            linkGarage()
            handleToggle()
          }}
        >
          close
        </button>
      </div>
    </div>
  )
}

export default CreateGarage
