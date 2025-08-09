import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const GarageDetails = () => {
  const { id } = useParams()
  const [garage, setGarage] = useState(null)

  useEffect(() => {
    const linkGarage = async () => {
      const res = await axios.get(`http://localhost:3000/garage/${id}`)
      setGarage(res.data)
    }
    linkGarage()
  }, [])

  return (
    <>
      <h2>Garage Details</h2>
      <h3>Name: {garage.name}</h3>
      <h3>Location: {garage.location}</h3>
    </>
  )
}
export default GarageDetails
