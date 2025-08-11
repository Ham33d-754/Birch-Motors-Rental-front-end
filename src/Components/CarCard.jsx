import { useState } from 'react'
import CarDetails from '../Pages/CarDetails'
import { useNavigate } from 'react-router-dom'

const CarCard = ({ car }) => {
  let navigate = useNavigate()

  return (
    <>
      {car ? (
        <div className="car">
          <img src={car.image} alt={`an image of a ${car.name}`} />
          <h2>{car.name}</h2>
          <button onClick={() => navigate(`/cars/${car._id}`)}>
            more details
          </button>
          {/* <button onClick={navigate(``)}>rent now</button> */}
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </>
  )
}
export default CarCard
