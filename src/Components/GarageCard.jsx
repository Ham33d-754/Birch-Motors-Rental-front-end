import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GarageCard = () => {
  const [garages, setGarages] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const testingOnly = [{ id: 9, name: 'fawaz', location: 'manama' }]
    setGarages(testingOnly)
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
            <li key={garage.id} onClick={() => handleClick(garage.id)}>
              <h3>{garage.name} Garage </h3>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default GarageCard
