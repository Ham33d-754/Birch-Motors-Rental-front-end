import { Link, Routes, Route } from 'react-router-dom'
import CreateGarage from '../Pages/CreateGarage'
import GarageCard from '../Components/GarageCard'
import GarageDetails from '../Pages/GarageDetails'

const Garage = () => {
  return (
    <>
      <h2>Garage</h2>
      <nav>
        <Link to="create">Create Garage</Link>
        <Link to="card">View Garage</Link>
        <Link to="details/123">Garage Details</Link>
      </nav>

      <Routes>
        <Route path="/garage/create" element={<CreateGarage />} />
        <Route path="/garage/card" element={<GarageCard />} />
        <Route path="/garage/details/:id" element={<GarageDetails />} />
      </Routes>
    </>
  )
}

export default Garage
