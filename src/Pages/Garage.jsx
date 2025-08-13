import GarageCard from '../Components/GarageCard'
import CreateGarage from '../Components/CreateGarage'
import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const Garage = () => {
  const [garages, setGarages] = useState(null)
  const [toggle, setToggle] = useState(false)
  const linkGarage = async () => {
    const res = await Client.get(`${BASE_URL}/garages`)
    setGarages(res.data.garages)
  }
  useEffect(() => {
    linkGarage()
  }, [])
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <h2>Your Garages</h2>
      <button className="garage-button" onClick={handleToggle}>
        add garage
      </button>
      <CreateGarage
        toggle={toggle}
        handleToggle={handleToggle}
        linkGarage={linkGarage}
      />
      {garages ? (
        <div className="garages-section">
          {garages.map((garage) => (
            <GarageCard
              garage={garage}
              key={garage._id}
              className="garage-cards"
            />
          ))}
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </>
  )
}

export default Garage
