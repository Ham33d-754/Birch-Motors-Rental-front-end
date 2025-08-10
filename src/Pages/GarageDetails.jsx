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
      console.log(res.data.garage)
      setGarage(res.data.garage)
      console.log(garage)
    }
    linkGarage()
  }, [])

  let display = garage?(<div>
    <h2>Garage Details</h2>
    <h2>{garage.name}</h2>
    <h2>{garage.location}</h2>
  </div>):(<h2>lodaing</h2>)
  return (
    <>
      {display}
    </>
  )
}
export default GarageDetails
