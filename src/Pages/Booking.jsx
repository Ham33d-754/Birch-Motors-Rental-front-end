import { useEffect, useState } from "react"
import Client, { BASE_URL } from "../services/api"

const Booking = () => {

  const [cars, setcars] = useState([])
  const [selectedCar, setSelectedCar] = useState(null)

  useEffect(() => {
    const linkCars = async () => {
      const res = await Client.get(`${BASE_URL}/cars`)
      setcars(res.data.cars)
    } 
    linkCars()

  },[])
  return (
    <>
    
    </>
  )
}
export default Booking