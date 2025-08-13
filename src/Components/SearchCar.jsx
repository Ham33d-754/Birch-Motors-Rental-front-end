const SearchCar = ({ onChange, onSubmit, value }) => {
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
export default SearchCar
