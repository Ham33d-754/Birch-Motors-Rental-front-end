import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Header from './Components/Header'
import checkSession from './services/checkSession'
import { useEffect, useState } from 'react'
function App() {
  const [user, setUser] = useState(null)
  const checkToken = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      let currentAdmin = await checkSession()
      setUser(currentAdmin)
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
        <Header clearToken={clearToken} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<Login setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App
