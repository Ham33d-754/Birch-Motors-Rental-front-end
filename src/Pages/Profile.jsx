import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import Register from './Register'
import UpdateProfile from './UpdateProfile'

const Profile = ({ user }) => {
  let navigate = useNavigate()
  const [userProflie, setUserProflie] = useState(null)
  const { listOfUsers, setListOfUsers } = useState(null)
  const [isEdit, setIsEdit] = useState(false)
  const { userId } = useParams()
  useEffect(() => {
    const getUser = async () => {
      if (user.role === 'admin') {
        const response = await Client.get(`${BASE_URL}/profile`)
        setUserProflie(response.data.user)
      } else {
        const response = await Client.get(`${BASE_URL}/profile/${userId}`)
        setUserProflie(response.data.user)
      }
    }
    getUser()
  }, [])
  return (
    <>
      {userProflie ? (
        <div className="profile">
          <h2>username: {userProflie.username}</h2>
          <h2>email: {userProflie.email}</h2>
          <h2>phone: {userProflie.phone}</h2>
        </div>
      ) : null}
      <button
        onClick={() => {
          navigate(`/${userId}/edit`)
        }}
      >
        edit
      </button>
    </>
  )
}
export default Profile
