import { Link, Routes, Route } from 'react-router-dom'
import CreateGarage from '../Pages/CreateGarage'
import GarageDetails from '../Pages/GarageDetails'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const Garage = () => {
  const [garages, setGarages] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const linkGarage = async () => {
      const res = await Client.get(`${BASE_URL}/garages/`)
      setGarages(res.data.garages)
    }
    linkGarage()
  }, [])

  const handleClick = (id) => {
    navigate(`${id}`)
  }

  return (
    <>
      <h2>Garage</h2>
      <nav>
        <Link to="/garages/create">Create Garage</Link>
      </nav>

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

      <Routes>
        <Route path="create" element={<CreateGarage />} />
        <Route path="/:id" element={<GarageDetails />} />
      </Routes>
    </>
  )
}

export default Garage
