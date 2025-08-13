import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Garage from './Pages/Garage'
import GarageDetails from './Pages/GarageDetails'
import Login from './Pages/Login'
import Header from './Components/Header'
import checkSession from './services/checkSession'
import CarDetails from './Pages/CarDetails'
import { useEffect, useState } from 'react'
import Register from './Pages/Register'
import UpdateProfile from './Pages/UpdateProfile'
import Booking from './Pages/Booking'
import Profile from './Pages/Profile'
import Users from './Pages/Users'
import CreateCar from './Components/Createcar'

import Completion from './Pages/Completion'

const App = () => {
  let navigate = useNavigate()
  const [user, setUser] = useState(null)
  const checkToken = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      let currentUser = await checkSession()
      setUser(currentUser)
    }
  }
  const clearToken = () => {
    localStorage.clear()
    setUser(null)
    navigate('/signIn')
  }

  useEffect(() => {
    checkToken()
  }, [])
  return (
    <>
      <header>
        <Header clearToken={clearToken} user={user} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking user={user} />} />
        <Route path="/success" element={<Completion />} />
        {user && user.role === 'manager' ? (
          <>
            <Route path="/garages" element={<Garage />} />
            <Route
              path="/garages/:garageId"
              element={<GarageDetails user={user} />}
            />
            <Route path="/signIn" element={<Login setUser={setUser} />} />
            <Route path="/cars/new" element={<CreateCar />} />
          </>
        ) : null}
        {user && user.role === 'admin' ? (
          <>
            <Route path="/users" element={<Users user={user} />} />
            <Route path="/signIn" element={<Login setUser={setUser} />} />
          </>
        ) : null}

        {user ? (
          <>
            <Route path="/:userId" element={<Profile user={user} />} />
            <Route
              path="/:userId/edit"
              element={<UpdateProfile user={user} userId={user.id} />}
            />
          </>
        ) : null}
        <Route path="/signIn" element={<Login setUser={setUser} />} />
        <Route path="/cars/:carId" element={<CarDetails user={user} />} />
        <Route path="/register" element={<Register user={user} />} />
      </Routes>
    </>
  )
}

export default App
