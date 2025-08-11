import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import CreateCar from '../Components/Createcar'
import CarCard from '../Components/CarCard'

const GarageDetails = () => {
  const { garageId } = useParams()
  const [garage, setGarage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [listOfCars, setListOfCars] = useState(null)

  const fetchGarageAndCars = async () => {
    const res = await Client.get(`${BASE_URL}/garages/${garageId}`)
    const res2 = await Client.get(`${BASE_URL}/cars/garage/${garageId}`)
    setGarage(res.data.garage)
    setListOfCars(res2.data.cars)
  }

  useEffect(() => {
    fetchGarageAndCars()
  }, [garageId])

  const hadelOpen = () => {
    setIsOpen(!isOpen)
  }

  let display = garage ? (
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
      {listOfCars ? (
        listOfCars.map((car) => <CarCard car={car} key={car._id} />)
      ) : (
        <h2>no cars avaliable</h2>
      )}
    </div>
  ) : (
    <h2>Loading...</h2>
  )
  return <>{display}</>
}
export default GarageDetails
