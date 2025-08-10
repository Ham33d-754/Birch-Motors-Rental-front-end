import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client, { BASE_URL } from '../services/api'

const GarageDetails = () => {
  const { id } = useParams()
  const [garage, setGarage] = useState()

  useEffect(() => {
    const linkGarage = async () => {
      const res = await axios.get(`${BASE_URL}/garage/${id}`)
      setGarage(res.data.garage)
      console.log(res)
      console.log(id)
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
