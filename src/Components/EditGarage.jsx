import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const CreateGarage = ({ toggle, handleToggle, fetchGarageAndCars }) => {
  if (!toggle) return null
  const { garageId } = useParams()
  useEffect(() => {
    const getGrage = async () => {
      const response = await Client.get(`${BASE_URL}/garages/${garageId}`)
      setGarage(response.data.garage)
    }
    getGrage()
  }, [])

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
      const res = await Client.put(`${BASE_URL}/garages/${garage._id}`, garage)

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

          <button type="submit">edit Garage</button>
        </form>
        <button
          onClick={() => {
            fetchGarageAndCars()
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
