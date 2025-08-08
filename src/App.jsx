import { Route, Router } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />}>
          Home
        </Route>
      </Router>
    </>
  )
}

export default App
