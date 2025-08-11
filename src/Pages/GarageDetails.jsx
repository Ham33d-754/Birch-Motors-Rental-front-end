import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const GarageDetails = () => {
  const { id } = useParams()
  const [garage, setGarage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const linkGarage = async () => {
      const res = await Client.get(`${BASE_URL}/garages/${id}`)
      setGarage(res.data.garage)
    }
    linkGarage()
  }, [id])

  const handleDelete = async () => {
    await Client.delete(`${BASE_URL}/garages/${id}`)
    navigate('/garages')
  }

  let display = garage ? (
    <div>
      <h2>Garage Details</h2>
      <h4>Name: {garage.name}</h4>
      <h4>Location: {garage.location}</h4>

      <h4>Cars in Garage</h4>
      {garage.cars && garage.cars.length > 0 ? (
        <ul>
          {garage.cars.map((car) => (
            <li key={car._id}>
              {car.name} - {car.carType}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Cars Here ...</p>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  ) : (
    <h2>loading</h2>
  )

  return <>{display}</>
}
export default GarageDetails
