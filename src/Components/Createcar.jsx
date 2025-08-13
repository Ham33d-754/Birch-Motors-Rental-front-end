import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const CreateCar = ({ garageId, isOpen, hadelOpen, fetchGarageAndCars }) => {
  if (!isOpen) return null
  const [car, setCar] = useState({
    name: '',
    carType: 'Sedan',
    image: '',
    garage: garageId,
    pricePerHour: '1'
  })
  const [msg, setMsg] = useState(null)

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.post(`${BASE_URL}/cars`, car)
      setMsg(res.data.msg)
      setCar({
        name: '',
        carType: 'Sedan',
        image: '',
        garage: garageId,
        pricePerHour: '1'
      })
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <>
      <div className="overlay">
        <div className="modal">
          {msg}
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
              type="file"
              name="image"
              value={car.image}
              accept="image/*"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="pricePerHour">price per hour</label>
            <input
              type="text"
              name="pricePerHour"
              value={car.pricePerHour}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Add Car</button>
          </form>
          <button
            className="garage-button"
            onClick={() => {
              fetchGarageAndCars()
              hadelOpen()
            }}
          >
            close
          </button>
        </div>
      </div>
    </>
  )
}

export default CreateCar
