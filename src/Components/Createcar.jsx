import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const CreateCar = ({ garageId, isOpen, setIsOpen }) => {
  if (!isOpen) return null
  const [car, setCar] = useState({
    name: '',
    carType: 'Sedan',
    image: '',
    garage: garageId
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.post(`${BASE_URL}/cars`, car)

      setCar({
        name: '',
        carType: 'Sedan',
        image: '',
        garage: garageId
      })
      navigate(`/garages/${garageId}`)
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <>
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <h2>Add a new Car</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Car Name</label>
            <input
              type="text"
              name="name"
              value={car.name}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="carType">Car Type</label>

            <select name="carType" onChange={handleChange}>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Pickup Truck">Pickup Truck</option>
              <option value="Sport">Sport</option>
              <option value="Minivans">Minivans</option>
              <option value="Convertible">Convertible</option>
              <option value="Luxury">Luxury</option>
            </select>
            <br />

            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              value={car.image}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Add Car</button>
          </form>
          <button onClick={() => setIsOpen(false)}>close</button>
        </div>
      </div>
    </>
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
export default CreateCar
