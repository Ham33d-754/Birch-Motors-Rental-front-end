import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import BookingForm from './BookingForm'
import CarCard from '../Components/CarCard'

const Booking = ({ user }) => {
  const [cars, setCars] = useState([])
  const [selectedCar, setSelectedCar] = useState(null)
  const [clicked, setIsClicked] = useState(false)
  useEffect(() => {
    const linkCars = async () => {
      const res = await Client.get(`${BASE_URL}/cars`)
      setCars(res.data.cars)
    }
    linkCars()
  }, [])

  const handleSelectedCar = (car) => {
    setSelectedCar(car)
  }
  const handelClick = () => {
    setIsClicked(!clicked)
  }

  return (
    <div>
      {clicked ? (
        <BookingForm car={selectedCar} user={user} handelClick={handelClick} />
      ) : (
        <>
          <h2>Available Cars</h2>
          <div>
            {cars.map((car) => (
              <div>
                <CarCard
                  car={car}
                  key={car._id}
                  handelClick={handelClick}
                  handleSelectedCar={handleSelectedCar}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
export default Booking
