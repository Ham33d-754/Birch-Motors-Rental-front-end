import { useEffect, useState } from 'react'

const GarageCard = () => {
  const [garages, setGarages] = useState([])

  useEffect(() => {
    const testingOnly = [{ id: 9, name: 'fawaz', location: 'manama' }]
    setGarages(testingOnly)
  }, [])
  return (
    <>
      <h3>View Garages</h3>
      {garages.length === 0 ? (
        <p>No Garages Available</p>
      ) : (
        <ul>
          {garages.map((garage) => (
            <li key={garage.id}>
              <h3>Garage Name: {garage.name}</h3>  <h4>Garage Location: {garage.location}</h4>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default GarageCard
