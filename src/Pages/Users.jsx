import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { Link } from 'react-router-dom'

const Users = ({ user }) => {
  const [listOfUsers, setListOfUsers] = useState(null)
  useEffect(() => {
    const getUser = async () => {
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
