import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import CreateCar from '../Components/Createcar'
import CarCard from '../Components/CarCard'

const GarageDetails = () => {
  const { garageId } = useParams()
  const [garage, setGarage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [listOfCars, setListOfCars] = useState(null)
  const fetchGarageAndCars = async () => {
    try {
      const res = await Client.get(`${BASE_URL}/garages/${garageId}`)
      const res2 = await Client.get(`${BASE_URL}/cars/${garageId}`)
      setGarage(res.data.garage)
      setListOfCars(res2.data.cars)
    } catch (error) {
      console.error('Error fetching garage details and cars:', error)
    }
  }
  useEffect(() => {
    fetchGarageAndCars()
  }, [garageId])

  const hadelOpen = () => {
    setIsOpen(!isOpen)
  }

  let display =
    garage && listOfCars ? (
      <div>
        <h2>Garage Details</h2>
        <h2>{garage.name}</h2>
        <h2>{garage.location}</h2>
        <button onClick={hadelOpen}>Add new Car</button>
        <CreateCar
          garageId={garageId}
          isOpen={isOpen}
          hadelOpen={hadelOpen}
          fetchGarageAndCars={fetchGarageAndCars}
        />
        {listOfCars.map((car) => (
          <CarCard car={car} key={car._id} />
        ))}
      </div>
    ) : (
      <h2>Loading...</h2>
    )
  return <>{display}</>
}
export default GarageDetails
