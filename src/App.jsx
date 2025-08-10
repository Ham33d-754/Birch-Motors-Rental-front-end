import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import CarDetails from './Pages/CarDetails'
import { useState } from 'react'
function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<Login setUser={setUser} />} />
        <Route path='/car' element={< CarDetails />}/>
      </Routes>
    </>
  )
}

export default App
