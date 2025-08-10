import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import CreateCar from '../Components/Createcar'
import CarCard from '../Components/CarCard'

const GarageDetails = () => {
  const { id } = useParams()
  const [garage, setGarage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [listOfCars, setListOfCars] = useState(null)
  useEffect(() => {
    const linkGarage = async () => {
      const res = await Client.get(`${BASE_URL}/garages/${id}`)
      const res2 = await Client.get(`${BASE_URL}/cars/${id}`)
      setGarage(res.data.garage)
      setListOfCars(res2.data.cars)
      console.log(listOfCars)
    }
    linkGarage()
  }, [])

  let display = garage ? (
    <div>
      <h2>Garage Details</h2>
      <h2>{garage.name}</h2>
      <h2>{garage.location}</h2>
      <button onClick={() => setIsOpen(true)}>Add new Car</button>
      <CreateCar garageId={id} isOpen={isOpen} setIsOpen={setIsOpen} />
      {listOfCars.map((car) => (
        <CarCard car={car} key={car._id} />
      ))}
    </div>
  ) : (
    <h2>lodaing</h2>
  )
  return <>{display}</>
}
export default GarageDetails
