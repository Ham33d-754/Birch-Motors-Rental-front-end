import { useNavigate } from 'react-router-dom'

const GarageCard = ({ garage }) => {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`/garages/${id}`)
  }
  return (
    <>
      {!garage ? (
        <p>No Garages Available</p>
      ) : (
        <div
          className="garage-card"
          key={garage._id}
          onClick={() => handleClick(garage._id)}
        >
          <h3>{garage.name} Garage </h3>
        </div>
      )}
    </>
  )
}
export default GarageCard
