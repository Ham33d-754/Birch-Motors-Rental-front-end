import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import checkSession from './services/checkSession'
import { useEffect, useState } from 'react'
function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const checkToken = async () => {
    let currentAdmin = await checkSession()
    const token = localStorage.getItem('token')
    if (token) {
      setUser(currentAdmin)
    }
  }
  useEffect(() => {
    checkToken()
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signIn" element={<Login setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App
