import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import CreateCar from '../Components/Createcar'
import CarCard from '../Components/CarCard'
import EditGarage from '../Components/EditGarage'

const GarageDetails = ({ user }) => {
  let navigate = useNavigate()
  const { garageId } = useParams()
  const [garage, setGarage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [listOfCars, setListOfCars] = useState(null)
  const [toggle, setToggle] = useState(false)
  const fetchGarageAndCars = async () => {
    const res = await Client.get(`${BASE_URL}/garages/${garageId}`)
    const res2 = await Client.get(`${BASE_URL}/cars/garage/${garageId}`)
    setGarage(res.data.garage)
    setListOfCars(res2.data.cars)
  }

  useEffect(() => {
    fetchGarageAndCars()
  }, [garageId])

  const hadelOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const deleteGarage = async () => {
    const res = await Client.delete(`${BASE_URL}/garages/${garageId}`)
    navigate('/garages')
  }

  let display = garage ? (
    <div>
      <h2>Garage Details</h2>
      <h2>{garage.name}</h2>
      <h2>{garage.location}</h2>
      <button onClick={hadelOpen}>Add new Car</button>
      <CreateCar
        garageId={garageId}
        isOpen={isOpen}
        hadelOpen={hadelOpen}
        fetchGarageAndCars={fetchGarageAndCars}
      />
      {user.role === 'manager' ? (
        <>
          <EditGarage
            handleToggle={handleToggle}
            toggle={toggle}
            fetchGarageAndCars={fetchGarageAndCars}
          />
          <button onClick={handleToggle}>Edit</button>
          <button onClick={deleteGarage}>Delete</button>
        </>
      ) : null}
      {listOfCars ? (
        listOfCars.map((car) => <CarCard car={car} key={car._id} user={user} />)
      ) : (
        <h2>no cars avaliable</h2>
      )}
    </div>
  ) : (
    <h2>Loading...</h2>
  )
  return <>{display}</>
}
export default GarageDetails
