import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import EditCar from '../Components/EditCar'
import Reviews from '../Components/Reviews'

const CarDetails = ({ user }) => {
  let navigate = useNavigate()
  const { carId } = useParams()
  const [car, setCar] = useState(null)
  const [garage, setGarage] = useState(null)
  const [toggleEdit, setToggleEdit] = useState(false)
  useEffect(() => {
    const getCar = async () => {
      const response = await Client.get(`${BASE_URL}/cars/${carId}`)
      setCar(response.data.car)
      setGarage(response.data.garage)
      console.log(response.data)
    }
    getCar()
  }, [])
  const toggle = () => {
    setToggleEdit(!toggleEdit)
  }
  const toggleReterned = async () => {
    const response = await Client.put(`${BASE_URL}/cars/${carId}/rented`, {
      Rented: !car.Rented
    })
    setCar((prevCar) => ({
      ...prevCar,
      Rented: response.data.Rented
    }))
  }
  const deleteCar = async () => {
    const response = await Client.delete(`${BASE_URL}/cars/${carId}`)
    navigate(`/garages/${garage._id}`)
  }
  return (
    <>
      {car ? (
        <>
          <div className="car-details">
            <img src={car.image} alt={`an image of a ${car.name}`} />
            <h2>name: {car.name}</h2>
            <h3>type: {car.carType}</h3>
            <h3>Price per Hour: {car.pricePerHour}</h3>
            <h3>location: {garage.location}</h3>
            <h3>Rented: {car.Rented ? 'yes' : 'no'}</h3>
          </div>

          {user.role === 'manager' ? (
            <>
              <div className='manager-actions'>
                <button className="btn" onClick={toggle}>
                  Edit
                </button>
                <EditCar toggle={toggle} car={car} toggleEdit={toggleEdit} />
                <button className='btn' onClick={toggleReterned}>Retern Car</button>
                <button className='btn' onClick={deleteCar}>Delete</button>
                <br />
                <Reviews carId={carId} />
              </div>
            </>
          ) : null}
        </>
      ) : (
        <h2>loading</h2>
      )}
    </>
  )
}
export default CarDetails
