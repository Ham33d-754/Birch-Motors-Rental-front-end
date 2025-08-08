import { Link, Routes, Route } from 'react-router-dom'
import CreateGarage from '../Pages/CreateGarage'
import GarageCard from '../Components/GarageCard'
import GarageDetails from '../Pages/GarageDetails'

const Garage = () => {
  return (
    <>
      <h2>Garage</h2>
      <nav>
        <Link to="/garage/create">Create Garage</Link>
        <Link to="/garage/card">View Garage</Link>
        <Link to="/garage/details/123">Garage Details</Link>
      </nav>

      <Routes>
        <Route path="create" element={<CreateGarage />} />
        <Route path="card" element={<GarageCard />} />
        <Route path="details/:id" element={<GarageDetails />} />
      </Routes>
    </>
  )
}

export default Garage
