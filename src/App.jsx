import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Garage from './Components/Garage'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route />
          <Route />
          <Route path='/garage' element={<Garage />} />
          <Route />
          <Route />
        </Routes>
      </main>
    </>
  )
}

export default App
