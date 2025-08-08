import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Garage from './Pages/Garage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/garage/*" element={<Garage />} />
      </Routes>
    </>
  )
}

export default App
