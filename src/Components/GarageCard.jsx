import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client, { BASE_URL } from '../services/api'

const GarageCard = () => {
  const [garages, setGarages] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const linkGarage = async () => {
      const res = await Client.get(`${BASE_URL}/garage/`)
      setGarages(res.data.garages)
    }
    linkGarage()
  }, [])

  const handleClick = (id) => {
    navigate(`garages/details/${id}`)
  }
  return (
    <>
      <h3>View Garages</h3>
      {garages.length === 0 ? (
        <p>No Garages Available</p>
      ) : (
        <ul>
          {garages.map((garage) => (
            <li key={garage._id} onClick={() => handleClick(garage._id)}>
              <h3>{garage.name} Garage </h3>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default GarageCard
