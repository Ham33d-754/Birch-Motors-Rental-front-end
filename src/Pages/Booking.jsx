import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const Booking = ({ user }) => {
  const [cars, setcars] = useState([])
  const [selectedCar, setSelectedCar] = useState(null)

  useEffect(() => {
    const linkCars = async () => {
      const res = await Client.get(`${BASE_URL}/cars`)
      setcars(res.data.cars)
    }
    linkCars()
  }, [])

  const handleSelectedCar = (car) => {
    setSelectedCar(car)
  }



  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <p>
              {car.name} - {car.carType}
            </p>
            <button onClick={() => handleSelectedCar(car)}>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Booking
