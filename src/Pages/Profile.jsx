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
        <div>
          <div className="profile-section">
            <h2>Profile:</h2>
            <h2>{userProfile.username}</h2>
            <h2>{userProfile.email}</h2>
            <h2>{userProfile.phone}</h2>
            <button
              className="profile-button"
              onClick={() => {
                navigate(`/${userProfile._id}/edit`)
              }}
            >
              Edit Profile
            </button>
          </div>
          <div className="bookings-section">
            <h2>My Bookings</h2>
            <ViewBookings user={userProfile} />
          </div>
        </div>
      ) : null}
    </>
  )
}
export default Profile
