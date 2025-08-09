import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const GarageCard = () => {
  const [garages, setGarages] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchGarages = async () => {
      const res = await axios.get('http://localhost:3000/garage')
      setGarages(res.data)
    }
    fetchGarages()
  }, [])

  const handleClick = (id) => {
    navigate(`/garage/details/${id}`)
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
