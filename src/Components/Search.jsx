import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const Search = () => {

// { onChange, onSubmit, value }
// review

  const { reviewid } = useParams()
  const [reviewInfo, setReviewInfo] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // const deleteTicket = async () => {
  //   ticketId !== 'null'
  //     ? await axios.delete(`${BASE_URL}/ticket/${ticketId}`)
  //     : await axios.delete(`${BASE_URL}/ticket/${searchQuery}`)
  //   setSearchQuery('')
  //   setTicketInfo(null)
  // }


  useEffect(() => {
    const getReview = async () => {
      const response = await Client.get(`${BASE_URL}/reviews/${reviewid}`)

      console.log(response.data)
      setReviewInfo(response.data)
    }

    reviewid !== 'null' && getReview()
  }, [reviewid])

  const getSearchResult = async (e) => {
    e.preventDefault()
    let response = await axios.get(`${BASE_URL}/reviews/${searchQuery}`)

    setReviewInfo(response.data)
    // setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <>
      <form className="search-form" onSubmit={onSubmit}>
        <button type="submit">Find</button>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Car Name..."
          onChange={onChange}
          value={value}
        />
      </form>
    </>
  )
}
export default Search
