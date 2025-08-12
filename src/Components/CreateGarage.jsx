import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
export default CreateGarage
