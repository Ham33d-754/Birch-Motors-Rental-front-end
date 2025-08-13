import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import ViewBookings from './ViewBookings'

const Profile = () => {
  const navigate = useNavigate()
  const [userProfile, setUserProfile] = useState(null)
  const { userId } = useParams()
  useEffect(() => {
    const getUser = async () => {
      const response = await Client.get(`${BASE_URL}/profile/${userId}`)
      setUserProfile(response.data.user)
    }
    getUser()
  }, [])
  return (
    <>
      {userProfile ? (
        <div className="profile">
          <h2>username: {userProfile.username}</h2>
          <h2>email: {userProfile.email}</h2>
          <h2>phone: {userProfile.phone}</h2>
          <button
            onClick={() => {
              navigate(`/${userProfile._id}/edit`)
            }}
          >
            Edit Profile
          </button>
          <h2>Your Bookings</h2>
          <ViewBookings user={userProfile} />
        </div>
      ) : null}
    </>
  )
}
export default Profile
