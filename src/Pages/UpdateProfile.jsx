import { useEffect, useState } from 'react'
import Client from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProfile = ({ user }) => {
  const { userId } = useParams()
  useEffect(() => {
    const getUserApi = async () => {
      const response = await Client.get(`/profile/${userId}`)
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
        const resopnse = await Client.put(`/profile/${userId}`, formValue)
        if (resopnse.data.msgExists) {
          setMsg(resopnse.data.msgExists)
        } else {
          navigate(`/${userId}`)
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
        {user && user.role === 'admin' ? (
          <>
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
        {updatePassword ? (
          <>
            <br />
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
          <>
            <br />
            <button onClick={() => setUpdatePassword(true)}>
              change password
            </button>
          </>
        )}
        <br />
        <button type="submit"> Edit</button>
      </form>
    </>
  )
}
export default UpdateProfile
