  import { useState } from 'react'

  const CreateGarage = () => {
    const [garage, setGarage] = useState({
      name: '',
      location: ''
    })

    const handleChange = (e) => {
      setGarage({ ...garage, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      setGarage({name:'', location:''})
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Garage Name: </label>
        <input
          type="text"
          id="name"
          value={garage.name}
          onChange={handleChange}
        />

        <label htmlFor="location">Garage Location: </label>
        <input
          type="text"
          id="location"
          value={garage.location}
          onChange={handleChange}
        />

        <button type="submit">Add Garage</button>
      </form>
    )
  }
  export default CreateGarage
