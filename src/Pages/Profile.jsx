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
      console.log(user)
      if (user.role === 'admin') {
        const response = await Client.get(`${BASE_URL}/profile`)
        setListOfUsers(response.data.listOfUsers)
        console.log(listOfUsers)
      } else {
        const response = await Client.get(`${BASE_URL}/profile/${userId}`)
        setUserProflie(response.data.user)
      }
    }
    getUser()
  }, [])
  return (
    <>
      {console.log(listOfUsers)}
      {userProflie ? (
        <div className="profile">
          <h2>username: {userProflie.username}</h2>
          <h2>email: {userProflie.email}</h2>
          <h2>phone: {userProflie.phone}</h2>
        </div>
      ) : (
        <div className="proflie">{listOfUsers}</div>
      )}
    </>
  )
}
export default Profile
