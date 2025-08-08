import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

import Garage from './Pages/Garage'



import Login from './Pages/Login'
import { useState } from 'react'
function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/garage/*" element={<Garage />} />


        <Route path="/signIn" element={<Login setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App
