import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const EditCar = ({ car, toggle, toggleEdit }) => {
  if (!toggleEdit) return null
  useEffect(() => {
    const getCar = async () => {
      const res = await Client.get(`${BASE_URL}/cars/${car._id}`)
      console.log(res)
      setFormValues(res.data.car)
    }
    getCar()
  }, [])
  const [formVlaues, setFormValues] = useState(null)
  const [msg, setMsg] = useState(null)

  const handleChange = (e) => {
    setFormValues({ ...formVlaues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.put(`${BASE_URL}/cars/${car._id}`, formVlaues)
      setMsg(res.data.msg)
      setCar({
        name: '',
        carType: 'Sedan',
        image: '',
        garage: garageId,
        pricePerHour: '1'
      })
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <>
      {formVlaues ? (
        <div className="overlay">
          <div className="modal">
            {msg ? <div className="message">{msg}</div> : null}
            <h2>edit {formVlaues.name}</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Car Name</label>
              <input
                type="text"
                name="name"
                value={formVlaues.name}
                onChange={handleChange}
              />
              <br />

              <label htmlFor="carType">Car Type</label>

              <select name="carType" onChange={handleChange}>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Sport">Sport</option>
                <option value="Minivans">Minivans</option>
                <option value="Convertible">Convertible</option>
                <option value="Luxury">Luxury</option>
              </select>
              <br />

              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                value={formVlaues.image}
                onChange={handleChange}
              />
              <br />
              <label htmlFor="pricePerHour">price per hour</label>
              <input
                type="text"
                name="pricePerHour"
                value={formVlaues.pricePerHour}
                onChange={handleChange}
              />
              <br />
              <button type="submit">Edit Car</button>
            </form>
            <button
              onClick={() => {
                toggle()
              }}
            >
              close
            </button>
          </div>
        </div>
      ) : (
        <h2>loading..</h2>
      )}
    </>
  )
}
export default EditCar
