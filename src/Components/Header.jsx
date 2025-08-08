import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/garage">Garage</NavLink>
        </nav>
      </header>
    </>
  )
}
export default Header
