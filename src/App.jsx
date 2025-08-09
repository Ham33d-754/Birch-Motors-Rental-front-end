import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Header from './Components/Header'
import checkSession from './services/checkSession'
import { useEffect, useState } from 'react'
import Register from './Pages/Register'
function App() {
  const [user, setUser] = useState(null)
  console.log(user)
  const checkToken = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      let currentUser = await checkSession()
      console.log(currentUser)
      setUser(currentUser)
    }
  }
  const clearToken = () => {
    localStorage.clear()
    setUser(null)
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
        <Route path="/signIn" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register user={user} />} />
      </Routes>
    </>
  )
}

export default App
