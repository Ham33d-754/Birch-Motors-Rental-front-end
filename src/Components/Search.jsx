import { useState } from 'react'
import SearchCar from './SearchCar'
//
const Search = ({ cars, onSelectCar, onResults }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResult = async (e) => {
    e.preventDefault()
    const matches = cars.filter((car) => car.name.includes(searchQuery))
    onResults(matches) // this will send matching results to parent
  }
  return (
    <>
      <SearchCar
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onSubmit={getSearchResult}
      />
    </>
  )
}
export default Search
