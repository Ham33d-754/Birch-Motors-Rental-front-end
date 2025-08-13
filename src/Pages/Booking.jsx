import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import BookingForm from './BookingForm'
import CarCard from '../Components/CarCard'
import Search from '../Components/Search'

const Booking = ({ user }) => {
  const [cars, setCars] = useState([])
  const [searchResults, setSearchResults] = useState([])
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
    setIsClicked(true) // directly opens booking form when selecting from search
  }
  const handelClick = () => {
    setIsClicked(!clicked)
  }

  const carsToDisplay = searchResults.length > 0 ? searchResults : cars

  return (
    <div className="booking-container">
      {clicked ? (
        <BookingForm car={selectedCar} user={user} handelClick={handelClick} />
      ) : (
        <>
          <div className="search-section">
            <h2>Find a Car</h2>
            <Search 
              cars={cars}
              onSelectCar={handleSelectedCar}
              onResults={setSearchResults}
            />
          </div>

          <h2>Available Cars</h2>
          <div className="cars-grid">
            {carsToDisplay.map((car) => (
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
