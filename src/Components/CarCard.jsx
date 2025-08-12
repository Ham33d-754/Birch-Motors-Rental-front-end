import { useNavigate } from 'react-router-dom'

const CarCard = ({ car, handleSelectedCar, handelClick }) => {
  let navigate = useNavigate()
  return (
    <>
      {car ? (
        <div className={car.Rented ? 'car-rented' : 'car'}>
          <img src={car.image} alt={`an image of a ${car.name}`} />
          <div className="car-info">
            <h2>{car.name}</h2>
            <h3>price per hour {car.pricePerHour}</h3>
            <button onClick={() => navigate(`/cars/${car._id}`)}>
              more details
            </button>
            {car.Rented ? null : (
              <button
                onClick={() => {
                  handleSelectedCar(car)
                  handelClick()
                }}
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </>
  )
}
export default CarCard
