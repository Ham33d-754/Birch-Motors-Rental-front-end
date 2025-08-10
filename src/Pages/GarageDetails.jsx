import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client, { BASE_URL } from '../services/api'

const GarageDetails = () => {
  const { id } = useParams()
  const [garage, setGarage] = useState(null)

  useEffect(() => {
    const linkGarage = async () => {
      const res = await Client.get(`${BASE_URL}/garages/${id}`)
      setGarage(res.data.garage)
    }
    linkGarage()
  }, [id])

  let display = garage?(
  <div>
    <h2>Garage Details</h2>
    <h4>Name: {garage.name}</h4>
    <h4>Location: {garage.location}</h4>

    <h4>Cars in Garage</h4>
    {
      garage.cars && garage.cars.length > 0 ? (
        <ul>
          {garage.cars.map((car) => (
            <li key={car._id}>
              {car.name} - {car.carType}

            </li>
          ))}
        </ul>
      ) : (
        <p>No Cars Here ...</p>
      )
    }
  </div>
  ):
  (<h2>loading</h2>)

  return (
    <>
      {display}
    </>
  )
}
export default GarageDetails
