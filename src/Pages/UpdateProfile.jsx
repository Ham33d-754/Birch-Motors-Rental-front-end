import { useEffect, useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
const UpdateProfile = ({ user }) => {
  useEffect(() => {
    const getUserApi = async () => {
      const response = await Client.get(`/profile/${user.id}`)
      console.log(response)
      setFormValue({
        username: response.data.user.username,
        email: response.data.user.email,
        phone: response.data.user.phone,
        role: response.data.user.role,
        password: '',
        confirmPassword: ''
      })
    }
    getUserApi()
  }, [])
  const [msg, setMsg] = useState('')
  const [updatePassword, setUpdatePassword] = useState(false)
  const [msgPhone, setMsgPhone] = useState('')
  let navigate = useNavigate()
  const initialState = {
    username: '',
    password: '',
    email: '',
    phone: '',
    role: '',
    confirmPassword: ''
  }

  const [formValue, setFormValue] = useState(initialState)

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
    let isNumber = isNaN(formValue.phone)
    let password = formValue.password
    if (isNumber) {
      setMsgPhone('phone number must be number')
    } else {
      setMsgPhone('')
    }

    if (password.length < 7 && password.length > 0) {
      setMsg('password must be at least 7 character long')
    } else {
      setMsg('')
    }
  }
  const handelSubmit = async (e) => {
    e.preventDefault()

    if (formValue.password.length < 7 && formValue.password.length > 0) {
      setMsg('password must be at least 7 character long')
    } else {
      setMsg('')
      if (
        formValue.password === '' ||
        formValue.password === formValue.confirmPassword
      ) {
        const resopnse = await Client.put(`/profile/${user.id}`, formValue)
        if (resopnse.data.msgExists) {
          setMsg(resopnse.data.msgExists)
        } else {
          navigate('/signIn')
        }
      } else {
        setMsg('passwords must be matched')
      }
    }
  }
  return (
    <>
      {msg}
      <br />
      {msgPhone}
      <form onSubmit={handelSubmit}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          onChange={handleChange}
          value={formValue.username}
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formValue.email}
          required
        />
        <br />
        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          onChange={handleChange}
          value={formValue.phone}
          required
        />
        <br />
        {updatePassword ? (
          <>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formValue.password}
              required
            />
            <br />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={formValue.confirmPassword}
              required
            />
            <br />
            <button onClick={() => setUpdatePassword(false)}> cancel</button>
          </>
        ) : (
          <button onClick={() => setUpdatePassword(true)}>
            change password
          </button>
        )}

        {user && user.role === 'admin' ? (
          <>
            <label htmlFor="role">Select Type of User</label>
            <select
              name="role"
              onChange={handleChange}
              value={formValue.role}
              required
            >
              <option value="">Select type of user</option>
              <option value="user">User</option>
              <option value="manager">Manager</option>
            </select>
          </>
        ) : null}
        <button type="submit"> register</button>
      </form>
    </>
  )
}
export default UpdateProfile
