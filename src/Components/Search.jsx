import { useState } from 'react'
import SearchCar from './SearchCar'
//
const Search = ({ cars, onSelectCar }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredCars, setFilteredCars] = useState([])

  const getSearchResult = async (e) => {
    e.preventDefault()
    const matches = cars.filter((car) => car.name.includes(searchQuery))
    setFilteredCars(matches)
  }
    return (
      <>


        <SearchCar
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onSubmit={getSearchResult}
        />

        {filteredCars.length > 0 && (
          <div className="searchResults">
            {filteredCars.map((car) => (
              <div
                key={car._id}
                onClick={() => onSelectCar(car)} // pass selected car back
              >
                {car.name}
              </div>
            ))}
          </div>
        )}
      </>
    )
  }
export default Search
