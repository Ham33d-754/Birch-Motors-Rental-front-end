import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Garage from './Pages/Garage'
import Login from './Pages/Login'
import Header from './Components/Header'
import checkSession from './services/checkSession'
import { use, useEffect, useState } from 'react'
import Register from './Pages/Register'
import UpdateProfile from './Pages/UpdateProfile'
const App = () => {
  let navigate = useNavigate()
  const [user, setUser] = useState(null)
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
        {user && user.role === 'manager' ? (
          <Route path="/garage/*" element={<Garage />} />
          <Route path="/signIn" element={<Login setUser={setUser} />} />
          
        ) : null}

        {user ? (
          <>
            <Route
              path="/profile/:userId"
              element={<UpdateProfile user={user} />}
            />
          </>
        ) : null}
        <Route path="/signIn" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register user={user} />} />
      </Routes>
    </>
  )
}

export default App
