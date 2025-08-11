import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const CarDetails = () => {
  const { carId } = useParams()
  const [car, setCar] = useState(null)
  useEffect(() => {
    const getCar = async () => {
      const response = await Client.get(`${BASE_URL}/cars/${carId}`)
      setCar(response.data.car)
    }
    getCar()
  }, [])
  return (
    <>
      {car ? (
        <>
          <img src={car.image} alt={`an image of a ${car.name}`} />
          <h2>name: {car.name}</h2>
          <h3>type: {car.carType}</h3>
          {/* <h3>location: {car.garage.location}</h3> */}
        </>
      ) : (
        <h2>loading</h2>
      )}
    </>
  )
}
export default CarDetails
