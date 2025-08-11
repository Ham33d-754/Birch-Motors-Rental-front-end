import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import UpdateProfile from './UpdateProfile'
import Profile from './Profile'

const Users = ({ user }) => {
  let navigate = useNavigate()
  const [listOfUsers, setListOfUsers] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      console.log(user)
      if (user.role === 'admin') {
        const response = await Client.get(`${BASE_URL}/profile`)
        setListOfUsers(response.data.listOfUsers)
        console.log(listOfUsers)
      } else {
        return <h2>page not found</h2>
      }
    }
    getUser()
  }, [])
  return (
    <>
      {listOfUsers ? (
        <div className="profile">
          {listOfUsers.map((user) => (
            <Link to={`/${user._id}`}>
              <h2>{user.username}</h2>
            </Link>
          ))}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  )
}
export default Users
