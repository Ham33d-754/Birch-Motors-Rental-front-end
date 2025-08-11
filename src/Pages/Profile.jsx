import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const [userProflie, setUserProflie] = useState(null)
  const { userId } = useParams()
  useEffect(() => {
    const getUser = async () => {
      const response = await Client.get(`${BASE_URL}/profile/${userId}`)
      setUserProflie(response.data.user)
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
          <button
            onClick={() => {
              navigate(`/${userProflie._id}/edit`)
            }}
          >
            Edit Profile
          </button>
        </div>
      ) : null}
    </>
  )
}
export default Profile
