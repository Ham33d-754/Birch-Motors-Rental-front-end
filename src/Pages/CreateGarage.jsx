import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const CreateGarage = () => {
  const [garage, setGarage] = useState({
    name: '',
    location: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setGarage({ ...garage, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.post(`${BASE_URL}/garage/`, garage)

      setGarage({ name: '', location: '' })
      navigate('/garage/card')
    } catch (error) {
      console.log('error')
    }
  }

  return (
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
  )
}
export default CreateGarage
