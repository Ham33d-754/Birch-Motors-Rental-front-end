import { useState } from 'react'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = ({ setUser }) => {
  const initialState = { username: '', password: '' }
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState(initialState)
  const [message, setMessage] = useState('')
  const handelChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(`${BASE_URL}/auth/signIn`, formValues)
    console.log(response)
    if (response.data.msg) {
      setMessage(response.data.msg)
    } else {
      localStorage.setItem('token', response.data.token)
      setUser(response.data.admin)
      setFormValues(initialState)
      navigate('/')
    }
  }
  return (
    <>
      <h2>{message}</h2>
      <form onSubmit={handelSubmit}>
        <label htmlFor="username">username: </label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handelChange}
          required
        />
        <br />
        <label htmlFor="password">password: </label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handelChange}
          required
        />
        <br />
        <button type="submit">Log In</button>
      </form>
    </>
  )
}
export default Login
