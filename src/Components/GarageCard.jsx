import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client, { BASE_URL } from '../services/api'

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
        <ul>
          <li key={garage._id} onClick={() => handleClick(garage._id)}>
            <h3>{garage.name} Garage </h3>
          </li>
        </ul>
      )}
    </>
  )
}
export default GarageCard
