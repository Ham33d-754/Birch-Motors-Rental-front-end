import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const CreateCar = () => {
  //
  const [car, setCar] = useState({
    name: '',
    carType: '',
    image: ''
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
        carType: '',
        image: ''
      })
      navigate('/cars')
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <>
      <div>
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
          {console.log(car)}
          <button type="submit">Add Car</button>
        </form>
      </div>
    </>
  )
}
export default CreateCar
