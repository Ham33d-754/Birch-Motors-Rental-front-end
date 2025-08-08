import CreateGarage from '../Pages/CreateGarage'
import GarageCard from '../Pages/GarageCard'
import GarageDetails from '../Pages/GarageDetails'

import { Route, Routes, Link } from 'react-router-dom'

const Garage = () => {
  return (
    <>
      <h2>Garage</h2>
      <Link to="create">Create Garage</Link>
      <Link to="card">View Garage</Link>
      <Link to={`details/123`}>Garage Details</Link>
      <Routes>
        <Route path="/garage/create" element={<CreateGarage />} />
        <Route path="/garage/card" element={<GarageCard />} />
        <Route path="/garage/details/:id" element={<GarageDetails />} />
      </Routes>
    </>
  )
}
export default Garage
