const SearchCar = ({ onChange, onSubmit, value }) => {
  return (
    <>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Car Name..."
          onChange={onChange}
          value={value}
        />
        <button type="submit">Find</button>
      </form>
    </>
  )
}
export default SearchCar
